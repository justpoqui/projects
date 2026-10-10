-- Whack-a-Berry: berries pop out of holes; tap them before they hide.
-- Golden berries are worth 3; tapping a bug costs 3.

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)

local UI = require(script.Parent.UI)
local Arcade = require(script.Parent.Arcade)

local Whack = {
	instructions = "Tap the berries before they hide! Gold = 3 points. Don't tap the bugs!",
}

local KINDS = {
	{ weight = 72, points = 1, icon = "🫐", color = Color3.fromRGB(200, 170, 255) },
	{ weight = 10, points = 3, icon = "🌟", color = Color3.fromRGB(255, 220, 100) },
	{ weight = 18, points = -3, icon = "🐛", color = Color3.fromRGB(150, 200, 120) },
}

local function pick()
	local total = 0
	for _, k in KINDS do
		total += k.weight
	end
	local roll = math.random() * total
	for _, k in KINDS do
		roll -= k.weight
		if roll <= 0 then
			return k
		end
	end
	return KINDS[1]
end

function Whack.play(field, status, finish)
	local duration = Config.ARCADE_DURATION
	local grid = UI.new("Frame", {
		AnchorPoint = Vector2.new(0.5, 0.5), Position = UDim2.fromScale(0.5, 0.5), Size = UDim2.new(1, -30, 1, -30),
		BackgroundTransparency = 1, Parent = field,
	}, {
		UI.new("UIGridLayout", {
			CellSize = UDim2.new(1 / 3, -10, 1 / 3, -10), CellPadding = UDim2.fromOffset(10, 10),
			SortOrder = Enum.SortOrder.LayoutOrder,
		}),
	})

	local score = 0
	local holes = {}
	for i = 1, 9 do
		local hole = UI.new("TextButton", {
			Text = "", Font = UI.Theme.Font, TextScaled = true, AutoButtonColor = false,
			BackgroundColor3 = Color3.fromRGB(110, 80, 60), LayoutOrder = i, Parent = grid,
		}, { UI.corner(40), UI.padding(10) })
		local state = { button = hole, kind = nil, token = 0 }
		holes[i] = state
		hole.Activated:Connect(function()
			if state.kind and Arcade.isRunning(field) then
				local kind = state.kind
				state.kind = nil
				state.token += 1
				hole.Text = kind.points > 0 and ("+" .. kind.points) or tostring(kind.points)
				hole.BackgroundColor3 = kind.points > 0 and UI.Theme.Good or UI.Theme.Bad
				score = math.max(0, score + kind.points)
				task.delay(0.25, function()
					if not state.kind then
						hole.Text = ""
						hole.BackgroundColor3 = Color3.fromRGB(110, 80, 60)
					end
				end)
			end
		end)
	end

	local started = os.clock()
	task.spawn(function()
		while Arcade.isRunning(field) do
			local elapsed = os.clock() - started
			local timeLeft = duration - elapsed
			status.Text = ("Score: %d   Time: %d"):format(score, math.max(0, math.ceil(timeLeft)))
			if timeLeft <= 0 then
				break
			end
			-- Pop a berry into a random empty hole; things speed up over time
			local empty = {}
			for _, h in holes do
				if not h.kind then
					table.insert(empty, h)
				end
			end
			if #empty > 0 then
				local h = empty[math.random(#empty)]
				local kind = pick()
				h.kind = kind
				h.token += 1
				local token = h.token
				h.button.Text = kind.icon
				h.button.BackgroundColor3 = kind.color
				local showFor = 1.1 - 0.5 * (elapsed / duration)
				task.delay(showFor, function()
					if h.token == token then
						h.kind = nil
						h.button.Text = ""
						h.button.BackgroundColor3 = Color3.fromRGB(110, 80, 60)
					end
				end)
			end
			task.wait(0.75 - 0.35 * (elapsed / duration))
		end
		if field.Parent then
			finish(score)
		end
	end)
end

Arcade.register("whack", Whack)

return Whack
