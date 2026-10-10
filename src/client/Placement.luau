-- Furniture placement mode: a see-through preview follows the mouse / finger
-- across your house floor. Click or press Place to put it down.

local Players = game:GetService("Players")
local RunService = game:GetService("RunService")
local UserInputService = game:GetService("UserInputService")
local GuiService = game:GetService("GuiService")
local Workspace = game:GetService("Workspace")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)
local Remotes = require(Shared.Remotes)
local Builders = require(Shared.Builders)

local UI = require(script.Parent.UI)

local Theme = UI.Theme
local player = Players.LocalPlayer

-- Must match WorldBuilder on the server
local INNER_X, INNER_Z, FLOOR_Y = 19, 14, 1

local Placement = {}

local active = nil -- current placement session

local function myPlot()
	local index = player:GetAttribute("PlotIndex")
	local town = Workspace:FindFirstChild("Town")
	return index and town and town:FindFirstChild("Plot" .. index)
end

local function snap(v)
	return math.floor(v * 2 + 0.5) / 2
end

function Placement.cancel()
	if not active then
		return
	end
	local session = active
	active = nil
	for _, connection in session.connections do
		connection:Disconnect()
	end
	session.ghost:Destroy()
	session.bar:Destroy()
end

local function confirm()
	local session = active
	if not session or not session.valid then
		return
	end
	Remotes.get("PlaceFurniture"):FireServer(session.itemId, session.x, session.z, session.r)
	Placement.cancel()
end

local function rotate()
	if active then
		active.r = (active.r + 1) % 4
	end
end

local function update()
	local session = active
	if not session then
		return
	end
	local camera = Workspace.CurrentCamera
	local ray
	if session.touchPoint then
		ray = camera:ScreenPointToRay(session.touchPoint.X, session.touchPoint.Y)
	else
		local mouse = UserInputService:GetMouseLocation()
		ray = camera:ViewportPointToRay(mouse.X, mouse.Y)
	end
	local params = RaycastParams.new()
	params.FilterType = Enum.RaycastFilterType.Include
	params.FilterDescendantsInstances = { session.floor }
	local hit = Workspace:Raycast(ray.Origin, ray.Direction * 500, params)

	local item = Config.Items[session.itemId]
	local sx, sz = item.size.X, item.size.Z
	if session.r % 2 == 1 then
		sx, sz = sz, sx
	end
	local maxX, maxZ = INNER_X - sx / 2, INNER_Z - sz / 2

	session.valid = hit ~= nil and maxX >= 0 and maxZ >= 0
	if hit then
		local localPos = session.houseCF:PointToObjectSpace(hit.Position)
		session.x = snap(math.clamp(localPos.X, -maxX, maxX))
		session.z = snap(math.clamp(localPos.Z, -maxZ, maxZ))
	end
	session.ghost:PivotTo(session.houseCF
		* CFrame.new(session.x, FLOOR_Y + item.size.Y / 2, session.z)
		* CFrame.Angles(0, session.r * math.pi / 2, 0))
	session.ghost.PrimaryPart.Transparency = session.valid and 1 or 0.6
end

function Placement.start(itemId)
	Placement.cancel()
	local plot = myPlot()
	if not plot then
		UI.notify("You need a house to place furniture.", "error")
		return
	end
	local floor = plot:FindFirstChild("Floor")
	local houseCF = floor.CFrame * CFrame.new(0, -0.5, 0)

	-- Bring the player home if they're not already there.
	local character = player.Character
	local root = character and character:FindFirstChild("HumanoidRootPart")
	if root and (root.Position - houseCF.Position).Magnitude > 45 then
		Remotes.get("Teleport"):FireServer("home")
	end

	local ghost = Builders.furniture(itemId)
	for _, part in ghost:GetDescendants() do
		if part:IsA("BasePart") then
			part.CanCollide = false
			part.CanQuery = false
			part.CanTouch = false
			if part ~= ghost.PrimaryPart then
				part.Transparency = 0.45
			end
		end
	end
	ghost.PrimaryPart.Color = Theme.Bad
	ghost.Parent = Workspace

	local bar = UI.new("Frame", {
		Name = "PlacementBar", AnchorPoint = Vector2.new(0.5, 1), Position = UDim2.new(0.5, 0, 1, -76),
		Size = UDim2.new(0.9, 0, 0, 92), BackgroundColor3 = Theme.Panel, Parent = UI.Screen,
	}, {
		UI.corner(14), UI.stroke(Theme.Accent, 2), UI.padding(8),
		UI.new("UISizeConstraint", { MaxSize = Vector2.new(420, 92) }),
	})
	UI.label({
		Text = "Placing " .. Config.Items[itemId].name .. "  (R rotate, Q cancel)", Font = Theme.BodyFont,
		Size = UDim2.new(1, 0, 0, 22), Parent = bar,
	})
	local row = UI.new("Frame", {
		Size = UDim2.new(1, 0, 0, 44), Position = UDim2.fromOffset(0, 30), BackgroundTransparency = 1, Parent = bar,
	}, {
		UI.new("UIListLayout", {
			FillDirection = Enum.FillDirection.Horizontal, Padding = UDim.new(0, 8),
			HorizontalAlignment = Enum.HorizontalAlignment.Center,
		}),
	})
	UI.button({ Text = "Rotate", Color = Theme.Accent, Size = UDim2.new(0.31, 0, 1, 0), Parent = row, LayoutOrder = 1, OnClick = rotate })
	UI.button({ Text = "Place", Color = Theme.Good, Size = UDim2.new(0.31, 0, 1, 0), Parent = row, LayoutOrder = 2, OnClick = confirm })
	UI.button({ Text = "Cancel", Color = Theme.Bad, Size = UDim2.new(0.31, 0, 1, 0), Parent = row, LayoutOrder = 3, OnClick = Placement.cancel })

	local session = {
		itemId = itemId, floor = floor, houseCF = houseCF, ghost = ghost, bar = bar,
		x = 0, z = 0, r = 0, valid = false, touchPoint = nil, connections = {},
	}
	active = session

	table.insert(session.connections, RunService.RenderStepped:Connect(update))
	table.insert(session.connections, UserInputService.InputBegan:Connect(function(input, processed)
		if processed then
			return
		end
		if input.KeyCode == Enum.KeyCode.R then
			rotate()
		elseif input.KeyCode == Enum.KeyCode.Q or input.KeyCode == Enum.KeyCode.Escape then
			Placement.cancel()
		elseif input.UserInputType == Enum.UserInputType.MouseButton1 then
			confirm()
		elseif input.UserInputType == Enum.UserInputType.Touch then
			session.touchPoint = Vector2.new(input.Position.X, input.Position.Y)
		end
	end))
	table.insert(session.connections, UserInputService.TouchMoved:Connect(function(input, processed)
		if not processed then
			session.touchPoint = Vector2.new(input.Position.X, input.Position.Y)
		end
	end))
	table.insert(session.connections, player.CharacterRemoving:Connect(Placement.cancel))
end

function Placement.isActive()
	return active ~= nil
end

-- Drop out of placement when the Roblox menu opens.
GuiService.MenuOpened:Connect(Placement.cancel)

return Placement
