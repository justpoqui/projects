-- Daily calendar, playtime rewards (every 10 minutes) and weekly Home
-- Rewards. Days follow US Eastern Time.

local Players = game:GetService("Players")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)
local Remotes = require(Shared.Remotes)

local PlayerData = require(script.Parent.PlayerData)
local Shops = require(script.Parent.Shops)
local Cooldowns = require(script.Parent.Cooldowns)

local Rewards = {}

local PLAYTIME_TICK = 10
local MAX_PLAYTIME = Config.Playtime[#Config.Playtime].minutes * 60

local function monthKey(date)
	return ("%04d-%02d"):format(date.year, date.month)
end

-- Starts a fresh calendar when the month changes.
local function calendar(data)
	local key = monthKey(Config.gameDate())
	if data.calendar.month ~= key then
		data.calendar = { month = key, claimed = {} }
	end
	return data.calendar
end

local function vipBucks(player, bucks)
	return player:GetAttribute("Pass_vip") and bucks * 2 or bucks
end

local function claimCalendar(player)
	local data = PlayerData.get(player)
	if not data or not Cooldowns.take(player, "claim", 1) then
		return
	end
	local cal = calendar(data)
	local date = Config.gameDate()
	local key = tostring(date.day)
	if cal.claimed[key] then
		PlayerData.notify(player, "You already claimed today's reward. See you tomorrow!", "info")
		return
	end
	cal.claimed[key] = true
	local reward = Config.calendarReward(date.day, date.wday, Config.daysInMonth(date.year, date.month))
	local bucks = vipBucks(player, reward.bucks)
	data.bucks += bucks
	PlayerData.notify(player, ("Daily reward: +%d %s!"):format(bucks, Config.CURRENCY), "success")
	if reward.event then
		PlayerData.notify(player, "It's Tuesday: event day! Check the Event Board in the Town Square.", "info")
	end
	if reward.box then
		Shops.grantTierBox(player, reward.box)
	end
	PlayerData.replicate(player)
end

local function claimPlaytime(player, index)
	local data = PlayerData.get(player)
	local slot = type(index) == "number" and Config.Playtime[index]
	if not data or not slot or not Cooldowns.take(player, "claim", 1) then
		return
	end
	local play = data.playtime
	local key = tostring(index)
	if play.claimed[key] or play.seconds < slot.minutes * 60 then
		return
	end
	play.claimed[key] = true
	if slot.bucks then
		data.bucks += slot.bucks
		PlayerData.notify(player, ("Playtime reward: +%d %s!"):format(slot.bucks, Config.CURRENCY), "success")
	elseif slot.box then
		if not Shops.grantTierBox(player, slot.box) then
			play.claimed[key] = nil
			PlayerData.notify(player, "Make room in your buddy collection first!", "error")
			return
		end
	end
	-- Everything claimed: start the next hour
	local all = true
	for i in Config.Playtime do
		if not play.claimed[tostring(i)] then
			all = false
		end
	end
	if all then
		data.playtime = { seconds = 0, claimed = {} }
		PlayerData.notify(player, "All playtime rewards claimed! A new set starts now.", "info")
	end
	PlayerData.replicate(player)
end

local function claimHome(player)
	local data = PlayerData.get(player)
	if not data or not Cooldowns.take(player, "claim", 1) then
		return
	end
	local home = data.homeRewards
	local today = Config.today()
	if home.lastDay == today then
		PlayerData.notify(player, "You already got today's Home Reward. Come back tomorrow!", "info")
		return
	end
	local step = Config.HomeRewards[home.step] and home.step or 1
	local tier = Config.HomeRewards[step]
	if not Shops.grantTierBox(player, "tier_" .. tier, "furniture") then
		return
	end
	home.lastDay = today
	home.step = step % #Config.HomeRewards + 1
	PlayerData.notify(player, ("Home Reward day %d: a %s furniture item!"):format(step, tier), "success")
	PlayerData.replicate(player)
end

function Rewards.init()
	Remotes.get("ClaimCalendar").OnServerEvent:Connect(claimCalendar)
	Remotes.get("ClaimPlaytime").OnServerEvent:Connect(claimPlaytime)
	Remotes.get("ClaimHomeReward").OnServerEvent:Connect(claimHome)

	-- Count playtime for everyone online
	task.spawn(function()
		while true do
			task.wait(PLAYTIME_TICK)
			for _, player in Players:GetPlayers() do
				local data = PlayerData.get(player)
				if data then
					local before = data.playtime.seconds
					data.playtime.seconds = math.min(MAX_PLAYTIME, before + PLAYTIME_TICK)
					for _, slot in Config.Playtime do
						local at = slot.minutes * 60
						if before < at and data.playtime.seconds >= at then
							PlayerData.notify(player, ("%d-minute playtime reward is ready! Open Rewards to claim it."):format(slot.minutes), "success")
						end
					end
					-- Calendar month rollover for players online at midnight
					calendar(data)
				end
			end
		end
	end)
end

return Rewards
