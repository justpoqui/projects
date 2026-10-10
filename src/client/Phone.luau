-- The Berry Phone: a phone-shaped menu of apps that teleport you around town.

local TweenService = game:GetService("TweenService")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)
local Remotes = require(Shared.Remotes)

local UI = require(script.Parent.UI)

local Theme = UI.Theme
local Phone = {}

-- actions.visit opens the Visit list (provided by Main)
function Phone.open(actions)
	local phone = UI.new("Frame", {
		Name = "BerryPhone", AnchorPoint = Vector2.new(0.5, 0.5), Position = UDim2.fromScale(0.5, 1.5),
		Size = UDim2.fromScale(0.6, 0.78), BackgroundColor3 = Color3.fromRGB(35, 30, 50), Parent = UI.Screen,
	}, {
		UI.corner(40), UI.stroke(Theme.Accent, 4),
		-- Keeps phone proportions; shrinks on short screens
		UI.new("UIAspectRatioConstraint", { AspectRatio = 300 / 560 }),
		UI.new("UISizeConstraint", { MaxSize = Vector2.new(300, 560) }),
	})

	local screen = UI.new("Frame", {
		Name = "Screen", AnchorPoint = Vector2.new(0.5, 0.5), Position = UDim2.fromScale(0.5, 0.5),
		Size = UDim2.new(1, -20, 1, -20), BackgroundColor3 = Color3.new(1, 1, 1), Parent = phone,
	}, {
		UI.corner(32),
		UI.new("UIGradient", {
			Color = ColorSequence.new(Color3.fromRGB(255, 170, 210), Color3.fromRGB(150, 100, 230)),
			Rotation = 90,
		}),
	})

	-- Status bar: clock and title
	local clock = UI.label({
		Text = os.date("%H:%M"), Size = UDim2.new(0.3, 0, 0, 18), Position = UDim2.new(0, 22, 0, 12),
		TextXAlignment = Enum.TextXAlignment.Left, TextColor3 = Color3.new(1, 1, 1), Parent = screen,
	})
	UI.label({
		Text = "🫐 Berry Phone", Size = UDim2.new(1, -40, 0, 30), Position = UDim2.new(0, 20, 0, 36),
		TextColor3 = Color3.new(1, 1, 1), Parent = screen,
	})
	UI.label({
		Text = "Tap an app to go there", Font = Theme.BodyFont, Size = UDim2.new(1, -40, 0, 16),
		Position = UDim2.new(0, 20, 0, 68), TextColor3 = Color3.fromRGB(255, 240, 250), Parent = screen,
	})

	local grid = UI.new("ScrollingFrame", {
		Position = UDim2.new(0, 10, 0, 92), Size = UDim2.new(1, -20, 1, -140), BackgroundTransparency = 1,
		BorderSizePixel = 0, ScrollBarThickness = 4, CanvasSize = UDim2.new(),
		AutomaticCanvasSize = Enum.AutomaticSize.Y, Parent = screen,
	}, {
		UI.new("UIGridLayout", {
			CellSize = UDim2.new(1 / 3, -8, 0, 84), CellPadding = UDim2.fromOffset(8, 8),
			SortOrder = Enum.SortOrder.LayoutOrder, HorizontalAlignment = Enum.HorizontalAlignment.Center,
		}),
		UI.padding(4),
	})

	local function close()
		UI.closeWindow()
	end

	for i, app in Config.PhoneApps do
		local button = UI.new("TextButton", {
			Text = "", BackgroundTransparency = 1, LayoutOrder = i, Parent = grid,
		})
		local icon = UI.new("TextLabel", {
			Text = app.icon, AnchorPoint = Vector2.new(0.5, 0), Position = UDim2.new(0.5, 0, 0, 2),
			Size = UDim2.fromOffset(54, 54), BackgroundColor3 = app.color, TextScaled = true,
			Font = Theme.Font, Parent = button,
		}, { UI.corner(16), UI.padding(8), UI.stroke(Color3.new(1, 1, 1), 2) })
		UI.label({
			Text = app.label, Font = Theme.Font, TextScaled = false, TextSize = 13, TextColor3 = Color3.new(1, 1, 1),
			Size = UDim2.new(1, 0, 0, 20), Position = UDim2.new(0, 0, 0, 60), TextStrokeTransparency = 0.6,
			Parent = button,
		})
		button.Activated:Connect(function()
			TweenService:Create(icon, TweenInfo.new(0.08), { Size = UDim2.fromOffset(48, 48) }):Play()
			if app.id == "visit" then
				close()
				actions.visit()
			elseif app.id == "store" then
				close()
				actions.store()
			elseif app.id == "home" then
				Remotes.get("Teleport"):FireServer("home")
				close()
			else
				Remotes.get("Teleport"):FireServer("place", app.id)
				close()
			end
		end)
	end

	-- Home bar closes the phone
	UI.button({
		Text = "", Color = Color3.fromRGB(255, 255, 255), AnchorPoint = Vector2.new(0.5, 1),
		Position = UDim2.new(0.5, 0, 1, -12), Size = UDim2.fromOffset(110, 8), Parent = screen, OnClick = close,
	})
	UI.button({
		Text = "Close", Color = Color3.fromRGB(60, 50, 80), AnchorPoint = Vector2.new(0.5, 1),
		Position = UDim2.new(0.5, 0, 1, -26), Size = UDim2.fromOffset(100, 22), Parent = screen, OnClick = close,
	})

	UI.setWindow(phone, nil)

	-- Slide up into view and keep the clock ticking while open
	TweenService:Create(phone, TweenInfo.new(0.3, Enum.EasingStyle.Back), { Position = UDim2.fromScale(0.5, 0.5) }):Play()
	task.spawn(function()
		while phone.Parent do
			clock.Text = os.date("%H:%M")
			task.wait(5)
		end
	end)
end

return Phone
