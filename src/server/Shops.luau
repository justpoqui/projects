-- Buying items at stores and using items from the backpack.

local Players = game:GetService("Players")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)
local Remotes = require(Shared.Remotes)

local PlayerData = require(script.Parent.PlayerData)
local Buddies = require(script.Parent.Buddies)

local Shops = {}

-- [Player] = { store = storeId, part = BasePart } for the counter they opened
local openShops = {}

function Shops.open(player, storeId, counterPart)
	if not Config.Stores[storeId] then
		return
	end
	openShops[player] = { store = storeId, part = counterPart }
	Remotes.get("OpenShop"):FireClient(player, storeId)
end

local function nearCounter(player, session)
	local character = player.Character
	local root = character and character:FindFirstChild("HumanoidRootPart")
	return root ~= nil and (root.Position - session.part.Position).Magnitude <= Config.SHOP_RANGE
end

local function onBuy(player, itemId)
	local data = PlayerData.get(player)
	local session = openShops[player]
	if not data or not session or type(itemId) ~= "string" then
		return
	end
	local item = Config.Items[itemId]
	if not item or item.store ~= session.store then
		return
	end
	if not nearCounter(player, session) then
		PlayerData.notify(player, "Walk back to the counter to buy that.", "error")
		return
	end
	if item.category == "buddy" and (data.inventory[itemId] or 0) > 0 then
		PlayerData.notify(player, "You already adopted a " .. item.name .. "!", "error")
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
		PlayerData.notify(player, "Yum! You ate the " .. item.name .. ".", "success")
		PlayerData.replicate(player)
	elseif item.category == "buddy" then
		data.buddy = itemId
		Buddies.spawn(player, itemId)
		PlayerData.notify(player, item.name .. " is following you!", "success")
		PlayerData.replicate(player)
	end
end

function Shops.init()
	Remotes.get("BuyItem").OnServerEvent:Connect(onBuy)
	Remotes.get("UseItem").OnServerEvent:Connect(onUse)
	Remotes.get("UnequipBuddy").OnServerEvent:Connect(function(player)
		local data = PlayerData.get(player)
		if data then
			data.buddy = nil
			Buddies.despawn(player)
			PlayerData.replicate(player)
		end
	end)
	Players.PlayerRemoving:Connect(function(player)
		openShops[player] = nil
	end)
end

return Shops
