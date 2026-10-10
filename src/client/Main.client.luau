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
local BerryCatch = require(script.Parent.BerryCatch)

local player = Players.LocalPlayer

local actions = {}
function actions.place(itemId)
	Placement.start(itemId)
end
function actions.backpack()
	Placement.cancel()
	Panels.backpack(actions)
end
function actions.profile()
	Panels.profile()
end
function actions.home()
	Remotes.get("Teleport"):FireServer("home")
end
function actions.town()
	Placement.cancel()
	Remotes.get("Teleport"):FireServer("town")
end

Hud.init(actions)

Remotes.get("Notify").OnClientEvent:Connect(UI.notify)
Remotes.get("OpenShop").OnClientEvent:Connect(Panels.shop)
Remotes.get("OpenJobBoard").OnClientEvent:Connect(Panels.jobBoard)
Remotes.get("OpenArcade").OnClientEvent:Connect(BerryCatch.open)

-- Only show "Pick Up" prompts on furniture you own.
local function filterPrompt(inst)
	if inst:IsA("ProximityPrompt") and inst:GetAttribute("Action") == "PickUp" then
		inst.Enabled = inst:GetAttribute("OwnerId") == player.UserId
	end
end
for _, inst in Workspace:GetDescendants() do
	filterPrompt(inst)
end
Workspace.DescendantAdded:Connect(filterPrompt)

task.delay(2, function()
	UI.notify("Welcome to Berryvale! Your house is on Maple Court - press Go Home to visit.", "info")
	UI.notify("Get a job on Main Street to earn Berrybucks, and keep your Hunger, Energy and Happy bars up!", "info")
end)
