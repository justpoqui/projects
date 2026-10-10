-- Cereal Stacker: a cereal box slides back and forth; tap/click/Space to drop
-- it on the tower. Whatever hangs over the edge gets chopped off, so the
-- boxes get narrower. Miss completely and the game ends.

local RunService = game:GetService("RunService")
local UserInputService = game:GetService("UserInputService")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)

local UI = require(script.Parent.UI)
local Arcade = require(script.Parent.Arcade)

local Stacker = {
	instructions = "Click, tap or press Space to drop each box. Line them up perfectly!",
}

local BOX_HEIGHT = 26
local DROP_COOLDOWN = 0.45 -- keeps scores within what the server accepts
local COLORS = {
	Color3.fromRGB(230, 80, 90), Color3.fromRGB(255, 190, 60), Color3.fromRGB(90, 190, 110),
	Color3.fromRGB(80, 150, 255), Color3.fromRGB(170, 90, 220),
}

function Stacker.play(field, status, finish)
	local maxScore = Config.Minigames.stacker.maxScore
	local width = field.AbsoluteSize.X
	local height = field.AbsoluteSize.Y
	local stack = {} -- { left, width, frame }
	local score = 0
	local over = false
	local missed = false
	local lastDrop = 0

	local function boxFrame(color)
		return UI.new("Frame", {
			Size = UDim2.fromOffset(0, BOX_HEIGHT - 2), BackgroundColor3 = color, Parent = field,
		}, { UI.corner(4), UI.stroke(Color3.new(1, 1, 1), 1) })
	end

	local function layout()
		local visibleRows = math.floor(height / BOX_HEIGHT) - 4
		local scroll = math.max(0, #stack - visibleRows) * BOX_HEIGHT
		for i, box in stack do
			box.frame.Size = UDim2.fromOffset(box.width, BOX_HEIGHT - 2)
			box.frame.Position = UDim2.fromOffset(box.left, height - i * BOX_HEIGHT + scroll)
		end
		return scroll
	end

	-- Base box
	local baseWidth = math.floor(width * 0.45)
	table.insert(stack, { left = (width - baseWidth) / 2, width = baseWidth, frame = boxFrame(Color3.fromRGB(120, 85, 55)) })

	local moving = { x = 0, dir = 1, width = baseWidth, frame = boxFrame(COLORS[1]) }
	local speed = 200

	local function drop()
		if over or os.clock() - lastDrop < DROP_COOLDOWN then
			return
		end
		lastDrop = os.clock()
		local top = stack[#stack]
		if math.abs(moving.x - top.left) <= 5 then
			moving.x = top.left -- perfect drop
		end
		local left = math.max(moving.x, top.left)
		local right = math.min(moving.x + moving.width, top.left + top.width)
		if right - left <= 2 then
			over = true
			missed = true
			return
		end
		moving.frame.BackgroundColor3 = COLORS[(#stack - 1) % #COLORS + 1]
		table.insert(stack, { left = left, width = right - left, frame = moving.frame })
		score += 1
		speed += 10
		if score >= maxScore then
			over = true
			return
		end
		moving = { x = 0, dir = 1, width = right - left, frame = boxFrame(COLORS[#stack % #COLORS + 1]) }
	end

	-- Invisible button over the field catches clicks and taps
	local catcher = UI.new("TextButton", {
		Text = "", BackgroundTransparency = 1, Size = UDim2.fromScale(1, 1), ZIndex = 5, Parent = field,
	})
	catcher.Activated:Connect(drop)
	local keyConn = UserInputService.InputBegan:Connect(function(input)
		if input.KeyCode == Enum.KeyCode.Space then
			drop()
		end
	end)

	local stepConn
	stepConn = RunService.RenderStepped:Connect(function(dt)
		if not Arcade.isRunning(field) then
			stepConn:Disconnect()
			keyConn:Disconnect()
			return
		end
		moving.x += moving.dir * speed * dt
		if moving.x <= 0 then
			moving.x, moving.dir = 0, 1
		elseif moving.x + moving.width >= width then
			moving.x, moving.dir = width - moving.width, -1
		end
		local scroll = layout()
		moving.frame.Size = UDim2.fromOffset(moving.width, BOX_HEIGHT - 2)
		moving.frame.Position = UDim2.fromOffset(moving.x, height - (#stack + 1) * BOX_HEIGHT + scroll - 30)
		status.Text = ("Height: %d"):format(score)

		if over then
			stepConn:Disconnect()
			keyConn:Disconnect()
			if missed then
				moving.frame.BackgroundColor3 = Color3.fromRGB(110, 90, 60)
			end
			task.delay(0.6, function()
				finish(score)
			end)
		end
	end)
end

Arcade.register("stacker", Stacker)

return Stacker
