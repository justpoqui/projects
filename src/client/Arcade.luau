-- Client side of the arcade: the game picker and a shared game window.

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)
local Remotes = require(Shared.Remotes)

local UI = require(script.Parent.UI)

local Theme = UI.Theme
local Arcade = {}

local games = {} -- [gameId] = module with :play(field, status, finish)
local running = false

function Arcade.register(gameId, module)
	games[gameId] = module
end

-- Opens a game's window. The game module draws into `field` and calls
-- finish(score) when the round is over.
function Arcade.openGame(gameId)
	local info = Config.Minigames[gameId]
	local module = games[gameId]
	if not info or not module then
		return
	end
	local _, content = UI.window(info.name, Vector2.new(560, 540), function()
		running = false
	end)
	-- Games don't scroll; disable it so drags reach the game.
	content.ScrollingEnabled = false
	content.AutomaticCanvasSize = Enum.AutomaticSize.None
	local layout = content:FindFirstChildOfClass("UIListLayout")
	if layout then
		layout:Destroy()
	end

	local status = UI.label({
		Text = module.instructions or info.blurb, Font = Theme.BodyFont, TextWrapped = true,
		Size = UDim2.new(1, -110, 0, 32), TextXAlignment = Enum.TextXAlignment.Left, Parent = content,
	})
	UI.button({
		Text = "Play", Color = Theme.Good, Size = UDim2.fromOffset(100, 32), AnchorPoint = Vector2.new(1, 0),
		Position = UDim2.new(1, 0, 0, 0), Parent = content,
		OnClick = function()
			if running then
				return
			end
			local old = content:FindFirstChild("Field")
			if old then
				old:Destroy()
			end
			local ok, err = Remotes.get("ArcadeStart"):InvokeServer(gameId)
			if not ok then
				status.Text = err or "Can't start right now."
				return
			end
			running = true
			local field = UI.new("Frame", {
				Name = "Field", Size = UDim2.new(1, 0, 1, -40), Position = UDim2.fromOffset(0, 40),
				BackgroundColor3 = Color3.fromRGB(200, 235, 255), ClipsDescendants = true, Parent = content,
			}, { UI.corner(12) })
			local finished = false
			module.play(field, status, function(score)
				if finished then
					return
				end
				finished = true
				running = false
				if field.Parent then
					Remotes.get("ArcadeSubmit"):FireServer(score)
					status.Text = ("Final score: %d! Press Play to go again."):format(score)
				end
			end)
		end,
	})
end

function Arcade.isRunning(field)
	return running and field.Parent ~= nil
end

-- Picker shown by home arcade cabinets.
function Arcade.openPicker()
	local _, content = UI.window("Arcade", Vector2.new(480, 360))
	for i, gameId in Config.MinigameOrder do
		local info = Config.Minigames[gameId]
		UI.row(content, i, info.name, info.blurb, "Play", Theme.Good, function()
			Arcade.openGame(gameId)
		end)
	end
end

-- gameId nil = picker
function Arcade.open(gameId)
	if gameId and games[gameId] then
		Arcade.openGame(gameId)
	else
		Arcade.openPicker()
	end
end

return Arcade
