-- Buddies: pets that follow you and give a perk (buff) while they're out
-- and fed. They come out of Buddy Barn Berry Boxes.

local Players = game:GetService("Players")
local TextService = game:GetService("TextService")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)
local Remotes = require(Shared.Remotes)
local Builders = require(Shared.Builders)

local PlayerData = require(script.Parent.PlayerData)
local Quests = require(script.Parent.Quests)
local Cooldowns = require(script.Parent.Cooldowns)

local Pets = {}

local active = {} -- [Player] = Model

local function findPet(data, uid)
	for i, entry in data.pets do
		if entry.uid == uid then
			return entry, i
		end
	end
	return nil, nil
end

function Pets.equipped(data)
	return data.equippedPet and (findPet(data, data.equippedPet)) or nil
end

-- Strength (0-1) of a buff type from the player's equipped, fed buddy.
function Pets.buff(player, buffType)
	local data = PlayerData.get(player)
	local entry = data and Pets.equipped(data)
	if not entry or entry.hunger <= 0 then
		return 0
	end
	local pet = Config.Pets[entry.id]
	if pet and pet.buff == buffType then
		return Config.petBuffAmount(entry.id)
	end
	return 0
end

function Pets.hasRoom(data)
	return #data.pets < Config.MAX_PETS
end

-- Adds a new buddy to the player's collection; returns its uid.
function Pets.grant(player, petId)
	local data = PlayerData.get(player)
	local pet = Config.Pets[petId]
	if not data or not pet then
		return nil
	end
	local uid = data.nextUid
	data.nextUid += 1
	table.insert(data.pets, { uid = uid, id = petId, name = pet.name, hunger = Config.PET_MAX_HUNGER })
	-- Auto-equip a first buddy
	if not data.equippedPet then
		data.equippedPet = uid
		Pets.spawn(player)
	end
	return uid
end

function Pets.despawn(player)
	local model = active[player]
	if model then
		model:Destroy()
		active[player] = nil
	end
end

local function nameTag(body, entry)
	local pet = Config.Pets[entry.id]
	local gui = Instance.new("BillboardGui")
	gui.Name = "NameTag"
	gui.Size = UDim2.fromOffset(160, 40)
	gui.StudsOffset = Vector3.new(0, 2.2, 0)
	gui.MaxDistance = 60
	gui.AlwaysOnTop = false
	local name = Instance.new("TextLabel")
	name.Size = UDim2.fromScale(1, 0.6)
	name.BackgroundTransparency = 1
	name.Font = Enum.Font.FredokaOne
	name.TextScaled = true
	name.TextColor3 = Color3.new(1, 1, 1)
	name.TextStrokeTransparency = 0.4
	name.Text = entry.name
	name.Parent = gui
	local tier = Instance.new("TextLabel")
	tier.Size = UDim2.fromScale(1, 0.4)
	tier.Position = UDim2.fromScale(0, 0.6)
	tier.BackgroundTransparency = 1
	tier.Font = Enum.Font.FredokaOne
	tier.TextScaled = true
	tier.TextColor3 = Config.Tiers[pet.tier].color
	tier.TextStrokeTransparency = 0.5
	tier.Text = pet.tier
	tier.Parent = gui
	gui.Parent = body
end

-- Builds the equipped buddy next to the player's character.
function Pets.spawn(player)
	Pets.despawn(player)
	local data = PlayerData.get(player)
	local entry = data and Pets.equipped(data)
	local character = player.Character
	local root = character and character:FindFirstChild("HumanoidRootPart")
	if not entry or not root then
		return
	end

	local model = Builders.buddy(entry.id)
	local body = model.PrimaryPart
	model:PivotTo(root.CFrame * CFrame.new(3, 1, 2))
	nameTag(body, entry)

	-- Constraints pull the buddy toward an offset attachment on the owner.
	local target = Instance.new("Attachment")
	target.Name = "BuddyTarget"
	target.Position = Vector3.new(3, 1, 2)
	target.Parent = root

	local own = Instance.new("Attachment")
	own.Parent = body

	local align = Instance.new("AlignPosition")
	align.Attachment0 = own
	align.Attachment1 = target
	align.Responsiveness = 15
	align.MaxForce = 1e5
	align.Parent = body

	local orient = Instance.new("AlignOrientation")
	orient.Attachment0 = own
	orient.Attachment1 = target
	orient.Responsiveness = 15
	orient.MaxTorque = 1e5
	orient.Parent = body

	model.Destroying:Connect(function()
		target:Destroy()
	end)

	model.Parent = character
	-- Let the owner's client simulate it so it follows smoothly.
	pcall(function()
		body:SetNetworkOwner(player)
	end)
	active[player] = model

	-- Gentle bobbing via the target attachment
	task.spawn(function()
		local t = 0
		while active[player] == model and target.Parent do
			t += task.wait(0.05)
			target.Position = Vector3.new(3, 1 + math.sin(t * 3) * 0.4, 2)
		end
	end)
