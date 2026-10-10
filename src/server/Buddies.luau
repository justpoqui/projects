-- Buddies are pets that float along beside their owner.

local Players = game:GetService("Players")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Builders = require(Shared.Builders)

local Buddies = {}

local active = {} -- [Player] = Model

function Buddies.despawn(player)
	local model = active[player]
	if model then
		model:Destroy()
		active[player] = nil
	end
end

function Buddies.spawn(player, itemId)
	Buddies.despawn(player)
	local character = player.Character
	local root = character and character:FindFirstChild("HumanoidRootPart")
	if not root then
		return
	end

	local model = Builders.buddy(itemId)
	local body = model.PrimaryPart
	model:PivotTo(root.CFrame * CFrame.new(3, 1, 2))

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

	-- Gentle bobbing animation via the target attachment
	task.spawn(function()
		local t = 0
		while active[player] == model and target.Parent do
			t += task.wait(0.05)
			target.Position = Vector3.new(3, 1 + math.sin(t * 3) * 0.4, 2)
		end
	end)
end

function Buddies.init(PlayerData)
	local function onCharacter(player)
		local data = PlayerData.waitFor(player)
		if data and data.buddy and (data.inventory[data.buddy] or 0) > 0 then
			task.wait(0.5)
			Buddies.spawn(player, data.buddy)
		end
	end
	Players.PlayerAdded:Connect(function(player)
		player.CharacterAdded:Connect(function()
			onCharacter(player)
		end)
	end)
	Players.PlayerRemoving:Connect(function(player)
		active[player] = nil
	end)
end

return Buddies
