-- Gives each player a house on Maple Court and lets them decorate it.

local Players = game:GetService("Players")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)
local Remotes = require(Shared.Remotes)
local Builders = require(Shared.Builders)

local World = require(script.Parent.WorldBuilder)
local PlayerData = require(script.Parent.PlayerData)
local Cooldowns = require(script.Parent.Cooldowns)

local Housing = {}

local plotOf = {} -- [Player] = plot

local function isFiniteNumber(v)
	return type(v) == "number" and v == v and v ~= math.huge and v ~= -math.huge
end

local function addPrompt(parent, actionText, objectText, key, attributes)
	local prompt = Instance.new("ProximityPrompt")
	prompt.ActionText = actionText
	prompt.ObjectText = objectText
	prompt.HoldDuration = 0
	prompt.MaxActivationDistance = 9
	prompt.RequiresLineOfSight = false
	if key then
		prompt.KeyboardKeyCode = key
		prompt.GamepadKeyCode = Enum.KeyCode.ButtonY
		prompt.HoldDuration = 0.5
		prompt.UIOffset = Vector2.new(0, 60)
	end
	for name, value in attributes do
		prompt:SetAttribute(name, value)
	end
	prompt.Parent = parent
	return prompt
end

local function spawnFurniture(plot, player, entry)
	local item = Config.Items[entry.id]
	if not item or item.category ~= "furniture" then
		return
	end
	local model = Builders.furniture(entry.id)
	model.Name = entry.id .. "_" .. entry.uid
	model:SetAttribute("Uid", entry.uid)
	model:PivotTo(World.furnitureCFrame(plot, entry.id, entry.x, entry.z, entry.r))

	local activity = item.activity and Config.Activities[item.activity]
	if activity then
		addPrompt(model.PrimaryPart, activity.prompt, item.name, nil, {
			Action = "Furniture", Target = item.activity,
		})
	end
	-- Only the owner sees this one (the client hides it for everyone else).
	addPrompt(model.PrimaryPart, "Pick Up", item.name, Enum.KeyCode.F, {
		Action = "PickUp", Uid = entry.uid, OwnerId = player.UserId,
	})
	model.Parent = plot.furnitureFolder
end

local function findFurnitureModel(plot, uid)
	for _, model in plot.furnitureFolder:GetChildren() do
		if model:GetAttribute("Uid") == uid then
			return model
		end
	end
	return nil
end

function Housing.assign(player, data)
	for _, plot in World.plots do
		if not plot.owner then
			plot.owner = player
			plotOf[player] = plot
			plot.label.Text = player.DisplayName .. "'s House"
			plot.model:SetAttribute("OwnerId", player.UserId)
			for _, entry in data.furniture do
				spawnFurniture(plot, player, entry)
			end
			player:SetAttribute("PlotIndex", plot.index)
			return plot
		end
	end
	PlayerData.notify(player, "All houses are taken on this server. Try another server to get a home!", "error")
	return nil
end

function Housing.release(player)
	local plot = plotOf[player]
	if not plot then
		return
	end
	plotOf[player] = nil
	plot.owner = nil
	plot.label.Text = "For Sale"
	plot.model:SetAttribute("OwnerId", nil)
	plot.furnitureFolder:ClearAllChildren()
end

function Housing.getPlot(player)
	return plotOf[player]
end

local function onPlace(player, itemId, x, z, r)
	local data = PlayerData.get(player)
	local plot = plotOf[player]
	if not data or not plot then
		return
	end
	if type(itemId) ~= "string" or not isFiniteNumber(x) or not isFiniteNumber(z) or type(r) ~= "number" then
		return
	end
	local item = Config.Items[itemId]
	if not item or item.category ~= "furniture" then
		return
	end
	if (data.inventory[itemId] or 0) < 1 then
		PlayerData.notify(player, "You don't own that.", "error")
		return
	end
	if #data.furniture >= Config.MAX_FURNITURE then
		PlayerData.notify(player, "Your house is full! Pick something up first.", "error")
		return
	end

	r = math.floor(r) % 4
	-- Snap to a half-stud grid
	x = math.floor(x * 2 + 0.5) / 2
	z = math.floor(z * 2 + 0.5) / 2
	local sx, sz = item.size.X, item.size.Z
	if r % 2 == 1 then
		sx, sz = sz, sx
	end
	if math.abs(x) + sx / 2 > World.HOUSE_INNER_X + 0.01 or math.abs(z) + sz / 2 > World.HOUSE_INNER_Z + 0.01 then
		PlayerData.notify(player, "That doesn't fit there.", "error")
		return
	end

	data.inventory[itemId] -= 1
	if data.inventory[itemId] <= 0 then
		data.inventory[itemId] = nil
	end
	local entry = { uid = data.nextUid, id = itemId, x = x, z = z, r = r }
	data.nextUid += 1
	table.insert(data.furniture, entry)
	spawnFurniture(plot, player, entry)
	PlayerData.replicate(player)
end

local function pickUp(player, uid)
	local data = PlayerData.get(player)
	local plot = plotOf[player]
	if not data or not plot or type(uid) ~= "number" then
		return
	end
	for i, entry in data.furniture do
		if entry.uid == uid then
			table.remove(data.furniture, i)
			data.inventory[entry.id] = (data.inventory[entry.id] or 0) + 1
			local model = findFurnitureModel(plot, uid)
			if model then
				model:Destroy()
			end
			PlayerData.replicate(player)
			return
		end
	end
end
Housing.pickUp = pickUp

function Housing.teleport(player, where)
	local character = player.Character
	local root = character and character:FindFirstChild("HumanoidRootPart")
	if not root then
		return
	end
	if where == "home" then
		local plot = plotOf[player]
		if plot then
			character:PivotTo(World.homeSpawn(plot))
		else
			PlayerData.notify(player, "You don't have a house on this server.", "error")
		end
	elseif where == "town" then
		character:PivotTo(World.townSpawn)
	end
end

function Housing.init()
	Remotes.get("PlaceFurniture").OnServerEvent:Connect(onPlace)
	Remotes.get("PickUpFurniture").OnServerEvent:Connect(pickUp)
	Remotes.get("Teleport").OnServerEvent:Connect(function(player, where)
		if (where == "home" or where == "town") and Cooldowns.take(player, "teleport", 3) then
			Housing.teleport(player, where)
		end
	end)
	Players.PlayerRemoving:Connect(Housing.release)
end

return Housing
