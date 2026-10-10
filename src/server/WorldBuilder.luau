-- Builds the town of Berryvale out of parts at server start: roads, shops,
-- workplaces, the arcade, school, gym, and a neighborhood of house plots.

local Workspace = game:GetService("Workspace")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)

local World = {
	buildings = {}, -- [id] = { model, cframe }
	teleports = {}, -- [placeId] = CFrame, for the Berry Phone
	plots = {}, -- list of plot records (see buildPlot)
	townSpawn = CFrame.new(0, 3, -25),
}

-- Top of a house floor above the ground.
World.HOUSE_FLOOR_Y = 1

local root

local function part(parent, props)
	local p = Instance.new("Part")
	p.Anchored = true
	p.TopSurface = Enum.SurfaceType.Smooth
	p.BottomSurface = Enum.SurfaceType.Smooth
	p.Material = Enum.Material.SmoothPlastic
	for key, value in props do
		p[key] = value
	end
	p.Parent = parent
	return p
end

local function folder(name, parent)
	local f = Instance.new("Folder")
	f.Name = name
	f.Parent = parent
	return f
end

-- A flat sign with text on its -Z face.
local function sign(parent, cframe, size, text, bg, fg)
	local board = part(parent, {
		Name = "Sign", Size = size, CFrame = cframe, Color = bg or Color3.fromRGB(255, 250, 235),
	})
	local gui = Instance.new("SurfaceGui")
	gui.Face = Enum.NormalId.Front
	gui.SizingMode = Enum.SurfaceGuiSizingMode.PixelsPerStud
	gui.PixelsPerStud = 40
	gui.Parent = board
	local label = Instance.new("TextLabel")
	label.Size = UDim2.fromScale(1, 1)
	label.BackgroundTransparency = 1
	label.Font = Enum.Font.FredokaOne
	label.TextScaled = true
	label.TextColor3 = fg or Color3.fromRGB(70, 40, 90)
	label.Text = text
	label.Parent = gui
	return board, label
end

local function prompt(parent, actionText, objectText, attributes)
	local p = Instance.new("ProximityPrompt")
	p.ActionText = actionText
	p.ObjectText = objectText or ""
	p.HoldDuration = 0
	p.MaxActivationDistance = 10
	p.RequiresLineOfSight = false
	for key, value in attributes do
		p:SetAttribute(key, value)
	end
	p.Parent = parent
	return p
end

