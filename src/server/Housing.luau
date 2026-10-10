-- Gives each player a house on Maple Court and lets them decorate it.

local Players = game:GetService("Players")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)
local Remotes = require(Shared.Remotes)
local Builders = require(Shared.Builders)

local World = require(script.Parent.WorldBuilder)
local PlayerData = require(script.Parent.PlayerData)
local Cooldowns = require(script.Parent.Cooldowns)
local Quests = require(script.Parent.Quests)

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
			plot.likePrompt:SetAttribute("OwnerId", player.UserId)
			plot.likePrompt.ObjectText = player.DisplayName .. "'s House"
			plot.likePrompt.Enabled = true
			World.buildHouse(plot, data.house.level, data.house.style)
			for _, entry in data.furniture do
				spawnFurniture(plot, player, entry)
			end
			player:SetAttribute("PlotIndex", plot.index)
			player:SetAttribute("Neighborhood", plot.neighborhood)
			player:SetAttribute("HouseLikes", data.likes)
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
	plot.likePrompt:SetAttribute("OwnerId", nil)
	plot.likePrompt.Enabled = false
	plot.furnitureFolder:ClearAllChildren()
	World.buildHouse(plot, 1, Config.DefaultStyle)
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
	if #data.furniture >= Config.HouseLevels[data.house.level].maxFurniture then
		PlayerData.notify(player, "Your house is full! Upgrade it or pick something up first.", "error")
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
	if math.abs(x) + sx / 2 > plot.innerX + 0.01 or math.abs(z) + sz / 2 > plot.innerZ + 0.01 then
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

-- where: "home" | "town" | "visit" (target = owner userId) | "place" (target = Berry Phone spot id)
function Housing.teleport(player, where, userId)
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
	elseif where == "place" then
		local spot = type(userId) == "string" and World.teleports[userId]
		if spot then
			character:PivotTo(spot)
		end
	elseif where == "visit" then
		local owner = type(userId) == "number" and Players:GetPlayerByUserId(userId)
		local plot = owner and plotOf[owner]
		if plot then
			character:PivotTo(World.homeSpawn(plot))
			if owner ~= player then
				PlayerData.notify(owner, player.DisplayName .. " is visiting your house!", "info")
			end
		end
	end
end

local function onUpgrade(player)
	local data = PlayerData.get(player)
	local plot = plotOf[player]
	if not data or not plot then
		return
	end
	local nextLevel = Config.HouseLevels[data.house.level + 1]
	if not nextLevel then
		PlayerData.notify(player, "Your house is already a Mansion!", "info")
		return
	end
	if not PlayerData.addBucks(player, -nextLevel.price) then
		PlayerData.notify(player, "You need " .. (nextLevel.price - data.bucks) .. " more " .. Config.CURRENCY .. ".", "error")
		return
	end
	data.house.level += 1
	World.buildHouse(plot, data.house.level, data.house.style)
	PlayerData.notify(player, "Upgraded to a " .. nextLevel.name .. "! More room for furniture.", "success")
	PlayerData.replicate(player)
end

-- Buys the style if needed, then applies it.
local function onSetStyle(player, kind, styleId)
	local data = PlayerData.get(player)
	local plot = plotOf[player]
	local styles = type(kind) == "string" and Config.HouseStyles[kind]
	local style = styles and type(styleId) == "string" and styles[styleId]
	if not data or not plot or not style then
		return
	end
	local key = kind .. ":" .. styleId
	if style.price > 0 and not data.house.owned[key] then
		if not PlayerData.addBucks(player, -style.price) then
			PlayerData.notify(player, "You need " .. (style.price - data.bucks) .. " more " .. Config.CURRENCY .. ".", "error")
			return
		end
		data.house.owned[key] = true
	end
	data.house.style[kind] = styleId
	World.buildHouse(plot, data.house.level, data.house.style)
	PlayerData.replicate(player)
end

-- One like per house per day.
function Housing.like(player, ownerId)
	local data = PlayerData.get(player)
	local owner = type(ownerId) == "number" and Players:GetPlayerByUserId(ownerId)
	local ownerData = owner and PlayerData.get(owner)
	if not data or not ownerData or owner == player then
		return
	end
	local today = Config.today()
	if data.likesGiven.day ~= today then
		data.likesGiven = { day = today, ids = {} }
	end
	local key = tostring(ownerId)
	if data.likesGiven.ids[key] then
		PlayerData.notify(player, "You already liked this house today.", "info")
		return
	end
	data.likesGiven.ids[key] = true
	ownerData.likes += 1
	owner:SetAttribute("HouseLikes", ownerData.likes)
	Quests.progress(player, "like")
	PlayerData.notify(player, "You liked " .. owner.DisplayName .. "'s house!", "success")
	PlayerData.notify(owner, player.DisplayName .. " liked your house!", "success")
	PlayerData.replicate(player)
	PlayerData.replicate(owner)
end

function Housing.init()
	Remotes.get("PlaceFurniture").OnServerEvent:Connect(onPlace)
	Remotes.get("PickUpFurniture").OnServerEvent:Connect(pickUp)
	Remotes.get("Teleport").OnServerEvent:Connect(function(player, where, userId)
		if (where == "home" or where == "town" or where == "visit" or where == "place")
			and Cooldowns.take(player, "teleport", 2)
		then
			Housing.teleport(player, where, userId)
		end
	end)
	Remotes.get("UpgradeHouse").OnServerEvent:Connect(onUpgrade)
	Remotes.get("SetHouseStyle").OnServerEvent:Connect(onSetStyle)
	Remotes.get("LikeHouse").OnServerEvent:Connect(Housing.like)
	Players.PlayerRemoving:Connect(Housing.release)
end

return Housing
