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
-- Job tasks ------------------------------------------------------------------
-- Working a shift means visiting stations inside the workplace in order.
-- Stations are placed in building-local coordinates (x, z); the building's
-- door is at -Z. A station id is "<building>.<id>"; "mailbox" steps pick
-- random house mailboxes around town.
Config.SHIFT_TIME_LIMIT = 240 -- seconds to finish a shift before it's cancelled

Config.JobStations = {
	factory = {
		{ id = "hopper", label = "Cereal Hopper", prompt = "Scoop Cereal", task = "Scoop cereal at the Cereal Hopper", x = -13, z = -6, color = Color3.fromRGB(255, 200, 60) },
		{ id = "folder", label = "Box Folder", prompt = "Fold & Fill Box", task = "Fold and fill a box at the Box Folder", x = 0, z = 2, color = Color3.fromRGB(230, 80, 90) },
		{ id = "crate", label = "Shipping Crate", prompt = "Pack Box", task = "Pack the box in the Shipping Crate", x = 13, z = -6, color = Color3.fromRGB(150, 110, 70) },
	},
	grocery = {
		{ id = "stockroom", label = "Stock Room", prompt = "Grab Crate", task = "Grab a crate of food from the Stock Room", x = 12, z = 4, color = Color3.fromRGB(150, 110, 70) },
		{ id = "shelfA", label = "Fruit Shelf", prompt = "Stock Shelf", task = "Stock the Fruit Shelf", x = 14, z = -7, color = Color3.fromRGB(230, 80, 90) },
		{ id = "shelfB", label = "Cereal Shelf", prompt = "Stock Shelf", task = "Stock the Cereal Shelf", x = 5, z = -3, color = Color3.fromRGB(255, 200, 60) },
		{ id = "shelfC", label = "Bakery Shelf", prompt = "Stock Shelf", task = "Stock the Bakery Shelf", x = -6, z = -3, color = Color3.fromRGB(240, 180, 120) },
	},
	postoffice = {
		{ id = "mailbag", label = "Sorting Table", prompt = "Grab Mail Bag", task = "Grab a mail bag from the Sorting Table", x = -13, z = -4, color = Color3.fromRGB(70, 110, 200) },
	},
	lab = {
		{ id = "blue", label = "Blue Beaker", prompt = "Add Blue", task = "Add the Blue chemical", x = -13, z = -6, color = Color3.fromRGB(80, 150, 255) },
		{ id = "green", label = "Green Beaker", prompt = "Add Green", task = "Add the Green chemical", x = -13, z = 2, color = Color3.fromRGB(90, 220, 120) },
		{ id = "pink", label = "Pink Beaker", prompt = "Add Pink", task = "Add the Pink chemical", x = 13, z = -6, color = Color3.fromRGB(255, 120, 200) },
		{ id = "microscope", label = "Microscope", prompt = "Record Results", task = "Record the results at the Microscope", x = 13, z = 2, color = Color3.fromRGB(200, 200, 210) },
	},
	townhall = {
		{ id = "inbox", label = "In-Box", prompt = "Take Papers", task = "Take the papers from the In-Box", x = -13, z = -6, color = Color3.fromRGB(240, 240, 230) },
		{ id = "stamp", label = "Stamp Desk", prompt = "Stamp Papers", task = "Stamp the papers at the Stamp Desk", x = 13, z = -6, color = Color3.fromRGB(200, 50, 60) },
		{ id = "sign", label = "Mayor's Desk", prompt = "Get Signature", task = "Get them signed at the Mayor's Desk", x = 13, z = 2, color = Color3.fromRGB(130, 90, 55) },
		{ id = "cabinet", label = "Filing Cabinet", prompt = "File Papers", task = "File the papers in the Filing Cabinet", x = -13, z = 2, color = Color3.fromRGB(150, 160, 170) },
	},
}

-- steps: station ids in order. shuffle = { first, last } randomizes that
-- range each shift. "mailbox" = deliver to a random house.
Config.JobTasks = {
	factory = { summary = "Scoop, fold and ship cereal boxes", steps = { "hopper", "folder", "crate" } },
	grocer = { summary = "Restock the shelves", steps = { "stockroom", "shelfA", "shelfB", "shelfC" }, shuffle = { 2, 4 } },
	mail = { summary = "Deliver mail to houses around town", steps = { "mailbag", "mailbox", "mailbox" } },
	scientist = { summary = "Mix chemicals in the order shown", steps = { "blue", "green", "pink", "microscope" }, shuffle = { 1, 3 } },
	cityhall = { summary = "Process paperwork around Town Hall", steps = { "inbox", "stamp", "sign", "cabinet" } },
}

