# Berryvale

A Roblox life-sim inspired by **Millsberry**, the old General Mills virtual
town. Get a house, hold down a job, buy food and furniture, adopt a buddy, and
play arcade games to earn **Berrybucks**.

Everything (the town, the houses, the furniture, the pets, the UI) is built
from code, so there are no assets to upload. It's a [Rojo](https://rojo.space)
project.

## What you can do

| Place / menu | What it's for |
| --- | --- |
| **Info boards** (at spawn) | *Where to Start*, *What to Do* and *Helpful Tips*. The same text is in the **Guide** app on the phone. |
| **Berry Phone** (left side) | Quick-teleport apps for every spot in town, both neighborhoods, your home, the obby, visiting friends, and the Robux Store. |
| **Your house** (Maple Court or Willow Way, 24 houses) | Every player gets a house. Place furniture inside; beds, sofas, TVs, bookshelves, the arcade cabinet and the throne have activities. Hold **F** to pick furniture up. |
| **Closet** (in every house) | The only place to change your look: wear or take off Boutique clothing and pick a skin tone. Only works in your own house. |
| **My House menu** | Upgrade from Cottage to Family Home, Big House and Mansion (bigger rooms, more furniture slots), and buy wall, floor and roof styles. |
| **Shops** | Inside each shop, display boards along the left wall show every tier's items and the chance from each box (with sample buddies and clothing on pedestals). Every shop sells **Berry Boxes**: Berry, Sparkle and Royal boxes that roll a random item by rarity (Common, Uncommon, Rare, Epic, Legendary). The shop window shows the odds and everything inside. Grocery = food, Cozy Home = furniture, **Berry Boutique** = hats, glasses, capes and wings, **Buddy Barn** = buddies (plus buddy food, sold directly). |
| **Buddies** | Pets that follow you. Each one has a **perk** whose strength depends on its rarity: more job pay, bigger game prizes, slower hunger, less tiring work, slower sadness, or double skill gains. Perks only work while your buddy is out **and fed**. Rename (names are filtered by Roblox) or release buddies for Berrybucks. |
| **Berry Arcade** | Neon-lit, with five games: *Berry Catch*, *Cereal Stacker*, *Memory Match*, *Whack-a-Berry* and *Pattern Pop*. The cabinets inside open a game picker. |
| **Berry Dash obby** | Behind the arcade. Level 1 pays a prize every 10 minutes. **Level 2: Sky Run** continues from the level 1 finish with blinking platforms, a spinning bar, tiny pads, a tightrope, a truss climb and rising lava walls, and pays a bigger prize every 15 minutes. Falling or touching red sends you back to your level's checkpoint. |
| **Robux Store** (right side) | Berrybucks packs, a Royal Buddy Box, and the VIP and Lucky Berries game passes. See *Selling things for Robux* below. |
| **School / Gym** | Train **Smarts** and **Fitness**, which better jobs require. |
| **Jobs** | Factory, Grocery, Post Office, Science Lab, Town Hall. Apply at the **Help Wanted** board inside the workplace (or the **Job Center** board in the plaza), then **Start Shift** and do the job's tasks: scoop, fold and pack cereal; restock shelves; deliver mail to houses; mix chemicals in order; process paperwork. A tracker and glowing marker show the next step. Every 5 shifts gets you a promotion and a raise. |
| **Berry Bank** | Savings earn 1% interest every hour (also while you're offline, up to 24 hours). **Berry Bonds** lock up Berrybucks for 1, 4 or 12 hours and pay +5%, +15% or +40%. |
| **Cooldowns** (under the phone) | A dropdown with live timers: next work shift, training, arcade, furniture activities, obby prizes, bonds and the next daily reward. |
| **Quests** | A login-streak reward every day plus 3 random daily quests that pay Berrybucks. |
| **Visit & Like** | Visit neighbors from the phone, and like their house (mailbox or Visit menu, once per house per day). The most-liked houses show on the **Best Houses** board in the Town Square. |

**Needs:** Hunger, Energy and Happiness drain over time. Working and training
use Energy; eat food and sleep to recover. New players start with a bed.

## Running it

1. Install Rojo: `aftman install` (or install Rojo 7.x any way you like, plus
   the Rojo plugin in Roblox Studio).
2. Run `rojo serve` in this folder.
3. In Studio, open a new **Baseplate**, delete the default `Baseplate` part
   and `SpawnLocation`, then connect from the Rojo plugin.
4. Press **Play**.

Or build a place file directly: `rojo build -o Berryvale.rbxl` and open it.

**Saving:** progress is saved with DataStores. To test saving in Studio,
publish the place and turn on *Game Settings > Security > Enable Studio
Access to API Services*. Without it the game still works, but progress resets
(and the first load waits a few seconds for DataStore retries).

**Server size:** there are 24 houses (12 on Maple Court, 12 on Willow Way), so
set *Max Players* to 24 or fewer.

## Selling things for Robux

Robux from every purchase goes to the account (or group) that owns the
experience, after Roblox's marketplace fee, and shows up as pending Robux for a
few days before you can spend it. The game only has to grant the rewards. To
turn the store on:

1. Publish the game (*File > Publish to Roblox*).
2. Go to the [Creator Dashboard](https://create.roblox.com/dashboard/creations),
   open the experience, then *Monetization*.
3. Under **Developer Products**, create one product for each entry in
   `Config.Products` (Pile/Bag/Vault of Berrybucks, Royal Buddy Box) and set its
   price.
4. Under **Passes**, create the **VIP** and **Lucky Berries** passes, set each one
   *On Sale*, and set its price.
5. Copy each ID into the matching `id = 0` in `src/shared/Config.luau`
   (`Config.Products` and `Config.Passes`).

Items whose ID is still 0 show as "Coming soon". The store shows each item's
live price from Roblox. Purchases in Studio are test purchases and don't
charge real Robux. Product rewards are saved immediately, and each purchase is
remembered so a retry never grants it twice.

## Code layout

```
src/
  shared/      (ReplicatedStorage.Shared)
    Config.luau      items, Berry Box odds/prices, buddies & perks, house levels/styles,
                     jobs, minigames, quests, phone apps: edit this to balance the game
    Builders.luau    part-built furniture, buddy and clothing models
    Remotes.luau     the list of RemoteEvents/Functions
  server/      (ServerScriptService.Server)
    Main.server.luau  starts everything; routes ProximityPrompts to systems
    WorldBuilder      builds the town and house plots
    PlayerData        DataStore load/save, leaderstats, replication to client
    Housing           plots, furniture, upgrades, styles, likes, teleports
    Shops             Berry Box rolls, buddy food, eating and wearing items
    Pets, Outfit      buddies (perks, hunger, names); clothing and skin tone (closet only)
    Jobs, Needs       job shifts with station tasks, promotions; needs drain, training, activities
    Bank              savings interest and Berry Bonds
    Arcade, Obby      server-side minigame score checks; obby checkpoints, prizes, moving parts
    Monetization      Robux developer products and game passes
    Quests            daily reward and daily quests
    Leaderboard       Best Houses board (OrderedDataStore)
    Cooldowns         per-player cooldown helper
  client/      (StarterPlayerScripts.Client)
    Main.client.luau  wires up HUD and server-driven windows
    UI, Hud, Panels   UI toolkit, stat bars and menu, shop/backpack/job/profile/quest windows
    Phone             the Berry Phone
    PetsUI, HouseUI   buddies window and box-opening animation; house and visit windows
    Placement         furniture placement preview
    Arcade            game picker + shared game window
    StoreUI           the Robux Store window
    JobTracker        job task panel, marker and station prompts
    CooldownsUI       the Cooldowns dropdown
    ClosetUI, BankUI  closet wardrobe; bank teller window
    BerryCatch, Stacker, Memory, Whack, Pattern   the minigames
    State             latest copy of the player's profile
```

The server never trusts the client with money: Berry Boxes are rolled on the
server and require you to stand at the counter; furniture placement is
bounds-checked against your own house; arcade rounds are timed by the server
and scores are capped.

## Ideas for next steps

- Clubs/teams, trading, a bank with interest.
- Day/night cycle (the street lamps already light up).
- Sounds and music.
- Accessories for buddies.
