-- Client entry point: HUD, windows, and server-driven UI events.

local Players = game:GetService("Players")
local Workspace = game:GetService("Workspace")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Remotes = require(Shared.Remotes)

local UI = require(script.Parent.UI)
require(script.Parent.State)
local Hud = require(script.Parent.Hud)
local Panels = require(script.Parent.Panels)
local Placement = require(script.Parent.Placement)
local PetsUI = require(script.Parent.PetsUI)
local HouseUI = require(script.Parent.HouseUI)
local Phone = require(script.Parent.Phone)
local Arcade = require(script.Parent.Arcade)
local StoreUI = require(script.Parent.StoreUI)
-- Minigames register themselves with Arcade
require(script.Parent.BerryCatch)
require(script.Parent.Stacker)
require(script.Parent.Memory)
require(script.Parent.Whack)
require(script.Parent.Pattern)

local player = Players.LocalPlayer

local actions = {}
function actions.place(itemId)
	Placement.start(itemId)
end
function actions.backpack()
	Placement.cancel()
	Panels.backpack(actions)
end
function actions.pets()
	PetsUI.open()
end
function actions.quests()
	Panels.quests()
end
function actions.profile()
	Panels.profile()
end
function actions.house()
	HouseUI.house()
end
function actions.visit()
	HouseUI.visit()
end
function actions.store()
	StoreUI.open()
end
function actions.phone()
	Placement.cancel()
	Phone.open(actions)
end

Hud.init(actions)

Remotes.get("Notify").OnClientEvent:Connect(UI.notify)
Remotes.get("OpenShop").OnClientEvent:Connect(Panels.shop)
Remotes.get("OpenJobBoard").OnClientEvent:Connect(Panels.jobBoard)
Remotes.get("OpenArcade").OnClientEvent:Connect(Arcade.open)
Remotes.get("BoxOpened").OnClientEvent:Connect(PetsUI.boxOpened)

-- "Pick Up" prompts only show on your own furniture; "Like House" only on
-- other people's houses.
local function filterPrompt(prompt)
	local action = prompt:GetAttribute("Action")
	local ownerId = prompt:GetAttribute("OwnerId")
	if action == "PickUp" then
		prompt.Enabled = ownerId == player.UserId
	elseif action == "Like" then
		prompt.Enabled = ownerId ~= nil and ownerId ~= player.UserId
	end
end
local function watchPrompt(inst)
	if inst:IsA("ProximityPrompt") then
		filterPrompt(inst)
		-- Re-check when a house changes owner (the server also toggles Enabled).
		inst:GetAttributeChangedSignal("OwnerId"):Connect(function()
			filterPrompt(inst)
		end)
		inst:GetPropertyChangedSignal("Enabled"):Connect(function()
			local action = inst:GetAttribute("Action")
			if action == "Like" and inst.Enabled and inst:GetAttribute("OwnerId") == player.UserId then
				inst.Enabled = false
			end
		end)
	end
end
for _, inst in Workspace:GetDescendants() do
	watchPrompt(inst)
end
Workspace.DescendantAdded:Connect(watchPrompt)

task.delay(2, function()
	UI.notify("Welcome to Berryvale! Open your Berry Phone to zip around town.", "info")
	UI.notify("Get a job to earn Berrybucks, then open Berry Boxes at the shops!", "info")
end)