end

-- Drains the equipped buddy's hunger. Called from the needs loop.
function Pets.tick(player, data)
	local entry = Pets.equipped(data)
	if not entry or entry.hunger <= 0 then
		return
	end
	entry.hunger = math.max(0, entry.hunger - Config.PET_HUNGER_DRAIN)
	if entry.hunger <= 0 then
		PlayerData.notify(player, entry.name .. " is hungry and lost its perk! Feed it from the Buddies menu.", "error")
	end
end

local function onEquip(player, uid)
	local data = PlayerData.get(player)
	if not data or type(uid) ~= "number" or not findPet(data, uid) then
		return
	end
	data.equippedPet = uid
	Pets.spawn(player)
	PlayerData.replicate(player)
end

local function onUnequip(player)
	local data = PlayerData.get(player)
	if data then
		data.equippedPet = nil
		Pets.despawn(player)
		PlayerData.replicate(player)
	end
end

local function onFeed(player, foodId)
	local data = PlayerData.get(player)
	local item = type(foodId) == "string" and Config.Items[foodId]
	if not data or not item or item.category ~= "petfood" or (data.inventory[foodId] or 0) < 1 then
		return
	end
	local entry = Pets.equipped(data)
	if not entry then
		PlayerData.notify(player, "Take a buddy out first.", "error")
		return
	end
	if entry.hunger >= Config.PET_MAX_HUNGER then
		PlayerData.notify(player, entry.name .. " is already full!", "info")
		return
	end
	data.inventory[foodId] -= 1
	if data.inventory[foodId] <= 0 then
		data.inventory[foodId] = nil
	end
	entry.hunger = math.min(Config.PET_MAX_HUNGER, entry.hunger + item.petHunger)
	PlayerData.addStat(data, "happiness", 5)
	Quests.progress(player, "feedPet")
	PlayerData.notify(player, entry.name .. " munched the " .. item.name .. "!", "success")
	PlayerData.replicate(player)
end

local function onRename(player, uid, name)
	local data = PlayerData.get(player)
	if not data or type(uid) ~= "number" or type(name) ~= "string" then
		return
	end
	local entry = findPet(data, uid)
	if not entry then
		return
	end
	name = name:gsub("^%s+", ""):gsub("%s+$", "")
	if #name == 0 or #name > Config.PET_NAME_MAX then
		PlayerData.notify(player, "Names must be 1-" .. Config.PET_NAME_MAX .. " characters.", "error")
		return
	end
	if not Cooldowns.take(player, "rename", 3) then
		return
	end
	-- Names are shown to other players, so they must go through Roblox's filter.
	local ok, filtered = pcall(function()
		local result = TextService:FilterStringAsync(name, player.UserId)
		return result:GetNonChatStringForBroadcastAsync()
	end)
	if not ok then
		PlayerData.notify(player, "Couldn't check that name right now. Try again later.", "error")
		return
	end
	entry.name = filtered
	if data.equippedPet == uid then
		Pets.spawn(player)
	end
	PlayerData.replicate(player)
end

local function onRelease(player, uid)
	local data = PlayerData.get(player)
	if not data or type(uid) ~= "number" then
		return
	end
	local entry, index = findPet(data, uid)
	if not entry then
		return
	end
	local pet = Config.Pets[entry.id]
	local refund = pet and Config.Tiers[pet.tier].release or 0
	table.remove(data.pets, index)
	if data.equippedPet == uid then
		data.equippedPet = nil
		Pets.despawn(player)
	end
	data.bucks += refund
	PlayerData.notify(player, ("You released %s. +%d %s"):format(entry.name, refund, Config.CURRENCY), "info")
	PlayerData.replicate(player)
end

function Pets.init()
	Remotes.get("EquipPet").OnServerEvent:Connect(onEquip)
	Remotes.get("UnequipPet").OnServerEvent:Connect(onUnequip)
	Remotes.get("FeedPet").OnServerEvent:Connect(onFeed)
	Remotes.get("RenamePet").OnServerEvent:Connect(onRename)
	Remotes.get("ReleasePet").OnServerEvent:Connect(onRelease)

	local function onCharacter(player)
		if PlayerData.waitFor(player) then
			task.wait(0.5)
			Pets.spawn(player)
		end
	end
	local function onPlayer(player)
		player.CharacterAdded:Connect(function()
			onCharacter(player)
		end)
		if player.Character then
			task.spawn(onCharacter, player)
		end
	end
	Players.PlayerAdded:Connect(onPlayer)
	for _, player in Players:GetPlayers() do
		onPlayer(player)
	end
	Players.PlayerRemoving:Connect(function(player)
		active[player] = nil
	end)
end

return Pets
