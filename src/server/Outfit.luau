-- Appearance: Berry Boutique clothing and skin tone. You can only change
-- your look while standing at the closet in your own house.

local Players = game:GetService("Players")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)
local Remotes = require(Shared.Remotes)
local Builders = require(Shared.Builders)

local PlayerData = require(script.Parent.PlayerData)

local Outfit = {}

local SLOTS = { "hat", "face", "back" }
local COLOR_FIELDS = { "HeadColor", "TorsoColor", "LeftArmColor", "RightArmColor", "LeftLegColor", "RightLegColor" }

local closets = {} -- [Player] = the closet part they opened
local defaultColors = {} -- [Player] = { [field] = Color3 } from their real avatar

-- Where each slot's anchor sits relative to the part it attaches to.
local function anchorFor(character, slot)
	local head = character:FindFirstChild("Head")
	local torso = character:FindFirstChild("UpperTorso") or character:FindFirstChild("Torso")
	if slot == "hat" and head then
		return head, CFrame.new(0, head.Size.Y / 2 - 0.05, 0)
	elseif slot == "face" and head then
		return head, CFrame.new(0, head.Size.Y * 0.12, -head.Size.Z / 2 - 0.02)
	elseif slot == "back" and torso then
		return torso, CFrame.new(0, torso.Size.Y * 0.1, torso.Size.Z / 2)
	end
	return nil, nil
end

local function applySkin(player, data, character)
	local humanoid = character:FindFirstChildOfClass("Humanoid")
	if not humanoid then
		return
	end
	local tone = Config.SkinTones[data.skin]
	local ok, desc = pcall(function()
		return humanoid:GetAppliedDescription()
	end)
	if not ok or not desc then
		return
	end
	-- Remember the avatar's own colors the first time so "Default" can restore them.
	if not defaultColors[player] then
		local original = {}
		for _, field in COLOR_FIELDS do
			original[field] = desc[field]
		end
		defaultColors[player] = original
	end
	for _, field in COLOR_FIELDS do
		desc[field] = tone or defaultColors[player][field]
	end
	pcall(function()
		humanoid:ApplyDescription(desc)
	end)
end

-- Rebuilds skin tone and every worn clothing piece on the current character.
function Outfit.apply(player)
	local data = PlayerData.get(player)
	local character = player.Character
	if not data or not character then
		return
	end
	if data.skin ~= 0 or defaultColors[player] then
		applySkin(player, data, character)
	end
	for _, child in character:GetChildren() do
		if child:GetAttribute("BerryClothing") then
			child:Destroy()
		end
	end
	for _, slot in SLOTS do
		local itemId = data.outfit[slot]
		local attachPart, offset = anchorFor(character, slot)
		if itemId and Config.Items[itemId] and attachPart then
			local model = Builders.clothing(itemId)
			model:SetAttribute("BerryClothing", slot)
			model:PivotTo(attachPart.CFrame * offset)
			local weld = Instance.new("WeldConstraint")
			weld.Part0 = attachPart
			weld.Part1 = model.PrimaryPart
			weld.Parent = model.PrimaryPart
			model.Parent = character
		end
	end
end

-- The player's own closet prompt was used.
function Outfit.openCloset(player, prompt)
	if prompt:GetAttribute("PlotIndex") ~= player:GetAttribute("PlotIndex") then
		PlayerData.notify(player, "This isn't your closet!", "error")
		return
	end
	closets[player] = prompt.Parent
	Remotes.get("OpenCloset"):FireClient(player)
end

local function atCloset(player)
	local closet = closets[player]
	local character = player.Character
	local root = character and character:FindFirstChild("HumanoidRootPart")
	if closet and closet.Parent and root and (root.Position - closet.Position).Magnitude <= Config.CLOSET_RANGE then
		return true
	end
	PlayerData.notify(player, "Go to the closet in your house to change your look.", "error")
	return false
end

function Outfit.wear(player, itemId)
	local data = PlayerData.get(player)
	local item = Config.Items[itemId]
	if not data or not item or item.category ~= "clothing" or (data.inventory[itemId] or 0) < 1 then
		return
	end
	if not atCloset(player) then
		return
	end
	data.outfit[item.slot] = itemId
	Outfit.apply(player)
	PlayerData.replicate(player)
end

local function onTakeOff(player, slot)
	local data = PlayerData.get(player)
	if data and type(slot) == "string" and data.outfit[slot] and atCloset(player) then
		data.outfit[slot] = nil
		Outfit.apply(player)
		PlayerData.replicate(player)
	end
end

local function onSetSkin(player, index)
	local data = PlayerData.get(player)
	if not data or type(index) ~= "number" or (index ~= 0 and not Config.SkinTones[index]) then
		return
	end
	if not atCloset(player) then
		return
	end
	data.skin = index
	Outfit.apply(player)
	PlayerData.replicate(player)
end

function Outfit.init()
	Remotes.get("TakeOff").OnServerEvent:Connect(onTakeOff)
	Remotes.get("SetSkinTone").OnServerEvent:Connect(onSetSkin)
	local function onPlayer(player)
		player.CharacterAdded:Connect(function(character)
			character:WaitForChild("Head", 10)
			if PlayerData.waitFor(player) then
				task.wait(0.5) -- let the avatar finish assembling
				Outfit.apply(player)
			end
		end)
	end
	Players.PlayerAdded:Connect(onPlayer)
	for _, player in Players:GetPlayers() do
		onPlayer(player)
	end
	Players.PlayerRemoving:Connect(function(player)
		closets[player] = nil
		defaultColors[player] = nil
	end)
end

return Outfit
