-- Banner at the top of the screen for Tuesday events: shows the posted event
-- with a countdown, then a "happening now" timer while it runs.

local ReplicatedStorage = game:GetService("ReplicatedStorage")

local Shared = ReplicatedStorage:WaitForChild("Shared")
local Config = require(Shared.Config)

local UI = require(script.Parent.UI)

local EventBanner = {}

local byId = {}
for _, event in Config.Events do
	byId[event.id] = event
end

function EventBanner.init()
	local banner = UI.new("TextLabel", {
		Name = "EventBanner", AnchorPoint = Vector2.new(0.5, 0), Position = UDim2.new(0.5, 0, 0, 8),
		Size = UDim2.fromOffset(380, 40), BackgroundColor3 = Color3.fromRGB(230, 80, 120), Font = UI.Theme.Font,
		TextScaled = true, TextColor3 = Color3.new(1, 1, 1), Visible = false, Parent = UI.Screen,
	}, { UI.corner(12), UI.padding(6), UI.stroke(Color3.new(1, 1, 1), 2) })

	task.spawn(function()
		while true do
			local event = byId[ReplicatedStorage:GetAttribute("EventId")]
			local start = ReplicatedStorage:GetAttribute("EventStart")
			local finish = ReplicatedStorage:GetAttribute("EventEnd")
			if event and start and finish then
				local now = os.time()
				banner.Visible = true
				if now < start then
					local left = start - now
					banner.Text = ("📢 %s %s in %d:%02d"):format(event.icon, event.name, left // 60, left % 60)
					banner.BackgroundColor3 = Color3.fromRGB(230, 80, 120)
				else
					local left = math.max(0, finish - now)
					banner.Text = ("%s %s NOW! %d:%02d left"):format(event.icon, event.name, left // 60, left % 60)
					banner.BackgroundColor3 = Color3.fromRGB(90, 190, 110)
				end
			else
				banner.Visible = false
			end
			task.wait(0.5)
		end
	end)
end

return EventBanner
