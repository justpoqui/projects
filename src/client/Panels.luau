-- Windows: shops, backpack, job board, and the "Me" profile page.

local Players = game:GetService("Players")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)
local Remotes = require(Shared.Remotes)

local UI = require(script.Parent.UI)
local State = require(script.Parent.State)

local Theme = UI.Theme
local Panels = {}

local player = Players.LocalPlayer
local refresh = nil -- re-renders the open window when data changes

local function tierRank(tier)
	return table.find(Config.TierOrder, tier) or 0
end

-- Items matching filter, sorted by tier then name.
local function sortedItems(filter)
	local list = {}
	for id, item in Config.Items do
		if filter(id, item) then
			table.insert(list, { id = id, item = item })
		end
	end
	table.sort(list, function(a, b)
		local ra, rb = tierRank(a.item.tier), tierRank(b.item.tier)
		if ra == rb then
			return a.item.name < b.item.name
		end
		return ra < rb
	end)
	return list
end

local function describe(item)
	local parts = {}
	if item.tier then
		table.insert(parts, item.tier)
	end
	if item.category == "food" then
		if item.hunger then
			table.insert(parts, "+" .. item.hunger .. " Hunger")
		end
		if item.energy then
			table.insert(parts, "+" .. item.energy .. " Energy")
		end
		if item.happiness then
			table.insert(parts, "+" .. item.happiness .. " Happy")
		end
	elseif item.category == "furniture" then
		local activity = item.activity and Config.Activities[item.activity]
		table.insert(parts, activity and activity.prompt or "Decoration")
	elseif item.category == "clothing" then
		table.insert(parts, item.slot:sub(1, 1):upper() .. item.slot:sub(2))
	elseif item.category == "petfood" then
		table.insert(parts, "+" .. item.petHunger .. " buddy hunger")
	end
	return table.concat(parts, "  |  ")
end
Panels.describe = describe

local function open(title, size, render)
	local _, content = UI.window(title, size, function()
		refresh = nil
	end)
	refresh = function()
		for _, child in content:GetChildren() do
			if child:IsA("GuiObject") then
				child:Destroy()
			end
		end
		if State.data then
			render(content, State.data)
		end
	end
	refresh()
end

State.onChange(function()
	if refresh then
		refresh()
	end
end)

-- Shop ------------------------------------------------------------------

-- A row of colored "Tier 12%" chips
local function oddsChips(parent, chances)
	local holder = UI.new("Frame", {
		Size = UDim2.new(1, -150, 0, 44), Position = UDim2.fromOffset(12, 36), BackgroundTransparency = 1, Parent = parent,
	}, {
		UI.new("UIListLayout", {
			FillDirection = Enum.FillDirection.Horizontal, Padding = UDim.new(0, 4), SortOrder = Enum.SortOrder.LayoutOrder,
			Wraps = true, -- spill onto a second line on narrow screens
		}),
	})
	for i, tier in Config.TierOrder do
		local chance = chances[tier]
		if chance then
			local pct = chance * 100
			UI.new("TextLabel", {
				Text = ("%s %s%%"):format(tier, pct < 1 and ("%.1f"):format(pct) or tostring(math.floor(pct + 0.5))),
				Font = Theme.Font, TextSize = 12, TextColor3 = Color3.new(1, 1, 1), LayoutOrder = i,
				BackgroundColor3 = Config.Tiers[tier].color, AutomaticSize = Enum.AutomaticSize.X,
				Size = UDim2.fromOffset(0, 18), Parent = holder,
			}, { UI.corner(6), UI.padding(2) })
		end
	end
end

