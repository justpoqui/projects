-- Pattern Pop: watch the pads light up, then tap them in the same order.
-- Each round adds one more step. One mistake ends the game.

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)

local UI = require(script.Parent.UI)
local Arcade = require(script.Parent.Arcade)

local Pattern = {
	instructions = "Watch the pattern, then repeat it. It gets longer every round!",
}

local PADS = {
	{ dim = Color3.fromRGB(120, 40, 60), lit = Color3.fromRGB(255, 90, 120) },
	{ dim = Color3.fromRGB(40, 70, 130), lit = Color3.fromRGB(90, 170, 255) },
	{ dim = Color3.fromRGB(40, 110, 60), lit = Color3.fromRGB(110, 240, 140) },
	{ dim = Color3.fromRGB(130, 110, 30), lit = Color3.fromRGB(255, 225, 80) },
}
local START_LENGTH = 3

function Pattern.play(field, status, finish)
	local maxScore = Config.Minigames.pattern.maxScore
	local grid = UI.new("Frame", {
		AnchorPoint = Vector2.new(0.5, 0.5), Position = UDim2.fromScale(0.5, 0.5), Size = UDim2.new(1, -40, 1, -40),
		BackgroundTransparency = 1, Parent = field,
	}, {
		UI.new("UIGridLayout", {
			CellSize = UDim2.new(0.5, -8, 0.5, -8), CellPadding = UDim2.fromOffset(16, 16),
			SortOrder = Enum.SortOrder.LayoutOrder,
		}),
	})

	local sequence = {}
	local inputIndex = 0
	local accepting = false
	local score = 0
	local over = false
	local buttons = {}

	local function flash(i, seconds)
		local button = buttons[i]
		button.BackgroundColor3 = PADS[i].lit
		task.wait(seconds)
		if button.Parent then
			button.BackgroundColor3 = PADS[i].dim
		end
	end

	local function nextRound()
		accepting = false
		table.insert(sequence, math.random(#PADS))
		while #sequence < START_LENGTH do
			table.insert(sequence, math.random(#PADS))
		end
		status.Text = ("Round %d - watch!"):format(score + 1)
		task.wait(0.8)
		for _, i in sequence do
			if not Arcade.isRunning(field) then
				return
			end
			flash(i, 0.45)
			task.wait(0.15)
		end
		inputIndex = 0
		accepting = true
		status.Text = ("Round %d - your turn! (%d steps)"):format(score + 1, #sequence)
	end

	for i, pad in PADS do
		local button = UI.new("TextButton", {
			Text = "", AutoButtonColor = false, BackgroundColor3 = pad.dim, LayoutOrder = i, Parent = grid,
		}, { UI.corner(24), UI.stroke(Color3.new(1, 1, 1), 3) })
		buttons[i] = button
		button.Activated:Connect(function()
			if not accepting or over or not Arcade.isRunning(field) then
				return
			end
			task.spawn(flash, i, 0.2)
			inputIndex += 1
			if sequence[inputIndex] ~= i then
				over = true
				accepting = false
				status.Text = "Oops! Wrong pad."
				task.delay(0.8, function()
					finish(score)
				end)
				return
			end
			if inputIndex == #sequence then
				accepting = false
				score += 1
				if score >= maxScore then
					over = true
					finish(score)
					return
				end
				task.spawn(nextRound)
			end
		end)
	end

	task.spawn(nextRound)
end

Arcade.register("pattern", Pattern)

return Pattern
