-- Wearing clothing from the Berry Boutique.

local Players = game:GetService("Players")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)
local Remotes = require(Shared.Remotes)
local Builders = require(Shared.Builders)

local PlayerData = require(script.Parent.PlayerData)

local Outfit = {}

local SLOTS = { "hat", "face", "back" }

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

-- Rebuilds every worn clothing piece on the player's current character.
function Outfit.apply(player)
	local data = PlayerData.get(player)
	local character = player.Character
	if not data or not character then
		return
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

function Outfit.wear(player, itemId)
	local data = PlayerData.get(player)
	local item = Config.Items[itemId]
	if not data or not item or item.category ~= "clothing" or (data.inventory[itemId] or 0) < 1 then
		return
	end
	data.outfit[item.slot] = itemId
	Outfit.apply(player)
	PlayerData.replicate(player)
end

local function onTakeOff(player, slot)
	local data = PlayerData.get(player)
	if data and type(slot) == "string" and data.outfit[slot] then
		data.outfit[slot] = nil
		Outfit.apply(player)
		PlayerData.replicate(player)
	end
end

function Outfit.init()
	Remotes.get("TakeOff").OnServerEvent:Connect(onTakeOff)
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
end

return Outfit
