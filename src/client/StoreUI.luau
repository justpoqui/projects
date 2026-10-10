-- Robux Store window: developer products and game passes.

local MarketplaceService = game:GetService("MarketplaceService")
local Players = game:GetService("Players")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Config = require(Shared.Config)

local UI = require(script.Parent.UI)

local Theme = UI.Theme
local StoreUI = {}

local player = Players.LocalPlayer
local priceCache = {} -- [id] = live Robux price from Roblox

-- Asks Roblox for the real price so the button matches what the player pays.
local function livePrice(id, infoType, fallback)
	if priceCache[id] then
		return priceCache[id]
	end
	local ok, info = pcall(function()
		return MarketplaceService:GetProductInfo(id, infoType)
	end)
	if ok and info and info.PriceInRobux then
		priceCache[id] = info.PriceInRobux
		return info.PriceInRobux
	end
	return fallback
end

function StoreUI.open()
	local _, content = UI.window("Robux Store", Vector2.new(560, 520))
	local order = 0
	local function nextOrder()
		order += 1
		return order
	end

	UI.label({
		Text = "Support Berryvale and get goodies! Purchases go to the game's creator.", Font = Theme.BodyFont,
		TextColor3 = Theme.Muted, TextWrapped = true, Size = UDim2.new(1, 0, 0, 22), LayoutOrder = nextOrder(),
		Parent = content,
	})

	UI.heading(content, nextOrder(), "Game Passes (keep forever)")
	for _, pass in Config.Passes do
		local owned = player:GetAttribute("Pass_" .. pass.key)
		local ready = pass.id ~= 0
		local _, button = UI.row(content, nextOrder(), pass.name, pass.perks,
			owned and "Owned" or ready and ("R$ " .. pass.robux) or "Coming soon",
			owned and Theme.Muted or ready and Theme.Good or Theme.Muted, function()
				if ready and not player:GetAttribute("Pass_" .. pass.key) then
					MarketplaceService:PromptGamePassPurchase(player, pass.id)
				end
			end)
		if ready and not owned then
			task.spawn(function()
				local price = livePrice(pass.id, Enum.InfoType.GamePass, pass.robux)
				if button.Parent then
					button.Text = "R$ " .. price
				end
			end)
		end
	end

	UI.heading(content, nextOrder(), "Goodies (buy anytime)")
	for _, product in Config.Products do
		local ready = product.id ~= 0
		local subtitle = product.bucks and ("+" .. product.bucks .. " " .. Config.CURRENCY)
			or "Opens a Royal Buddy Box right away"
		local _, button = UI.row(content, nextOrder(), product.name, subtitle,
			ready and ("R$ " .. product.robux) or "Coming soon", ready and Theme.Good or Theme.Muted, function()
				if ready then
					MarketplaceService:PromptProductPurchase(player, product.id)
				end
			end)
		if ready then
			task.spawn(function()
				local price = livePrice(product.id, Enum.InfoType.Product, product.robux)
				if button.Parent then
					button.Text = "R$ " .. price
				end
			end)
		end
	end
end

return StoreUI