function Panels.shop(storeId)
	local store = Config.Stores[storeId]
	local shop = Config.ShopBoxes[storeId]
	if not store or not shop then
		return
	end
	open(store.name, Vector2.new(560, 520), function(content, data)
		local order = 0
		local function nextOrder()
			order += 1
			return order
		end
		UI.label({
			Text = "You have " .. data.bucks .. " " .. Config.CURRENCY, Font = Theme.BodyFont,
			TextColor3 = Theme.Muted, Size = UDim2.new(1, 0, 0, 22), LayoutOrder = nextOrder(), Parent = content,
		})
		UI.heading(content, nextOrder(), "Berry Boxes - what will you get?")
		if player:GetAttribute("Pass_lucky") then
			UI.label({
				Text = "Lucky Berries pass: Epic & Legendary chances doubled!", Font = Theme.BodyFont,
				TextColor3 = Theme.Good, Size = UDim2.new(1, 0, 0, 20), LayoutOrder = nextOrder(), Parent = content,
			})
		end
		for _, kind in Config.BoxKindOrder do
			local box = Config.BoxKinds[kind]
			local price = shop.prices[kind]
			local card = UI.new("Frame", {
				Size = UDim2.new(1, -4, 0, 86), BackgroundColor3 = Theme.PanelDark, LayoutOrder = nextOrder(), Parent = content,
			}, { UI.corner(12), UI.stroke(box.color, 2) })
			UI.label({
				Text = shop.label .. " " .. box.name, Size = UDim2.new(1, -150, 0, 26), Position = UDim2.fromOffset(12, 8),
				TextXAlignment = Enum.TextXAlignment.Left, TextColor3 = box.color, Parent = card,
			})
			oddsChips(card, Config.boxChances(kind, shop.pool, player:GetAttribute("Pass_lucky") == true))
			UI.button({
				Text = "Open " .. price, Color = data.bucks >= price and Theme.Good or Theme.Muted,
				Size = UDim2.fromOffset(120, 44), AnchorPoint = Vector2.new(1, 0.5), Position = UDim2.new(1, -12, 0.5, 0),
				Parent = card, OnClick = function()
					Remotes.get("BuyBox"):FireServer(storeId, kind)
				end,
			})
		end

		if storeId == "buddies" then
			UI.heading(content, nextOrder(), "Buddy Food")
			for _, entry in sortedItems(function(_, item)
				return item.category == "petfood"
			end) do
				local owned = data.inventory[entry.id] or 0
				UI.row(content, nextOrder(), entry.item.name,
					describe(entry.item) .. (owned > 0 and ("  (own " .. owned .. ")") or ""),
					"Buy " .. entry.item.price, data.bucks >= entry.item.price and Theme.Good or Theme.Muted, function()
						Remotes.get("BuyItem"):FireServer(entry.id)
					end)
			end
		end

		UI.heading(content, nextOrder(), "What's inside")
		local byTier = Config.poolByTier(shop.pool)
		for _, tier in Config.TierOrder do
			local ids = byTier[tier]
			if ids then
				local names = {}
				for _, id in ids do
					table.insert(names, Config.nameOf(id))
				end
				UI.label({
					Text = tier .. ": " .. table.concat(names, ", "), Font = Theme.BodyFont, TextScaled = false,
					TextSize = 15, TextWrapped = true, TextXAlignment = Enum.TextXAlignment.Left,
					TextColor3 = Config.Tiers[tier].color, AutomaticSize = Enum.AutomaticSize.Y,
					Size = UDim2.new(1, 0, 0, 18), LayoutOrder = nextOrder(), Parent = content,
				})
			end
		end
	end)
end

-- Backpack ----------------------------------------------------------------