-- Bank ----------------------------------------------------------------------------

Config.Bank = {
	savingsRate = 0.01, -- interest per hour on savings, compounded
	interestCap = 100000, -- savings above this don't earn interest
	offlineHoursCap = 24, -- most hours of interest you can earn while away
	maxBonds = 5,
	minBond = 50,
	maxBond = 25000,
	-- Bonds lock Berrybucks for a while and pay a fixed return when they mature.
	Bonds = {
		{ id = "short", name = "1-Hour Berry Bond", hours = 1, rate = 0.05 },
		{ id = "medium", name = "4-Hour Berry Bond", hours = 4, rate = 0.15 },
		{ id = "long", name = "12-Hour Berry Bond", hours = 12, rate = 0.40 },
	},
}

-- Info board & Guide app --------------------------------------------------------

Config.Guide = {
	{
		title = "Where to Start", color = Color3.fromRGB(90, 190, 110),
		lines = {
			"1. Tap the Berry Phone (left side) to zip anywhere in town.",
			"2. Visit your house on Maple Court or Willow Way - your name is on the sign out front.",
			"3. Get a job: find the HELP WANTED board inside a workplace, apply, then Start Shift and do the tasks.",
			"4. Spend Berrybucks on Berry Boxes at the shops and decorate your home!",
		},
	},
	{
		title = "What to Do", color = Color3.fromRGB(150, 80, 200),
		lines = {
			"- Work jobs and get promoted for bigger pay.",
			"- Train Smarts at the School and Fitness at the Gym to unlock better jobs.",
			"- Play 5 games at the Berry Arcade and beat both Berry Dash obby levels.",
			"- Collect buddies, upgrade your house, and dress up at your closet.",
			"- Save in the Berry Bank, finish daily quests, and like your neighbors' houses.",
			"- Claim Rewards: the daily calendar, playtime rewards every 10 minutes, and Home Rewards.",
			"- Tuesdays are event days: watch the Event Board in the Town Square!",
		},
	},
	{
		title = "Helpful Tips", color = Color3.fromRGB(255, 140, 60),
		lines = {
			"- Keep Hunger, Energy and Happy up: eat food and sleep in your bed.",
			"- Feed your buddy or it loses its perk.",
			"- The boards inside each shop show what every tier contains.",
			"- Sparkle and Royal boxes have better odds.",
			"- Money in the bank earns interest, even while you're offline.",
			"- Check Cooldowns under the phone to see when things are ready.",
		},
	},
}

-- Skin tones you can pick at your closet
Config.SkinTones = {
	Color3.fromRGB(255, 224, 189), Color3.fromRGB(241, 194, 125), Color3.fromRGB(224, 172, 105),
	Color3.fromRGB(198, 134, 66), Color3.fromRGB(141, 85, 36), Color3.fromRGB(92, 56, 30),
	Color3.fromRGB(255, 205, 225), Color3.fromRGB(180, 220, 255), Color3.fromRGB(190, 240, 190),
}
Config.CLOSET_RANGE = 14 -- studs you can be from your closet while changing

-- Display names for cooldown timers shown under the phone
Config.CooldownNames = {
	work = "Next work shift",
	train_school = "School class",
	train_gym = "Gym workout",
	arcade = "Arcade",
	activity_sleep = "Nap",
	activity_relax = "Relax on sofa",
	activity_watch = "Watch TV",
	activity_read = "Read a book",
	activity_royal = "Sit on throne",
}

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

-- Reward-only boxes that guarantee one rarity tier ("tier_Rare" = tier 3,
-- "tier_Epic" = tier 4, ...). Not sold in shops.
for _, tier in { "Common", "Uncommon", "Rare", "Epic", "Legendary" } do
	Config.BoxKinds["tier_" .. tier] = {
		name = tier .. " Berry Box", color = Config.Tiers[tier].color, reward = true, odds = { [tier] = 1 },
	}
