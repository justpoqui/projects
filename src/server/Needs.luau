-- Hunger / energy / happiness drain over time, plus activities that train
-- skills or restore needs (school, gym, furniture at home).

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)

local PlayerData = require(script.Parent.PlayerData)
local Cooldowns = require(script.Parent.Cooldowns)
local Pets = require(script.Parent.Pets)
local Quests = require(script.Parent.Quests)
local Events = require(script.Parent.Events)

local Needs = {}

function Needs.train(player, placeId)
	local data = PlayerData.get(player)
	local training = Config.Training[placeId]
	if not data or not training then
		return
	end
	local energyCost = training.energyCost * (1 - Pets.buff(player, "energySaver"))
	if data.energy < energyCost then
		PlayerData.notify(player, "You're too tired. Rest up first!", "error")
		return
	end
	local ready, remaining = Cooldowns.take(player, "train_" .. placeId, Config.ACTIVITY_COOLDOWN)
	if not ready then
		PlayerData.notify(player, "Wait " .. remaining .. "s before training again.", "info")
		return
	end
	PlayerData.addStat(data, "energy", -energyCost)
	local gain = 1
	if math.random() < Pets.buff(player, "skillBoost") then
		gain = 2
	end
	data.skills[training.skill] = (data.skills[training.skill] or 0) + gain
	Quests.progress(player, "train")
	PlayerData.notify(player, gain == 2 and (training.message .. " Your buddy helped: double gain!") or training.message, "success")
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
	Quests.progress(player, "activity")
	PlayerData.notify(player, activity.message, "success")
	PlayerData.replicate(player)
	return false
end

function Needs.init()
	task.spawn(function()
		while true do
			task.wait(Config.NEEDS_TICK)
			local cozy = Events.isActive("cozytime")
			PlayerData.forEach(function(player, data)
				if cozy then
					-- Cozy Time event: needs don't drain
					return
				end
				local wasStarving = data.hunger <= 0
				PlayerData.addStat(data, "hunger", -Config.HUNGER_DRAIN * (1 - Pets.buff(player, "hungerSaver")))
				PlayerData.addStat(data, "energy", -Config.ENERGY_DRAIN)
				local drain = Config.HAPPINESS_DRAIN
				if data.hunger <= 0 then
					drain += Config.STARVING_HAPPINESS_DRAIN
				end
				PlayerData.addStat(data, "happiness", -drain * (1 - Pets.buff(player, "happyBoost")))
				Pets.tick(player, data)
				if data.hunger <= 0 and not wasStarving then
					PlayerData.notify(player, "You're starving! Eat something from your backpack.", "error")
				end
				PlayerData.replicate(player)
			end)
		end
	end)
end

return Needs
