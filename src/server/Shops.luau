-- Shops sell Berry Boxes that roll a random item by rarity tier. Buddy food
-- is the one thing bought directly. Also handles using backpack items.

local Players = game:GetService("Players")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)
local Remotes = require(Shared.Remotes)

local PlayerData = require(script.Parent.PlayerData)
local Pets = require(script.Parent.Pets)
local Outfit = require(script.Parent.Outfit)
local Quests = require(script.Parent.Quests)
local Cooldowns = require(script.Parent.Cooldowns)

local Shops = {}

-- [Player] = { store = storeId, part = BasePart } for the counter they opened
local openShops = {}

local pools = {} -- [pool] = { [tier] = { ids } }
for _, shop in Config.ShopBoxes do
	pools[shop.pool] = Config.poolByTier(shop.pool)
end

function Shops.open(player, storeId, counterPart)
	if not Config.Stores[storeId] then
		return
	end
	openShops[player] = { store = storeId, part = counterPart }
	Remotes.get("OpenShop"):FireClient(player, storeId)
end

local function atCounter(player, storeId)
	local session = openShops[player]
	if not session or session.store ~= storeId then
		return false
	end
	local character = player.Character
	local root = character and character:FindFirstChild("HumanoidRootPart")
	if not root or (root.Position - session.part.Position).Magnitude > Config.SHOP_RANGE then
		PlayerData.notify(player, "Walk back to the counter to buy that.", "error")
		return false
	end
	return true
end

-- Picks a tier by the box's weights (skipping tiers the pool lacks), then a
-- random item of that tier.
local function roll(boxKind, pool, lucky)
	local byTier = pools[pool]
	local chances = Config.boxChances(boxKind, pool, lucky)
	local r = math.random()
	local tier
	for _, name in Config.TierOrder do
		local chance = chances[name]
		if chance then
			tier = name
			r -= chance
			if r <= 0 then
				break
			end
		end
	end
	local list = byTier[tier]
	return list[math.random(#list)], tier
end

local function onBuyBox(player, storeId, boxKind)
	local data = PlayerData.get(player)
	if not data or type(storeId) ~= "string" or type(boxKind) ~= "string" then
		return
	end
	local shop = Config.ShopBoxes[storeId]
	local price = shop and shop.prices[boxKind]
	if not price or not atCounter(player, storeId) then
		return
	end
	if not Cooldowns.take(player, "box", 1) then
		return
	end
	if shop.pool == "pet" and not Pets.hasRoom(data) then
		PlayerData.notify(player, "Your buddy collection is full! Release a buddy first.", "error")
		return
	end
	if not PlayerData.addBucks(player, -price) then
		PlayerData.notify(player, "You need " .. (price - data.bucks) .. " more " .. Config.CURRENCY .. ".", "error")
		return
	end
	Shops.grantBox(player, storeId, boxKind)
end

-- Rolls a box and gives the result. Used by shop purchases and Robux products.
-- Assumes the caller already checked there's room for a buddy.
function Shops.grantBox(player, storeId, boxKind)
	local data = PlayerData.get(player)
	local shop = Config.ShopBoxes[storeId]
	local price = shop.prices[boxKind]
	local lucky = player:GetAttribute("Pass_lucky") == true
	local rewardId, tier = roll(boxKind, shop.pool, lucky)
	local refund = 0
	if shop.pool == "pet" then
		Pets.grant(player, rewardId)
		Quests.progress(player, "hatch")
	elseif shop.pool == "clothing" and (data.inventory[rewardId] or 0) > 0 then
		refund = math.floor(price * Config.DUPLICATE_REFUND)
		data.bucks += refund
	else
		data.inventory[rewardId] = (data.inventory[rewardId] or 0) + 1
	end
	Remotes.get("BoxOpened"):FireClient(player, storeId, boxKind, rewardId, tier, refund)
	PlayerData.replicate(player)
end

local function onBuyItem(player, itemId)
	local data = PlayerData.get(player)
	local item = type(itemId) == "string" and Config.Items[itemId]
	if not data or not item or not item.price or not atCounter(player, item.store) then
		return
	end
	if not PlayerData.addBucks(player, -item.price) then
		PlayerData.notify(player, "You need " .. (item.price - data.bucks) .. " more " .. Config.CURRENCY .. ".", "error")
		return
	end
	data.inventory[itemId] = (data.inventory[itemId] or 0) + 1
	PlayerData.notify(player, "Bought " .. item.name .. "!", "success")
	PlayerData.replicate(player)
end

local function onUse(player, itemId)
	local data = PlayerData.get(player)
	if not data or type(itemId) ~= "string" then
		return
	end
	local item = Config.Items[itemId]
	if not item or (data.inventory[itemId] or 0) < 1 then
		return
	end

	if item.category == "food" then
		if data.hunger >= Config.MAX_STAT then
			PlayerData.notify(player, "You're too full to eat right now.", "info")
			return
		end
		data.inventory[itemId] -= 1
		if data.inventory[itemId] <= 0 then
			data.inventory[itemId] = nil
		end
		PlayerData.addStat(data, "hunger", item.hunger or 0)
		PlayerData.addStat(data, "happiness", item.happiness or 0)
		PlayerData.addStat(data, "energy", item.energy or 0)
		Quests.progress(player, "eat")
		PlayerData.notify(player, "Yum! You ate the " .. item.name .. ".", "success")
		PlayerData.replicate(player)
	elseif item.category == "clothing" then
		Outfit.wear(player, itemId)
	end
end

function Shops.init()
	Remotes.get("BuyBox").OnServerEvent:Connect(onBuyBox)
	Remotes.get("BuyItem").OnServerEvent:Connect(onBuyItem)
	Remotes.get("UseItem").OnServerEvent:Connect(onUse)
	Players.PlayerRemoving:Connect(function(player)
		openShops[player] = nil
	end)
end

return Shops
