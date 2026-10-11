-- "Cooldowns" dropdown under the Berry Phone button: live timers for work,
-- training, arcade, furniture activities, obby prizes, bank bonds and the
-- next daily reward.

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)
local Remotes = require(Shared.Remotes)

local UI = require(script.Parent.UI)
local State = require(script.Parent.State)

local Theme = UI.Theme
local CooldownsUI = {}

local timers = {} -- [key] = os.clock() when ready (from the server)
local open = false

local function format(seconds)
	seconds = math.max(0, math.ceil(seconds))
	if seconds >= 3600 then
		return ("%dh %02dm"):format(seconds // 3600, (seconds % 3600) // 60)
	end
	return ("%d:%02d"):format(seconds // 60, seconds % 60)
end

-- Every timer that's still running, plus matured bonds.
local function entries()
	local list = {}
	local now = os.clock()
	for key, readyAt in timers do
		if readyAt > now then
			table.insert(list, { name = Config.CooldownNames[key] or key, left = readyAt - now })
		end
	end
	local data = State.data
	if data then
		local unix = os.time()
		for i, level in Config.ObbyLevels do
			local last = data.obbyTimes and data.obbyTimes["L" .. i]
			if last and last + level.cooldown > unix then
				table.insert(list, { name = level.name .. " prize", left = last + level.cooldown - unix })
			end
		end
		local untilMidnight = (Config.today() + 1) * 86400 - unix
		local date = Config.utcDate()
		local monthKey = ("%04d-%02d"):format(date.year, date.month)
		if data.calendar and data.calendar.month == monthKey and data.calendar.claimed[tostring(date.day)] then
			table.insert(list, { name = "Next calendar reward", left = untilMidnight })
		end
		if data.homeRewards and data.homeRewards.lastDay == Config.today() then
			table.insert(list, { name = "Next Home Reward", left = untilMidnight })
		end
		if data.playtime then
			for i, slot in Config.Playtime do
				local at = slot.minutes * 60
				if not data.playtime.claimed[tostring(i)] and data.playtime.seconds < at then
					table.insert(list, { name = "Next playtime reward", left = at - data.playtime.seconds })
					break
				end
			end
		end
		local eventStart = game:GetService("ReplicatedStorage"):GetAttribute("EventStart")
		if eventStart and eventStart > unix then
			table.insert(list, { name = "Tuesday event", left = eventStart - unix })
		end
		for _, bond in (data.bank and data.bank.bonds) or {} do
			local name = "Bond (" .. bond.amount .. ")"
			if bond.matures > unix then
				table.insert(list, { name = name, left = bond.matures - unix })
			else
				table.insert(list, { name = name, ready = "Collect at bank!" })
			end
		end
	end
	table.sort(list, function(a, b)
		return (a.left or 0) < (b.left or 0)
	end)
	return list
end

function CooldownsUI.init()
	Remotes.get("CooldownStarted").OnClientEvent:Connect(function(key, seconds)
		timers[key] = os.clock() + seconds
	end)

	local toggle = UI.button({
		Name = "CooldownsToggle", Text = "Cooldowns ▼", Color = Color3.fromRGB(60, 50, 90),
		Position = UDim2.fromOffset(12, 328), Size = UDim2.fromOffset(150, 30), Parent = UI.Screen,
	})
	local list = UI.new("Frame", {
		Name = "CooldownsList", Position = UDim2.fromOffset(12, 362), Size = UDim2.fromOffset(200, 0),
		AutomaticSize = Enum.AutomaticSize.Y, BackgroundColor3 = Theme.Panel, BackgroundTransparency = 0.05,
		Visible = false, Parent = UI.Screen,
	}, {
		UI.corner(12), UI.stroke(Theme.AccentLight, 2), UI.padding(8),
		UI.new("UIListLayout", { Padding = UDim.new(0, 4), SortOrder = Enum.SortOrder.LayoutOrder }),
	})
	toggle.Activated:Connect(function()
		open = not open
		list.Visible = open
	end)

	task.spawn(function()
		while true do
			local items = entries()
			toggle.Text = ("Cooldowns (%d) %s"):format(#items, open and "▲" or "▼")
			if open then
				for _, child in list:GetChildren() do
					if child:IsA("TextLabel") then
						child:Destroy()
					end
				end
				if #items == 0 then
					UI.label({
						Text = "Everything is ready!", Font = Theme.BodyFont, TextScaled = false, TextSize = 14,
						Size = UDim2.new(1, 0, 0, 18), TextXAlignment = Enum.TextXAlignment.Left, Parent = list,
					})
				end
				for i, item in items do
					UI.label({
						Text = item.name .. ":  " .. (item.ready or format(item.left)), Font = Theme.BodyFont,
						TextScaled = false, TextSize = 14, TextColor3 = item.ready and Theme.Good or Theme.Text,
						Size = UDim2.new(1, 0, 0, 18), TextXAlignment = Enum.TextXAlignment.Left, LayoutOrder = i, Parent = list,
					})
				end
			end
			task.wait(0.5)
		end
	end)
end

return CooldownsUI