end

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
-- lucky: the player owns the Lucky Berries pass.
function Config.boxChances(boxKind, pool, lucky)
	local byTier = Config.poolByTier(pool)
	local odds = Config.BoxKinds[boxKind].odds
	local function weight(tier, w)
		if lucky and (tier == "Epic" or tier == "Legendary") then
			return w * Config.LUCKY_MULTIPLIER
		end
		return w
	end
	local total = 0
	for tier, w in odds do
		if byTier[tier] then
			total += weight(tier, w)
		end
	end
	local chances = {}
	for tier, w in odds do
		if byTier[tier] then
			chances[tier] = weight(tier, w) / total
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
	whack = {
		name = "Whack-a-Berry", blurb = "Bop the berries before they hide",
		minTime = Config.ARCADE_DURATION - 2, maxTime = Config.ARCADE_DURATION + 20,
		maxScore = 100, perPoint = 0.6, maxPayout = 50,
	},
	pattern = {
		name = "Pattern Pop", blurb = "Watch the lights, then repeat the pattern",
		minTime = 1, maxTime = 600, maxScore = 30, maxRate = 0.5, perPoint = 3, maxPayout = 60,
	},
}
Config.MinigameOrder = { "berrycatch", "stacker", "memory", "whack", "pattern" }
Config.MEMORY_DURATION = 60

-- Berry Dash obby levels. Each prize has its own cooldown (saved across sessions).
Config.ObbyLevels = {
	{ name = "Berry Dash", reward = 75, cooldown = 600 },
	{ name = "Berry Dash 2: Sky Run", reward = 200, cooldown = 900 },
}

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

-- The game runs on US Eastern Time (EST/EDT): days, the calendar, and
-- Tuesday events all roll over at midnight Eastern.

-- Days since 1970-01-01 for a calendar date (proleptic Gregorian).
local function daysFromCivil(y, m, d)
	if m <= 2 then
		y -= 1
	end
	local era = (y >= 0 and y or y - 399) // 400
	local yoe = y - era * 400
	local mp = (m + 9) % 12
	local doy = (153 * mp + 2) // 5 + d - 1
	local doe = yoe * 365 + yoe // 4 - yoe // 100 + doy
	return era * 146097 + doe - 719468
end

-- Unix time of the nth Sunday (n = 1 for the first) of a month, at a UTC hour.
local function nthSunday(year, month, n, utcHour)
	local first = daysFromCivil(year, month, 1)
	local weekday = (first + 4) % 7 -- 0 = Sunday (1970-01-01 was a Thursday)
	local sunday = first + (7 - weekday) % 7 + (n - 1) * 7
	return sunday * 86400 + utcHour * 3600
end

-- Seconds to add to UTC to get Eastern Time at unix time t (-4h in summer, -5h in winter).
-- Daylight time runs from 2 AM on the second Sunday in March to 2 AM on the
-- first Sunday in November.
function Config.easternOffset(t)
	t = t or os.time()
	local year = os.date("!*t", t).year
	local dstStart = nthSunday(year, 3, 2, 7) -- 2 AM EST = 07:00 UTC
	local dstEnd = nthSunday(year, 11, 1, 6) -- 2 AM EDT = 06:00 UTC
	if t >= dstStart and t < dstEnd then
		return -4 * 3600
	end
	return -5 * 3600
end

-- Eastern "wall clock" time as a unix-like number (for date math only).
function Config.easternTime(t)
	t = t or os.time()
	return t + Config.easternOffset(t)
end

-- Day number in Eastern Time (changes at midnight Eastern).
function Config.today()
	return math.floor(Config.easternTime() / 86400)
end

-- Seconds until the next Eastern midnight.
function Config.secondsToNextDay()
	return 86400 - Config.easternTime() % 86400
end

-- Berry Phone ----------------------------------------------------------------

