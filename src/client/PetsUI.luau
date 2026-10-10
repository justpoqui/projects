-- Buddies window (equip, feed, rename, release) and the Berry Box opening
-- animation.

local TweenService = game:GetService("TweenService")
local UserInputService = game:GetService("UserInputService")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)
local Remotes = require(Shared.Remotes)

local UI = require(script.Parent.UI)
local State = require(script.Parent.State)

local Theme = UI.Theme
local PetsUI = {}

local refresh = nil
local confirmRelease = nil -- uid awaiting a second "Release" click

State.onChange(function()
	-- Don't rebuild (and wipe) the window while the player is typing a name.
	if refresh and not UserInputService:GetFocusedTextBox() then
		refresh()
	end
end)

local function tierRank(petId)
	local pet = Config.Pets[petId]
	return pet and table.find(Config.TierOrder, pet.tier) or 0
end

local function tierStripe(row, tier)
	UI.new("Frame", {
		Size = UDim2.new(0, 6, 1, -16), Position = UDim2.fromOffset(3, 8),
		BackgroundColor3 = Config.Tiers[tier].color, Parent = row,
	}, { UI.corner(3) })
end

local function equippedCard(content, data, entry)
	local pet = Config.Pets[entry.id]
	local tierColor = Config.Tiers[pet.tier].color
	local card = UI.new("Frame", {
		Size = UDim2.new(1, -4, 0, 150), BackgroundColor3 = Theme.PanelDark, LayoutOrder = 1, Parent = content,
	}, { UI.corner(14), UI.stroke(tierColor, 3) })
	UI.label({
		Text = entry.name, Size = UDim2.new(1, -24, 0, 28), Position = UDim2.fromOffset(12, 8),
		TextXAlignment = Enum.TextXAlignment.Left, Parent = card,
	})
	UI.label({
		Text = ("%s %s  |  %s"):format(pet.tier, pet.name, Config.describeBuff(entry.id)), Font = Theme.BodyFont,
		TextColor3 = tierColor, Size = UDim2.new(1, -24, 0, 18), Position = UDim2.fromOffset(12, 38),
		TextXAlignment = Enum.TextXAlignment.Left, Parent = card,
	})

	-- Hunger bar
	local hungry = entry.hunger <= 0
	local track = UI.new("Frame", {
		Size = UDim2.new(1, -24, 0, 16), Position = UDim2.fromOffset(12, 62), BackgroundColor3 = Theme.Panel, Parent = card,
	}, { UI.corner(8) })
	UI.new("Frame", {
		Size = UDim2.fromScale(math.max(entry.hunger / Config.PET_MAX_HUNGER, 0.001), 1),
		BackgroundColor3 = hungry and Theme.Bad or Color3.fromRGB(255, 160, 70), Parent = track,
	}, { UI.corner(8) })
	UI.label({
		Text = hungry and "Too hungry to help! Feed me!" or ("Buddy hunger " .. math.floor(entry.hunger)),
		Font = Theme.Font, TextScaled = false, TextSize = 12, Size = UDim2.fromScale(1, 1), Parent = track, ZIndex = 2,
	})

	-- Buttons: Feed / Put Away, and a rename box
	local foodId
	for _, id in { "kibble", "treat" } do
		if (data.inventory[id] or 0) > 0 then
			foodId = id
			break
		end
	end
	UI.button({
		Text = foodId and ("Feed " .. Config.Items[foodId].name) or "No food (Buddy Barn)",
		Color = foodId and Color3.fromRGB(240, 150, 60) or Theme.Muted,
		Size = UDim2.new(0.5, -18, 0, 30), Position = UDim2.fromOffset(12, 84), Parent = card,
		OnClick = function()
			if foodId then
				Remotes.get("FeedPet"):FireServer(foodId)
			end
		end,
	})
	UI.button({
		Text = "Put Away", Color = Theme.Pink, Size = UDim2.new(0.5, -18, 0, 30), AnchorPoint = Vector2.new(1, 0),
		Position = UDim2.new(1, -12, 0, 84), Parent = card,
		OnClick = function()
			Remotes.get("UnequipPet"):FireServer()
		end,
	})
	local box = UI.new("TextBox", {
		PlaceholderText = "New name...", Text = "", ClearTextOnFocus = false, Font = Theme.BodyFont, TextSize = 16,
		TextColor3 = Theme.Text, BackgroundColor3 = Theme.Panel, Size = UDim2.new(1, -120, 0, 26),
		Position = UDim2.fromOffset(12, 118), Parent = card,
	}, { UI.corner(8), UI.padding(4) })
	UI.button({
		Text = "Rename", Color = Theme.Accent, Size = UDim2.fromOffset(90, 26), AnchorPoint = Vector2.new(1, 0),
		Position = UDim2.new(1, -12, 0, 118), Parent = card,
		OnClick = function()
			if #box.Text > 0 then
				Remotes.get("RenamePet"):FireServer(entry.uid, box.Text)
			end
		end,
	})
