-- Berry Bank: savings that earn compound interest every hour (also while
-- you're offline, up to a cap), and Berry Bonds that lock Berrybucks for a
-- fixed time and pay a fixed return when they mature.

local Players = game:GetService("Players")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)
local Remotes = require(Shared.Remotes)

local PlayerData = require(script.Parent.PlayerData)
local World = require(script.Parent.WorldBuilder)

local Bank = {}
local Settings = Config.Bank

local bondById = {}
for _, bond in Settings.Bonds do
	bondById[bond.id] = bond
end

local function account(data)
	return data.bank
end

-- Adds interest earned since the last update. Returns the amount added.
function Bank.accrue(data, maxHours)
	local bank = account(data)
	local now = os.time()
	local hours = math.min((now - bank.lastInterest) / 3600, maxHours or math.huge)
	bank.lastInterest = now
	if hours <= 0 or bank.savings <= 0 then
		return 0
	end
	local earning = math.min(bank.savings, Settings.interestCap)
	local earned = earning * ((1 + Settings.savingsRate) ^ hours - 1)
	bank.savings += earned
	return earned
end

local function validAmount(amount)
	return type(amount) == "number" and amount == amount and amount >= 1 and amount < 1e9
end

-- Bank actions only work after talking to the teller, until you walk away.
local function atTeller(player)
	return player:GetAttribute("AtBank") == true
end

function Bank.open(player)
	local data = PlayerData.get(player)
	if not data then
		return
	end
	Bank.accrue(data)
	player:SetAttribute("AtBank", true)
	PlayerData.replicate(player)
	Remotes.get("OpenBank"):FireClient(player)
end

local function onDeposit(player, amount)
	local data = PlayerData.get(player)
	if not data or not validAmount(amount) or not atTeller(player) then
		return
	end
	amount = math.min(math.floor(amount), data.bucks)
	if amount <= 0 then
		return
	end
	Bank.accrue(data)
	data.bucks -= amount
	account(data).savings += amount
	PlayerData.notify(player, ("Deposited %d %s into savings."):format(amount, Config.CURRENCY), "success")
	PlayerData.replicate(player)
end

local function onWithdraw(player, amount)
	local data = PlayerData.get(player)
	if not data or not validAmount(amount) or not atTeller(player) then
		return
	end
	Bank.accrue(data)
	local bank = account(data)
	amount = math.min(math.floor(amount), math.floor(bank.savings))
	if amount <= 0 then
		return
	end
	bank.savings -= amount
	data.bucks += amount
	PlayerData.notify(player, ("Withdrew %d %s."):format(amount, Config.CURRENCY), "success")
	PlayerData.replicate(player)
end

local function onBuyBond(player, bondId, amount)
	local data = PlayerData.get(player)
	local bond = type(bondId) == "string" and bondById[bondId]
	if not data or not bond or not validAmount(amount) or not atTeller(player) then
		return
	end
	amount = math.floor(amount)
	local bank = account(data)
	if #bank.bonds >= Settings.maxBonds then
		PlayerData.notify(player, "You can only hold " .. Settings.maxBonds .. " bonds at once. Collect one first.", "error")
		return
	end
	if amount < Settings.minBond or amount > Settings.maxBond then
		PlayerData.notify(player, ("Bonds must be between %d and %d %s."):format(Settings.minBond, Settings.maxBond, Config.CURRENCY), "error")
		return
	end
	if not PlayerData.addBucks(player, -amount) then
		PlayerData.notify(player, "You don't have that many " .. Config.CURRENCY .. " in your wallet.", "error")
		return
	end
	local now = os.time()
	local uid = data.nextUid
	data.nextUid += 1
	table.insert(bank.bonds, {
		uid = uid, id = bond.id, amount = amount, payout = math.floor(amount * (1 + bond.rate)),
		matures = now + bond.hours * 3600,
	})
	PlayerData.notify(player, ("Bought a %s for %d. It pays %d when it matures!"):format(
		bond.name, amount, math.floor(amount * (1 + bond.rate))), "success")
	PlayerData.replicate(player)
end

local function onCollect(player, uid)
	local data = PlayerData.get(player)
	if not data or type(uid) ~= "number" or not atTeller(player) then
		return
	end
	local bank = account(data)
	for i, held in bank.bonds do
		if held.uid == uid then
			if os.time() < held.matures then
				PlayerData.notify(player, "That bond hasn't matured yet.", "error")
				return
			end
			table.remove(bank.bonds, i)
			data.bucks += held.payout
			PlayerData.notify(player, ("Bond matured! +%d %s"):format(held.payout, Config.CURRENCY), "success")
			PlayerData.replicate(player)
			return
		end
	end
end

-- Called when a profile loads: pay interest for time spent offline.
function Bank.onLoad(player, data)
	local earned = Bank.accrue(data, Settings.offlineHoursCap)
	if earned >= 1 then
		task.delay(6, function()
			if player.Parent then
				PlayerData.notify(player, ("Your savings earned %d %s while you were away!"):format(
					math.floor(earned), Config.CURRENCY), "success")
			end
		end)
	end
end

function Bank.init()
	Remotes.get("BankDeposit").OnServerEvent:Connect(onDeposit)
	Remotes.get("BankWithdraw").OnServerEvent:Connect(onWithdraw)
	Remotes.get("BankBuyBond").OnServerEvent:Connect(onBuyBond)
	Remotes.get("BankCollectBond").OnServerEvent:Connect(onCollect)

	-- Keep interest ticking for online players, and drop the "at the bank"
	-- flag once they walk away from it.
	task.spawn(function()
		while true do
			task.wait(60)
			for _, player in Players:GetPlayers() do
				local data = PlayerData.get(player)
				if data and account(data).savings > 0 then
					Bank.accrue(data)
					PlayerData.replicate(player)
				end
			end
		end
	end)
	task.spawn(function()
		while true do
			task.wait(1)
			local bank = World.buildings.bank
			for _, player in Players:GetPlayers() do
				if player:GetAttribute("AtBank") then
					local character = player.Character
					local root = character and character:FindFirstChild("HumanoidRootPart")
					if not root or (root.Position - bank.cframe.Position).Magnitude > 40 then
						player:SetAttribute("AtBank", nil)
					end
				end
			end
		end
	end)
end

return Bank
