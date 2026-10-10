-- Wardrobe window opened from the closet in your house: skin tone and
-- Berry Boutique clothing.

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)
local Remotes = require(Shared.Remotes)

local UI = require(script.Parent.UI)
local State = require(script.Parent.State)

local Theme = UI.Theme
local ClosetUI = {}

local refresh = nil
State.onChange(function()
	if refresh then
		refresh()
	end
end)

local SLOT_TITLES = { { "hat", "Hats" }, { "face", "Glasses" }, { "back", "Back" } }

local function render(content, data)
	local order = 0
	local function nextOrder()
		order += 1
		return order
	end

	UI.heading(content, nextOrder(), "Skin Tone")
	local swatches = UI.new("Frame", {
		Size = UDim2.new(1, 0, 0, 44), BackgroundTransparency = 1, LayoutOrder = nextOrder(), Parent = content,
	}, {
		UI.new("UIListLayout", {
			FillDirection = Enum.FillDirection.Horizontal, Padding = UDim.new(0, 6), SortOrder = Enum.SortOrder.LayoutOrder,
		}),
	})
	UI.button({
		Text = "Default", Color = data.skin == 0 and Theme.Accent or Theme.Muted, Size = UDim2.fromOffset(70, 40),
		LayoutOrder = 0, Parent = swatches, OnClick = function()
			Remotes.get("SetSkinTone"):FireServer(0)
		end,
	})
	for i, tone in Config.SkinTones do
		local swatch = UI.button({
			Text = data.skin == i and "✓" or "", Color = tone, TextColor3 = Theme.Text, Size = UDim2.fromOffset(36, 40),
			LayoutOrder = i, Parent = swatches, OnClick = function()
				Remotes.get("SetSkinTone"):FireServer(i)
			end,
		})
		UI.stroke(data.skin == i and Theme.Accent or Color3.new(1, 1, 1), 2).Parent = swatch
	end

	for _, pair in SLOT_TITLES do
		local slot, title = pair[1], pair[2]
		UI.heading(content, nextOrder(), title)
		local any = false
		local ids = {}
		for id, item in Config.Items do
			if item.category == "clothing" and item.slot == slot and (data.inventory[id] or 0) > 0 then
				table.insert(ids, id)
			end
		end
		table.sort(ids, function(a, b)
			return (table.find(Config.TierOrder, Config.Items[a].tier) or 0) < (table.find(Config.TierOrder, Config.Items[b].tier) or 0)
		end)
		for _, id in ids do
			any = true
			local item = Config.Items[id]
			local wearing = data.outfit[slot] == id
			UI.row(content, nextOrder(), item.name, item.tier .. (wearing and "  |  Wearing now" or ""),
				wearing and "Take Off" or "Wear", wearing and Theme.Pink or Theme.Good, function()
					if wearing then
						Remotes.get("TakeOff"):FireServer(slot)
					else
						Remotes.get("UseItem"):FireServer(id)
					end
				end)
		end
		if not any then
			UI.label({
				Text = "None yet - open Style Berry Boxes at the Berry Boutique!", Font = Theme.BodyFont,
				TextColor3 = Theme.Muted, Size = UDim2.new(1, 0, 0, 20), LayoutOrder = nextOrder(), Parent = content,
			})
		end
	end
end

function ClosetUI.open()
	local _, content = UI.window("My Closet", Vector2.new(560, 520), function()
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

return ClosetUI
