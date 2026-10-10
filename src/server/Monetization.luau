-- Robux purchases. Developer products (Berrybucks packs, a Royal Buddy Box)
-- and game passes (VIP, Lucky Berries). Roblox credits the Robux from every
-- sale to whoever owns the experience; this script only grants the rewards.
--
-- Product and pass IDs live in Config.Products / Config.Passes.

local MarketplaceService = game:GetService("MarketplaceService")
local Players = game:GetService("Players")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)

local PlayerData = require(script.Parent.PlayerData)
local Shops = require(script.Parent.Shops)
local Pets = require(script.Parent.Pets)

local Monetization = {}

local MAX_RECEIPTS = 100 -- purchase ids remembered per player to stop double grants

local productById = {}
for _, product in Config.Products do
	if product.id ~= 0 then
		productById[product.id] = product
	end
end
local passById = {}
for _, pass in Config.Passes do
	if pass.id ~= 0 then
		passById[pass.id] = pass
	end
end

-- Gold "VIP" tag above the head
local function addVipTag(character)
	local head = character:WaitForChild("Head", 10)
	if not head or head:FindFirstChild("VipTag") then
		return
	end
	local gui = Instance.new("BillboardGui")
	gui.Name = "VipTag"
	gui.Size = UDim2.fromOffset(80, 26)
	gui.StudsOffset = Vector3.new(0, 2.6, 0)
	gui.MaxDistance = 80
	local label = Instance.new("TextLabel")
	label.Size = UDim2.fromScale(1, 1)
	label.BackgroundColor3 = Color3.fromRGB(255, 200, 60)
	label.Font = Enum.Font.FredokaOne
	label.TextScaled = true
	label.TextColor3 = Color3.fromRGB(90, 50, 0)
	label.Text = "VIP"
	label.Parent = gui
	local corner = Instance.new("UICorner")
	corner.CornerRadius = UDim.new(0, 8)
	corner.Parent = label
	gui.Parent = head
end

local function setPass(player, pass)
	player:SetAttribute("Pass_" .. pass.key, true)
	if pass.key == "vip" and player.Character then
		task.spawn(addVipTag, player.Character)
	end
end

local function checkPasses(player)
	for _, pass in Config.Passes do
		if pass.id ~= 0 then
			local ok, owns = pcall(function()
				return MarketplaceService:UserOwnsGamePassAsync(player.UserId, pass.id)
			end)
			if ok and owns then
				setPass(player, pass)
			end
		end
	end
end

local function grantProduct(player, data, product)
	if product.bucks then
		data.bucks += product.bucks
		PlayerData.notify(player, ("Thanks for your purchase! +%d %s"):format(product.bucks, Config.CURRENCY), "success")
	elseif product.box then
		local shop = Config.ShopBoxes[product.box.store]
		if shop.pool == "pet" and not Pets.hasRoom(data) then
			-- No room for a buddy: give the box's Berrybucks value instead
			local value = shop.prices[product.box.kind]
			data.bucks += value
			PlayerData.notify(player, ("Your buddy collection is full, so you got %d %s instead!"):format(value, Config.CURRENCY), "info")
		else
			Shops.grantBox(player, product.box.store, product.box.kind)
		end
	end
	PlayerData.replicate(player)
end

local function rememberReceipt(data, purchaseId)
	data.receipts[purchaseId] = os.time()
	local count = 0
	local oldestId, oldestTime = nil, math.huge
	for id, time in data.receipts do
		count += 1
		if time < oldestTime then
			oldestId, oldestTime = id, time
		end
	end
	if count > MAX_RECEIPTS and oldestId then
		data.receipts[oldestId] = nil
	end
end

-- Roblox calls this for every developer product purchase until it returns
-- PurchaseGranted, so it must never grant the same purchase twice.
local function processReceipt(receipt)
	local product = productById[receipt.ProductId]
	local player = Players:GetPlayerByUserId(receipt.PlayerId)
	local data = player and PlayerData.get(player)
	if not product or not data then
		-- Unknown product, or the player left / is still loading: try again later.
		return Enum.ProductPurchaseDecision.NotProcessedYet
	end
	if data.receipts[receipt.PurchaseId] then
		return Enum.ProductPurchaseDecision.PurchaseGranted
	end

	grantProduct(player, data, product)
	rememberReceipt(data, receipt.PurchaseId)
	if not PlayerData.save(player) then
		-- Roblox will retry; the remembered receipt prevents a second grant.
		return Enum.ProductPurchaseDecision.NotProcessedYet
	end
	return Enum.ProductPurchaseDecision.PurchaseGranted
end

function Monetization.init()
	MarketplaceService.ProcessReceipt = processReceipt

	MarketplaceService.PromptGamePassPurchaseFinished:Connect(function(player, passId, purchased)
		local pass = passById[passId]
		if purchased and pass then
			setPass(player, pass)
			PlayerData.notify(player, "You got the " .. pass.name .. " pass! " .. pass.perks, "success")
		end
	end)

	local function onPlayer(player)
		task.spawn(checkPasses, player)
		player.CharacterAdded:Connect(function(character)
			if player:GetAttribute("Pass_vip") then
				addVipTag(character)
			end
		end)
	end
	Players.PlayerAdded:Connect(onPlayer)
	for _, player in Players:GetPlayers() do
		onPlayer(player)
	end
end

return Monetization
