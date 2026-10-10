-- Applying for jobs, working shifts, getting promoted.

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)
local Remotes = require(Shared.Remotes)

local PlayerData = require(script.Parent.PlayerData)
local Cooldowns = require(script.Parent.Cooldowns)
local Pets = require(script.Parent.Pets)
local Quests = require(script.Parent.Quests)

local Jobs = {}

local function meetsRequirements(data, job)
	for skill, needed in job.req do
		if (data.skills[skill] or 0) < needed then
			return false, skill, needed
		end
	end
	return true
end

function Jobs.openBoard(player, buildingId)
	Remotes.get("OpenJobBoard"):FireClient(player, buildingId)
end

local function onApply(player, jobId)
	local data = PlayerData.get(player)
	if not data or type(jobId) ~= "string" then
		return
	end
	local job = Config.Jobs[jobId]
	if not job then
		return
	end
	if data.job == jobId then
		PlayerData.notify(player, "You already work here!", "info")
		return
	end
	local ok, skill, needed = meetsRequirements(data, job)
	if not ok then
		PlayerData.notify(player, ("You need %d %s for this job. Train at the %s!"):format(
			needed, skill == "smarts" and "Smarts" or "Fitness", skill == "smarts" and "School" or "Gym"), "error")
		return
	end
	data.job = jobId
	data.jobLevel = 1
	data.shifts = 0
	PlayerData.notify(player, "You're hired as a " .. job.titles[1] .. " (" .. job.name .. ")!", "success")
	PlayerData.replicate(player)
end

function Jobs.work(player, jobId)
	local data = PlayerData.get(player)
	if not data then
		return
	end
	local job = Config.Jobs[jobId]
	if not job then
		return
	end
	if data.job ~= jobId then
		PlayerData.notify(player, "You don't work here. Check the Job Board to apply!", "error")
		return
	end
	local energyCost = job.energyCost * (1 - Pets.buff(player, "energySaver"))
	if data.energy < energyCost then
		PlayerData.notify(player, "You're too tired to work. Eat something or take a nap!", "error")
		return
	end
	local ready, remaining = Cooldowns.take(player, "work", Config.WORK_COOLDOWN)
	if not ready then
		PlayerData.notify(player, "Take a break! Next shift in " .. remaining .. "s.", "info")
		return
	end

	local pay = Config.jobPay(jobId, data.jobLevel)
	-- A happy worker earns a little bonus; a miserable one earns less.
	if data.happiness >= 75 then
		pay = math.floor(pay * 1.1)
	elseif data.happiness < 25 then
		pay = math.floor(pay * 0.75)
	end
	local vip = player:GetAttribute("Pass_vip") and Config.VIP_PAY_BONUS or 0
	pay = math.floor(pay * (1 + Pets.buff(player, "workPay") + vip))
	PlayerData.addBucks(player, pay)
	PlayerData.addStat(data, "energy", -energyCost)
	PlayerData.addStat(data, "hunger", -5)
	data.shifts += 1
	Quests.progress(player, "work")

	local message = ("Shift complete! +%d %s"):format(pay, Config.CURRENCY)
	if data.jobLevel < Config.MAX_JOB_LEVEL and data.shifts >= Config.SHIFTS_PER_PROMOTION then
		data.jobLevel += 1
		data.shifts = 0
		message ..= " | PROMOTED to " .. job.titles[data.jobLevel] .. "!"
	end
	PlayerData.notify(player, message, "success")
	PlayerData.replicate(player)
end

function Jobs.quit(player)
	local data = PlayerData.get(player)
	if data and data.job then
		data.job = nil
		data.jobLevel = 1
		data.shifts = 0
		PlayerData.notify(player, "You quit your job.", "info")
		PlayerData.replicate(player)
	end
end

function Jobs.init()
	Remotes.get("ApplyJob").OnServerEvent:Connect(function(player, jobId)
		if jobId == "quit" then
			Jobs.quit(player)
		else
			onApply(player, jobId)
		end
	end)
end

return Jobs
