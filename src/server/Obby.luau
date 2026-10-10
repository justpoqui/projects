-- Berry Dash: an obstacle course behind the arcade with two levels. Red parts
-- send you back to your level's checkpoint; each level's gold pad pays a
-- prize on its own cooldown. Also animates the moving obstacles.

local Players = game:GetService("Players")
local RunService = game:GetService("RunService")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)

local PlayerData = require(script.Parent.PlayerData)
local Pets = require(script.Parent.Pets)
local Quests = require(script.Parent.Quests)

local Obby = {}

local VANISH_SHOWN = 2.2 -- seconds a blinking platform stays solid
local VANISH_HIDDEN = 1.3

local recentlyReset = {} -- [Player] = true while a reset is in progress
local told = {} -- [Player] = os.clock() of last "come back later" message

local function playerFromHit(hit)
	local character = hit:FindFirstAncestorOfClass("Model")
	local player = character and Players:GetPlayerFromCharacter(character)
	return player, character
end

-- Returns seconds until the prize is ready again (0 if just paid).
local function reward(player, level)
	local data = PlayerData.get(player)
	local info = Config.ObbyLevels[level]
	if not data or not info then
		return nil
	end
	local key = "L" .. level
	local now = os.time()
	local wait = (data.obbyTimes[key] or 0) + info.cooldown - now
	if wait > 0 then
		return wait
	end
	data.obbyTimes[key] = now
	local prize = math.floor(info.reward * (1 + Pets.buff(player, "arcadeBonus")))
	data.bucks += prize
	PlayerData.addStat(data, "happiness", 15)
	Quests.progress(player, "obby")
	PlayerData.notify(player, ("You beat %s! +%d %s"):format(info.name, prize, Config.CURRENCY), "success")
	PlayerData.replicate(player)
	return 0
end

local function animate(course)
	local vanishing, spinning, pulsing = {}, {}, {}
	for _, p in course:GetDescendants() do
		if p:IsA("BasePart") then
			if p:GetAttribute("Vanish") then
				table.insert(vanishing, p)
			end
			if p:GetAttribute("Spin") then
				table.insert(spinning, { part = p, base = p.CFrame })
			end
			if p:GetAttribute("PulseAmp") then
				table.insert(pulsing, { part = p, base = p.CFrame })
			end
		end
	end

	local t = 0
	RunService.Heartbeat:Connect(function(dt)
		t += dt
		for _, entry in spinning do
			entry.part.CFrame = entry.base * CFrame.Angles(0, t * entry.part:GetAttribute("Spin"), 0)
		end
		for _, entry in pulsing do
			local p = entry.part
			local offset = math.sin(t * p:GetAttribute("PulseSpeed") + p:GetAttribute("PulsePhase")) * p:GetAttribute("PulseAmp")
			p.CFrame = entry.base + Vector3.new(0, offset, 0)
		end
		local cycle = VANISH_SHOWN + VANISH_HIDDEN
		for _, p in vanishing do
			local phase = (t + p:GetAttribute("Vanish")) % cycle
			local solid = phase < VANISH_SHOWN
			-- Flicker as a warning in the last half second
			local warning = solid and phase > VANISH_SHOWN - 0.5
			p.CanCollide = solid
			p.Transparency = not solid and 0.85 or (warning and (math.floor(phase * 10) % 2) * 0.5 or 0)
		end
	end)
end

-- course: the folder WorldBuilder made
function Obby.init(course)
	local checkpoints = {}
	for _, p in course:GetDescendants() do
		local n = p:IsA("BasePart") and p:GetAttribute("Checkpoint")
		if n then
			checkpoints[n] = p
		end
	end

	for _, p in course:GetDescendants() do
		if not p:IsA("BasePart") then
			continue
		end
		local killTo = p:GetAttribute("Kill")
		local level = p:GetAttribute("Prize")
		if killTo then
			p.Touched:Connect(function(hit)
				local player, character = playerFromHit(hit)
				local spot = checkpoints[killTo]
				if player and spot and not recentlyReset[player] then
					recentlyReset[player] = true
					character:PivotTo(spot.CFrame * CFrame.new(0, 4, 0))
					task.delay(0.5, function()
						recentlyReset[player] = nil
					end)
				end
			end)
		elseif level then
			p.Touched:Connect(function(hit)
				local player = playerFromHit(hit)
				if not player then
					return
				end
				local wait = reward(player, level)
				local key = player.UserId .. ":" .. level
				if wait and wait > 0 and (not told[key] or os.clock() - told[key] > 10) then
					told[key] = os.clock()
					PlayerData.notify(player, ("Nice run! This prize is ready again in %d min."):format(math.ceil(wait / 60)), "info")
				end
			end)
		end
	end

	animate(course)
	Players.PlayerRemoving:Connect(function(player)
		recentlyReset[player] = nil
		for level in Config.ObbyLevels do
			told[player.UserId .. ":" .. level] = nil
		end
	end)
end

return Obby
