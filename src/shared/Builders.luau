-- Builds simple part-based models for furniture and buddies so the game needs
-- no uploaded assets. Used by the server for real objects and by the client
-- for placement previews.

local Config = require(script.Parent.Config)

local Builders = {}

local function part(parent, props)
	local p = Instance.new("Part")
	p.Anchored = true
	p.TopSurface = Enum.SurfaceType.Smooth
	p.BottomSurface = Enum.SurfaceType.Smooth
	for key, value in props do
		p[key] = value
	end
	p.Parent = parent
	return p
end

local function darker(color, amount)
	local h, s, v = color:ToHSV()
	return Color3.fromHSV(h, s, math.max(0, v - (amount or 0.2)))
end

-- Detail builders receive (model, size, color) and add parts positioned
-- relative to the hitbox center at the origin.
local details = {}

function details.bed(model, size, color)
	local frameH = size.Y * 0.5
	part(model, {
		Name = "Frame", Size = Vector3.new(size.X, frameH, size.Z),
		CFrame = CFrame.new(0, -size.Y / 2 + frameH / 2, 0), Color = Color3.fromRGB(130, 90, 55),
	})
	part(model, {
		Name = "Blanket", Size = Vector3.new(size.X - 0.2, size.Y - frameH, size.Z * 0.75),
		CFrame = CFrame.new(0, frameH / 2, size.Z * 0.125), Color = color,
	})
	part(model, {
		Name = "Pillow", Size = Vector3.new(size.X * 0.7, 0.6, size.Z * 0.18),
		CFrame = CFrame.new(0, frameH / 2, -size.Z * 0.38), Color = Color3.new(1, 1, 1),
	})
end

function details.sofa(model, size, color)
	part(model, {
		Name = "Seat", Size = Vector3.new(size.X, size.Y * 0.45, size.Z),
		CFrame = CFrame.new(0, -size.Y / 2 + size.Y * 0.225, 0), Color = color,
	})
	part(model, {
		Name = "Back", Size = Vector3.new(size.X, size.Y, size.Z * 0.3),
		CFrame = CFrame.new(0, 0, size.Z * 0.35), Color = darker(color, 0.1),
	})
	for _, side in { -1, 1 } do
		part(model, {
			Name = "Arm", Size = Vector3.new(0.8, size.Y * 0.7, size.Z),
			CFrame = CFrame.new(side * (size.X / 2 - 0.4), -size.Y * 0.15, 0), Color = darker(color, 0.1),
		})
	end
end

function details.tv(model, size, color)
	part(model, {
		Name = "Screen", Size = size, CFrame = CFrame.new(), Color = color,
	})
	part(model, {
		Name = "Glass", Size = Vector3.new(size.X - 0.4, size.Y - 0.4, 0.05),
		CFrame = CFrame.new(0, 0, -size.Z / 2 - 0.02), Color = Color3.fromRGB(70, 130, 220),
		Material = Enum.Material.Neon, Transparency = 0.2,
	})
end