function Panels.backpack(actions)
	open("Backpack", Vector2.new(560, 500), function(content, data)
		local order = 0
		local function section(title, category, makeRow)
			local items = sortedItems(function(id, item)
				return item.category == category and (data.inventory[id] or 0) > 0
			end)
			order += 1
			UI.heading(content, order, title)
			if #items == 0 then
				order += 1
				UI.label({
					Text = "Nothing here yet. Open Berry Boxes at the shops in town!", Font = Theme.BodyFont,
					TextColor3 = Theme.Muted, Size = UDim2.new(1, 0, 0, 20), LayoutOrder = order, Parent = content,
				})
			end
			for _, entry in items do
				order += 1
				local count = data.inventory[entry.id]
				local label = entry.item.name .. (count > 1 and (" x" .. count) or "")
				local row = makeRow(entry, label)
				if row and entry.item.tier then
					-- Tier color stripe on the left edge
					UI.new("Frame", {
						Size = UDim2.new(0, 6, 1, -16), Position = UDim2.fromOffset(3, 8),
						BackgroundColor3 = Config.Tiers[entry.item.tier].color, Parent = row,
					}, { UI.corner(3) })
				end
			end
		end

		section("Food", "food", function(entry, label)
			return UI.row(content, order, label, describe(entry.item), "Eat", Theme.Good, function()
				Remotes.get("UseItem"):FireServer(entry.id)
			end)
		end)
		section("Furniture", "furniture", function(entry, label)
			return UI.row(content, order, label, describe(entry.item), "Place", Theme.Accent, function()
				UI.closeWindow()
				actions.place(entry.id)
			end)
		end)
		section("Clothing", "clothing", function(entry, label)
			local wearing = data.outfit[entry.item.slot] == entry.id
			return UI.row(content, order, label,
				(wearing and "Wearing now" or describe(entry.item)) .. "  |  Change outfits at your home closet")
		end)
		section("Buddy Food", "petfood", function(entry, label)
			return UI.row(content, order, label, describe(entry.item), "Feed", Color3.fromRGB(240, 150, 60), function()
				Remotes.get("FeedPet"):FireServer(entry.id)
			end)
		end)
		order += 1
		UI.label({
			Text = "Tip: hold F next to placed furniture to pick it back up.", Font = Theme.BodyFont,
			TextColor3 = Theme.Muted, Size = UDim2.new(1, 0, 0, 18), LayoutOrder = order, Parent = content,
		})
	end)
end

-- Job board ---------------------------------------------------------------

local function requirementText(job)
	local parts = {}
	if job.req.smarts then
		table.insert(parts, job.req.smarts .. " Smarts")
	end
	if job.req.fitness then
		table.insert(parts, job.req.fitness .. " Fitness")
	end
	return #parts > 0 and ("Needs " .. table.concat(parts, ", ")) or "No experience needed"
end

-- buildingId "all" = the Job Center board in the plaza
function Panels.jobBoard(buildingId)
	local all = buildingId == "all"
	open(all and "Berryvale Job Center" or "Help Wanted", Vector2.new(560, 460), function(content, data)
		local order = 0
		for _, jobId in { "factory", "grocer", "mail", "scientist", "cityhall" } do
			local job = Config.Jobs[jobId]
			if all or job.building == buildingId then
				order += 1
				local mine = data.job == jobId
				local subtitle = ("Pays %d+  |  %s  |  %s"):format(
					Config.jobPay(jobId, 1), requirementText(job), Config.JobTasks[jobId].summary)
				if mine then
					subtitle = ("You are a %s (level %d)  |  %s"):format(
						job.titles[data.jobLevel], data.jobLevel, Config.JobTasks[jobId].summary)
				end
				UI.row(content, order, job.name, subtitle, mine and "Quit" or "Apply", mine and Theme.Bad or Theme.Good, function()
					Remotes.get("ApplyJob"):FireServer(mine and "quit" or jobId)
				end)
			end
		end
		order += 1
		UI.label({
			Text = all and "After applying, go to your workplace and use Start Shift (F) on its Help Wanted board."
				or "To work, use Start Shift (F) on this board, then follow the glowing markers.",
			Font = Theme.BodyFont, TextColor3 = Theme.Muted, TextWrapped = true, TextScaled = false, TextSize = 15,
			Size = UDim2.new(1, 0, 0, 36), LayoutOrder = order, Parent = content,
		})
		if data.job and not all and Config.Jobs[data.job].building ~= buildingId then
			order += 1
			UI.label({
				Text = "Applying here will replace your current job.", Font = Theme.BodyFont,
				TextColor3 = Theme.Bad, Size = UDim2.new(1, 0, 0, 18), LayoutOrder = order, Parent = content,
			})
		end
	end)
