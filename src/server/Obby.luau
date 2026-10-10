-- Berry Dash: an obstacle course behind the arcade. Red parts send you back
-- to the start; the gold pad at the end pays a prize every few minutes.

local Players = game:GetService("Players")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)

local PlayerData = require(script.Parent.PlayerData)
local Pets = require(script.Parent.Pets)
local Quests = require(script.Parent.Quests)

local Obby = {}

local recentlyReset = {} -- [Player] = true while a reset is in progress

local function playerFromHit(hit)
	local character = hit:FindFirstAncestorOfClass("Model")
	local player = character and Players:GetPlayerFromCharacter(character)
	return player, character
end

local function reward(player)
	local data = PlayerData.get(player)
	if not data then
		return
	end
	local now = os.time()
	local wait = data.obbyLast + Config.OBBY_COOLDOWN - now
	if wait > 0 then
		return wait
	end
	data.obbyLast = now
	local prize = math.floor(Config.OBBY_REWARD * (1 + Pets.buff(player, "arcadeBonus")))
	data.bucks += prize
	PlayerData.addStat(data, "happiness", 15)
	Quests.progress(player, "obby")
	PlayerData.notify(player, ("You beat Berry Dash! +%d %s"):format(prize, Config.CURRENCY), "success")
	PlayerData.replicate(player)
	return 0
end

-- course: the folder WorldBuilder made, with KillParts, a Start pad and a Prize pad
function Obby.init(course)
	local start = course:WaitForChild("Start")
	for _, part in course:GetDescendants() do
		if part:IsA("BasePart") and part:GetAttribute("Kill") then
			part.Touched:Connect(function(hit)
				local player, character = playerFromHit(hit)
				if player and not recentlyReset[player] then
					recentlyReset[player] = true
					character:PivotTo(start.CFrame * CFrame.new(0, 4, 0))
					task.delay(0.5, function()
						recentlyReset[player] = nil
					end)
				end
			end)
		end
	end

	local told = {} -- [Player] = os.clock() of last "come back later" message
	course:WaitForChild("Prize").Touched:Connect(function(hit)
		local player = playerFromHit(hit)
		if not player then
			return
		end
		local wait = reward(player)
		if wait and wait > 0 and (not told[player] or os.clock() - told[player] > 10) then
			told[player] = os.clock()
			PlayerData.notify(player, ("Nice run! The next prize is ready in %d min."):format(math.ceil(wait / 60)), "info")
		end
	end)
	Players.PlayerRemoving:Connect(function(player)
		told[player] = nil
		recentlyReset[player] = nil
	end)
end

return Obby
