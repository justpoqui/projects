-- Server entry point: builds the world, starts every system, and routes
-- ProximityPrompt interactions to the right system.

local Players = game:GetService("Players")
local ProximityPromptService = game:GetService("ProximityPromptService")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Remotes = require(Shared.Remotes)
Remotes.init()

local World = require(script.Parent.WorldBuilder)
local PlayerData = require(script.Parent.PlayerData)
local Housing = require(script.Parent.Housing)
local Shops = require(script.Parent.Shops)
local Pets = require(script.Parent.Pets)
local Outfit = require(script.Parent.Outfit)
local Jobs = require(script.Parent.Jobs)
local Needs = require(script.Parent.Needs)
local Arcade = require(script.Parent.Arcade)
local Obby = require(script.Parent.Obby)
local Quests = require(script.Parent.Quests)
local Leaderboard = require(script.Parent.Leaderboard)
local Monetization = require(script.Parent.Monetization)
local Bank = require(script.Parent.Bank)
local Rewards = require(script.Parent.Rewards)
local Events = require(script.Parent.Events)

World.build()
PlayerData.init()
Housing.init()
Shops.init()
Pets.init()
Outfit.init()
Jobs.init()
Needs.init()
Arcade.init()
Obby.init(World.obby)
Quests.init()
Leaderboard.init()
Monetization.init()
Bank.init()
Rewards.init()
Events.init()

local handlers = {
	Shop = function(player, prompt)
		Shops.open(player, prompt:GetAttribute("Target"), prompt.Parent)
	end,
	JobBoard = function(player, prompt)
		Jobs.openBoard(player, prompt:GetAttribute("Target"))
	end,
	Work = function(player, prompt)
		Jobs.startShift(player, prompt:GetAttribute("Target"))
	end,
	JobStep = function(player, prompt)
		Jobs.step(player, prompt:GetAttribute("Target"), prompt.Parent)
	end,
	Closet = function(player, prompt)
		Outfit.openCloset(player, prompt)
	end,
	Bank = function(player)
		Bank.open(player)
	end,
	Train = function(player, prompt)
		Needs.train(player, prompt:GetAttribute("Target"))
	end,
	Arcade = function(player, prompt)
		Arcade.open(player, prompt:GetAttribute("Target"))
	end,
	Furniture = function(player, prompt)
		if Needs.furnitureActivity(player, prompt:GetAttribute("Target")) then
			Arcade.open(player, nil)
		end
	end,
	PickUp = function(player, prompt)
		if prompt:GetAttribute("OwnerId") == player.UserId then
			Housing.pickUp(player, prompt:GetAttribute("Uid"))
		end
	end,
	Like = function(player, prompt)
		Housing.like(player, prompt:GetAttribute("OwnerId"))
	end,
}

ProximityPromptService.PromptTriggered:Connect(function(prompt, player)
	local handler = handlers[prompt:GetAttribute("Action")]
	if handler then
		handler(player, prompt)
	end
end)

local function onPlayerAdded(player)
	local data = PlayerData.load(player)
	if data then
		Bank.onLoad(player, data)
		Housing.assign(player, data)
		-- Give the client a moment to load its UI so the daily reward toast shows.
		task.delay(4, function()
			if player.Parent and Quests.refresh(player, data) then
				PlayerData.replicate(player)
			end
		end)
	end
end

Players.PlayerAdded:Connect(onPlayerAdded)
for _, player in Players:GetPlayers() do
	task.spawn(onPlayerAdded, player)
end
