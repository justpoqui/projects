-- Daily login reward and daily quests.

local Players = game:GetService("Players")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)
local Remotes = require(Shared.Remotes)

local PlayerData = require(script.Parent.PlayerData)

local Quests = {}

local questById = {}
for _, quest in Config.Quests do
	questById[quest.id] = quest
end

local function rollQuests(data, today)
	local pool = table.clone(Config.Quests)
	local list = {}
	for _ = 1, math.min(Config.QUESTS_PER_DAY, #pool) do
		local quest = table.remove(pool, math.random(#pool))
		table.insert(list, { id = quest.id, progress = 0, claimed = false })
	end
	data.quests = { day = today, list = list }
end

-- Hands out the daily reward and fresh quests when a new day starts.
-- Returns true if anything changed.
function Quests.refresh(player, data)
	local today = Config.today()
	local changed = false

	if data.daily.day ~= today then
		local streak = data.daily.day == today - 1 and data.daily.streak + 1 or 1
		data.daily = { day = today, streak = streak }
		local reward = Config.DAILY_BASE + Config.DAILY_STEP * (math.min(streak, 7) - 1)
		data.bucks += reward
		PlayerData.notify(player, ("Daily reward: +%d %s! (Day %d streak)"):format(reward, Config.CURRENCY, streak), "success")
		changed = true
	end

	if data.quests.day ~= today then
		rollQuests(data, today)
		PlayerData.notify(player, "New daily quests are ready! Check the Quests menu.", "info")
		changed = true
	end
	return changed
end

-- Called by other systems when the player does something quests count.
function Quests.progress(player, event, amount)
	local data = PlayerData.get(player)
	if not data then
		return
	end
	Quests.refresh(player, data)
	for _, entry in data.quests.list do
		local quest = questById[entry.id]
		if quest and quest.event == event and entry.progress < quest.goal then
			entry.progress = math.min(quest.goal, entry.progress + (amount or 1))
			if entry.progress >= quest.goal then
				PlayerData.notify(player, "Quest complete: " .. quest.text .. "! Claim it in the Quests menu.", "success")
			end
		end
	end
	-- Callers replicate after their own changes.
end

local function onClaim(player, index)
	local data = PlayerData.get(player)
	if not data or type(index) ~= "number" then
		return
	end
	local entry = data.quests.list[index]
	local quest = entry and questById[entry.id]
	if not quest or entry.claimed or entry.progress < quest.goal then
		return
	end
	entry.claimed = true
	data.bucks += quest.reward
	PlayerData.notify(player, ("+%d %s for \"%s\""):format(quest.reward, Config.CURRENCY, quest.text), "success")
	PlayerData.replicate(player)
end

function Quests.init()
	Remotes.get("ClaimQuest").OnServerEvent:Connect(onClaim)
	-- Roll over at midnight (UTC) for players who stay online.
	task.spawn(function()
		while true do
			task.wait(60)
			for _, player in Players:GetPlayers() do
				local data = PlayerData.get(player)
				if data and Quests.refresh(player, data) then
					PlayerData.replicate(player)
				end
			end
		end
	end)
end

return Quests
