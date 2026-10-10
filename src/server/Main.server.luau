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
local Buddies = require(script.Parent.Buddies)
local Jobs = require(script.Parent.Jobs)
local Needs = require(script.Parent.Needs)
local Arcade = require(script.Parent.Arcade)

World.build()
PlayerData.init()
Housing.init()
Shops.init()
Buddies.init(PlayerData)
Jobs.init()
Needs.init()
Arcade.init()

local handlers = {
	Shop = function(player, prompt)
		Shops.open(player, prompt:GetAttribute("Target"), prompt.Parent)
	end,
	JobBoard = function(player, prompt)
		Jobs.openBoard(player, prompt:GetAttribute("Target"))
	end,
	Work = function(player, prompt)
		Jobs.work(player, prompt:GetAttribute("Target"))
	end,
	Train = function(player, prompt)
		Needs.train(player, prompt:GetAttribute("Target"))
	end,
	Arcade = function(player)
		Arcade.open(player)
	end,
	Furniture = function(player, prompt)
		if Needs.furnitureActivity(player, prompt:GetAttribute("Target")) then
			Arcade.open(player)
		end
	end,
	PickUp = function(player, prompt)
		if prompt:GetAttribute("OwnerId") == player.UserId then
			Housing.pickUp(player, prompt:GetAttribute("Uid"))
		end
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
		Housing.assign(player, data)
	end
end

Players.PlayerAdded:Connect(onPlayerAdded)
for _, player in Players:GetPlayers() do
	task.spawn(onPlayerAdded, player)
end
