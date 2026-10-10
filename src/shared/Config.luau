-- Game-wide tuning and catalog data. Shared by server and client.

local Config = {}

Config.CURRENCY = "Berrybucks"
Config.STARTING_BUCKS = 250
Config.MAX_STAT = 100
Config.MAX_FURNITURE = 40
Config.SHOP_RANGE = 30 -- studs a player may be from a shop counter to buy

-- Needs drain once per NEEDS_TICK seconds
Config.NEEDS_TICK = 10
Config.HUNGER_DRAIN = 1
Config.ENERGY_DRAIN = 0.5
Config.HAPPINESS_DRAIN = 0.5
-- Extra happiness drain while starving
Config.STARVING_HAPPINESS_DRAIN = 2

Config.ACTIVITY_COOLDOWN = 20 -- seconds between school / gym / furniture activities

-- Arcade
Config.ARCADE_DURATION = 30
Config.ARCADE_MAX_SCORE = 120 -- anything above this is rejected as impossible
Config.ARCADE_BUCKS_PER_POINT = 0.5
Config.ARCADE_MAX_PAYOUT = 50
Config.ARCADE_COOLDOWN = 15

Config.Stores = {
	grocery = { name = "Berryvale Grocery" },
	furniture = { name = "Cozy Home Furnishings" },
	buddies = { name = "Buddy Barn" },
}

-- Item catalog.
-- category: "food" | "furniture" | "buddy"
-- food: hunger / happiness / energy restored when eaten
-- furniture: size (studs), color, activity (optional interaction once placed)
-- buddy: color, accent
Config.Items = {
	-- Food (Grocery)
	cereal = { name = "Berry Crunch Cereal", category = "food", store = "grocery", price = 15, hunger = 25 },
	toast = { name = "Buttered Toast", category = "food", store = "grocery", price = 8, hunger = 15 },
	apple = { name = "Crisp Apple", category = "food", store = "grocery", price = 5, hunger = 10, energy = 5 },
	pancakes = { name = "Pancake Stack", category = "food", store = "grocery", price = 25, hunger = 35 },
	smoothie = { name = "Berry Smoothie", category = "food", store = "grocery", price = 18, hunger = 15, happiness = 10, energy = 10 },
	pizza = { name = "Pizza Slice", category = "food", store = "grocery", price = 30, hunger = 40, happiness = 5 },
	cake = { name = "Birthday Cake", category = "food", store = "grocery", price = 45, hunger = 20, happiness = 30 },

	-- Furniture
	bed = {
		name = "Comfy Bed", category = "furniture", store = "furniture", price = 120,
		size = Vector3.new(7, 2, 10), color = Color3.fromRGB(110, 140, 220), activity = "sleep",
	},
	sofa = {
		name = "Plush Sofa", category = "furniture", store = "furniture", price = 90,
		size = Vector3.new(9, 3, 4), color = Color3.fromRGB(200, 90, 90), activity = "relax",
	},
	tv = {
		name = "Flat TV", category = "furniture", store = "furniture", price = 150,
		size = Vector3.new(6, 4, 1), color = Color3.fromRGB(30, 30, 35), activity = "watch",
	},
	bookshelf = {
		name = "Bookshelf", category = "furniture", store = "furniture", price = 80,
		size = Vector3.new(6, 8, 2), color = Color3.fromRGB(130, 90, 55), activity = "read",
	},
	table = {
		name = "Kitchen Table", category = "furniture", store = "furniture", price = 60,
		size = Vector3.new(6, 3, 4), color = Color3.fromRGB(170, 120, 75),
	},
	chair = {
		name = "Wooden Chair", category = "furniture", store = "furniture", price = 25,
		size = Vector3.new(2, 4, 2), color = Color3.fromRGB(150, 105, 65),
	},
	lamp = {
		name = "Floor Lamp", category = "furniture", store = "furniture", price = 35,
		size = Vector3.new(2, 6, 2), color = Color3.fromRGB(250, 230, 160),
	},
	plant = {
		name = "Potted Plant", category = "furniture", store = "furniture", price = 20,
		size = Vector3.new(2, 4, 2), color = Color3.fromRGB(70, 160, 80),
	},
	rug = {
		name = "Round Rug", category = "furniture", store = "furniture", price = 30,
		size = Vector3.new(8, 0.2, 8), color = Color3.fromRGB(220, 170, 210),
	},
	arcade = {
		name = "Home Arcade Cabinet", category = "furniture", store = "furniture", price = 250,
		size = Vector3.new(3, 6, 3), color = Color3.fromRGB(120, 60, 200), activity = "play",
	},

	-- Buddies (pets)
	puppy = { name = "Puppy", category = "buddy", store = "buddies", price = 200, color = Color3.fromRGB(190, 140, 90), accent = Color3.fromRGB(120, 80, 50) },
	kitten = { name = "Kitten", category = "buddy", store = "buddies", price = 200, color = Color3.fromRGB(240, 170, 80), accent = Color3.fromRGB(255, 255, 255) },
	bunny = { name = "Bunny", category = "buddy", store = "buddies", price = 175, color = Color3.fromRGB(245, 245, 245), accent = Color3.fromRGB(255, 180, 200) },
	robot = { name = "Robo-Buddy", category = "buddy", store = "buddies", price = 450, color = Color3.fromRGB(160, 170, 185), accent = Color3.fromRGB(80, 200, 255) },
	dragon = { name = "Baby Dragon", category = "buddy", store = "buddies", price = 900, color = Color3.fromRGB(80, 190, 110), accent = Color3.fromRGB(250, 200, 60) },
}