end

function PetsUI.open()
	local _, content = UI.window("Buddies", Vector2.new(560, 540), function()
		refresh = nil
	end)
	refresh = function()
		for _, child in content:GetChildren() do
			if child:IsA("GuiObject") then
				child:Destroy()
			end
		end
		local data = State.data
		if not data then
			return
		end

		local equipped
		for _, entry in data.pets do
			if entry.uid == data.equippedPet then
				equipped = entry
			end
		end
		if equipped then
			equippedCard(content, data, equipped)
		else
			UI.row(content, 1, "No buddy out", "Pick one below. Your buddy's perk only works while it's out and fed!")
		end

		UI.heading(content, 2, ("Collection (%d / %d)"):format(#data.pets, Config.MAX_PETS))
		local list = table.clone(data.pets)
		table.sort(list, function(a, b)
			local ra, rb = tierRank(a.id), tierRank(b.id)
			if ra == rb then
				return a.name < b.name
			end
			return ra > rb
		end)
		for i, entry in list do
			local pet = Config.Pets[entry.id]
			if pet then
				local isOut = entry.uid == data.equippedPet
				local row = UI.row(content, 2 + i, entry.name, pet.tier .. "  |  " .. Config.describeBuff(entry.id),
					isOut and "Out" or "Take Out", isOut and Theme.Muted or Theme.Good, function()
						if not isOut then
							Remotes.get("EquipPet"):FireServer(entry.uid)
						end
					end)
				tierStripe(row, pet.tier)
				local refund = Config.Tiers[pet.tier].release
				local sure = confirmRelease == entry.uid
				UI.button({
					Text = sure and "Sure?" or ("Release +" .. refund), Color = sure and Theme.Bad or Theme.Muted,
					Size = UDim2.fromOffset(110, 26), AnchorPoint = Vector2.new(1, 1), Position = UDim2.new(1, -140, 1, -6),
					Parent = row, OnClick = function()
						if sure then
							confirmRelease = nil
							Remotes.get("ReleasePet"):FireServer(entry.uid)
						else
							confirmRelease = entry.uid
							refresh()
						end
					end,
				})
			end
		end
		if #list == 0 then
			UI.label({
				Text = "Open a Buddy Berry Box at the Buddy Barn to get your first buddy!", Font = Theme.BodyFont,
				TextColor3 = Theme.Muted, Size = UDim2.new(1, 0, 0, 20), LayoutOrder = 3, Parent = content,
			})
		end
	end
	refresh()
end

-- Berry Box opening ---------------------------------------------------------

local queue = {}
local playing = false

local function describeReward(rewardId)
	local pet = Config.Pets[rewardId]
	if pet then
		return "New buddy! " .. Config.describeBuff(rewardId)
	end
	local item = Config.Items[rewardId]
	if item and item.category == "furniture" then
		return "Place it from your Backpack"
	elseif item and item.category == "clothing" then
		return "Wear it from your Backpack"
	elseif item and item.category == "food" then
		return "Eat it from your Backpack"
	end
	return ""
end

local function play(reward)
	local box = Config.BoxKinds[reward.boxKind]
	local tierColor = Config.Tiers[reward.tier].color

	local overlay = UI.new("TextButton", {
		Name = "BoxReveal", Text = "", AutoButtonColor = false, Size = UDim2.fromScale(1, 1),
		BackgroundColor3 = Color3.new(0, 0, 0), BackgroundTransparency = 0.45, ZIndex = 40, Parent = UI.Screen,
	})

	-- The box: a colored cube with a ribbon and a berry on top
	local boxFrame = UI.new("Frame", {
		AnchorPoint = Vector2.new(0.5, 0.5), Position = UDim2.fromScale(0.5, 0.5), Size = UDim2.fromOffset(150, 130),
		BackgroundColor3 = box.color, ZIndex = 41, Parent = overlay,
	}, { UI.corner(16), UI.stroke(Color3.new(1, 1, 1), 3) })
	UI.new("Frame", {
		AnchorPoint = Vector2.new(0.5, 0), Position = UDim2.fromScale(0.5, 0), Size = UDim2.new(0, 22, 1, 0),
		BackgroundColor3 = Color3.fromRGB(255, 230, 120), BorderSizePixel = 0, ZIndex = 42, Parent = boxFrame,
	})
	UI.new("Frame", {
		AnchorPoint = Vector2.new(0, 0.5), Position = UDim2.fromScale(0, 0.35), Size = UDim2.new(1, 0, 0, 22),
		BackgroundColor3 = Color3.fromRGB(255, 230, 120), BorderSizePixel = 0, ZIndex = 42, Parent = boxFrame,
	})
	UI.new("TextLabel", {
		Text = "🫐", AnchorPoint = Vector2.new(0.5, 1), Position = UDim2.new(0.5, 0, 0, 10), Size = UDim2.fromOffset(60, 60),
		BackgroundTransparency = 1, TextScaled = true, ZIndex = 43, Parent = boxFrame,
	})
	UI.label({
		Text = box.name, AnchorPoint = Vector2.new(0.5, 0), Position = UDim2.new(0.5, 0, 1, 12),
		Size = UDim2.fromOffset(260, 30), TextColor3 = Color3.new(1, 1, 1), ZIndex = 41, Parent = boxFrame,
	})

	-- Shake harder and harder, then pop
	for i = 1, 8 do
		local angle = (i % 2 == 0 and 1 or -1) * (4 + i * 2)
		local tween = TweenService:Create(boxFrame, TweenInfo.new(0.09 + 0.01 * (8 - i)), { Rotation = angle })
		tween:Play()
		tween.Completed:Wait()
	end
	local pop = TweenService:Create(boxFrame, TweenInfo.new(0.18), { Size = UDim2.fromOffset(240, 210), Rotation = 0 })
	pop:Play()
	pop.Completed:Wait()
	boxFrame:Destroy()

	-- Reveal card
	local card = UI.new("Frame", {
		AnchorPoint = Vector2.new(0.5, 0.5), Position = UDim2.fromScale(0.5, 0.5), Size = UDim2.fromOffset(0, 0),
		BackgroundColor3 = Theme.Panel, ZIndex = 41, Parent = overlay,
	}, { UI.corner(20), UI.stroke(tierColor, 5) })
	local flash = UI.new("Frame", {
		Size = UDim2.fromScale(1, 1), BackgroundColor3 = tierColor, ZIndex = 46, Parent = card,
	}, { UI.corner(20) })
	UI.label({
		Text = string.upper(reward.tier) .. "!", Size = UDim2.new(1, -20, 0, 40), Position = UDim2.fromOffset(10, 16),
		TextColor3 = tierColor, ZIndex = 42, Parent = card,
	})
	UI.label({
		Text = Config.nameOf(reward.rewardId), Size = UDim2.new(1, -20, 0, 46), Position = UDim2.fromOffset(10, 62),
		ZIndex = 42, Parent = card,
	})
	local note = reward.refund > 0
		and ("You already had this - +" .. reward.refund .. " " .. Config.CURRENCY .. " back")
		or describeReward(reward.rewardId)
	UI.label({
		Text = note, Font = Theme.BodyFont, TextColor3 = Theme.Muted, TextWrapped = true,
		Size = UDim2.new(1, -30, 0, 40), Position = UDim2.fromOffset(15, 114), ZIndex = 42, Parent = card,
	})
	local done = false
	UI.button({
		Text = "Awesome!", Color = Theme.Good, AnchorPoint = Vector2.new(0.5, 1), Position = UDim2.new(0.5, 0, 1, -16),
		Size = UDim2.fromOffset(160, 44), ZIndex = 42, Parent = card, OnClick = function()
			done = true
		end,
	})
	TweenService:Create(card, TweenInfo.new(0.35, Enum.EasingStyle.Back), { Size = UDim2.fromOffset(340, 240) }):Play()
	TweenService:Create(flash, TweenInfo.new(0.6), { BackgroundTransparency = 1 }):Play()
	if reward.tier == "Legendary" or reward.tier == "Epic" then
		UI.notify("WOW! You got a " .. reward.tier .. " " .. Config.nameOf(reward.rewardId) .. "!", "success")
	end

	overlay.Activated:Connect(function()
		done = true
	end)
	local deadline = os.clock() + 8
	while not done and os.clock() < deadline do
		task.wait(0.1)
	end
	overlay:Destroy()
end

function PetsUI.boxOpened(storeId, boxKind, rewardId, tier, refund)
	table.insert(queue, { storeId = storeId, boxKind = boxKind, rewardId = rewardId, tier = tier, refund = refund or 0 })
	if playing then
		return
	end
	playing = true
	task.spawn(function()
		while #queue > 0 do
			play(table.remove(queue, 1))
		end
		playing = false
	end)
end

return PetsUI
