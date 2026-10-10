-- Small UI toolkit: themed constructors, windows, and toast notifications.

local Players = game:GetService("Players")
local TweenService = game:GetService("TweenService")

local UI = {}

UI.Theme = {
	Font = Enum.Font.FredokaOne,
	BodyFont = Enum.Font.GothamMedium,
	Panel = Color3.fromRGB(255, 248, 252),
	PanelDark = Color3.fromRGB(240, 225, 245),
	Accent = Color3.fromRGB(150, 80, 200),
	AccentLight = Color3.fromRGB(205, 160, 240),
	Pink = Color3.fromRGB(255, 120, 170),
	Text = Color3.fromRGB(70, 40, 90),
	Muted = Color3.fromRGB(140, 120, 150),
	Good = Color3.fromRGB(90, 190, 110),
	Bad = Color3.fromRGB(230, 80, 90),
	Gold = Color3.fromRGB(255, 200, 60),
}
local Theme = UI.Theme

local screen = Instance.new("ScreenGui")
screen.Name = "BerryvaleUI"
screen.ResetOnSpawn = false
screen.IgnoreGuiInset = true
screen.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
screen.Parent = Players.LocalPlayer:WaitForChild("PlayerGui")
UI.Screen = screen

-- UI.new("Frame", { Size = ... }, { child1, child2 })
function UI.new(className, props, children)
	local inst = Instance.new(className)
	for key, value in props or {} do
		if key ~= "Parent" then
			inst[key] = value
		end
	end
	for _, child in children or {} do
		child.Parent = inst
	end
	if props and props.Parent then
		inst.Parent = props.Parent
	end
	return inst
end

function UI.corner(radius)
	return UI.new("UICorner", { CornerRadius = UDim.new(0, radius or 12) })
end

function UI.stroke(color, thickness)
	return UI.new("UIStroke", {
		Color = color or Theme.AccentLight, Thickness = thickness or 2,
		ApplyStrokeMode = Enum.ApplyStrokeMode.Border,
	})
end

function UI.padding(px)
	return UI.new("UIPadding", {
		PaddingTop = UDim.new(0, px), PaddingBottom = UDim.new(0, px),
		PaddingLeft = UDim.new(0, px), PaddingRight = UDim.new(0, px),
	})
end

function UI.label(props)
	local label = UI.new("TextLabel", {
		BackgroundTransparency = 1, Font = Theme.Font, TextColor3 = Theme.Text,
		TextScaled = true, Size = UDim2.new(1, 0, 0, 24),
	})
	for key, value in props do
		if key ~= "Parent" then
			label[key] = value
		end
	end
	label.Parent = props.Parent
	return label
end

function UI.button(props)
	local color = props.Color or Theme.Accent
	local button = UI.new("TextButton", {
		BackgroundColor3 = color, Font = Theme.Font, TextColor3 = Color3.new(1, 1, 1),
		TextScaled = true, AutoButtonColor = true, Size = UDim2.fromOffset(100, 36),
		Text = props.Text or "",
	}, { UI.corner(10), UI.padding(6) })
	for key, value in props do
		if key ~= "Parent" and key ~= "Color" and key ~= "OnClick" then
			button[key] = value
		end
	end
	if props.OnClick then
		button.Activated:Connect(props.OnClick)
	end
	button.Parent = props.Parent
	return button
end

-- Windows ---------------------------------------------------------------

local currentWindow = nil
local currentClose = nil

function UI.closeWindow()
	if currentWindow then
		currentWindow:Destroy()
		currentWindow = nil
		local onClose = currentClose
		currentClose = nil
		if onClose then
			onClose()
		end
	end
end

function UI.windowOpen()
	return currentWindow ~= nil
end

