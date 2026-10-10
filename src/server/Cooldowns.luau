-- Per-player cooldown tracking.

local Players = game:GetService("Players")

local Cooldowns = {}

local timers = {} -- [Player] = { [key] = readyAt }

-- Returns true and starts the cooldown if ready; otherwise false and the
-- seconds remaining.
function Cooldowns.take(player, key, seconds)
	local now = os.clock()
	local mine = timers[player]
	if not mine then
		mine = {}
		timers[player] = mine
	end
	local readyAt = mine[key]
	if readyAt and readyAt > now then
		return false, math.ceil(readyAt - now)
	end
	mine[key] = now + seconds
	return true, 0
end

Players.PlayerRemoving:Connect(function(player)
	timers[player] = nil
end)

return Cooldowns