-- Apps on the Berry Phone. id is a teleport spot (a building id, "plaza",
-- "obby"), or the special "home" / "visit" apps.
Config.PhoneApps = {
	{ id = "home", label = "Home", icon = "🏠", color = Color3.fromRGB(90, 190, 110) },
	{ id = "plaza", label = "Town Square", icon = "⛲", color = Color3.fromRGB(80, 150, 230) },
	{ id = "visit", label = "Visit", icon = "👋", color = Color3.fromRGB(60, 180, 170) },
	{ id = "store", label = "Robux Store", icon = "💎", color = Color3.fromRGB(40, 170, 90) },
	{ id = "bank", label = "Bank", icon = "🏦", color = Color3.fromRGB(200, 160, 40) },
	{ id = "guide", label = "Guide", icon = "📖", color = Color3.fromRGB(90, 120, 220) },
	{ id = "rewards", label = "Rewards", icon = "🎁", color = Color3.fromRGB(230, 80, 120) },
	{ id = "maplecourt", label = "Maple Court", icon = "🍁", color = Color3.fromRGB(220, 110, 50) },
	{ id = "willowway", label = "Willow Way", icon = "🌳", color = Color3.fromRGB(70, 150, 90) },
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

-- Robux ----------------------------------------------------------------------
-- Create these on the Creator Dashboard (your experience > Monetization), then
-- paste each ID below. Robux from every sale goes to the experience's owner.
-- An id of 0 means "not set up yet": the store shows it as unavailable.

-- Developer products can be bought again and again.
Config.Products = {
	{ key = "bucks_small", id = 0, name = "Pile of Berrybucks", robux = 25, bucks = 500 },
	{ key = "bucks_medium", id = 0, name = "Bag of Berrybucks", robux = 75, bucks = 2000 },
	{ key = "bucks_large", id = 0, name = "Vault of Berrybucks", robux = 200, bucks = 6000 },
	{ key = "royal_buddy", id = 0, name = "Royal Buddy Box", robux = 100, box = { store = "buddies", kind = "royal" } },
}

-- Game passes are bought once and kept forever.
Config.Passes = {
	{ key = "vip", id = 0, name = "VIP", robux = 199,
		perks = "+25% job pay, double daily reward, and a gold VIP tag" },
	{ key = "lucky", id = 0, name = "Lucky Berries", robux = 299,
		perks = "Doubles your chance of Epic and Legendary items from every Berry Box" },
}
Config.VIP_PAY_BONUS = 0.25
Config.LUCKY_MULTIPLIER = 2 -- applied to Epic and Legendary box weights

-- Rewards -------------------------------------------------------------------------
-- All days use US Eastern Time (see Config.today) so every server agrees on
-- what "today" is.

Config.Calendar = {
	daily = 100, -- every day
	tuesday = 150, -- event day
	thursdayBox = "tier_Rare", -- tier 3 box on Thursdays
	lastDay = 500, -- last day of the month
}

-- Playtime rewards: one every 10 minutes of play; the 60-minute reward is a
-- tier 4 (Epic) box, then the cycle starts over.
Config.Playtime = {
	{ minutes = 10, bucks = 100 },
	{ minutes = 20, bucks = 200 },
	{ minutes = 30, bucks = 400 },
	{ minutes = 40, bucks = 600 },
	{ minutes = 50, bucks = 1000 },
	{ minutes = 60, box = "tier_Epic" },
}

-- Home Rewards: one claim per day, a random furniture item that climbs in
-- tier through the week, then starts over.
Config.HomeRewards = { "Common", "Common", "Uncommon", "Uncommon", "Rare", "Epic", "Legendary" }

-- Tuesday events: each hour one event is posted, then starts at a random minute.
Config.EVENT_WEEKDAY = 3 -- os.date wday: 1 = Sunday, 3 = Tuesday
Config.EVENTS_EVERY_DAY = false -- set true to test events on any day
Config.EVENT_POST_LEAD = 5 * 60 -- the posting goes up at least this long before the start
Config.Events = {
	{ id = "berryrain", name = "Berry Rain", icon = "🫐", duration = 300,
		desc = "Berries fall from the sky in the Town Square. Grab them for Berrybucks!" },
	{ id = "doublepay", name = "Double Pay", icon = "💰", duration = 600,
		desc = "Every job shift pays double!" },
	{ id = "luckyhour", name = "Lucky Boxes", icon = "🍀", duration = 600,
		desc = "Epic and Legendary chances are doubled in every Berry Box!" },
	{ id = "cozytime", name = "Cozy Time", icon = "☕", duration = 600,
		desc = "Hunger, Energy and Happy don't go down!" },
}
Config.BERRY_RAIN_VALUE = 10
Config.BERRY_RAIN_MAX = 300 -- most Berrybucks one player can grab per Berry Rain

local MONTH_DAYS = { 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 }
function Config.daysInMonth(year, month)
	if month == 2 and (year % 4 == 0 and (year % 100 ~= 0 or year % 400 == 0)) then
		return 29
	end
	return MONTH_DAYS[month]
end

-- Eastern Time date parts for a unix time: { year, month, day, hour, min, wday }
function Config.gameDate(t)
	return os.date("!*t", Config.easternTime(t))
end

-- What a calendar day pays. wday: 1 = Sunday.
function Config.calendarReward(day, wday, daysInMonth)
	local reward = { bucks = Config.Calendar.daily }
	if wday == Config.EVENT_WEEKDAY then
		reward.bucks = Config.Calendar.tuesday
		reward.event = true
	end
	if wday == 5 then -- Thursday
		reward.box = Config.Calendar.thursdayBox
	end
	if day == daysInMonth then
		reward.bucks = Config.Calendar.lastDay
	end
	return reward
end

function Config.jobPay(jobId, level)
	local job = Config.Jobs[jobId]
	if not job then
		return 0
	end
	return math.floor(job.pay * (1 + 0.25 * (level - 1)))
end

return Config