function details.bookshelf(model, size, color)
	part(model, { Name = "Case", Size = size, CFrame = CFrame.new(), Color = color })
	local shelves = 3
	local bookColors = {
		Color3.fromRGB(200, 60, 60), Color3.fromRGB(60, 120, 200),
		Color3.fromRGB(240, 200, 60), Color3.fromRGB(70, 170, 90),
	}
	for i = 1, shelves do
		local y = -size.Y / 2 + (size.Y / shelves) * (i - 0.5)
		for b = 1, 5 do
			part(model, {
				Name = "Book", Size = Vector3.new(0.8, size.Y / shelves - 0.8, 0.3),
				CFrame = CFrame.new(-size.X / 2 + 0.8 + (b - 1) * 1.05, y, -size.Z / 2 - 0.1),
				Color = bookColors[(b + i) % #bookColors + 1],
			})
		end
	end
end

function details.table(model, size, color)
	part(model, {
		Name = "Top", Size = Vector3.new(size.X, 0.4, size.Z),
		CFrame = CFrame.new(0, size.Y / 2 - 0.2, 0), Color = color,
	})
	for _, sx in { -1, 1 } do
		for _, sz in { -1, 1 } do
			part(model, {
				Name = "Leg", Size = Vector3.new(0.4, size.Y - 0.4, 0.4),
				CFrame = CFrame.new(sx * (size.X / 2 - 0.4), -0.2, sz * (size.Z / 2 - 0.4)), Color = darker(color),
			})
		end
	end
end

function details.chair(model, size, color)
	part(model, {
		Name = "Seat", Size = Vector3.new(size.X, 0.3, size.Z),
		CFrame = CFrame.new(0, 0, 0), Color = color,
	})
	part(model, {
		Name = "Back", Size = Vector3.new(size.X, size.Y / 2, 0.3),
		CFrame = CFrame.new(0, size.Y / 4, size.Z / 2 - 0.15), Color = color,
	})
	for _, sx in { -1, 1 } do
		for _, sz in { -1, 1 } do
			part(model, {
				Name = "Leg", Size = Vector3.new(0.25, size.Y / 2, 0.25),
				CFrame = CFrame.new(sx * (size.X / 2 - 0.2), -size.Y / 4, sz * (size.Z / 2 - 0.2)), Color = darker(color),
			})
		end
	end
end

function details.lamp(model, size, color)
	part(model, {
		Name = "Pole", Size = Vector3.new(0.3, size.Y - 1.5, 0.3),
		CFrame = CFrame.new(0, -0.75, 0), Color = Color3.fromRGB(60, 60, 60),
	})
	part(model, {
		Name = "Foot", Size = Vector3.new(size.X, 0.3, size.Z),
		CFrame = CFrame.new(0, -size.Y / 2 + 0.15, 0), Color = Color3.fromRGB(60, 60, 60),
	})
	local shade = part(model, {
		Name = "Shade", Size = Vector3.new(size.X, 1.5, size.Z), Shape = Enum.PartType.Cylinder,
		CFrame = CFrame.new(0, size.Y / 2 - 0.75, 0) * CFrame.Angles(0, 0, math.rad(90)),
		Color = color, Material = Enum.Material.Neon,
	})
	local light = Instance.new("PointLight")
	light.Range = 18
	light.Brightness = 1.5
	light.Color = color
	light.Parent = shade
end

function details.plant(model, size, color)
	part(model, {
		Name = "Pot", Size = Vector3.new(size.X * 0.8, size.Y * 0.35, size.Z * 0.8),
		CFrame = CFrame.new(0, -size.Y / 2 + size.Y * 0.175, 0), Color = Color3.fromRGB(190, 100, 60),
	})
	part(model, {
		Name = "Leaves", Size = Vector3.new(size.X, size.X, size.X), Shape = Enum.PartType.Ball,
		CFrame = CFrame.new(0, size.Y / 2 - size.X / 2, 0), Color = color, Material = Enum.Material.Grass,
	})
end

function details.rug(model, size, color)
	part(model, {
		Name = "Rug", Size = Vector3.new(size.Y, size.X, size.Z), Shape = Enum.PartType.Cylinder,
		CFrame = CFrame.Angles(0, 0, math.rad(90)), Color = color, Material = Enum.Material.Fabric,
	})
end

function details.arcade(model, size, color)
	part(model, { Name = "Cabinet", Size = size, CFrame = CFrame.new(), Color = color })
	part(model, {
		Name = "Screen", Size = Vector3.new(size.X - 0.6, size.Y * 0.3, 0.05),
		CFrame = CFrame.new(0, size.Y * 0.15, -size.Z / 2 - 0.03), Color = Color3.fromRGB(90, 255, 170),
		Material = Enum.Material.Neon,
	})
	part(model, {
		Name = "Controls", Size = Vector3.new(size.X, 0.4, 1),
		CFrame = CFrame.new(0, -size.Y * 0.08, -size.Z / 2 - 0.5), Color = Color3.fromRGB(30, 30, 30),
	})
end

-- Returns a Model whose PrimaryPart ("Hitbox") is an invisible box of the
-- item's size centered at the model pivot.
function Builders.furniture(itemId)
	local item = Config.Items[itemId]
	assert(item and item.category == "furniture", "not furniture: " .. tostring(itemId))

	local model = Instance.new("Model")
	model.Name = item.name

	local hitbox = part(model, {
		Name = "Hitbox", Size = item.size, CFrame = CFrame.new(),
		Transparency = 1, CanCollide = false,
	})
	model.PrimaryPart = hitbox

	local builder = details[itemId]
	if builder then
		builder(model, item.size, item.color)
	else
		part(model, { Name = "Body", Size = item.size, CFrame = CFrame.new(), Color = item.color })
	end
	return model
end

-- Returns an unanchored, massless buddy model with PrimaryPart "Body".
function Builders.buddy(itemId)
	local item = Config.Items[itemId]
	assert(item and item.category == "buddy", "not a buddy: " .. tostring(itemId))

	local model = Instance.new("Model")
	model.Name = item.name

	local body = part(model, {
		Name = "Body", Shape = Enum.PartType.Ball, Size = Vector3.new(2, 2, 2),
		Color = item.color, CanCollide = false, Massless = true,
	})
	model.PrimaryPart = body

	local function attach(name, size, offset, color, shape, material)
		local p = part(model, {
			Name = name, Size = size, Color = color, CanCollide = false, Massless = true,
			Shape = shape or Enum.PartType.Block, Material = material or Enum.Material.SmoothPlastic,
		})
		p.CFrame = body.CFrame * offset
		local weld = Instance.new("WeldConstraint")
		weld.Part0 = body
		weld.Part1 = p
		weld.Parent = p
		return p
	end

	-- Eyes face -Z (the model's LookVector)
	for _, side in { -1, 1 } do
		attach("Eye", Vector3.new(0.35, 0.35, 0.35), CFrame.new(side * 0.4, 0.3, -0.85), Color3.new(0, 0, 0), Enum.PartType.Ball)
	end

	if itemId == "puppy" then
		for _, side in { -1, 1 } do
			attach("Ear", Vector3.new(0.4, 0.9, 0.5), CFrame.new(side * 0.85, 0.3, 0) * CFrame.Angles(0, 0, side * 0.3), item.accent)
		end
		attach("Nose", Vector3.new(0.3, 0.3, 0.3), CFrame.new(0, 0, -1), item.accent, Enum.PartType.Ball)
	elseif itemId == "kitten" then
		for _, side in { -1, 1 } do
			attach("Ear", Vector3.new(0.5, 0.6, 0.2), CFrame.new(side * 0.55, 0.95, -0.1) * CFrame.Angles(0, 0, -side * 0.4), item.color)
		end
		attach("Muzzle", Vector3.new(0.6, 0.4, 0.3), CFrame.new(0, -0.1, -0.85), item.accent)
	elseif itemId == "bunny" then
		for _, side in { -1, 1 } do
			attach("Ear", Vector3.new(0.35, 1.3, 0.2), CFrame.new(side * 0.35, 1.3, 0), item.color)
			attach("EarInner", Vector3.new(0.2, 1.0, 0.05), CFrame.new(side * 0.35, 1.3, -0.12), item.accent)
		end
		attach("Tail", Vector3.new(0.6, 0.6, 0.6), CFrame.new(0, -0.3, 1), item.color, Enum.PartType.Ball)
	elseif itemId == "robot" then
		body.Shape = Enum.PartType.Block
		attach("Antenna", Vector3.new(0.15, 0.8, 0.15), CFrame.new(0, 1.3, 0), item.color)
		attach("Bulb", Vector3.new(0.35, 0.35, 0.35), CFrame.new(0, 1.8, 0), item.accent, Enum.PartType.Ball, Enum.Material.Neon)
		attach("Visor", Vector3.new(1.4, 0.4, 0.1), CFrame.new(0, 0.3, -1.02), item.accent, nil, Enum.Material.Neon)
	elseif itemId == "dragon" then
		for _, side in { -1, 1 } do
			attach("Wing", Vector3.new(1.4, 0.15, 0.9), CFrame.new(side * 1.3, 0.3, 0.2) * CFrame.Angles(0, 0, side * 0.5), item.accent)
			attach("Horn", Vector3.new(0.2, 0.6, 0.2), CFrame.new(side * 0.4, 1.05, 0) * CFrame.Angles(0, 0, -side * 0.3), item.accent)
		end
		attach("Tail", Vector3.new(0.4, 0.4, 1.4), CFrame.new(0, -0.4, 1.3), item.color)
	end

	for _, p in model:GetDescendants() do
		if p:IsA("BasePart") then
			p.Anchored = false
		end
	end
	return model
end

return Builders
