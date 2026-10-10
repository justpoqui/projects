-- Server side of the Berry Catch minigame. The client plays the game; the
-- server times the round and sanity-checks the reported score.

local Players = game:GetService("Players")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)
local Remotes = require(Shared.Remotes)

local PlayerData = require(script.Parent.PlayerData)
local Cooldowns = require(script.Parent.Cooldowns)

local Arcade = {}

local rounds = {} -- [Player] = os.clock() when the round started

function Arcade.open(player)
	Remotes.get("OpenArcade"):FireClient(player)
end

local function onStart(player)
	if not PlayerData.get(player) then
		return false, "Loading..."
	end
	local ready, remaining = Cooldowns.take(player, "arcade", Config.ARCADE_COOLDOWN)
	if not ready then
		return false, "The machine is cooling down (" .. remaining .. "s)"
	end
	rounds[player] = os.clock()
	return true
end

local function onSubmit(player, score)
	local started = rounds[player]
	local data = PlayerData.get(player)
	rounds[player] = nil
	if not started or not data or type(score) ~= "number" or score ~= score then
		return
	end
	local elapsed = os.clock() - started
	if elapsed < Config.ARCADE_DURATION - 2 or elapsed > Config.ARCADE_DURATION + 20 then
		return
	end
	score = math.floor(score)
	if score < 0 or score > Config.ARCADE_MAX_SCORE then
		return
	end
	local payout = math.min(math.floor(score * Config.ARCADE_BUCKS_PER_POINT), Config.ARCADE_MAX_PAYOUT)
	PlayerData.addBucks(player, payout)
	PlayerData.addStat(data, "happiness", 10)
	PlayerData.notify(player, ("Berry Catch: %d points! +%d %s"):format(score, payout, Config.CURRENCY), "success")
	PlayerData.replicate(player)
end

function Arcade.init()
	Remotes.get("ArcadeStart").OnServerInvoke = onStart
	Remotes.get("ArcadeSubmit").OnServerEvent:Connect(onSubmit)
	Players.PlayerRemoving:Connect(function(player)
		rounds[player] = nil
	end)
end

return Arcade
