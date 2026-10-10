-- Berry Bank teller window: savings (deposit / withdraw) and Berry Bonds.

local UserInputService = game:GetService("UserInputService")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)
local Remotes = require(Shared.Remotes)

local UI = require(script.Parent.UI)
local State = require(script.Parent.State)

local Theme = UI.Theme
local Settings = Config.Bank
local BankUI = {}

local refresh = nil
local amountText = "100" -- remembered between redraws
State.onChange(function()
	if refresh and not UserInputService:GetFocusedTextBox() then
		refresh()
	end
end)

local function amount()
	return tonumber(amountText) or 0
end

local function timeLeft(seconds)
	seconds = math.max(0, seconds)
	if seconds >= 3600 then
		return ("%dh %02dm"):format(seconds // 3600, (seconds % 3600) // 60)
	end
	return ("%dm %02ds"):format(seconds // 60, seconds % 60)
end

local function render(content, data)
	local bank = data.bank
	local order = 0
	local function nextOrder()
		order += 1
		return order
	end

	UI.row(content, nextOrder(), ("Wallet: %d  |  Savings: %d"):format(data.bucks, math.floor(bank.savings)),
		("Savings earn %d%% every hour (even offline, up to %dh)"):format(Settings.savingsRate * 100, Settings.offlineHoursCap))

	-- Amount entry with quick-fill buttons
	local entry = UI.new("Frame", {
		Size = UDim2.new(1, 0, 0, 40), BackgroundTransparency = 1, LayoutOrder = nextOrder(), Parent = content,
	}, {
		UI.new("UIListLayout", {
			FillDirection = Enum.FillDirection.Horizontal, Padding = UDim.new(0, 6), SortOrder = Enum.SortOrder.LayoutOrder,
		}),
	})
	local box = UI.new("TextBox", {
		Text = amountText, PlaceholderText = "Amount", ClearTextOnFocus = false, Font = Theme.Font, TextSize = 20,
		TextColor3 = Theme.Text, BackgroundColor3 = Theme.PanelDark, Size = UDim2.fromOffset(140, 40), LayoutOrder = 1,
		Parent = entry,
	}, { UI.corner(10), UI.padding(6) })
	box:GetPropertyChangedSignal("Text"):Connect(function()
		amountText = box.Text:gsub("%D", "")
	end)
	local function quick(label, value, i)
		UI.button({
			Text = label, Color = Theme.AccentLight, Size = UDim2.fromOffset(70, 40), LayoutOrder = i, Parent = entry,
			OnClick = function()
				amountText = tostring(math.floor(value()))
				box.Text = amountText
			end,
		})
	end
	quick("100", function()
		return 100
	end, 2)
	quick("1000", function()
		return 1000
	end, 3)
	quick("Wallet", function()
		return data.bucks
	end, 4)
	quick("Savings", function()
		return bank.savings
	end, 5)

	local actions = UI.new("Frame", {
		Size = UDim2.new(1, 0, 0, 44), BackgroundTransparency = 1, LayoutOrder = nextOrder(), Parent = content,
	}, {
		UI.new("UIListLayout", {
			FillDirection = Enum.FillDirection.Horizontal, Padding = UDim.new(0, 8), SortOrder = Enum.SortOrder.LayoutOrder,
		}),
	})
	UI.button({
		Text = "Deposit", Color = Theme.Good, Size = UDim2.new(0.5, -4, 1, 0), LayoutOrder = 1, Parent = actions,
		OnClick = function()
			Remotes.get("BankDeposit"):FireServer(amount())
		end,
	})
	UI.button({
		Text = "Withdraw", Color = Theme.Accent, Size = UDim2.new(0.5, -4, 1, 0), LayoutOrder = 2, Parent = actions,
		OnClick = function()
			Remotes.get("BankWithdraw"):FireServer(amount())
		end,
	})

	UI.heading(content, nextOrder(), "Berry Bonds - lock it up, earn more")
	for _, bond in Settings.Bonds do
		UI.row(content, nextOrder(), bond.name,
			("+%d%% after %dh  |  %d-%d"):format(bond.rate * 100, bond.hours, Settings.minBond, Settings.maxBond),
			"Invest", Theme.Gold, function()
				Remotes.get("BankBuyBond"):FireServer(bond.id, amount())
			end)
	end

	UI.heading(content, nextOrder(), ("Your Bonds (%d / %d)"):format(#bank.bonds, Settings.maxBonds))
	local now = os.time()
	for _, held in bank.bonds do
		local ready = now >= held.matures
		UI.row(content, nextOrder(), ("%d -> %d"):format(held.amount, held.payout),
			ready and "Matured!" or ("Matures in " .. timeLeft(held.matures - now)),
			ready and "Collect" or "Waiting", ready and Theme.Good or Theme.Muted, function()
				if ready then
					Remotes.get("BankCollectBond"):FireServer(held.uid)
				end
			end)
	end
	if #bank.bonds == 0 then
		UI.label({
			Text = "No bonds yet. Type an amount above and pick a bond!", Font = Theme.BodyFont,
			TextColor3 = Theme.Muted, Size = UDim2.new(1, 0, 0, 20), LayoutOrder = nextOrder(), Parent = content,
		})
	end
end

function BankUI.open()
	local _, content = UI.window("Berry Bank", Vector2.new(560, 540), function()
		refresh = nil
	end)
	refresh = function()
		for _, child in content:GetChildren() do
			if child:IsA("GuiObject") then
				child:Destroy()
			end
		end
		if State.data and State.data.bank then
			render(content, State.data)
		end
	end
	refresh()
	-- Redraw now and then so bond timers count down
	task.spawn(function()
		while refresh and content.Parent do
			task.wait(15)
			if refresh and not UserInputService:GetFocusedTextBox() then
				refresh()
			end
		end
	end)
end

return BankUI
