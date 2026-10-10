-- Always-on HUD: money, need bars, and the bottom menu buttons.

local TweenService = game:GetService("TweenService")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)

local UI = require(script.Parent.UI)
local State = require(script.Parent.State)

local Theme = UI.Theme
local Hud = {}

function Hud.init(actions)
	local panel = UI.new("Frame", {
		Name = "Stats", Position = UDim2.fromOffset(12, 60), Size = UDim2.fromOffset(230, 150),
		BackgroundColor3 = Theme.Panel, BackgroundTransparency = 0.05, Parent = UI.Screen,
	}, { UI.corner(16), UI.stroke(Theme.AccentLight, 2), UI.padding(10) })

	local bucks = UI.label({
		Text = "0", Size = UDim2.new(1, 0, 0, 30), TextColor3 = Theme.Accent,
		TextXAlignment = Enum.TextXAlignment.Left, Parent = panel,
	})

	local bars = {}
	local stats = {
		{ key = "hunger", label = "Hunger", color = Color3.fromRGB(255, 160, 70) },
		{ key = "energy", label = "Energy", color = Color3.fromRGB(80, 170, 255) },
		{ key = "happiness", label = "Happy", color = Color3.fromRGB(255, 110, 170) },
	}
	for i, stat in stats do
		local y = 36 + (i - 1) * 32
		UI.label({
			Text = stat.label, Font = Theme.Font, TextSize = 16, TextScaled = false,
			Size = UDim2.fromOffset(60, 22), Position = UDim2.fromOffset(0, y),
			TextXAlignment = Enum.TextXAlignment.Left, Parent = panel,
		})
		local track = UI.new("Frame", {
			Size = UDim2.new(1, -66, 0, 18), Position = UDim2.fromOffset(64, y + 2),
			BackgroundColor3 = Theme.PanelDark, Parent = panel,
		}, { UI.corner(9) })
		local fill = UI.new("Frame", {
			Size = UDim2.fromScale(1, 1), BackgroundColor3 = stat.color, Parent = track,
		}, { UI.corner(9) })
		local value = UI.label({
			Text = "100", Font = Theme.Font, TextSize = 13, TextScaled = false, TextColor3 = Theme.Text,
			Size = UDim2.fromScale(1, 1), Parent = track, ZIndex = 2,
		})
		bars[stat.key] = { fill = fill, value = value }
	end

	State.onChange(function(data)
		bucks.Text = "🫐 " .. data.bucks .. " " .. Config.CURRENCY
		for key, bar in bars do
			local amount = data[key] or 0
			bar.value.Text = tostring(math.floor(amount))
			TweenService:Create(bar.fill, TweenInfo.new(0.3), {
				Size = UDim2.fromScale(math.max(amount / Config.MAX_STAT, 0.001), 1),
			}):Play()
		end
	end)

	-- Bottom menu: two rows of three
	local menu = UI.new("Frame", {
		Name = "Menu", AnchorPoint = Vector2.new(0.5, 1), Position = UDim2.new(0.5, 0, 1, -10),
		Size = UDim2.new(0.96, 0, 0, 88), BackgroundTransparency = 1, Parent = UI.Screen,
	}, {
		UI.new("UIGridLayout", {
			CellSize = UDim2.new(1 / 3, -6, 0, 40), CellPadding = UDim2.fromOffset(6, 6),
			HorizontalAlignment = Enum.HorizontalAlignment.Center, SortOrder = Enum.SortOrder.LayoutOrder,
		}),
		UI.new("UISizeConstraint", { MaxSize = Vector2.new(480, 88) }),
	})

	local buttons = {
		{ text = "Berry Phone", color = Color3.fromRGB(40, 40, 60), fn = actions.phone },
		{ text = "Backpack", color = Theme.Accent, fn = actions.backpack },
		{ text = "Buddies", color = Color3.fromRGB(240, 150, 60), fn = actions.pets },
		{ text = "Quests", color = Theme.Gold, fn = actions.quests },
		{ text = "My House", color = Color3.fromRGB(120, 110, 220), fn = actions.house },
		{ text = "Me", color = Theme.Pink, fn = actions.profile },
	}
	for i, info in buttons do
		UI.button({ Text = info.text, Color = info.color, LayoutOrder = i, Parent = menu, OnClick = info.fn })
	end
end

return Hud