local function tree(position)
	local model = Instance.new("Model")
	model.Name = "Tree"
	part(model, {
		Name = "Trunk", Size = Vector3.new(2, 10, 2), CFrame = CFrame.new(position + Vector3.new(0, 5, 0)),
		Color = Color3.fromRGB(110, 75, 45), Material = Enum.Material.Wood,
	})
	local leafColors = { Color3.fromRGB(80, 170, 80), Color3.fromRGB(100, 190, 90), Color3.fromRGB(230, 120, 160) }
	part(model, {
		Name = "Leaves", Shape = Enum.PartType.Ball, Size = Vector3.new(9, 9, 9),
		CFrame = CFrame.new(position + Vector3.new(0, 12, 0)),
		Color = leafColors[math.random(#leafColors)], Material = Enum.Material.Grass,
	})
	model.Parent = root
end

local function lampPost(position)
	part(root, {
		Name = "LampPost", Size = Vector3.new(0.6, 12, 0.6), CFrame = CFrame.new(position + Vector3.new(0, 6, 0)),
		Color = Color3.fromRGB(50, 50, 60), Material = Enum.Material.Metal,
	})
	local bulb = part(root, {
		Name = "LampBulb", Shape = Enum.PartType.Ball, Size = Vector3.new(1.6, 1.6, 1.6),
		CFrame = CFrame.new(position + Vector3.new(0, 12.5, 0)),
		Color = Color3.fromRGB(255, 240, 190), Material = Enum.Material.Neon,
	})
	local light = Instance.new("PointLight")
	light.Range = 24
	light.Brightness = 1
	light.Parent = bulb
end

-- Builds a walk-in box building. Local -Z is the front (door side).
-- `facing` is +1 if the door should face world +Z, -1 for world -Z.
local function building(def)
	local model = Instance.new("Model")
	model.Name = def.id

	local size = def.size
	local rot = def.facing == 1 and CFrame.Angles(0, math.pi, 0) or CFrame.new()
	local base = CFrame.new(def.position) * rot
	local wallT = 1
	local doorW, doorH = 10, 10

	local function at(x, y, z)
		return base * CFrame.new(x, y, z)
	end

	part(model, {
		Name = "Floor", Size = Vector3.new(size.X, 1, size.Z), CFrame = at(0, 0.5, 0),
		Color = Color3.fromRGB(235, 225, 205), Material = Enum.Material.WoodPlanks,
	})
	-- Back and side walls
	part(model, {
		Name = "Wall", Size = Vector3.new(size.X, size.Y, wallT), CFrame = at(0, size.Y / 2 + 1, size.Z / 2 - wallT / 2),
		Color = def.color,
	})
	for _, side in { -1, 1 } do
		part(model, {
			Name = "Wall", Size = Vector3.new(wallT, size.Y, size.Z), CFrame = at(side * (size.X / 2 - wallT / 2), size.Y / 2 + 1, 0),
			Color = def.color,
		})
	end
	-- Front wall with a door gap
	local sideW = (size.X - doorW) / 2
	for _, side in { -1, 1 } do
		part(model, {
			Name = "Wall", Size = Vector3.new(sideW, size.Y, wallT),
			CFrame = at(side * (doorW / 2 + sideW / 2), size.Y / 2 + 1, -size.Z / 2 + wallT / 2),
			Color = def.color,
		})
	end
	part(model, {
		Name = "Wall", Size = Vector3.new(doorW, size.Y - doorH, wallT),
		CFrame = at(0, doorH + 1 + (size.Y - doorH) / 2, -size.Z / 2 + wallT / 2),
		Color = def.color,
	})
	-- Roof with an overhang and a colored trim stripe
	part(model, {
		Name = "Roof", Size = Vector3.new(size.X + 4, 1.5, size.Z + 4), CFrame = at(0, size.Y + 1.75, 0),
		Color = def.roof,
	})
	part(model, {
		Name = "Awning", Size = Vector3.new(doorW + 6, 0.5, 5),
		CFrame = at(0, doorH + 2, -size.Z / 2 - 2.5) * CFrame.Angles(math.rad(-12), 0, 0),
		Color = def.roof,
	})

	-- Sign above the door. Rotate so the text faces outward (-Z local).
	sign(model, at(0, size.Y - 1.5, -size.Z / 2 - 0.3), Vector3.new(math.min(size.X - 4, 30), 4, 0.4), def.label)

	-- Service counter at the back with one kiosk per interaction
	local counterZ = size.Z / 2 - 6
	part(model, {
		Name = "Counter", Size = Vector3.new(size.X - 8, 3.5, 2.5), CFrame = at(0, 2.75, counterZ),
		Color = Color3.fromRGB(180, 130, 90), Material = Enum.Material.Wood,
	})
	local count = #def.prompts
	for i, info in def.prompts do
		local x = (i - (count + 1) / 2) * 7
		local kiosk = part(model, {
			Name = "Kiosk", Size = Vector3.new(2, 1.5, 1.5), CFrame = at(x, 5.25, counterZ),
			Color = info.color or Color3.fromRGB(255, 210, 90), Material = Enum.Material.Neon,
		})
		prompt(kiosk, info.action, def.label, info.attributes)
	end

	if def.decorate then
		def.decorate(model, at)
	end

	model.Parent = root
	World.buildings[def.id] = { model = model, cframe = base }
	-- Berry Phone teleport spot: outside the front door, facing the building
	World.teleports[def.id] = base * CFrame.new(0, 3, -size.Z / 2 - 8) * CFrame.Angles(0, math.pi, 0)
	return model
end

local function jobPrompts(buildingId)
	local list = {}
	for jobId, job in Config.Jobs do
		if job.building == buildingId then
			table.insert(list, {
				action = "Job Board", attributes = { Action = "JobBoard", Target = buildingId },
				color = Color3.fromRGB(120, 200, 255),
			})
			table.insert(list, {
				action = "Work Shift (" .. job.name .. ")", attributes = { Action = "Work", Target = jobId },
				color = Color3.fromRGB(140, 230, 140),
			})
		end
	end
	return list
end

local function concat(...)
	local out = {}
	for _, list in { ... } do
		for _, v in list do
			table.insert(out, v)
		end
	end
	return out
end

local function material(name, fallback)
	return name and Enum.Material[name] or fallback
end

-- (Re)builds a plot's house shell for a level and style. The house grows
-- around a fixed center (plot.houseCF) so placed furniture stays put.
-- Local -Z is the front door. Ground level is y = 0.
function World.buildHouse(plot, level, style)
	local levelInfo = Config.HouseLevels[level] or Config.HouseLevels[1]
	local styles = Config.HouseStyles
	local wallStyle = styles.wall[style.wall] or styles.wall[Config.DefaultStyle.wall]
	local floorStyle = styles.floor[style.floor] or styles.floor[Config.DefaultStyle.floor]
	local roofStyle = styles.roof[style.roof] or styles.roof[Config.DefaultStyle.roof]

	if plot.house then
		plot.house:Destroy()
	end
	local model = Instance.new("Model")
	model.Name = "House"

	local cf = plot.houseCF
	local function at(x, y, z)
		return cf * CFrame.new(x, y, z)
	end
	local hx, hz, h = levelInfo.innerX + 1, levelInfo.innerZ + 1, levelInfo.height
	local wallColor, wallMat = wallStyle.color, material(wallStyle.material, Enum.Material.SmoothPlastic)
	local function wall(size, at_)
		return part(model, { Name = "Wall", Size = size, CFrame = at_, Color = wallColor, Material = wallMat })
	end

	plot.floor = part(model, {
		Name = "Floor", Size = Vector3.new(hx * 2, 1, hz * 2), CFrame = at(0, 0.5, 0),
		Color = floorStyle.color, Material = material(floorStyle.material, Enum.Material.WoodPlanks),
	})
	wall(Vector3.new(hx * 2, h, 1), at(0, h / 2 + 1, hz - 0.5))
	local doorH = 8
	for _, side in { -1, 1 } do
		wall(Vector3.new(1, h, hz * 2), at(side * (hx - 0.5), h / 2 + 1, 0))
		-- Front wall halves around a 6-stud door
		wall(Vector3.new(hx - 3, h, 1), at(side * (3 + (hx - 3) / 2), h / 2 + 1, -hz + 0.5))
		-- Windows: front, and along each side wall
		local function window(cframe)
			part(model, {
				Name = "Window", Size = Vector3.new(6, 4, 1.1), CFrame = cframe,
				Color = Color3.fromRGB(170, 220, 255), Material = Enum.Material.Glass, Transparency = 0.4,
			})
		end
		window(at(side * hx * 0.55, 7, -hz + 0.5))
		window(at(side * (hx - 0.5), 7, 0) * CFrame.Angles(0, math.pi / 2, 0))
		if h >= 17 then
			-- Taller houses get an upper row of windows
			window(at(side * hx * 0.55, h - 3, -hz + 0.5))
			window(at(side * hx * 0.2, h - 3, -hz + 0.5))
		end
	end
	wall(Vector3.new(6, h - doorH, 1), at(0, doorH + 1 + (h - doorH) / 2, -hz + 0.5))
	part(model, {
		Name = "Roof", Size = Vector3.new(hx * 2 + 3, 1.2, hz * 2 + 3), CFrame = at(0, h + 1.6, 0),
		Color = roofStyle.color, Material = material(roofStyle.material, Enum.Material.SmoothPlastic),
	})
	-- A second, smaller roof layer gives a stepped look
	part(model, {
		Name = "Roof", Size = Vector3.new(hx * 2 - 6, 1.2, hz * 2 - 6), CFrame = at(0, h + 2.8, 0),
		Color = roofStyle.color, Material = material(roofStyle.material, Enum.Material.SmoothPlastic),
	})
	if level >= 3 then
		part(model, {
			Name = "Chimney", Size = Vector3.new(3, 6, 3), CFrame = at(hx * 0.5, h + 4, hz * 0.4),
			Color = Color3.fromRGB(150, 70, 60), Material = Enum.Material.Brick,
		})
	end
	if level >= 4 then
		-- Mansion porch with columns
		part(model, {
			Name = "Porch", Size = Vector3.new(16, 0.6, 5), CFrame = at(0, 0.7, -hz - 2.5),
			Color = Color3.fromRGB(235, 235, 240), Material = Enum.Material.Marble,
		})
		part(model, {
			Name = "PorchRoof", Size = Vector3.new(16, 0.6, 5), CFrame = at(0, 10, -hz - 2.5),
			Color = roofStyle.color, Material = material(roofStyle.material, Enum.Material.SmoothPlastic),
		})
		for _, x in { -7, -3.5, 3.5, 7 } do
			part(model, {
				Name = "Column", Shape = Enum.PartType.Cylinder, Size = Vector3.new(9, 1.2, 1.2),
				CFrame = at(x, 5.5, -hz - 4.5) * CFrame.Angles(0, 0, math.rad(90)),
				Color = Color3.new(1, 1, 1), Material = Enum.Material.Marble,
			})
		end
	end

	-- Path from the sidewalk to the door
	local frontZ = -hz - (level >= 4 and 5 or 0)
	local pathStart = -33 -- plot front edge, relative to houseCF
	part(model, {
		Name = "Path", Size = Vector3.new(6, 0.5, frontZ - pathStart), CFrame = at(0, 0.25, (frontZ + pathStart) / 2),
		Color = Color3.fromRGB(210, 200, 180), Material = Enum.Material.Slate, CanCollide = false,
	})

	model.Parent = plot.model
	plot.house = model
	plot.innerX = levelInfo.innerX
	plot.innerZ = levelInfo.innerZ
	plot.model:SetAttribute("InnerX", levelInfo.innerX)
	plot.model:SetAttribute("InnerZ", levelInfo.innerZ)
	plot.model:SetAttribute("Level", level)
end

local function buildPlot(index, position, facing)
	local model = Instance.new("Model")
	model.Name = "Plot" .. index

	local rot = facing == 1 and CFrame.Angles(0, math.pi, 0) or CFrame.new()
	local plotCF = CFrame.new(position) * rot

	local function at(x, y, z)
		return plotCF * CFrame.new(x, y, z)
	end

	part(model, {
		Name = "Lawn", Size = Vector3.new(58, 0.4, 58), CFrame = at(0, 0.2, 0),
		Color = Color3.fromRGB(120, 200, 100), Material = Enum.Material.Grass,
	})
	-- Owner sign on a post in the front yard
	part(model, {
		Name = "SignPost", Size = Vector3.new(0.5, 5, 0.5), CFrame = at(7, 2.5, -25),
		Color = Color3.fromRGB(120, 85, 55), Material = Enum.Material.Wood,
	})
	local _, label = sign(model, at(7, 5.5, -25.3), Vector3.new(10, 3, 0.3), "For Sale")
	local mailbox = part(model, {
		Name = "Mailbox", Size = Vector3.new(1.4, 1.4, 2), CFrame = at(-7, 3.6, -25),
		Color = Color3.fromRGB(70, 110, 200),
	})
	part(model, {
		Name = "MailboxPost", Size = Vector3.new(0.4, 3, 0.4), CFrame = at(-7, 1.5, -25),
		Color = Color3.fromRGB(120, 85, 55),
	})
	local likePrompt = prompt(mailbox, "Like House", "", { Action = "Like" })
	likePrompt.Enabled = false

	local furnitureFolder = folder("Furniture", model)
	model.Parent = root

	local plot = {
		index = index,
		model = model,
		-- Center of the house floor at ground level, toward the back of the plot
		houseCF = plotCF * CFrame.new(0, 0, 4),
		label = label,
		likePrompt = likePrompt,
		furnitureFolder = furnitureFolder,
		owner = nil,
		-- Filled in by World.buildHouse:
		house = nil,
		floor = nil,
		innerX = 0,
		innerZ = 0,
	}
	World.buildHouse(plot, 1, Config.DefaultStyle)
	table.insert(World.plots, plot)
	return plot
end

-- Berry Dash obstacle course behind the arcade. Returns its folder.
local function buildObby()
	local course = folder("BerryDash", root)
	local platformColor = Color3.fromRGB(255, 160, 200)
	local function platform(position, size, color)
		return part(course, {
			Name = "Platform", Size = size, CFrame = CFrame.new(position), Color = color or platformColor,
		})
	end
	local function kill(position, size)
		local p = part(course, {
			Name = "KillPart", Size = size, CFrame = CFrame.new(position),
			Color = Color3.fromRGB(240, 40, 60), Material = Enum.Material.Neon,
		})
		p:SetAttribute("Kill", true)
		return p
	end

	part(course, {
		Name = "Start", Size = Vector3.new(10, 0.6, 8), CFrame = CFrame.new(125, 0.3, -66),
		Color = Color3.fromRGB(120, 220, 140), Material = Enum.Material.Neon,
	})
	-- Signs face +X, the side players walk around from (rotating by -90 degrees
	-- turns a sign's -Z text face toward +X).
	sign(course, CFrame.new(119, 5, -66) * CFrame.Angles(0, -math.pi / 2, 0), Vector3.new(12, 3, 0.4),
		"Berry Dash Obby", Color3.fromRGB(255, 120, 170), Color3.new(1, 1, 1))
	-- Pointer by the street, facing Main Street (+Z)
	part(course, {
		Name = "SignPost", Size = Vector3.new(0.5, 6, 0.5), CFrame = CFrame.new(150, 3, -22),
		Color = Color3.fromRGB(120, 85, 55), Material = Enum.Material.Wood,
	})
	sign(course, CFrame.new(150, 6.5, -22) * CFrame.Angles(0, math.pi, 0), Vector3.new(10, 2.5, 0.3),
		"Obby out back!", Color3.fromRGB(255, 120, 170), Color3.new(1, 1, 1))

	platform(Vector3.new(125, 2, -76), Vector3.new(6, 1, 6))
	platform(Vector3.new(125, 4, -86), Vector3.new(6, 1, 6))
	platform(Vector3.new(119, 6, -95), Vector3.new(6, 1, 6))
	platform(Vector3.new(131, 8, -104), Vector3.new(6, 1, 6))
	platform(Vector3.new(125, 9, -116), Vector3.new(2, 1, 14), Color3.fromRGB(150, 80, 200))
	platform(Vector3.new(125, 10, -128), Vector3.new(8, 1, 8))
	kill(Vector3.new(125, 10.7, -128), Vector3.new(8, 0.4, 1.5))
	platform(Vector3.new(125, 12, -138), Vector3.new(4, 1, 4))
	platform(Vector3.new(125, 14, -146), Vector3.new(4, 1, 4))
	platform(Vector3.new(125, 16, -154), Vector3.new(4, 1, 4))
	platform(Vector3.new(121, 17, -163), Vector3.new(2, 1, 10), Color3.fromRGB(150, 80, 200))
	platform(Vector3.new(129, 18, -172), Vector3.new(2, 1, 10), Color3.fromRGB(150, 80, 200))
	kill(Vector3.new(125, 19, -186), Vector3.new(12, 1, 12))
	platform(Vector3.new(122, 20, -182), Vector3.new(2.5, 1, 2.5), Color3.fromRGB(90, 200, 255))
	platform(Vector3.new(128, 20, -186), Vector3.new(2.5, 1, 2.5), Color3.fromRGB(90, 200, 255))
	platform(Vector3.new(123, 20, -190), Vector3.new(2.5, 1, 2.5), Color3.fromRGB(90, 200, 255))
	platform(Vector3.new(125, 21, -200), Vector3.new(12, 1, 12))

	local prize = part(course, {
		Name = "Prize", Size = Vector3.new(6, 0.4, 6), CFrame = CFrame.new(125, 21.7, -200),
		Color = Color3.fromRGB(255, 200, 60), Material = Enum.Material.Neon,
	})
	local trophy = part(course, {
		Name = "Trophy", Shape = Enum.PartType.Ball, Size = Vector3.new(3, 3, 3), CFrame = CFrame.new(125, 26, -204),
		Color = Color3.fromRGB(255, 200, 60), Material = Enum.Material.Foil, CanCollide = false,
	})
	local sparkle = Instance.new("Sparkles")
	sparkle.Parent = trophy
	local gui = Instance.new("BillboardGui")
	gui.Size = UDim2.fromOffset(200, 50)
	gui.StudsOffset = Vector3.new(0, 3, 0)
	gui.Parent = prize
	local text = Instance.new("TextLabel")
	text.Size = UDim2.fromScale(1, 1)
	text.BackgroundTransparency = 1
	text.Font = Enum.Font.FredokaOne
	text.TextScaled = true
	text.TextColor3 = Color3.fromRGB(255, 220, 90)
	text.TextStrokeTransparency = 0.3
	text.Text = "FINISH! Step on me"
	text.Parent = gui
	return course
end

-- Board in the plaza listing the most-liked houses. Returns a function that
-- takes { { name, likes } } and redraws the list.
local function buildLeaderboard()
	local board = part(root, {
		Name = "BestHousesBoard", Size = Vector3.new(14, 12, 0.6),
		CFrame = CFrame.new(-36, 7, -48) * CFrame.Angles(0, -math.pi / 2, 0),
		Color = Color3.fromRGB(255, 248, 252),
	})
	part(root, {
		Name = "BoardPost", Size = Vector3.new(1, 7, 1), CFrame = CFrame.new(-36.5, 0.5, -48),
		Color = Color3.fromRGB(120, 85, 55), Material = Enum.Material.Wood,
	})
	local gui = Instance.new("SurfaceGui")
	gui.Face = Enum.NormalId.Front
	gui.SizingMode = Enum.SurfaceGuiSizingMode.PixelsPerStud
	gui.PixelsPerStud = 40
	gui.Parent = board
	local title = Instance.new("TextLabel")
	title.Size = UDim2.new(1, 0, 0.16, 0)
	title.BackgroundColor3 = Color3.fromRGB(150, 80, 200)
	title.Font = Enum.Font.FredokaOne
	title.TextScaled = true
	title.TextColor3 = Color3.new(1, 1, 1)
	title.Text = "Best Houses in Berryvale"
	title.Parent = gui
	local rows = {}
	for i = 1, 10 do
		local row = Instance.new("TextLabel")
		row.Size = UDim2.new(0.92, 0, 0.08, 0)
		row.Position = UDim2.new(0.04, 0, 0.17 + (i - 1) * 0.083, 0)
		row.BackgroundTransparency = 1
		row.Font = Enum.Font.FredokaOne
		row.TextScaled = true
		row.TextXAlignment = Enum.TextXAlignment.Left
		row.TextColor3 = Color3.fromRGB(70, 40, 90)
		row.Text = ""
		row.Parent = gui
		rows[i] = row
	end
	return function(entries)
		for i, row in rows do
			local entry = entries[i]
			row.Text = entry and ("%d. %s  -  %d likes"):format(i, entry.name, entry.likes) or ""
		end
		if #entries == 0 then
			rows[1].Text = "No likes yet. Visit a neighbor!"
		end
	end
end

function World.build()
	root = folder("Town", Workspace)

	-- Ground and roads
	part(root, {
		Name = "Ground", Size = Vector3.new(700, 2, 700), CFrame = CFrame.new(0, -1, 100),
		Color = Color3.fromRGB(110, 190, 95), Material = Enum.Material.Grass,
	})
	local roadColor = Color3.fromRGB(70, 70, 78)
	local function road(name, size, position)
		part(root, {
			Name = name, Size = size, CFrame = CFrame.new(position), Color = roadColor, Material = Enum.Material.Asphalt,
		})
	end
	road("MainStreet", Vector3.new(460, 0.2, 24), Vector3.new(15, 0.1, 0))
	road("BerryLane", Vector3.new(20, 0.2, 178), Vector3.new(0, 0.1, 101))
	road("MapleCourt", Vector3.new(400, 0.2, 20), Vector3.new(0, 0.1, 200))
	-- Center-line dashes on Main Street
	for x = -200, 230, 16 do
		part(root, {
			Name = "Dash", Size = Vector3.new(7, 0.25, 0.6), CFrame = CFrame.new(x, 0.12, 0),
			Color = Color3.fromRGB(250, 220, 80), CanCollide = false,
		})
	end

	-- Town square with spawn and fountain
	part(root, {
		Name = "Plaza", Size = Vector3.new(80, 0.3, 74), CFrame = CFrame.new(0, 0.15, -49),
		Color = Color3.fromRGB(225, 205, 175), Material = Enum.Material.Brick,
	})
	local spawn = Instance.new("SpawnLocation")
	spawn.Name = "TownSpawn"
	spawn.Anchored = true
	spawn.Size = Vector3.new(10, 0.4, 10)
	spawn.CFrame = CFrame.new(0, 0.5, -25)
	spawn.Color = Color3.fromRGB(255, 140, 180)
	spawn.Material = Enum.Material.Neon
	spawn.Duration = 0
	spawn.Neutral = true
	spawn.TopSurface = Enum.SurfaceType.Smooth
	spawn.Parent = root

	part(root, {
		Name = "FountainBase", Shape = Enum.PartType.Cylinder, Size = Vector3.new(2, 20, 20),
		CFrame = CFrame.new(0, 1, -62) * CFrame.Angles(0, 0, math.rad(90)), Color = Color3.fromRGB(200, 200, 210),
		Material = Enum.Material.Marble,
	})
	part(root, {
		Name = "FountainWater", Shape = Enum.PartType.Cylinder, Size = Vector3.new(0.4, 17, 17),
		CFrame = CFrame.new(0, 2.1, -62) * CFrame.Angles(0, 0, math.rad(90)), Color = Color3.fromRGB(90, 170, 240),
		Material = Enum.Material.Glass, Transparency = 0.3,
	})
	local spout = part(root, {
		Name = "FountainSpout", Size = Vector3.new(2, 7, 2), CFrame = CFrame.new(0, 5, -62),
		Color = Color3.fromRGB(200, 200, 210), Material = Enum.Material.Marble,
	})
	local splash = Instance.new("ParticleEmitter")
	splash.Color = ColorSequence.new(Color3.fromRGB(180, 220, 255))
	splash.Size = NumberSequence.new(0.6, 0)
	splash.Speed = NumberRange.new(10, 14)
	splash.SpreadAngle = Vector2.new(20, 20)
	splash.Lifetime = NumberRange.new(1, 1.4)
	splash.Acceleration = Vector3.new(0, -25, 0)
	splash.Rate = 60
	splash.EmissionDirection = Enum.NormalId.Top
	splash.Parent = spout

	-- Text is on the sign's -Z face; turn it to face the spawn.
	sign(root, CFrame.new(0, 9, -82) * CFrame.Angles(0, math.pi, 0), Vector3.new(30, 6, 0.6),
		"Welcome to Berryvale!", Color3.fromRGB(255, 120, 170), Color3.new(1, 1, 1))

	-- Shops and services (north side, doors face south toward Main Street)
	local north, south = -42, 42
	building({
		id = "boutique", label = "Berry Boutique", position = Vector3.new(-175, 0, north), facing = 1,
		size = Vector3.new(40, 16, 30), color = Color3.fromRGB(255, 215, 235), roof = Color3.fromRGB(255, 120, 170),
		prompts = { { action = "Shop", attributes = { Action = "Shop", Target = "boutique" } } },
	})
	building({
		id = "grocery", label = "Berryvale Grocery", position = Vector3.new(-125, 0, north), facing = 1,
		size = Vector3.new(40, 16, 30), color = Color3.fromRGB(255, 235, 200), roof = Color3.fromRGB(90, 170, 90),
		prompts = concat({
			{ action = "Shop", attributes = { Action = "Shop", Target = "grocery" } },
		}, jobPrompts("grocery")),
	})
	building({
		id = "furniture", label = "Cozy Home Furnishings", position = Vector3.new(-75, 0, north), facing = 1,
		size = Vector3.new(40, 16, 30), color = Color3.fromRGB(230, 215, 250), roof = Color3.fromRGB(140, 90, 190),
		prompts = { { action = "Shop", attributes = { Action = "Shop", Target = "furniture" } } },
	})
	building({
		id = "buddies", label = "Buddy Barn", position = Vector3.new(75, 0, north), facing = 1,
		size = Vector3.new(40, 16, 30), color = Color3.fromRGB(200, 70, 60), roof = Color3.fromRGB(245, 245, 245),
		prompts = { { action = "Adopt a Buddy", attributes = { Action = "Shop", Target = "buddies" } } },
	})
	building({
		id = "arcade", label = "Berry Arcade", position = Vector3.new(125, 0, north), facing = 1,
		size = Vector3.new(40, 16, 30), color = Color3.fromRGB(60, 40, 110), roof = Color3.fromRGB(255, 90, 200),
		prompts = (function()
			local list = {}
			for _, gameId in Config.MinigameOrder do
				table.insert(list, {
					action = "Play " .. Config.Minigames[gameId].name,
					attributes = { Action = "Arcade", Target = gameId }, color = Color3.fromRGB(255, 120, 240),
				})
			end
			return list
		end)(),
	})
	building({
		id = "school", label = "Berryvale School", position = Vector3.new(175, 0, north), facing = 1,
		size = Vector3.new(40, 16, 30), color = Color3.fromRGB(220, 120, 90), roof = Color3.fromRGB(80, 80, 100),
		prompts = {
			{ action = Config.Training.school.prompt, attributes = { Action = "Train", Target = "school" } },
		},
	})

	-- Workplaces (south side, doors face north)
	building({
		id = "factory", label = "Berry Crunch Factory", position = Vector3.new(-125, 0, south), facing = -1,
		size = Vector3.new(40, 18, 30), color = Color3.fromRGB(210, 210, 215), roof = Color3.fromRGB(230, 70, 90),
		prompts = jobPrompts("factory"),
		decorate = function(model, at)
			part(model, {
				Name = "Smokestack", Size = Vector3.new(4, 14, 4), CFrame = at(12, 25, 8),
				Color = Color3.fromRGB(150, 60, 60), Material = Enum.Material.Brick,
			})
		end,
	})
	building({
		id = "postoffice", label = "Post Office", position = Vector3.new(-75, 0, south), facing = -1,
		size = Vector3.new(40, 16, 30), color = Color3.fromRGB(200, 220, 255), roof = Color3.fromRGB(50, 80, 170),
		prompts = jobPrompts("postoffice"),
	})
	building({
		id = "lab", label = "Science Lab", position = Vector3.new(75, 0, south), facing = -1,
		size = Vector3.new(40, 16, 30), color = Color3.fromRGB(235, 245, 245), roof = Color3.fromRGB(60, 180, 180),
		prompts = jobPrompts("lab"),
	})
	building({
		id = "townhall", label = "Town Hall", position = Vector3.new(125, 0, south), facing = -1,
		size = Vector3.new(40, 20, 30), color = Color3.fromRGB(245, 240, 225), roof = Color3.fromRGB(110, 110, 120),
		prompts = jobPrompts("townhall"),
		decorate = function(model, at)
			for i = -2, 2 do
				if i ~= 0 then
					part(model, {
						Name = "Column", Shape = Enum.PartType.Cylinder, Size = Vector3.new(14, 2, 2),
						CFrame = at(i * 5, 8, -17) * CFrame.Angles(0, 0, math.rad(90)),
						Color = Color3.new(1, 1, 1), Material = Enum.Material.Marble,
					})
				end
			end
		end,
	})
	building({
		id = "gym", label = "Berry Fit Gym", position = Vector3.new(175, 0, south), facing = -1,
		size = Vector3.new(40, 16, 30), color = Color3.fromRGB(255, 200, 80), roof = Color3.fromRGB(40, 40, 40),
		prompts = {
			{ action = Config.Training.gym.prompt, attributes = { Action = "Train", Target = "gym" } },
		},
	})

	-- Street furniture
	for x = -180, 200, 40 do
		lampPost(Vector3.new(x, 0, -15))
		if math.abs(x + 20) > 12 then
			lampPost(Vector3.new(x + 20, 0, 15))
		end
	end
	for z = 30, 180, 30 do
		lampPost(Vector3.new(-13, 0, z))
	end
	local treeSpots = {
		Vector3.new(-30, 0, -70), Vector3.new(30, 0, -70), Vector3.new(-30, 0, -30), Vector3.new(30, 0, -30),
		Vector3.new(-212, 0, -40), Vector3.new(220, 0, -40), Vector3.new(-212, 0, 60), Vector3.new(220, 0, 50),
		Vector3.new(-25, 0, 100), Vector3.new(25, 0, 100), Vector3.new(-40, 0, 130), Vector3.new(40, 0, 130),
		Vector3.new(-210, 0, 200), Vector3.new(210, 0, 200), Vector3.new(-110, 0, 110), Vector3.new(110, 0, 110),
		Vector3.new(-150, 0, -110), Vector3.new(-50, 0, -110), Vector3.new(50, 0, -110), Vector3.new(150, 0, -110),
	}
	for _, spot in treeSpots do
		tree(spot)
	end

	World.obby = buildObby()
	World.teleports.plaza = World.townSpawn
	World.teleports.obby = CFrame.new(125, 4, -66) -- faces -Z, along the course
	World.setLeaderboard = buildLeaderboard()

	-- Neighborhood on Maple Court
	local index = 0
	for _, x in { -150, -75, 75, 150 } do
		index += 1
		buildPlot(index, Vector3.new(x, 0, 160), 1)
		index += 1
		buildPlot(index, Vector3.new(x, 0, 240), -1)
	end
	sign(root, CFrame.new(-20, 6, 188), Vector3.new(16, 3, 0.4),
		"Maple Court", Color3.fromRGB(60, 140, 80), Color3.new(1, 1, 1))
end

-- World CFrame for a furniture item at house-local (x, z) with r quarter turns.
function World.furnitureCFrame(plot, itemId, x, z, r)
	local item = Config.Items[itemId]
	return plot.houseCF
		* CFrame.new(x, World.HOUSE_FLOOR_Y + item.size.Y / 2, z)
		* CFrame.Angles(0, r * math.pi / 2, 0)
end

-- Spot just inside the front door, facing in.
function World.homeSpawn(plot)
	return plot.houseCF * CFrame.new(0, 4, -plot.innerZ + 4)
end

return World
