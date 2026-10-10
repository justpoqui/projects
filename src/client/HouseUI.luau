-- "My House" window (upgrades and styles) and the Visit list.

local Players = game:GetService("Players")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)
local Remotes = require(Shared.Remotes)

local UI = require(script.Parent.UI)
local State = require(script.Parent.State)

local Theme = UI.Theme
local HouseUI = {}

local player = Players.LocalPlayer
local refresh = nil

State.onChange(function()
	if refresh then
		refresh()
	end
end)

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

local KIND_TITLES = { wall = "Wall Paint", floor = "Flooring", roof = "Roof" }
local KIND_ORDER = { "wall", "floor", "roof" }

function HouseUI.house()
	open("My House", Vector2.new(560, 520), function(content, data)
		local order = 0
		local function nextOrder()
			order += 1
			return order
		end
		if not player:GetAttribute("PlotIndex") then
			UI.label({
				Text = "You don't have a house on this server.", Font = Theme.BodyFont,
				Size = UDim2.new(1, 0, 0, 22), LayoutOrder = nextOrder(), Parent = content,
			})
			return
		end

		local level = data.house.level
		local info = Config.HouseLevels[level]
		local nextInfo = Config.HouseLevels[level + 1]
		UI.heading(content, nextOrder(), "Size")
		UI.row(content, nextOrder(), ("%s (level %d)"):format(info.name, level),
			("%d / %d furniture  |  %d likes"):format(#data.furniture, info.maxFurniture, data.likes))
		if nextInfo then
			UI.row(content, nextOrder(), "Upgrade to " .. nextInfo.name,
				("Bigger rooms, room for %d furniture"):format(nextInfo.maxFurniture),
				"Buy " .. nextInfo.price, data.bucks >= nextInfo.price and Theme.Good or Theme.Muted, function()
					Remotes.get("UpgradeHouse"):FireServer()
				end)
		else
			UI.row(content, nextOrder(), "Fully upgraded!", "You live in the biggest house in Berryvale.")
		end

		for _, kind in KIND_ORDER do
			UI.heading(content, nextOrder(), KIND_TITLES[kind])
			local list = {}
			for id, style in Config.HouseStyles[kind] do
				table.insert(list, { id = id, style = style })
			end
			table.sort(list, function(a, b)
				if a.style.price == b.style.price then
					return a.style.name < b.style.name
				end
				return a.style.price < b.style.price
			end)
			for _, entry in list do
				local style = entry.style
				local inUse = data.house.style[kind] == entry.id
				local owned = style.price == 0 or data.house.owned[kind .. ":" .. entry.id]
				local buttonText = inUse and "In Use" or owned and "Use" or ("Buy " .. style.price)
				local color = inUse and Theme.Muted or owned and Theme.Accent
					or (data.bucks >= style.price and Theme.Good or Theme.Muted)
				local row = UI.row(content, nextOrder(), "      " .. style.name,
					owned and "Owned" or (style.material and (style.material .. " finish") or "Paint"),
					buttonText, color, function()
						if not inUse then
							Remotes.get("SetHouseStyle"):FireServer(kind, entry.id)
						end
					end)
				UI.new("Frame", {
					Size = UDim2.fromOffset(26, 26), Position = UDim2.fromOffset(12, 6),
					BackgroundColor3 = style.color, Parent = row,
				}, { UI.corner(8), UI.stroke(Theme.Text, 1) })
			end
		end
	end)
end

function HouseUI.visit()
	open("Visit Neighbors", Vector2.new(520, 460), function(content)
		local order = 0
		for _, other in Players:GetPlayers() do
			if other ~= player and other:GetAttribute("PlotIndex") then
				order += 1
				local likes = other:GetAttribute("HouseLikes") or 0
				local row = UI.row(content, order, other.DisplayName .. "'s House", likes .. " likes", "Visit", Theme.Good, function()
					UI.closeWindow()
					Remotes.get("Teleport"):FireServer("visit", other.UserId)
				end)
				UI.button({
					Text = "Like", Color = Theme.Pink, Size = UDim2.fromOffset(70, 40), AnchorPoint = Vector2.new(1, 0.5),
					Position = UDim2.new(1, -140, 0.5, 0), Parent = row, OnClick = function()
						Remotes.get("LikeHouse"):FireServer(other.UserId)
					end,
				})
			end
		end
		if order == 0 then
			UI.label({
				Text = "Nobody else is here yet. Invite your friends!", Font = Theme.BodyFont,
				TextColor3 = Theme.Muted, Size = UDim2.new(1, 0, 0, 22), LayoutOrder = 1, Parent = content,
			})
		end
		UI.label({
			Text = "You can like each house once a day. Most-liked houses show on the board in the Town Square!",
			Font = Theme.BodyFont, TextColor3 = Theme.Muted, TextWrapped = true, TextScaled = false, TextSize = 14,
			Size = UDim2.new(1, 0, 0, 36), LayoutOrder = 100, Parent = content,
		})
	end)
end

return HouseUI