end

-- Profile -----------------------------------------------------------------

function Panels.profile()
	open(player.DisplayName, Vector2.new(480, 440), function(content, data)
		local order = 0
		local function line(title, value)
			order += 1
			UI.row(content, order, title, value)
		end

		order += 1
		UI.heading(content, order, "Career")
		if data.job then
			local job = Config.Jobs[data.job]
			local toPromo = data.jobLevel >= Config.MAX_JOB_LEVEL and "Top of the ladder!"
				or ((Config.SHIFTS_PER_PROMOTION - data.shifts) .. " shifts until promotion")
			line(job.titles[data.jobLevel], job.name .. "  |  " .. Config.jobPay(data.job, data.jobLevel) .. " per shift")
			line("Promotion", toPromo)
		else
			line("Unemployed", "Visit a Job Board in town to get hired")
		end

		order += 1
		UI.heading(content, order, "Skills")
		line("Smarts: " .. data.skills.smarts, "Attend class at the School, or read books at home")
		line("Fitness: " .. data.skills.fitness, "Work out at the Gym")

		order += 1
		UI.heading(content, order, "Home")
		local level = Config.HouseLevels[data.house.level]
		line(level.name .. " (level " .. data.house.level .. ")",
			#data.furniture .. " / " .. level.maxFurniture .. " furniture placed  |  " .. data.likes .. " likes")
		local pet
		for _, entry in data.pets do
			if entry.uid == data.equippedPet then
				pet = entry
			end
		end
		line(pet and ("Buddy: " .. pet.name) or "No buddy out",
			pet and Config.describeBuff(pet.id) or (#data.pets .. " buddies in your collection"))
	end)
end

-- Guide -------------------------------------------------------------------

function Panels.guide()
	open("Berryvale Guide", Vector2.new(560, 520), function(content)
		local order = 0
		for _, section in Config.Guide do
			order += 1
			UI.label({
				Text = section.title, Size = UDim2.new(1, 0, 0, 28), TextXAlignment = Enum.TextXAlignment.Left,
				TextColor3 = section.color, LayoutOrder = order, Parent = content,
			})
			for _, line in section.lines do
				order += 1
				UI.label({
					Text = line, Font = Theme.BodyFont, TextScaled = false, TextSize = 16, TextWrapped = true,
					TextXAlignment = Enum.TextXAlignment.Left, AutomaticSize = Enum.AutomaticSize.Y,
					Size = UDim2.new(1, 0, 0, 20), LayoutOrder = order, Parent = content,
				})
			end
		end
	end)
end

-- Quests ------------------------------------------------------------------

function Panels.quests()
	open("Daily Quests", Vector2.new(520, 440), function(content, data)
		UI.label({
			Text = "Daily login rewards are in the Rewards calendar!",
			Font = Theme.BodyFont, TextColor3 = Theme.Muted, Size = UDim2.new(1, 0, 0, 20), LayoutOrder = 0, Parent = content,
		})
		local byId = {}
		for _, quest in Config.Quests do
			byId[quest.id] = quest
		end
		for i, entry in data.quests.list do
			local quest = byId[entry.id]
			if quest then
				local done = entry.progress >= quest.goal
				local buttonText = entry.claimed and "Claimed" or done and "Claim" or (entry.progress .. "/" .. quest.goal)
				local color = entry.claimed and Theme.Muted or done and Theme.Good or Theme.AccentLight
				UI.row(content, i, quest.text, ("Reward: %d %s"):format(quest.reward, Config.CURRENCY), buttonText, color, function()
					if done and not entry.claimed then
						Remotes.get("ClaimQuest"):FireServer(i)
					end
				end)
			end
		end
		UI.label({
			Text = "New quests every day at midnight Eastern Time.", Font = Theme.BodyFont, TextColor3 = Theme.Muted,
			Size = UDim2.new(1, 0, 0, 18), LayoutOrder = 100, Parent = content,
		})
	end)
end

return Panels
