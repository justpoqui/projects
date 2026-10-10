-- Shows the current job task at the top of the screen, puts a glowing marker
-- on the station (or mailbox) to go to, and only enables that station's prompt.

local Players = game:GetService("Players")
local RunService = game:GetService("RunService")

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Remotes = require(Shared.Remotes)

local UI = require(script.Parent.UI)

local Theme = UI.Theme
local JobTracker = {}

local player = Players.LocalPlayer
local stepPrompts = {} -- [ProximityPrompt] = true for every JobStep prompt

local panel = UI.new("Frame", {
	Name = "JobTask", AnchorPoint = Vector2.new(0.5, 0), Position = UDim2.new(0.5, 0, 0, 62),
	Size = UDim2.new(0.6, 0, 0, 64), BackgroundColor3 = Theme.Panel, Visible = false, Parent = UI.Screen,
}, {
	UI.corner(14), UI.stroke(Color3.fromRGB(120, 200, 255), 3),
	UI.new("UISizeConstraint", { MaxSize = Vector2.new(520, 64) }),
})
local title = UI.label({
	Text = "", Size = UDim2.new(1, -110, 0, 26), Position = UDim2.fromOffset(12, 6),
	TextXAlignment = Enum.TextXAlignment.Left, Parent = panel,
})
local detail = UI.label({
	Text = "", Font = Theme.BodyFont, TextColor3 = Theme.Muted, Size = UDim2.new(1, -110, 0, 20),
	Position = UDim2.fromOffset(12, 36), TextXAlignment = Enum.TextXAlignment.Left, Parent = panel,
})
UI.button({
	Text = "Cancel", Color = Theme.Bad, Size = UDim2.fromOffset(86, 36), AnchorPoint = Vector2.new(1, 0.5),
	Position = UDim2.new(1, -12, 0.5, 0), Parent = panel, OnClick = function()
		Remotes.get("CancelShift"):FireServer()
	end,
})

local highlight = Instance.new("Highlight")
highlight.FillColor = Color3.fromRGB(120, 200, 255)
highlight.OutlineColor = Color3.new(1, 1, 1)
highlight.FillTransparency = 0.5
highlight.DepthMode = Enum.HighlightDepthMode.AlwaysOnTop

local marker = Instance.new("BillboardGui")
marker.Size = UDim2.fromOffset(120, 50)
marker.StudsOffset = Vector3.new(0, 5, 0)
marker.AlwaysOnTop = true
local markerText = Instance.new("TextLabel")
markerText.Size = UDim2.fromScale(1, 1)
markerText.BackgroundTransparency = 1
markerText.Font = Enum.Font.FredokaOne
markerText.TextScaled = true
markerText.TextColor3 = Color3.fromRGB(120, 220, 255)
markerText.TextStrokeTransparency = 0.2
markerText.Parent = marker

local target = nil -- the BasePart to go to

local function refresh()
	local step = player:GetAttribute("JobStep")
	target = nil
	for prompt in stepPrompts do
		local mine = step ~= nil and prompt:GetAttribute("Target") == step
		prompt.Enabled = mine
		if mine and prompt.Parent and prompt.Parent:IsA("BasePart") then
			target = prompt.Parent
		end
	end
	panel.Visible = step ~= nil
	if step then
		title.Text = player:GetAttribute("JobTask") or ""
	end
	-- Both are created on this client only, so nobody else sees them.
	highlight.Parent = target
	marker.Adornee = target
	marker.Parent = target and player:FindFirstChildOfClass("PlayerGui") or nil
end

function JobTracker.register(prompt)
	if prompt:GetAttribute("Action") == "JobStep" then
		stepPrompts[prompt] = true
		prompt.Destroying:Connect(function()
			stepPrompts[prompt] = nil
		end)
		refresh()
	end
end

player:GetAttributeChangedSignal("JobStep"):Connect(refresh)
player:GetAttributeChangedSignal("JobTask"):Connect(refresh)

RunService.Heartbeat:Connect(function()
	if not panel.Visible then
		return
	end
	local deadline = player:GetAttribute("JobDeadline")
	local left = deadline and math.max(0, deadline - os.time()) or 0
	detail.Text = ("Step %s  |  %d:%02d left"):format(player:GetAttribute("JobProgress") or "?", left // 60, left % 60)
	local character = player.Character
	local root = character and character:FindFirstChild("HumanoidRootPart")
	if target and root then
		markerText.Text = ("▼ %dm"):format(math.floor((target.Position - root.Position).Magnitude))
	end
end)

return JobTracker
