-- Game-wide tuning and catalog data. Shared by server and client.

local Config = {}

Config.CURRENCY = "Berrybucks"
Config.STARTING_BUCKS = 250
Config.MAX_STAT = 100
Config.SHOP_RANGE = 30 -- studs a player may be from a shop counter to buy

-- Needs drain once per NEEDS_TICK seconds
Config.NEEDS_TICK = 10
Config.HUNGER_DRAIN = 1
Config.ENERGY_DRAIN = 0.5
Config.HAPPINESS_DRAIN = 0.5
-- Extra happiness drain while starving
Config.STARVING_HAPPINESS_DRAIN = 2

Config.ACTIVITY_COOLDOWN = 20 -- seconds between school / gym / furniture activities

-- Berry Catch round length (seconds)
Config.ARCADE_DURATION = 30

Config.Stores = {
	grocery = { name = "Berryvale Grocery" },
	furniture = { name = "Cozy Home Furnishings" },
	buddies = { name = "Buddy Barn" },
	boutique = { name = "Berry Boutique" },
}

-- Item catalog. Items come out of Berry Boxes (see Config.Boxes) at their
-- tier's odds; only buddy food has a direct price.
-- category: "food" | "furniture" | "clothing" | "petfood"
-- food: hunger / happiness / energy restored when eaten
-- furniture: size (studs), color, activity (optional interaction once placed)
-- petfood: feeds your buddy; clothing: slot
Config.Items = {
	-- Food (Grocery)
	cereal = { name = "Berry Crunch Cereal", category = "food", store = "grocery", tier = "Common", hunger = 25 },
	toast = { name = "Buttered Toast", category = "food", store = "grocery", tier = "Common", hunger = 15 },
	apple = { name = "Crisp Apple", category = "food", store = "grocery", tier = "Common", hunger = 10, energy = 5 },
	pancakes = { name = "Pancake Stack", category = "food", store = "grocery", tier = "Uncommon", hunger = 35 },
	smoothie = { name = "Berry Smoothie", category = "food", store = "grocery", tier = "Uncommon", hunger = 15, happiness = 10, energy = 10 },
	pizza = { name = "Pizza Slice", category = "food", store = "grocery", tier = "Rare", hunger = 40, happiness = 5 },
	cake = { name = "Birthday Cake", category = "food", store = "grocery", tier = "Epic", hunger = 20, happiness = 30 },
	goldpie = { name = "Golden Berry Pie", category = "food", store = "grocery", tier = "Legendary", hunger = 100, happiness = 50, energy = 50 },

	-- Furniture
	bed = {
		name = "Comfy Bed", category = "furniture", store = "furniture", tier = "Rare",
		size = Vector3.new(7, 2, 10), color = Color3.fromRGB(110, 140, 220), activity = "sleep",
	},
	sofa = {
		name = "Plush Sofa", category = "furniture", store = "furniture", tier = "Uncommon",
		size = Vector3.new(9, 3, 4), color = Color3.fromRGB(200, 90, 90), activity = "relax",
	},
	tv = {
		name = "Flat TV", category = "furniture", store = "furniture", tier = "Rare",
		size = Vector3.new(6, 4, 1), color = Color3.fromRGB(30, 30, 35), activity = "watch",
	},
	bookshelf = {
		name = "Bookshelf", category = "furniture", store = "furniture", tier = "Uncommon",
		size = Vector3.new(6, 8, 2), color = Color3.fromRGB(130, 90, 55), activity = "read",
	},
	table = {
		name = "Kitchen Table", category = "furniture", store = "furniture", tier = "Uncommon",
		size = Vector3.new(6, 3, 4), color = Color3.fromRGB(170, 120, 75),
	},
	chair = {
		name = "Wooden Chair", category = "furniture", store = "furniture", tier = "Common",
		size = Vector3.new(2, 4, 2), color = Color3.fromRGB(150, 105, 65),
	},
	lamp = {
		name = "Floor Lamp", category = "furniture", store = "furniture", tier = "Common",
		size = Vector3.new(2, 6, 2), color = Color3.fromRGB(250, 230, 160),
	},
	plant = {
		name = "Potted Plant", category = "furniture", store = "furniture", tier = "Common",
		size = Vector3.new(2, 4, 2), color = Color3.fromRGB(70, 160, 80),
	},
	rug = {
		name = "Round Rug", category = "furniture", store = "furniture", tier = "Common",
		size = Vector3.new(8, 0.2, 8), color = Color3.fromRGB(220, 170, 210),
	},
	arcade = {
		name = "Home Arcade Cabinet", category = "furniture", store = "furniture", tier = "Epic",
		size = Vector3.new(3, 6, 3), color = Color3.fromRGB(120, 60, 200), activity = "play",
	},

	throne = {
		name = "Golden Throne", category = "furniture", store = "furniture", tier = "Legendary",
		size = Vector3.new(4, 7, 4), color = Color3.fromRGB(255, 200, 60), activity = "royal",
	},

	-- Buddy food (bought directly) (keeps your buddy's buff active)
	kibble = { name = "Buddy Kibble", category = "petfood", store = "buddies", price = 10, petHunger = 40 },
	treat = { name = "Buddy Treat", category = "petfood", store = "buddies", price = 25, petHunger = 100 },

	-- Clothing (Berry Boutique). slot: "hat" | "face" | "back"
	cap = { name = "Berry Cap", category = "clothing", store = "boutique", tier = "Common", slot = "hat", color = Color3.fromRGB(150, 80, 200) },
	beanie = { name = "Cozy Beanie", category = "clothing", store = "boutique", tier = "Common", slot = "hat", color = Color3.fromRGB(255, 120, 170) },
	partyhat = { name = "Party Hat", category = "clothing", store = "boutique", tier = "Uncommon", slot = "hat", color = Color3.fromRGB(90, 200, 255) },
	tophat = { name = "Fancy Top Hat", category = "clothing", store = "boutique", tier = "Rare", slot = "hat", color = Color3.fromRGB(30, 30, 35) },
	crown = { name = "Golden Crown", category = "clothing", store = "boutique", tier = "Legendary", slot = "hat", color = Color3.fromRGB(255, 200, 60) },
	sunglasses = { name = "Cool Shades", category = "clothing", store = "boutique", tier = "Uncommon", slot = "face", color = Color3.fromRGB(20, 20, 25) },
	nerdglasses = { name = "Smart Specs", category = "clothing", store = "boutique", tier = "Common", slot = "face", color = Color3.fromRGB(120, 70, 40) },
	backpack = { name = "School Backpack", category = "clothing", store = "boutique", tier = "Uncommon", slot = "back", color = Color3.fromRGB(80, 170, 255) },
	cape = { name = "Hero Cape", category = "clothing", store = "boutique", tier = "Rare", slot = "back", color = Color3.fromRGB(220, 50, 70) },
	wings = { name = "Fairy Wings", category = "clothing", store = "boutique", tier = "Epic", slot = "back", color = Color3.fromRGB(200, 240, 255) },
}

-- Furniture activities: what interacting with placed furniture does
Config.Activities = {
	sleep = { prompt = "Sleep", energy = 45, happiness = 5, message = "You took a nap. Zzz..." },
	relax = { prompt = "Relax", happiness = 15, energy = 5, message = "You kicked back on the sofa." },
	watch = { prompt = "Watch TV", happiness = 20, energy = -5, message = "You watched some cartoons!" },
	read = { prompt = "Read a Book", smarts = 1, energy = -5, message = "You read a book. +1 Smarts" },
	play = { prompt = "Play Arcade", arcade = true },
	royal = { prompt = "Sit on Throne", happiness = 40, energy = 10, message = "You feel like royalty!" },
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

-- Buddies ----------------------------------------------------------------

Config.MAX_PETS = 30
Config.PET_MAX_HUNGER = 100
Config.PET_HUNGER_DRAIN = 0.5 -- per NEEDS_TICK while your buddy is out
Config.PET_NAME_MAX = 20

-- Rarity tiers in order. buff = strength of a buddy's perk; release = what
-- releasing a buddy of that tier pays back.
Config.TierOrder = { "Common", "Uncommon", "Rare", "Epic", "Legendary" }
Config.Tiers = {
	Common = { color = Color3.fromRGB(150, 160, 150), buff = 0.05, release = 20 },
	Uncommon = { color = Color3.fromRGB(90, 200, 110), buff = 0.10, release = 60 },
	Rare = { color = Color3.fromRGB(80, 150, 255), buff = 0.15, release = 150 },
	Epic = { color = Color3.fromRGB(180, 90, 255), buff = 0.25, release = 400 },
	Legendary = { color = Color3.fromRGB(255, 190, 40), buff = 0.40, release = 1000 },
}

-- Berry Boxes: every shop sells three boxes that roll a random item from
-- that shop's pool. A tier is rolled first (weights below), then an item of
-- that tier. Tiers a shop has no items for are skipped.
Config.BoxKinds = {
	basic = { name = "Berry Box", color = Color3.fromRGB(150, 80, 200),
		odds = { Common = 65, Uncommon = 25, Rare = 8, Epic = 2 } },
	sparkle = { name = "Sparkle Berry Box", color = Color3.fromRGB(80, 150, 255),
		odds = { Common = 15, Uncommon = 40, Rare = 30, Epic = 12, Legendary = 3 } },
	royal = { name = "Royal Berry Box", color = Color3.fromRGB(255, 190, 40),
		odds = { Uncommon = 10, Rare = 40, Epic = 37, Legendary = 13 } },
}
Config.BoxKindOrder = { "basic", "sparkle", "royal" }

-- What each shop's boxes contain and cost: { pool, prices by box kind }
-- pool is an item category, or "pet" for buddies.
Config.ShopBoxes = {
	grocery = { pool = "food", label = "Snack", prices = { basic = 10, sparkle = 30, royal = 80 } },
	furniture = { pool = "furniture", label = "Home", prices = { basic = 60, sparkle = 200, royal = 600 } },
	boutique = { pool = "clothing", label = "Style", prices = { basic = 70, sparkle = 250, royal = 800 } },
	buddies = { pool = "pet", label = "Buddy", prices = { basic = 150, sparkle = 500, royal = 1500 } },
}
-- Getting clothing you already own refunds this share of the box price.
Config.DUPLICATE_REFUND = 0.4

-- { [tier] = { itemId, ... } } for a shop pool ("food", "furniture", "clothing", "pet")
function Config.poolByTier(pool)
	local byTier = {}
	local source = pool == "pet" and Config.Pets or Config.Items
	for id, entry in source do
		if pool == "pet" or entry.category == pool then
			byTier[entry.tier] = byTier[entry.tier] or {}
			table.insert(byTier[entry.tier], id)
		end
	end
	for _, list in byTier do
		table.sort(list)
	end
	return byTier
end

-- Chance (0-1) of each tier for a box kind in a pool, skipping empty tiers.
function Config.boxChances(boxKind, pool)
	local byTier = Config.poolByTier(pool)
	local odds = Config.BoxKinds[boxKind].odds
	local total = 0
	for tier, weight in odds do
		if byTier[tier] then
			total += weight
		end
	end
	local chances = {}
	for tier, weight in odds do
		if byTier[tier] then
			chances[tier] = weight / total
		end
	end
	return chances
end

-- Display name for an item or a pet id.
function Config.nameOf(id)
	local entry = Config.Items[id] or Config.Pets[id]
	return entry and entry.name or id
end

-- What each buff does. Buff strength comes from the buddy's tier.
Config.Buffs = {
	workPay = { name = "Job Pay", describe = "+%d%% pay from jobs" },
	arcadeBonus = { name = "Game Prizes", describe = "+%d%% arcade & obby prizes" },
	hungerSaver = { name = "Full Belly", describe = "%d%% slower hunger" },
	energySaver = { name = "Pep Step", describe = "%d%% less energy used working & training" },
	happyBoost = { name = "Sunshine", describe = "%d%% slower happiness loss" },
	skillBoost = { name = "Study Buddy", describe = "%d%% chance of double skill gain" },
}

-- shape: which model to build (puppy, kitten, bunny, robot, dragon, spirit)
Config.Pets = {
	puppy = { name = "Puppy", tier = "Common", shape = "puppy", buff = "workPay", color = Color3.fromRGB(190, 140, 90), accent = Color3.fromRGB(120, 80, 50) },
	kitten = { name = "Kitten", tier = "Common", shape = "kitten", buff = "happyBoost", color = Color3.fromRGB(240, 170, 80), accent = Color3.fromRGB(255, 255, 255) },
	bunny = { name = "Bunny", tier = "Common", shape = "bunny", buff = "hungerSaver", color = Color3.fromRGB(245, 245, 245), accent = Color3.fromRGB(255, 180, 200) },

	fox = { name = "Fox", tier = "Uncommon", shape = "kitten", buff = "arcadeBonus", color = Color3.fromRGB(240, 120, 40), accent = Color3.fromRGB(255, 255, 255) },
	panda = { name = "Panda", tier = "Uncommon", shape = "puppy", buff = "energySaver", color = Color3.fromRGB(245, 245, 245), accent = Color3.fromRGB(30, 30, 30) },
	snowbunny = { name = "Snow Bunny", tier = "Uncommon", shape = "bunny", buff = "skillBoost", color = Color3.fromRGB(200, 230, 255), accent = Color3.fromRGB(120, 180, 255) },

	robot = { name = "Robo-Buddy", tier = "Rare", shape = "robot", buff = "workPay", color = Color3.fromRGB(160, 170, 185), accent = Color3.fromRGB(80, 200, 255) },
	shadowcat = { name = "Shadow Cat", tier = "Rare", shape = "kitten", buff = "arcadeBonus", color = Color3.fromRGB(40, 35, 55), accent = Color3.fromRGB(170, 90, 255), glow = true },
	unicorn = { name = "Unicorn", tier = "Rare", shape = "bunny", buff = "happyBoost", color = Color3.fromRGB(255, 240, 250), accent = Color3.fromRGB(255, 150, 220), horn = true },

	dragon = { name = "Baby Dragon", tier = "Epic", shape = "dragon", buff = "energySaver", color = Color3.fromRGB(80, 190, 110), accent = Color3.fromRGB(250, 200, 60) },
	mechapup = { name = "Mecha-Pup", tier = "Epic", shape = "robot", buff = "skillBoost", color = Color3.fromRGB(230, 180, 60), accent = Color3.fromRGB(255, 80, 80), glow = true },

	golddragon = { name = "Golden Dragon", tier = "Legendary", shape = "dragon", buff = "workPay", color = Color3.fromRGB(255, 200, 50), accent = Color3.fromRGB(255, 120, 40), glow = true, sparkles = true },
	berryspirit = { name = "Berry Spirit", tier = "Legendary", shape = "spirit", buff = "arcadeBonus", color = Color3.fromRGB(150, 80, 220), accent = Color3.fromRGB(255, 150, 220), glow = true, sparkles = true },
}

function Config.petBuffAmount(petId)
	local pet = Config.Pets[petId]
	return pet and Config.Tiers[pet.tier].buff or 0
end

function Config.describeBuff(petId)
	local pet = Config.Pets[petId]
	if not pet then
		return ""
	end
	local buff = Config.Buffs[pet.buff]
	return buff.name .. ": " .. buff.describe:format(math.floor(Config.petBuffAmount(petId) * 100 + 0.5))
end

-- Houses -------------------------------------------------------------------

-- Interior half-extents in studs. The house grows around a fixed center so
-- furniture positions stay valid after an upgrade.
Config.HouseLevels = {
	{ name = "Cottage", innerX = 19, innerZ = 14, height = 14, maxFurniture = 25, price = 0 },
	{ name = "Family Home", innerX = 23, innerZ = 17, height = 15, maxFurniture = 40, price = 1500 },
	{ name = "Big House", innerX = 26, innerZ = 20, height = 17, maxFurniture = 60, price = 4000 },
	{ name = "Mansion", innerX = 27, innerZ = 22, height = 20, maxFurniture = 90, price = 10000 },
}

-- Material names are Enum.Material item names.
Config.HouseStyles = {
	wall = {
		cream = { name = "Cream", color = Color3.fromRGB(250, 240, 220), price = 0 },
		pink = { name = "Bubblegum", color = Color3.fromRGB(255, 190, 215), price = 100 },
		mint = { name = "Mint", color = Color3.fromRGB(190, 245, 215), price = 100 },
		sky = { name = "Sky Blue", color = Color3.fromRGB(185, 220, 255), price = 100 },
		lavender = { name = "Lavender", color = Color3.fromRGB(215, 195, 250), price = 150 },
		sunny = { name = "Sunny", color = Color3.fromRGB(255, 230, 130), price = 150 },
		brick = { name = "Red Brick", color = Color3.fromRGB(180, 80, 65), material = "Brick", price = 300 },
		log = { name = "Log Cabin", color = Color3.fromRGB(150, 100, 60), material = "WoodPlanks", price = 350 },
	},
	floor = {
		oak = { name = "Oak Planks", color = Color3.fromRGB(200, 160, 110), material = "WoodPlanks", price = 0 },
		carpet = { name = "Berry Carpet", color = Color3.fromRGB(150, 90, 190), material = "Fabric", price = 150 },
		marble = { name = "Marble", color = Color3.fromRGB(240, 240, 245), material = "Marble", price = 300 },
		tile = { name = "Blue Tile", color = Color3.fromRGB(110, 160, 220), material = "Slate", price = 200 },
		cherry = { name = "Cherry Wood", color = Color3.fromRGB(140, 60, 50), material = "WoodPlanks", price = 250 },
	},
	roof = {
		berry = { name = "Berry", color = Color3.fromRGB(140, 70, 170), price = 0 },
		red = { name = "Barn Red", color = Color3.fromRGB(190, 60, 55), price = 100 },
		forest = { name = "Forest", color = Color3.fromRGB(60, 130, 70), price = 100 },
		navy = { name = "Navy", color = Color3.fromRGB(45, 60, 120), price = 100 },
		gold = { name = "Gold", color = Color3.fromRGB(240, 190, 60), material = "Foil", price = 800 },
	},
}
Config.DefaultStyle = { wall = "cream", floor = "oak", roof = "berry" }

-- Minigames ----------------------------------------------------------------

-- The server checks each round's length and score against these limits.
-- maxRate (optional): most points a real player could earn per second.
Config.ARCADE_COOLDOWN = 15
Config.Minigames = {
	berrycatch = {
		name = "Berry Catch", blurb = "Catch berries, dodge the rotten ones",
		minTime = Config.ARCADE_DURATION - 2, maxTime = Config.ARCADE_DURATION + 20,
		maxScore = 120, perPoint = 0.5, maxPayout = 50,
	},
	stacker = {
		name = "Cereal Stacker", blurb = "Stack cereal boxes as high as you can",
		minTime = 1, maxTime = 300, maxScore = 60, maxRate = 2.5, perPoint = 1.5, maxPayout = 60,
	},
	memory = {
		name = "Memory Match", blurb = "Find all the matching pairs",
		minTime = 5, maxTime = 80, maxScore = 140, perPoint = 0.4, maxPayout = 55,
	},
}
Config.MinigameOrder = { "berrycatch", "stacker", "memory" }
Config.MEMORY_DURATION = 60

Config.OBBY_REWARD = 75
Config.OBBY_COOLDOWN = 600 -- seconds between prizes (saved across sessions)

-- Daily reward & quests ----------------------------------------------------

-- Day N of a login streak pays DAILY_BASE + DAILY_STEP * (N - 1), capped at day 7.
Config.DAILY_BASE = 50
Config.DAILY_STEP = 25
Config.QUESTS_PER_DAY = 3

-- event: what counts toward the quest (fired from the matching server system)
Config.Quests = {
	{ id = "work", text = "Work 3 shifts", event = "work", goal = 3, reward = 60 },
	{ id = "eat", text = "Eat 2 snacks", event = "eat", goal = 2, reward = 30 },
	{ id = "play", text = "Play 2 arcade games", event = "minigame", goal = 2, reward = 50 },
	{ id = "train", text = "Train at the School or Gym twice", event = "train", goal = 2, reward = 40 },
	{ id = "feed", text = "Feed your buddy", event = "feedPet", goal = 1, reward = 30 },
	{ id = "like", text = "Like a neighbor's house", event = "like", goal = 1, reward = 30 },
	{ id = "obby", text = "Finish the Berry Dash obby", event = "obby", goal = 1, reward = 80 },
	{ id = "hatch", text = "Hatch an egg", event = "hatch", goal = 1, reward = 50 },
	{ id = "relax", text = "Use furniture at home twice", event = "activity", goal = 2, reward = 30 },
}

function Config.today()
	return math.floor(os.time() / 86400)
end

-- Berry Phone ----------------------------------------------------------------

-- Apps on the Berry Phone. id is a teleport spot (a building id, "plaza",
-- "obby"), or the special "home" / "visit" apps.
Config.PhoneApps = {
	{ id = "home", label = "Home", icon = "🏠", color = Color3.fromRGB(90, 190, 110) },
	{ id = "plaza", label = "Town Square", icon = "⛲", color = Color3.fromRGB(80, 150, 230) },
	{ id = "visit", label = "Visit", icon = "👋", color = Color3.fromRGB(60, 180, 170) },
	{ id = "grocery", label = "Grocery", icon = "🍎", color = Color3.fromRGB(230, 80, 80) },
	{ id = "furniture", label = "Furniture", icon = "🛋️", color = Color3.fromRGB(140, 90, 190) },
	{ id = "boutique", label = "Boutique", icon = "👒", color = Color3.fromRGB(255, 120, 170) },
	{ id = "buddies", label = "Buddy Barn", icon = "🐶", color = Color3.fromRGB(240, 150, 60) },
	{ id = "arcade", label = "Arcade", icon = "🕹️", color = Color3.fromRGB(200, 70, 220) },
	{ id = "obby", label = "Obby", icon = "🏃", color = Color3.fromRGB(255, 90, 120) },
	{ id = "school", label = "School", icon = "📚", color = Color3.fromRGB(220, 120, 90) },
	{ id = "gym", label = "Gym", icon = "💪", color = Color3.fromRGB(230, 170, 40) },
	{ id = "factory", label = "Factory", icon = "🏭", color = Color3.fromRGB(150, 150, 160) },
	{ id = "postoffice", label = "Post Office", icon = "✉️", color = Color3.fromRGB(70, 110, 200) },
	{ id = "lab", label = "Science Lab", icon = "🧪", color = Color3.fromRGB(60, 180, 180) },
	{ id = "townhall", label = "Town Hall", icon = "🏛️", color = Color3.fromRGB(120, 120, 135) },
}

function Config.jobPay(jobId, level)
	local job = Config.Jobs[jobId]
	if not job then
		return 0
	end
	return math.floor(job.pay * (1 + 0.25 * (level - 1)))
end

return Config
