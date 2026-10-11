-- Tuesday events. Every hour on event days, one random event is posted
-- (Event Board, toast, banner), then runs at a random minute. The current
-- event is shared with clients through ReplicatedStorage attributes:
-- EventId, EventStart, EventEnd (unix seconds).

local Debris = game:GetService("Debris")
local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Workspace = game:GetService("Workspace")

local Shared = ReplicatedStorage:WaitForChild("Shared")
local Config = require(Shared.Config)

local PlayerData = require(script.Parent.PlayerData)
local Shops = require(script.Parent.Shops)
local World = require(script.Parent.WorldBuilder)

local Events = {}

local byId = {}
for _, event in Config.Events do
	byId[event.id] = event
end

local current = nil -- { event, start, finish, started }
local lastHourScheduled = nil
local rainTotals = {} -- [Player] = Berrybucks grabbed this Berry Rain

function Events.isActive(id)
	return current ~= nil and current.started and current.event.id == id
end

local function notifyAll(message, kind)
	for _, player in Players:GetPlayers() do
		PlayerData.notify(player, message, kind)
	end
end

local function clockText(unix)
	return os.date("!%H:%M", unix) .. " UTC"
end

local function isEventDay()
	return Config.EVENTS_EVERY_DAY or Config.utcDate().wday == Config.EVENT_WEEKDAY
end

local function setBoard()
	if current then
		local e = current.event
		World.setEventBoard(e.icon .. " " .. e.name,
			(current.started and "HAPPENING NOW!\n\n" or ("Starts at " .. clockText(current.start) .. "\n\n"))
				.. e.desc .. "\n\nA new event is posted every hour on Tuesdays.")
	elseif isEventDay() then
		World.setEventBoard("Event Day!", "The next event will be posted soon.\n\nA new event is posted every hour today.")
	else
		World.setEventBoard("Events", "Events happen every Tuesday!\n\nEach hour a surprise event is posted here, then starts at a random time.")
	end
end

local function schedule(now)
	local event = Config.Events[math.random(#Config.Events)]
	local hourStart = now - now % 3600
	-- A random minute this hour, but always with time to see the posting
	local start = math.max(hourStart + math.random(5, 45) * 60, now + Config.EVENT_POST_LEAD)
	current = { event = event, start = start, finish = start + event.duration, started = false }
	ReplicatedStorage:SetAttribute("EventId", event.id)
	ReplicatedStorage:SetAttribute("EventStart", start)
	ReplicatedStorage:SetAttribute("EventEnd", start + event.duration)
	notifyAll(("📢 Event posted: %s %s starts in %d minutes! (%s)"):format(
		event.icon, event.name, math.ceil((start - now) / 60), event.desc), "info")
	setBoard()
end

local function berryRain()
	local folder = Instance.new("Folder")
	folder.Name = "BerryRain"
	folder.Parent = Workspace
	while Events.isActive("berryrain") do
		local berry = Instance.new("Part")
		berry.Name = "RainBerry"
		berry.Shape = Enum.PartType.Ball
		berry.Size = Vector3.new(1.6, 1.6, 1.6)
		berry.Color = math.random() < 0.15 and Color3.fromRGB(255, 200, 60) or Color3.fromRGB(130, 60, 210)
		berry.Material = Enum.Material.Neon
		berry.Position = Vector3.new(math.random(-36, 36), 45, math.random(-84, -16))
		local taken = false
		berry.Touched:Connect(function(hit)
			local character = hit:FindFirstAncestorOfClass("Model")
			local player = character and Players:GetPlayerFromCharacter(character)
			local data = player and PlayerData.get(player)
			if taken or not data then
				return
			end
			taken = true
			berry:Destroy()
			local total = rainTotals[player] or 0
			if total < Config.BERRY_RAIN_MAX then
				local value = math.min(Config.BERRY_RAIN_VALUE, Config.BERRY_RAIN_MAX - total)
				rainTotals[player] = total + value
				data.bucks += value
				PlayerData.replicate(player)
			end
		end)
		berry.Parent = folder
		Debris:AddItem(berry, 12)
		task.wait(0.35)
	end
	folder:Destroy()
end

local function startEvent()
	current.started = true
	local event = current.event
	if event.id == "luckyhour" then
		Shops.luckyEvent = true
	elseif event.id == "berryrain" then
		rainTotals = {}
		task.spawn(berryRain)
	end
	notifyAll(("%s %s has started! %s"):format(event.icon, event.name, event.desc), "success")
	setBoard()
end

local function endEvent()
	local event = current.event
	current = nil
	Shops.luckyEvent = false
	ReplicatedStorage:SetAttribute("EventId", nil)
	ReplicatedStorage:SetAttribute("EventStart", nil)
	ReplicatedStorage:SetAttribute("EventEnd", nil)
	notifyAll(event.name .. " is over. Watch for the next posting!", "info")
	setBoard()
end

function Events.init()
	setBoard()
	task.spawn(function()
		while true do
			local now = os.time()
			if current then
				if not current.started and now >= current.start then
					startEvent()
				elseif current.started and now >= current.finish then
					endEvent()
				end
			elseif isEventDay() then
				local hour = now // 3600
				if lastHourScheduled ~= hour then
					lastHourScheduled = hour
					schedule(now)
				end
			end
			task.wait(2)
		end
	end)
	-- Keep the board's day message right when the day changes
	task.spawn(function()
		while true do
			task.wait(60)
			if not current then
				setBoard()
			end
		end
	end)
	Players.PlayerRemoving:Connect(function(player)
		rainTotals[player] = nil
	end)
end

return Events
