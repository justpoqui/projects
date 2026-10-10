-- Loads, caches, saves and replicates player profiles.

local DataStoreService = game:GetService("DataStoreService")
local Players = game:GetService("Players")
local RunService = game:GetService("RunService")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)
local Remotes = require(Shared.Remotes)

local PlayerData = {}

local STORE_NAME = "BerryvaleProfiles_v1"
local AUTOSAVE_INTERVAL = 120

local profiles = {} -- [Player] = profile table
local loadedSignals = {} -- [Player] = BindableEvent fired when profile is ready
local store

local ok = pcall(function()
	store = DataStoreService:GetDataStore(STORE_NAME)
end)
if not ok then
	warn("[PlayerData] DataStores unavailable; progress will not be saved. Enable Studio API access to test saving.")
end

local function template()
	return {
		bucks = Config.STARTING_BUCKS,
		hunger = Config.MAX_STAT,
		energy = Config.MAX_STAT,
		happiness = Config.MAX_STAT,
		skills = { smarts = 0, fitness = 0 },
		inventory = { cereal = 2 },
		furniture = {}, -- list of { uid, id, x, z, r }
		job = nil,
		jobLevel = 1,
		shifts = 0,
		buddy = nil,
		nextUid = 1,
	}
end

-- Fill in any keys missing from an older saved profile.
local function reconcile(data)
	local base = template()
	for key, value in base do
		if data[key] == nil then
			data[key] = value
		end
	end
	for key, value in base.skills do
		if data.skills[key] == nil then
			data.skills[key] = value
		end
	end
	return data
end

local function retry(fn)
	for attempt = 1, 3 do
		local success, result = pcall(fn)
		if success then
			return true, result
		end
		warn("[PlayerData] DataStore error (attempt " .. attempt .. "): " .. tostring(result))
		task.wait(attempt)
	end
	return false, nil
end

local function key(player)
	return "player_" .. player.UserId
end

local function setupLeaderstats(player, data)
	local leaderstats = Instance.new("Folder")
	leaderstats.Name = "leaderstats"
	local bucks = Instance.new("IntValue")
	bucks.Name = Config.CURRENCY
	bucks.Value = data.bucks
	bucks.Parent = leaderstats
	leaderstats.Parent = player
end

function PlayerData.load(player)
	local data
	if store then
		local success, saved = retry(function()
			return store:GetAsync(key(player))
		end)
		if success and type(saved) == "table" then
			data = reconcile(saved)
		elseif not success then
			-- Don't risk overwriting real data with a blank profile later.
			player:SetAttribute("NoSave", true)
		end
	end
	data = data or template()

	if not player.Parent then
		return nil
	end
	profiles[player] = data
	setupLeaderstats(player, data)
	PlayerData.replicate(player)

	local signal = loadedSignals[player]
	if signal then
		signal:Fire(data)
	end
	return data
end

function PlayerData.save(player)
	local data = profiles[player]
	if not data or not store or player:GetAttribute("NoSave") then
		return
	end
	retry(function()
		store:SetAsync(key(player), data)
	end)
end

function PlayerData.get(player)
	return profiles[player]
end

-- Yields until the player's profile is loaded (or they leave).
function PlayerData.waitFor(player)
	local data = profiles[player]
	if data then
		return data
	end
	local signal = loadedSignals[player]
	if not signal then
		signal = Instance.new("BindableEvent")
		loadedSignals[player] = signal
	end
	while player.Parent and not profiles[player] do
		signal.Event:Wait()
	end
	return profiles[player]
end

function PlayerData.replicate(player)
	local data = profiles[player]
	if not data then
		return
	end
	local leaderstats = player:FindFirstChild("leaderstats")
	local bucks = leaderstats and leaderstats:FindFirstChild(Config.CURRENCY)
	if bucks then
		bucks.Value = data.bucks
	end
	Remotes.get("DataUpdated"):FireClient(player, data)
end

-- Clamp a stat into [0, MAX_STAT] after changing it by delta.
function PlayerData.addStat(data, stat, delta)
	data[stat] = math.clamp((data[stat] or 0) + delta, 0, Config.MAX_STAT)
end

function PlayerData.addBucks(player, amount)
	local data = profiles[player]
	if not data then
		return false
	end
	if data.bucks + amount < 0 then
		return false
	end
	data.bucks += amount
	return true
end

function PlayerData.notify(player, message, kind)
	Remotes.get("Notify"):FireClient(player, message, kind or "info")
end

function PlayerData.forEach(fn)
	for player, data in profiles do
		fn(player, data)
	end
end

function PlayerData.init()
	Remotes.get("GetData").OnServerInvoke = function(player)
		return PlayerData.waitFor(player)
	end

	Players.PlayerRemoving:Connect(function(player)
		PlayerData.save(player)
		profiles[player] = nil
		local signal = loadedSignals[player]
		if signal then
			signal:Fire()
			signal:Destroy()
			loadedSignals[player] = nil
		end
	end)

	game:BindToClose(function()
		if RunService:IsStudio() and not store then
			return
		end
		local pending = 0
		for player in profiles do
			pending += 1
			task.spawn(function()
				PlayerData.save(player)
				pending -= 1
			end)
		end
		local deadline = os.clock() + 25
		while pending > 0 and os.clock() < deadline do
			task.wait(0.1)
		end
	end)

	task.spawn(function()
		while true do
			task.wait(AUTOSAVE_INTERVAL)
			for player in profiles do
				task.spawn(PlayerData.save, player)
			end
		end
	end)
end

return PlayerData
