-- "Best Houses" board in the plaza: most-liked houses across all servers
-- (via an OrderedDataStore), falling back to this server's players when
-- DataStores are unavailable (e.g. an unpublished place in Studio).

local DataStoreService = game:GetService("DataStoreService")
local Players = game:GetService("Players")

local PlayerData = require(script.Parent.PlayerData)
local World = require(script.Parent.WorldBuilder)

local Leaderboard = {}

local REFRESH = 120
local store
pcall(function()
	store = DataStoreService:GetOrderedDataStore("BerryvaleHouseLikes_v1")
end)

local names = {} -- [userId] = display name cache

local function nameFor(userId)
	if names[userId] then
		return names[userId]
	end
	local player = Players:GetPlayerByUserId(userId)
	if player then
		names[userId] = player.DisplayName
		return player.DisplayName
	end
	local ok, name = pcall(function()
		return Players:GetNameFromUserIdAsync(userId)
	end)
	if ok then
		names[userId] = name
		return name
	end
	return "Someone"
end

local function publish(player)
	local data = PlayerData.get(player)
	if store and data and data.likes > 0 then
		pcall(function()
			store:SetAsync("u_" .. player.UserId, data.likes)
		end)
	end
end

local function localEntries()
	local entries = {}
	for _, player in Players:GetPlayers() do
		local data = PlayerData.get(player)
		if data and data.likes > 0 then
			table.insert(entries, { name = player.DisplayName, likes = data.likes })
		end
	end
	table.sort(entries, function(a, b)
		return a.likes > b.likes
	end)
	return entries
end

local function globalEntries()
	if not store then
		return nil
	end
	local ok, page = pcall(function()
		return store:GetSortedAsync(false, 10):GetCurrentPage()
	end)
	if not ok then
		return nil
	end
	local entries = {}
	for _, row in page do
		local userId = tonumber(string.sub(row.key, 3))
		if userId then
			table.insert(entries, { name = nameFor(userId), likes = row.value })
		end
	end
	return entries
end

function Leaderboard.refresh()
	World.setLeaderboard(globalEntries() or localEntries())
end

function Leaderboard.init()
	Players.PlayerRemoving:Connect(publish)
	task.spawn(function()
		while true do
			for _, player in Players:GetPlayers() do
				publish(player)
			end
			Leaderboard.refresh()
			task.wait(REFRESH)
		end
	end)
end

return Leaderboard
