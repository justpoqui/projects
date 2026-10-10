-- Holds the latest copy of this player's profile from the server.

local Shared = game:GetService("ReplicatedStorage"):WaitForChild("Shared")
local Remotes = require(Shared.Remotes)

local State = {
	data = nil,
}

local listeners = {}

function State.onChange(fn)
	table.insert(listeners, fn)
	if State.data then
		task.spawn(fn, State.data)
	end
end

local function set(data)
	State.data = data
	for _, fn in listeners do
		task.spawn(fn, data)
	end
end

Remotes.get("DataUpdated").OnClientEvent:Connect(set)
task.spawn(function()
	local data = Remotes.get("GetData"):InvokeServer()
	if data and not State.data then
		set(data)
	end
end)

return State