-- Opens a centered window (closing any other). Returns the window frame and
-- a scrolling content frame.
function UI.window(title, size, onClose)
	UI.closeWindow()
	size = size or Vector2.new(520, 420)

	local window = UI.new("Frame", {
		Name = "Window", AnchorPoint = Vector2.new(0.5, 0.5), Position = UDim2.fromScale(0.5, 0.52),
		Size = UDim2.fromScale(0.94, 0.8), BackgroundColor3 = Theme.Panel, Parent = screen,
	}, {
		UI.corner(18), UI.stroke(Theme.Accent, 3),
		-- Fills small (phone) screens, capped at the requested size elsewhere
		UI.new("UISizeConstraint", { MaxSize = Vector2.new(size.X, size.Y) }),
	})
	local header = UI.new("Frame", {
		Size = UDim2.new(1, 0, 0, 48), BackgroundColor3 = Theme.Accent, Parent = window,
	}, { UI.corner(18) })
	-- Square off the header's bottom corners
	UI.new("Frame", {
		Size = UDim2.new(1, 0, 0, 18), Position = UDim2.new(0, 0, 1, -18), BackgroundColor3 = Theme.Accent,
		BorderSizePixel = 0, Parent = header,
	})
	UI.label({
		Text = title, TextColor3 = Color3.new(1, 1, 1), Size = UDim2.new(1, -70, 0, 32),
		Position = UDim2.fromOffset(16, 8), TextXAlignment = Enum.TextXAlignment.Left, Parent = header, ZIndex = 2,
	})
	UI.button({
		Text = "X", Color = Theme.Pink, Size = UDim2.fromOffset(36, 36), AnchorPoint = Vector2.new(1, 0),
		Position = UDim2.new(1, -6, 0, 6), Parent = header, ZIndex = 2, OnClick = UI.closeWindow,
	})

	local content = UI.new("ScrollingFrame", {
		Name = "Content", Position = UDim2.fromOffset(0, 52), Size = UDim2.new(1, 0, 1, -52),
		BackgroundTransparency = 1, BorderSizePixel = 0, ScrollBarThickness = 8,
		ScrollBarImageColor3 = Theme.AccentLight, CanvasSize = UDim2.new(),
		AutomaticCanvasSize = Enum.AutomaticSize.Y, Parent = window,
	}, {
		UI.padding(12),
		UI.new("UIListLayout", { Padding = UDim.new(0, 8), SortOrder = Enum.SortOrder.LayoutOrder }),
	})

	currentWindow = window
	currentClose = onClose
	return window, content
end

-- A list row with a title, subtitle, and an optional right-hand button.
function UI.row(parent, order, title, subtitle, buttonText, buttonColor, onClick)
	local row = UI.new("Frame", {
		Size = UDim2.new(1, -4, 0, 64), BackgroundColor3 = Theme.PanelDark, LayoutOrder = order, Parent = parent,
	}, { UI.corner(12) })
	UI.label({
		Text = title, Size = UDim2.new(1, -150, 0, 26), Position = UDim2.fromOffset(12, 6),
		TextXAlignment = Enum.TextXAlignment.Left, Parent = row,
	})
	UI.label({
		Text = subtitle or "", Font = Theme.BodyFont, TextColor3 = Theme.Muted,
		Size = UDim2.new(1, -150, 0, 20), Position = UDim2.fromOffset(12, 36),
		TextXAlignment = Enum.TextXAlignment.Left, Parent = row,
	})
	local button
	if buttonText then
		button = UI.button({
			Text = buttonText, Color = buttonColor, Size = UDim2.fromOffset(120, 40), AnchorPoint = Vector2.new(1, 0.5),
			Position = UDim2.new(1, -12, 0.5, 0), Parent = row, OnClick = onClick,
		})
	end
	return row, button
end

function UI.heading(parent, order, text)
	return UI.label({
		Text = text, Size = UDim2.new(1, 0, 0, 26), TextXAlignment = Enum.TextXAlignment.Left,
		TextColor3 = Theme.Accent, LayoutOrder = order, Parent = parent,
	})
end

-- Notifications -----------------------------------------------------------

local toastHolder = UI.new("Frame", {
	Name = "Toasts", AnchorPoint = Vector2.new(0.5, 0), Position = UDim2.new(0.5, 0, 0, 70),
	Size = UDim2.new(0.9, 0, 0, 300), BackgroundTransparency = 1, Parent = screen, ZIndex = 50,
}, {
	UI.new("UIListLayout", {
		Padding = UDim.new(0, 6), HorizontalAlignment = Enum.HorizontalAlignment.Center,
		SortOrder = Enum.SortOrder.LayoutOrder,
	}),
})

local toastCount = 0
function UI.notify(message, kind)
	toastCount += 1
	local color = kind == "error" and Theme.Bad or kind == "success" and Theme.Good or Theme.Accent
	local toast = UI.new("TextLabel", {
		Text = message, Font = Theme.Font, TextColor3 = Color3.new(1, 1, 1), TextSize = 20,
		TextWrapped = true, BackgroundColor3 = color, AutomaticSize = Enum.AutomaticSize.XY,
		Size = UDim2.fromOffset(0, 0), LayoutOrder = toastCount, Parent = toastHolder, ZIndex = 50,
	}, {
		UI.corner(10), UI.padding(10),
		UI.new("UISizeConstraint", { MaxSize = Vector2.new(520, math.huge) }),
	})
	task.delay(3.5, function()
		local tween = TweenService:Create(toast, TweenInfo.new(0.4), { TextTransparency = 1, BackgroundTransparency = 1 })
		tween:Play()
		tween.Completed:Wait()
		toast:Destroy()
	end)
end

return UI
