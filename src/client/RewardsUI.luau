-- Rewards window with three tabs: the monthly daily calendar, playtime
-- rewards (every 10 minutes) and weekly Home Rewards.

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)
local Remotes = require(Shared.Remotes)

local UI = require(script.Parent.UI)
local State = require(script.Parent.State)

local Theme = UI.Theme
local RewardsUI = {}

local MONTHS = {
	"January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December",
}
local WEEKDAYS = { "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" }

local refresh = nil
local tab = "calendar"

State.onChange(function()
	if refresh then
		refresh()
	end
end)

local function clock(seconds)
	seconds = math.max(0, math.ceil(seconds))
	return ("%d:%02d"):format(seconds // 60, seconds % 60)
end

-- What can be claimed right now (used for the HUD badge too).
function RewardsUI.claimable(data)
	if not data or not data.calendar then
		return false
	end
	local date = Config.gameDate()
	local monthKey = ("%04d-%02d"):format(date.year, date.month)
	if data.calendar.month ~= monthKey or not data.calendar.claimed[tostring(date.day)] then
		return true
	end
	for i, slot in Config.Playtime do
		if data.playtime.seconds >= slot.minutes * 60 and not data.playtime.claimed[tostring(i)] then
			return true
		end
	end
	return data.homeRewards.lastDay ~= Config.today()
end

local function rewardText(reward)
	local text = "+" .. reward.bucks
	if reward.event then
		text = "📢 " .. text
	end
	if reward.box then
		text ..= "\n🎁 Rare"
	end
	return text
end

local function renderCalendar(content, data)
	local date = Config.gameDate()
	local days = Config.daysInMonth(date.year, date.month)
	local monthKey = ("%04d-%02d"):format(date.year, date.month)
	local claimed = data.calendar.month == monthKey and data.calendar.claimed or {}
	-- Weekday (1 = Sunday) of the 1st of the month
	local firstWday = (date.wday - (date.day - 1) - 1) % 7 + 1

	UI.label({
		Text = MONTHS[date.month] .. " " .. date.year, Size = UDim2.new(1, 0, 0, 30), LayoutOrder = 1, Parent = content,
	})
	local grid = UI.new("Frame", {
		Size = UDim2.new(1, 0, 0, 0), AutomaticSize = Enum.AutomaticSize.Y, BackgroundTransparency = 1,
		LayoutOrder = 2, Parent = content,
	}, {
		UI.new("UIGridLayout", {
			CellSize = UDim2.new(1 / 7, -4, 0, 60), CellPadding = UDim2.fromOffset(4, 4),
			SortOrder = Enum.SortOrder.LayoutOrder,
		}),
	})
	local order = 0
	for _, name in WEEKDAYS do
		order += 1
		UI.label({ Text = name, TextColor3 = Theme.Muted, LayoutOrder = order, Parent = grid })
	end
	for _ = 1, firstWday - 1 do
		order += 1
		UI.new("Frame", { BackgroundTransparency = 1, LayoutOrder = order, Parent = grid })
	end
	for day = 1, days do
		order += 1
		local wday = (firstWday + day - 2) % 7 + 1
		local reward = Config.calendarReward(day, wday, days)
		local isClaimed = claimed[tostring(day)] == true
		local isToday = day == date.day
		local missed = day < date.day and not isClaimed
		local color = isClaimed and Color3.fromRGB(190, 240, 200) or missed and Color3.fromRGB(215, 210, 220)
			or isToday and Color3.fromRGB(255, 235, 150) or Theme.PanelDark
		local cell = UI.new("TextButton", {
			Text = "", AutoButtonColor = isToday and not isClaimed, BackgroundColor3 = color, LayoutOrder = order, Parent = grid,
		}, { UI.corner(8) })
		if isToday then
			UI.stroke(isClaimed and Theme.Good or Theme.Gold, 3).Parent = cell
		end
		UI.label({
			Text = tostring(day), Size = UDim2.new(1, -6, 0, 16), Position = UDim2.fromOffset(4, 2),
			TextXAlignment = Enum.TextXAlignment.Left, TextColor3 = missed and Theme.Muted or Theme.Text, Parent = cell,
		})
		UI.label({
			Text = isClaimed and "✓" or missed and "Missed" or isToday and "CLAIM!" or rewardText(reward),
			Font = Theme.Font, Size = UDim2.new(1, -4, 0, 36), Position = UDim2.fromOffset(2, 20),
			TextColor3 = isClaimed and Theme.Good or missed and Theme.Muted or isToday and Theme.Bad or Theme.Accent,
			Parent = cell,
		})
		if isToday and not isClaimed then
			cell.Activated:Connect(function()
				Remotes.get("ClaimCalendar"):FireServer()
			end)
		end
	end

	local missedCount = 0
	for day = 1, date.day - 1 do
		if not claimed[tostring(day)] then
			missedCount += 1
		end
	end
	UI.label({
		Text = ("Every day: +%d  |  📢 Tuesday: event day, +%d  |  🎁 Thursday: Rare (tier 3) Berry Box  |  Last day: +%d"):format(
			Config.Calendar.daily, Config.Calendar.tuesday, Config.Calendar.lastDay),
		Font = Theme.BodyFont, TextScaled = false, TextSize = 14, TextWrapped = true, TextColor3 = Theme.Muted,
		Size = UDim2.new(1, 0, 0, 36), LayoutOrder = 3, Parent = content,
	})
	UI.label({
		Text = missedCount > 0 and ("You missed %d day%s this month. Days reset at midnight Eastern Time."):format(missedCount, missedCount == 1 and "" or "s")
			or "No missed days this month. Days reset at midnight Eastern Time.",
		Font = Theme.BodyFont, TextScaled = false, TextSize = 14, TextColor3 = missedCount > 0 and Theme.Bad or Theme.Good,
		Size = UDim2.new(1, 0, 0, 18), LayoutOrder = 4, Parent = content,
	})
end

local function renderPlaytime(content, data)
	local play = data.playtime
	local total = Config.Playtime[#Config.Playtime].minutes * 60
	UI.label({
		Text = ("Playtime this round: %s / %d:00"):format(clock(play.seconds), total // 60),
		Size = UDim2.new(1, 0, 0, 26), LayoutOrder = 1, Parent = content,
	})
	local track = UI.new("Frame", {
		Size = UDim2.new(1, 0, 0, 16), BackgroundColor3 = Theme.PanelDark, LayoutOrder = 2, Parent = content,
	}, { UI.corner(8) })
	UI.new("Frame", {
		Size = UDim2.fromScale(math.clamp(play.seconds / total, 0.001, 1), 1), BackgroundColor3 = Theme.Pink, Parent = track,
	}, { UI.corner(8) })
	for i, slot in Config.Playtime do
		local at = slot.minutes * 60
		local claimed = play.claimed[tostring(i)] == true
		local ready = play.seconds >= at and not claimed
		local title = slot.bucks and ("+%d %s"):format(slot.bucks, Config.CURRENCY) or "🎁 Epic (tier 4) Berry Box"
		UI.row(content, 2 + i, ("%d minutes"):format(slot.minutes), title,
			claimed and "Claimed" or ready and "Claim" or (clock(at - play.seconds) .. " left"),
			claimed and Theme.Muted or ready and Theme.Good or Theme.AccentLight, function()
				if ready then
					Remotes.get("ClaimPlaytime"):FireServer(i)
				end
			end)
	end
	UI.label({
		Text = "Only time spent playing counts. After the 60-minute box, a new round starts.",
		Font = Theme.BodyFont, TextScaled = false, TextSize = 14, TextColor3 = Theme.Muted,
		Size = UDim2.new(1, 0, 0, 18), LayoutOrder = 20, Parent = content,
	})
end

local function renderHome(content, data)
	local home = data.homeRewards
	local today = Config.today()
	local claimedToday = home.lastDay == today
	UI.label({
		Text = "Home Rewards: a free furniture item every day, rarer as the week goes on!",
		Font = Theme.BodyFont, TextScaled = false, TextSize = 15, TextWrapped = true,
		Size = UDim2.new(1, 0, 0, 36), LayoutOrder = 1, Parent = content,
	})
	for i, tier in Config.HomeRewards do
		local done = i < home.step
		local current = i == home.step
		local ready = current and not claimedToday
		local row = UI.row(content, 1 + i, ("Day %d: %s furniture"):format(i, tier),
			done and "Collected" or current and (claimedToday and "Tomorrow" or "Ready today!") or "Coming up",
			done and "Got it" or ready and "Claim" or "Locked",
			done and Theme.Muted or ready and Theme.Good or Theme.AccentLight, function()
				if ready then
					Remotes.get("ClaimHomeReward"):FireServer()
				end
			end)
		UI.new("Frame", {
			Size = UDim2.new(0, 6, 1, -16), Position = UDim2.fromOffset(3, 8),
			BackgroundColor3 = Config.Tiers[tier].color, Parent = row,
		}, { UI.corner(3) })
	end
end

function RewardsUI.open()
	local _, content = UI.window("Rewards", Vector2.new(580, 560), function()
		refresh = nil
	end)
	refresh = function()
		for _, child in content:GetChildren() do
			if child:IsA("GuiObject") then
				child:Destroy()
			end
		end
		local data = State.data
		if not data or not data.calendar then
			return
		end
		local tabs = UI.new("Frame", {
			Size = UDim2.new(1, 0, 0, 38), BackgroundTransparency = 1, LayoutOrder = 0, Parent = content,
		}, {
			UI.new("UIListLayout", {
				FillDirection = Enum.FillDirection.Horizontal, Padding = UDim.new(0, 6), SortOrder = Enum.SortOrder.LayoutOrder,
			}),
		})
		for i, info in { { "calendar", "📅 Calendar" }, { "playtime", "⏰ Playtime" }, { "home", "🏠 Home" } } do
			UI.button({
				Text = info[2], Color = tab == info[1] and Theme.Accent or Theme.AccentLight,
				Size = UDim2.new(1 / 3, -4, 1, 0), LayoutOrder = i, Parent = tabs, OnClick = function()
					tab = info[1]
					refresh()
				end,
			})
		end
		if tab == "calendar" then
			renderCalendar(content, data)
		elseif tab == "playtime" then
			renderPlaytime(content, data)
		else
			renderHome(content, data)
		end
	end
	refresh()
end

return RewardsUI
