-- Memory Match: flip two cards at a time to find all 8 pairs before time
-- runs out. 10 points per pair, plus a bonus for each second left.

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)

local UI = require(script.Parent.UI)
local Arcade = require(script.Parent.Arcade)

local Theme = UI.Theme
local Memory = {
	instructions = "Flip two cards at a time and find all the matching pairs!",
}

local SYMBOLS = { "🍓", "🫐", "🍌", "🍇", "🍎", "🍊", "🍒", "🥝" }
local CARD_BACK = Color3.fromRGB(150, 80, 200)
local CARD_FRONT = Color3.fromRGB(255, 250, 255)

function Memory.play(field, status, finish)
	local deck = {}
	for _, symbol in SYMBOLS do
		table.insert(deck, symbol)
		table.insert(deck, symbol)
	end
	for i = #deck, 2, -1 do
		local j = math.random(i)
		deck[i], deck[j] = deck[j], deck[i]
	end

	local grid = UI.new("Frame", {
		AnchorPoint = Vector2.new(0.5, 0.5), Position = UDim2.fromScale(0.5, 0.5), Size = UDim2.new(1, -20, 1, -20),
		BackgroundTransparency = 1, Parent = field,
	}, {
		UI.new("UIGridLayout", {
			CellSize = UDim2.new(0.25, -8, 0.25, -8), CellPadding = UDim2.fromOffset(8, 8),
			SortOrder = Enum.SortOrder.LayoutOrder,
		}),
	})

	local pairsFound = 0
	local first = nil
	local locked = false
	local ended = false
	local timeLeft = Config.MEMORY_DURATION

	local function endGame()
		if ended then
			return
		end
		ended = true
		local score = pairsFound * 10
		if pairsFound == #SYMBOLS then
			score += math.max(0, math.floor(timeLeft))
		end
		task.delay(0.5, function()
			finish(score)
		end)
	end

	for i, symbol in deck do
		local card = UI.new("TextButton", {
			Text = "", Font = Theme.Font, TextScaled = true, BackgroundColor3 = CARD_BACK,
			AutoButtonColor = true, LayoutOrder = i, Parent = grid,
		}, { UI.corner(10), UI.padding(8), UI.stroke(Color3.new(1, 1, 1), 2) })
		local state = { symbol = symbol, button = card, matched = false }

		card.Activated:Connect(function()
			if ended or locked or state.matched or state == first then
				return
			end
			card.Text = symbol
			card.BackgroundColor3 = CARD_FRONT
			if not first then
				first = state
				return
			end
			local other = first
			first = nil
			if other.symbol == symbol then
				other.matched, state.matched = true, true
				other.button.BackgroundColor3 = Theme.Good
				card.BackgroundColor3 = Theme.Good
				pairsFound += 1
				if pairsFound == #SYMBOLS then
					endGame()
				end
			else
				locked = true
				task.delay(0.6, function()
					if card.Parent then
						card.Text = ""
						card.BackgroundColor3 = CARD_BACK
						other.button.Text = ""
						other.button.BackgroundColor3 = CARD_BACK
					end
					locked = false
				end)
			end
		end)
	end

	task.spawn(function()
		while not ended and Arcade.isRunning(field) do
			status.Text = ("Pairs: %d / %d   Time: %d"):format(pairsFound, #SYMBOLS, math.max(0, math.ceil(timeLeft)))
			if timeLeft <= 0 then
				endGame()
				break
			end
			timeLeft -= task.wait(0.1)
		end
	end)
end

Arcade.register("memory", Memory)

return Memory
