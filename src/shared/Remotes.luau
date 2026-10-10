-- Central list of RemoteEvents / RemoteFunctions. The server creates them;
-- clients wait for them.

local ReplicatedStorage = game:GetService("ReplicatedStorage")
local RunService = game:GetService("RunService")

local EVENTS = {
	"DataUpdated", -- server -> client: full player profile
	"Notify", -- server -> client: toast message
	"OpenShop", -- server -> client: storeId
	"OpenArcade", -- server -> client: gameId or nil (show the game picker)
	"OpenJobBoard", -- server -> client: buildingId
	"BoxOpened", -- server -> client: storeId, boxKind, rewardId, tier, refund
	"BuyBox", -- client -> server: storeId, boxKind
	"BuyItem", -- client -> server: itemId (buddy food, the only direct buys)
	"UseItem", -- client -> server: itemId (eat food / wear clothing at your closet)
	"TakeOff", -- client -> server: clothing slot
	"PlaceFurniture", -- client -> server: itemId, x, z, rotation
	"PickUpFurniture", -- client -> server: uid
	"ApplyJob", -- client -> server: jobId or "quit"
	"ArcadeSubmit", -- client -> server: score
	"Teleport", -- client -> server: "home" | "town" | "visit" (userId) | "place" (spot id)
	"EquipPet", -- client -> server: pet uid
	"UnequipPet", -- client -> server
	"FeedPet", -- client -> server: food itemId
	"RenamePet", -- client -> server: pet uid, name
	"ReleasePet", -- client -> server: pet uid
	"UpgradeHouse", -- client -> server
	"SetHouseStyle", -- client -> server: part ("wall"|"floor"|"roof"), styleId
	"LikeHouse", -- client -> server: owner userId
	"ClaimQuest", -- client -> server: quest index
	"CancelShift", -- client -> server: give up the current job task
	"CooldownStarted", -- server -> client: cooldown key, seconds
	"OpenBank", -- server -> client
	"BankDeposit", -- client -> server: amount
	"BankWithdraw", -- client -> server: amount
	"BankBuyBond", -- client -> server: bond id, amount
	"BankCollectBond", -- client -> server: bond uid
	"OpenCloset", -- server -> client
	"SetSkinTone", -- client -> server: index into Config.SkinTones (0 = avatar default)
}

local FUNCTIONS = {
	"GetData", -- client -> server: returns profile
	"ArcadeStart", -- client -> server: gameId; returns ok, message
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