-- Furniture activities: what interacting with placed furniture does
Config.Activities = {
	sleep = { prompt = "Sleep", energy = 45, happiness = 5, message = "You took a nap. Zzz..." },
	relax = { prompt = "Relax", happiness = 15, energy = 5, message = "You kicked back on the sofa." },
	watch = { prompt = "Watch TV", happiness = 20, energy = -5, message = "You watched some cartoons!" },
	read = { prompt = "Read a Book", smarts = 1, energy = -5, message = "You read a book. +1 Smarts" },
	play = { prompt = "Play Arcade", arcade = true },
}

-- Jobs. Pay is per shift and grows 25% per promotion level.
Config.MAX_JOB_LEVEL = 5
Config.SHIFTS_PER_PROMOTION = 5
Config.WORK_COOLDOWN = 20

Config.Jobs = {
	factory = {
		name = "Cereal Factory Worker", building = "factory",
		pay = 30, energyCost = 15, req = {},
		titles = { "Box Folder", "Line Worker", "Flake Inspector", "Shift Lead", "Factory Manager" },
	},
	grocer = {
		name = "Grocery Clerk", building = "grocery",
		pay = 40, energyCost = 12, req = { smarts = 2 },
		titles = { "Bagger", "Cashier", "Stock Lead", "Assistant Manager", "Store Manager" },
	},
	mail = {
		name = "Mail Carrier", building = "postoffice",
		pay = 50, energyCost = 20, req = { fitness = 3 },
		titles = { "Sorter", "Mail Carrier", "Route Lead", "Postmaster", "Head Postmaster" },
	},
	scientist = {
		name = "Lab Scientist", building = "lab",
		pay = 75, energyCost = 15, req = { smarts = 8 },
		titles = { "Lab Assistant", "Researcher", "Scientist", "Senior Scientist", "Chief Scientist" },
	},
	cityhall = {
		name = "City Hall Staffer", building = "townhall",
		pay = 100, energyCost = 18, req = { smarts = 12, fitness = 6 },
		titles = { "Clerk", "Aide", "Councilmember", "Deputy Mayor", "Mayor" },
	},
}

-- Skill-building places
Config.Training = {
	school = { skill = "smarts", energyCost = 10, prompt = "Attend Class", message = "You learned something new! +1 Smarts" },
	gym = { skill = "fitness", energyCost = 15, prompt = "Work Out", message = "Feel the burn! +1 Fitness" },
}

function Config.jobPay(jobId, level)
	local job = Config.Jobs[jobId]
	if not job then
		return 0
	end
	return math.floor(job.pay * (1 + 0.25 * (level - 1)))
end

return Config
