-- Jobs: apply at a job board, then Start Shift to get a task made of steps
-- at stations around your workplace (or house mailboxes for mail carriers).
-- Finishing every step pays the shift and counts toward promotions.

local Players = game:GetService("Players")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)
local Remotes = require(Shared.Remotes)

local PlayerData = require(script.Parent.PlayerData)
local Cooldowns = require(script.Parent.Cooldowns)
local Pets = require(script.Parent.Pets)
local Quests = require(script.Parent.Quests)
local World = require(script.Parent.WorldBuilder)
local Events = require(script.Parent.Events)

local Jobs = {}

local STEP_RANGE = 15 -- studs from a station to count a step

-- [Player] = { jobId, steps = { { target, text } }, index, expires }
local shifts = {}

local function meetsRequirements(data, job)
	for skill, needed in job.req do
		if (data.skills[skill] or 0) < needed then
			return false, skill, needed
		end
	end
	return true
end

-- Publishes the current step to the client (tracker + which prompt to show).
local function publish(player)
	local shift = shifts[player]
	if not shift then
		player:SetAttribute("JobStep", nil)
		player:SetAttribute("JobTask", nil)
		player:SetAttribute("JobProgress", nil)
		player:SetAttribute("JobDeadline", nil)
		return
	end
	local step = shift.steps[shift.index]
	player:SetAttribute("JobStep", step.target)
	player:SetAttribute("JobTask", step.text)
	player:SetAttribute("JobProgress", ("%d/%d"):format(shift.index, #shift.steps))
	player:SetAttribute("JobDeadline", shift.expires)
end

local function endShift(player, message, kind)
	shifts[player] = nil
	publish(player)
	if message then
		PlayerData.notify(player, message, kind or "info")
	end
end

local function stationsFor(buildingId)
	local byId = {}
	for _, station in Config.JobStations[buildingId] or {} do
		byId[station.id] = station
	end
	return byId
end

-- Builds the list of steps for a shift.
local function planShift(jobId)
	local job = Config.Jobs[jobId]
	local task = Config.JobTasks[jobId]
	local stations = stationsFor(job.building)
	local ids = table.clone(task.steps)
	if task.shuffle then
		local first, last = task.shuffle[1], task.shuffle[2]
		for i = last, first + 1, -1 do
			local j = math.random(first, i)
			ids[i], ids[j] = ids[j], ids[i]
		end
	end

	local usedPlots = {}
	local steps = {}
	for _, id in ids do
		if id == "mailbox" then
			-- A random house that isn't already on this route
			local plot
			repeat
				plot = World.plots[math.random(#World.plots)]
			until not usedPlots[plot.index] or #World.plots <= 1
			usedPlots[plot.index] = true
			local where = plot.owner and (plot.owner.DisplayName .. "'s house") or ("the empty house on " .. plot.neighborhood)
			table.insert(steps, { target = "mailbox." .. plot.index, text = "Deliver mail to " .. where .. " (glowing mailbox)" })
		else
			local station = stations[id]
			table.insert(steps, { target = job.building .. "." .. id, text = station.task })
		end
	end
	return steps
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
	if shifts[player] then
		endShift(player)
	end
	data.job = jobId
	data.jobLevel = 1
	data.shifts = 0
	PlayerData.notify(player, "You're hired as a " .. job.titles[1] .. " (" .. job.name .. ")! Use Start Shift on the job board.", "success")
	PlayerData.replicate(player)
end

local function energyCost(player, job)
	return job.energyCost * (1 - Pets.buff(player, "energySaver"))
end

-- "Start Shift" on a workplace's job board
function Jobs.startShift(player, jobId)
	local data = PlayerData.get(player)
	local job = data and Config.Jobs[jobId]
	if not job then
		return
	end
	if data.job ~= jobId then
		PlayerData.notify(player, "You don't work here. Use View Jobs to apply!", "error")
		return
	end
	if shifts[player] then
		PlayerData.notify(player, "You're already on a shift: " .. player:GetAttribute("JobTask"), "info")
		return
	end
	if data.energy < energyCost(player, job) then
		PlayerData.notify(player, "You're too tired to work. Eat something or take a nap!", "error")
		return
	end
	local wait = Cooldowns.remaining(player, "work")
	if wait > 0 then
		PlayerData.notify(player, "Take a break! Next shift in " .. wait .. "s.", "info")
		return
	end
	shifts[player] = {
		jobId = jobId, steps = planShift(jobId), index = 1, expires = os.time() + Config.SHIFT_TIME_LIMIT,
	}
	publish(player)
	PlayerData.notify(player, "Shift started: " .. Config.JobTasks[jobId].summary .. "!", "info")
end

local function payShift(player, jobId)
	local data = PlayerData.get(player)
	local job = Config.Jobs[jobId]
	local pay = Config.jobPay(jobId, data.jobLevel)
	-- A happy worker earns a little bonus; a miserable one earns less.
	if data.happiness >= 75 then
		pay = math.floor(pay * 1.1)
	elseif data.happiness < 25 then
		pay = math.floor(pay * 0.75)
	end
	local vip = player:GetAttribute("Pass_vip") and Config.VIP_PAY_BONUS or 0
	pay = math.floor(pay * (1 + Pets.buff(player, "workPay") + vip))
	if Events.isActive("doublepay") then
		pay *= 2
	end
	PlayerData.addBucks(player, pay)
	PlayerData.addStat(data, "energy", -energyCost(player, job))
	PlayerData.addStat(data, "hunger", -5)
	data.shifts += 1
	Quests.progress(player, "work")
	Cooldowns.start(player, "work", Config.WORK_COOLDOWN)

	local message = ("Shift complete! +%d %s"):format(pay, Config.CURRENCY)
	if data.jobLevel < Config.MAX_JOB_LEVEL and data.shifts >= Config.SHIFTS_PER_PROMOTION then
		data.jobLevel += 1
		data.shifts = 0
		message ..= " | PROMOTED to " .. job.titles[data.jobLevel] .. "!"
	end
	PlayerData.notify(player, message, "success")
	PlayerData.replicate(player)
end

-- A JobStep prompt was triggered at a station or mailbox.
function Jobs.step(player, target, promptPart)
	local shift = shifts[player]
	if not shift or type(target) ~= "string" then
		return
	end
	local step = shift.steps[shift.index]
	if step.target ~= target then
		return
	end
	local character = player.Character
	local root = character and character:FindFirstChild("HumanoidRootPart")
	if not root or (root.Position - promptPart.Position).Magnitude > STEP_RANGE then
		return
	end
	if shift.index == #shift.steps then
		endShift(player)
		payShift(player, shift.jobId)
	else
		shift.index += 1
		publish(player)
	end
end

function Jobs.quit(player)
	local data = PlayerData.get(player)
	if data and data.job then
		if shifts[player] then
			endShift(player)
		end
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
	Remotes.get("CancelShift").OnServerEvent:Connect(function(player)
		if shifts[player] then
			endShift(player, "Shift cancelled. No pay this time.", "info")
		end
	end)
	Players.PlayerRemoving:Connect(function(player)
		shifts[player] = nil
	end)
	-- Cancel shifts that ran out of time
	task.spawn(function()
		while true do
			task.wait(2)
			local now = os.time()
			for player, shift in shifts do
				if now > shift.expires then
					endShift(player, "Your shift timed out. Try again from the job board!", "error")
				end
			end
		end
	end)
end

return Jobs
