-- Berry Catch: slide the bowl to catch falling berries. Golden berries are
-- worth 3, rotten ones cost 2. The server pays out based on the score.

local RunService = game:GetService("RunService")
local UserInputService = game:GetService("UserInputService")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)
local Remotes = require(Shared.Remotes)

local UI = require(script.Parent.UI)

local Theme = UI.Theme
local BerryCatch = {}

local BERRY_TYPES = {
	{ weight = 75, points = 1, color = Color3.fromRGB(120, 60, 200) },
	{ weight = 10, points = 3, color = Theme.Gold },
	{ weight = 15, points = -2, color = Color3.fromRGB(110, 90, 60) },
}

local function pickBerry()
	local total = 0
	for _, t in BERRY_TYPES do
		total += t.weight
	end
	local roll = math.random() * total
	for _, t in BERRY_TYPES do
		roll -= t.weight
		if roll <= 0 then
			return t
		end
	end
	return BERRY_TYPES[1]
end

local running = false

local function play(content, statusLabel)
	local ok, err = Remotes.get("ArcadeStart"):InvokeServer()
	if not ok then
		statusLabel.Text = err or "Can't start right now."
		return
	end
	running = true

	local field = UI.new("Frame", {
		Name = "Field", Size = UDim2.new(1, 0, 1, -40), Position = UDim2.fromOffset(0, 40),
		BackgroundColor3 = Color3.fromRGB(200, 235, 255), ClipsDescendants = true, Parent = content,
	}, { UI.corner(12) })
	local bowl = UI.new("Frame", {
		Name = "Bowl", AnchorPoint = Vector2.new(0.5, 1), Size = UDim2.fromOffset(80, 24),
		Position = UDim2.new(0.5, 0, 1, -6), BackgroundColor3 = Theme.Pink, Parent = field,
	}, { UI.corner(12) })

	local score = 0
	local timeLeft = Config.ARCADE_DURATION
	local spawnTimer = 0
	local berries = {}
	local pointerX = nil

	local inputConn = UserInputService.InputChanged:Connect(function(input)
		if input.UserInputType == Enum.UserInputType.MouseMovement or input.UserInputType == Enum.UserInputType.Touch then
			pointerX = input.Position.X
		end
	end)
	local keyDir = 0

	local stepConn
	stepConn = RunService.RenderStepped:Connect(function(dt)
		if not field.Parent then
			-- Window closed mid-game: forfeit.
			stepConn:Disconnect()
			inputConn:Disconnect()
			running = false
			return
		end
		timeLeft -= dt
		local width = field.AbsoluteSize.X
		local height = field.AbsoluteSize.Y

		-- Move the bowl (pointer, or arrow / A-D keys)
		keyDir = 0
		if UserInputService:IsKeyDown(Enum.KeyCode.Left) or UserInputService:IsKeyDown(Enum.KeyCode.A) then
			keyDir -= 1
		end
		if UserInputService:IsKeyDown(Enum.KeyCode.Right) or UserInputService:IsKeyDown(Enum.KeyCode.D) then
			keyDir += 1
		end
		local bowlX = bowl.Position.X.Offset + bowl.Position.X.Scale * width
		if keyDir ~= 0 then
			pointerX = nil
			bowlX += keyDir * 420 * dt
		elseif pointerX then
			bowlX = pointerX - field.AbsolutePosition.X
		end
		bowlX = math.clamp(bowlX, 40, width - 40)
		bowl.Position = UDim2.new(0, bowlX, 1, -6)

		-- Spawn berries, faster as time runs out
		spawnTimer -= dt
		if spawnTimer <= 0 and timeLeft > 0 then
			spawnTimer = 0.45 + 0.35 * (timeLeft / Config.ARCADE_DURATION)
			local kind = pickBerry()
			local berry = UI.new("Frame", {
				AnchorPoint = Vector2.new(0.5, 0.5), Size = UDim2.fromOffset(26, 26),
				Position = UDim2.fromOffset(math.random(20, math.max(21, width - 20)), -20),
				BackgroundColor3 = kind.color, Parent = field,
			}, { UI.corner(13) })
			table.insert(berries, {
				frame = berry, kind = kind, x = berry.Position.X.Offset, y = -20,
				speed = 160 + math.random() * 120 + (Config.ARCADE_DURATION - timeLeft) * 6,
			})
		end

		-- Move berries and check catches
		for i = #berries, 1, -1 do
			local b = berries[i]
			b.y += b.speed * dt
			b.frame.Position = UDim2.fromOffset(b.x, b.y)
			local bowlTop = height - 30
			if b.y >= bowlTop and b.y <= bowlTop + 24 and math.abs(b.x - bowlX) <= 50 then
				score = math.max(0, score + b.kind.points)
				b.frame:Destroy()
				table.remove(berries, i)
			elseif b.y > height + 20 then
				b.frame:Destroy()
				table.remove(berries, i)
			end
		end

		statusLabel.Text = ("Score: %d   Time: %d"):format(score, math.max(0, math.ceil(timeLeft)))

		if timeLeft <= 0 then
			stepConn:Disconnect()
			inputConn:Disconnect()
			running = false
			field:Destroy()
			Remotes.get("ArcadeSubmit"):FireServer(score)
			statusLabel.Text = ("Final score: %d! Press Play to go again."):format(score)
		end
	end)
end

function BerryCatch.open()
	local _, content = UI.window("Berry Catch", Vector2.new(560, 520))
	-- The arcade doesn't need scrolling; disable it so drags move the bowl.
	content.ScrollingEnabled = false
	content.AutomaticCanvasSize = Enum.AutomaticSize.None
	local layout = content:FindFirstChildOfClass("UIListLayout")
	if layout then
		layout:Destroy()
	end

	local status = UI.label({
		Text = "Catch purple & gold berries, dodge the rotten ones!", Font = Theme.BodyFont,
		Size = UDim2.new(1, -110, 0, 32), TextXAlignment = Enum.TextXAlignment.Left, Parent = content,
	})
	UI.button({
		Text = "Play", Color = Theme.Good, Size = UDim2.fromOffset(100, 32), AnchorPoint = Vector2.new(1, 0),
		Position = UDim2.new(1, 0, 0, 0), Parent = content,
		OnClick = function()
			if not running then
				local old = content:FindFirstChild("Field")
				if old then
					old:Destroy()
				end
				play(content, status)
			end
		end,
	})
end

return BerryCatch
