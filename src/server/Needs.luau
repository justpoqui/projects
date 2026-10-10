-- Hunger / energy / happiness drain over time, plus activities that train
-- skills or restore needs (school, gym, furniture at home).

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)

local PlayerData = require(script.Parent.PlayerData)
local Cooldowns = require(script.Parent.Cooldowns)

local Needs = {}

function Needs.train(player, placeId)
	local data = PlayerData.get(player)
	local training = Config.Training[placeId]
	if not data or not training then
		return
	end
	if data.energy < training.energyCost then
		PlayerData.notify(player, "You're too tired. Rest up first!", "error")
		return
	end
	local ready, remaining = Cooldowns.take(player, "train_" .. placeId, Config.ACTIVITY_COOLDOWN)
	if not ready then
		PlayerData.notify(player, "Wait " .. remaining .. "s before training again.", "info")
		return
	end
	PlayerData.addStat(data, "energy", -training.energyCost)
	data.skills[training.skill] = (data.skills[training.skill] or 0) + 1
	PlayerData.notify(player, training.message, "success")
	PlayerData.replicate(player)
end

-- Returns true if the activity wants the arcade opened.
function Needs.furnitureActivity(player, activityId)
	local data = PlayerData.get(player)
	local activity = Config.Activities[activityId]
	if not data or not activity then
		return false
	end
	if activity.arcade then
		return true
	end
	local ready, remaining = Cooldowns.take(player, "activity_" .. activityId, Config.ACTIVITY_COOLDOWN)
	if not ready then
		PlayerData.notify(player, "Wait " .. remaining .. "s to do that again.", "info")
		return false
	end
	if activity.energy and activity.energy < 0 and data.energy < -activity.energy then
		PlayerData.notify(player, "You're too tired for that.", "error")
		return false
	end
	PlayerData.addStat(data, "energy", activity.energy or 0)
	PlayerData.addStat(data, "happiness", activity.happiness or 0)
	if activity.smarts then
		data.skills.smarts += activity.smarts
	end
	PlayerData.notify(player, activity.message, "success")
	PlayerData.replicate(player)
	return false
end

function Needs.init()
	task.spawn(function()
		while true do
			task.wait(Config.NEEDS_TICK)
			PlayerData.forEach(function(player, data)
				local wasStarving = data.hunger <= 0
				PlayerData.addStat(data, "hunger", -Config.HUNGER_DRAIN)
				PlayerData.addStat(data, "energy", -Config.ENERGY_DRAIN)
				local drain = Config.HAPPINESS_DRAIN
				if data.hunger <= 0 then
					drain += Config.STARVING_HAPPINESS_DRAIN
				end
				PlayerData.addStat(data, "happiness", -drain)
				if data.hunger <= 0 and not wasStarving then
					PlayerData.notify(player, "You're starving! Eat something from your backpack.", "error")
				end
				PlayerData.replicate(player)
			end)
		end
	end)
end

return Needs
