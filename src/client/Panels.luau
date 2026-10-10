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

local function sortedItems(filter)
	local list = {}
	for id, item in Config.Items do
		if filter(id, item) then
			table.insert(list, { id = id, item = item })
		end
	end
	table.sort(list, function(a, b)
		if a.item.price == b.item.price then
			return a.item.name < b.item.name
		end
		return a.item.price < b.item.price
	end)
	return list
end

local function describe(item)
	local parts = {}
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
		table.insert(parts, activity and ("Use it to " .. activity.prompt:lower()) or "Decoration")
	elseif item.category == "buddy" then
		table.insert(parts, "A loyal buddy who follows you around")
	end
	return table.concat(parts, "  ")
end

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

function Panels.shop(storeId)
	local store = Config.Stores[storeId]
	if not store then
		return
	end
	open(store.name, Vector2.new(540, 460), function(content, data)
		UI.label({
			Text = "You have " .. data.bucks .. " " .. Config.CURRENCY, Font = Theme.BodyFont,
			TextColor3 = Theme.Muted, Size = UDim2.new(1, 0, 0, 22), LayoutOrder = 0, Parent = content,
		})
		local items = sortedItems(function(_, item)
			return item.store == storeId
		end)
		for i, entry in items do
			local item = entry.item
			local owned = data.inventory[entry.id] or 0
			local subtitle = describe(item)
			if owned > 0 then
				subtitle ..= "  (own " .. owned .. ")"
			end
			local adopted = item.category == "buddy" and owned > 0
			local affordable = data.bucks >= item.price
			UI.row(content, i, item.name, subtitle,
				adopted and "Adopted" or ("Buy " .. item.price),
				(adopted or not affordable) and Theme.Muted or Theme.Good,
				function()
					if not adopted then
						Remotes.get("BuyItem"):FireServer(entry.id)
					end
				end)
		end
	end)
end

-- Backpack ----------------------------------------------------------------

function Panels.backpack(actions)
	open("Backpack", Vector2.new(540, 480), function(content, data)
		local order = 0
		local function section(title, category)
			local items = sortedItems(function(id, item)
				return item.category == category and (data.inventory[id] or 0) > 0
			end)
			order += 1
			UI.heading(content, order, title)
			if #items == 0 then
				order += 1
				UI.label({
					Text = "Nothing here yet. Visit the shops in town!", Font = Theme.BodyFont,
					TextColor3 = Theme.Muted, Size = UDim2.new(1, 0, 0, 20), LayoutOrder = order, Parent = content,
				})
			end
			for _, entry in items do
				order += 1
				local item = entry.item
				local count = data.inventory[entry.id]
				local label = item.name .. (count > 1 and (" x" .. count) or "")
				if category == "food" then
					UI.row(content, order, label, describe(item), "Eat", Theme.Good, function()
						Remotes.get("UseItem"):FireServer(entry.id)
					end)
				elseif category == "furniture" then
					UI.row(content, order, label, describe(item), "Place", Theme.Accent, function()
						UI.closeWindow()
						actions.place(entry.id)
					end)
				else
					local walking = data.buddy == entry.id
					UI.row(content, order, label, walking and "Following you" or describe(item),
						walking and "Put Away" or "Walk", walking and Theme.Pink or Theme.Good, function()
							if walking then
								Remotes.get("UnequipBuddy"):FireServer()
							else
								Remotes.get("UseItem"):FireServer(entry.id)
							end
						end)
				end
			end
		end
		section("Food", "food")
		section("Furniture", "furniture")
		section("Buddies", "buddy")
		order += 1
		UI.label({
			Text = "Tip: placed furniture can be picked back up by holding F next to it.", Font = Theme.BodyFont,
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

function Panels.jobBoard(buildingId)
	open("Job Board", Vector2.new(540, 420), function(content, data)
		local order = 0
		for jobId, job in Config.Jobs do
			if job.building == buildingId then
				order += 1
				local mine = data.job == jobId
				local subtitle = ("Pays %d per shift  |  %s"):format(Config.jobPay(jobId, 1), requirementText(job))
				if mine then
					subtitle = ("You are a %s (level %d)"):format(job.titles[data.jobLevel], data.jobLevel)
				end
				UI.row(content, order, job.name, subtitle, mine and "Quit" or "Apply", mine and Theme.Bad or Theme.Good, function()
					Remotes.get("ApplyJob"):FireServer(mine and "quit" or jobId)
				end)
			end
		end
		order += 1
		UI.heading(content, order, "Other jobs around town")
		for jobId, job in Config.Jobs do
			if job.building ~= buildingId then
				order += 1
				UI.row(content, order, job.name,
					("Pays %d  |  %s"):format(Config.jobPay(jobId, 1), requirementText(job)))
			end
		end
		if data.job and Config.Jobs[data.job].building ~= buildingId then
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
		line(#data.furniture .. " / " .. Config.MAX_FURNITURE .. " furniture placed",
			data.buddy and ("Buddy: " .. Config.Items[data.buddy].name) or "No buddy out")
	end)
end

return Panels
