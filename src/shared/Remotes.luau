-- Central list of RemoteEvents / RemoteFunctions. The server creates them;
-- clients wait for them.

local ReplicatedStorage = game:GetService("ReplicatedStorage")
local RunService = game:GetService("RunService")

local EVENTS = {
	"DataUpdated", -- server -> client: full player profile
	"Notify", -- server -> client: toast message
	"OpenShop", -- server -> client: storeId
	"OpenArcade", -- server -> client: open the minigame
	"OpenJobBoard", -- server -> client: buildingId
	"BuyItem", -- client -> server: itemId
	"UseItem", -- client -> server: itemId (eat food / equip buddy)
	"UnequipBuddy", -- client -> server
	"PlaceFurniture", -- client -> server: itemId, x, z, rotation
	"PickUpFurniture", -- client -> server: uid
	"ApplyJob", -- client -> server: jobId
	"ArcadeSubmit", -- client -> server: score
	"Teleport", -- client -> server: "home" | "town"
}

local FUNCTIONS = {
	"GetData", -- client -> server: returns profile
	"ArcadeStart", -- client -> server: returns ok
}

local Remotes = {}

local folder

function Remotes.init()
	assert(RunService:IsServer(), "Remotes.init is server-only")
	folder = Instance.new("Folder")
	folder.Name = "Remotes"
	for _, name in EVENTS do
		local remote = Instance.new("RemoteEvent")
		remote.Name = name
		remote.Parent = folder
	end
	for _, name in FUNCTIONS do
		local remote = Instance.new("RemoteFunction")
		remote.Name = name
		remote.Parent = folder
	end
	folder.Parent = ReplicatedStorage
end

function Remotes.get(name)
	if not folder then
		folder = ReplicatedStorage:WaitForChild("Remotes")
	end
	return folder:WaitForChild(name)
end

return Remotes
