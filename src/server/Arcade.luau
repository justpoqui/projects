-- Server side of the arcade minigames. Clients play the games; the server
-- times each round and sanity-checks the reported score before paying out.

local Players = game:GetService("Players")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)
local Remotes = require(Shared.Remotes)

local PlayerData = require(script.Parent.PlayerData)
local Cooldowns = require(script.Parent.Cooldowns)
local Pets = require(script.Parent.Pets)
local Quests = require(script.Parent.Quests)

local Arcade = {}

local rounds = {} -- [Player] = { game = gameId, started = os.clock() }

-- gameId nil opens the game picker.
function Arcade.open(player, gameId)
	Remotes.get("OpenArcade"):FireClient(player, gameId)
end

local function onStart(player, gameId)
	if not PlayerData.get(player) then
		return false, "Loading..."
	end
	if type(gameId) ~= "string" or not Config.Minigames[gameId] then
		return false, "Unknown game."
	end
	local ready, remaining = Cooldowns.take(player, "arcade", Config.ARCADE_COOLDOWN)
	if not ready then
		return false, "The arcade is cooling down (" .. remaining .. "s)"
	end
	rounds[player] = { game = gameId, started = os.clock() }
	return true
end

local function onSubmit(player, score)
	local round = rounds[player]
	local data = PlayerData.get(player)
	rounds[player] = nil
	if not round or not data or type(score) ~= "number" or score ~= score then
		return
	end
	local minigame = Config.Minigames[round.game]
	local elapsed = os.clock() - round.started
	score = math.floor(score)
	if elapsed < minigame.minTime or elapsed > minigame.maxTime or score < 0 or score > minigame.maxScore then
		return
	end
	if minigame.maxRate and score > elapsed * minigame.maxRate + 1 then
		return
	end
	local bonus = 1 + Pets.buff(player, "arcadeBonus")
	local payout = math.floor(math.min(score * minigame.perPoint, minigame.maxPayout) * bonus)
	PlayerData.addBucks(player, payout)
	PlayerData.addStat(data, "happiness", 10)
	Quests.progress(player, "minigame")
	PlayerData.notify(player, ("%s: %d points! +%d %s"):format(minigame.name, score, payout, Config.CURRENCY), "success")
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
