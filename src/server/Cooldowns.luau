-- Per-player cooldown tracking. Cooldowns with a display name in
-- Config.CooldownNames are also sent to the client for the Cooldowns list.

local Players = game:GetService("Players")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)
local Remotes = require(Shared.Remotes)

local Cooldowns = {}

local timers = {} -- [Player] = { [key] = readyAt }

-- Seconds until `key` is ready (0 if ready now).
function Cooldowns.remaining(player, key)
	local mine = timers[player]
	local readyAt = mine and mine[key]
	if readyAt and readyAt > os.clock() then
		return math.ceil(readyAt - os.clock())
	end
	return 0
end

-- Starts (or restarts) a cooldown.
function Cooldowns.start(player, key, seconds)
	local mine = timers[player]
	if not mine then
		mine = {}
		timers[player] = mine
	end
	mine[key] = os.clock() + seconds
	if Config.CooldownNames[key] then
		Remotes.get("CooldownStarted"):FireClient(player, key, seconds)
	end
end

-- Returns true and starts the cooldown if ready; otherwise false and the
-- seconds remaining.
function Cooldowns.take(player, key, seconds)
	local left = Cooldowns.remaining(player, key)
	if left > 0 then
		return false, left
	end
	Cooldowns.start(player, key, seconds)
	return true, 0
end

Players.PlayerRemoving:Connect(function(player)
	timers[player] = nil
end)

return Cooldowns
