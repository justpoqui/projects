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
| **Berry Phone** | Quick-teleport apps for every spot in town, your home, the obby, and visiting friends. |
| **Your house** (Maple Court) | Every player gets a house. Place furniture inside; beds, sofas, TVs, bookshelves, the arcade cabinet and the throne have activities. Hold **F** to pick furniture up. |
| **My House menu** | Upgrade from Cottage to Family Home, Big House and Mansion (bigger rooms, more furniture slots), and buy wall, floor and roof styles. |
| **Shops** | Every shop sells **Berry Boxes**: Berry, Sparkle and Royal boxes that roll a random item by rarity (Common, Uncommon, Rare, Epic, Legendary). The shop window shows the odds and everything inside. Grocery = food, Cozy Home = furniture, **Berry Boutique** = hats, glasses, capes and wings, **Buddy Barn** = buddies (plus buddy food, sold directly). |
| **Buddies** | Pets that follow you. Each one has a **perk** whose strength depends on its rarity: more job pay, bigger game prizes, slower hunger, less tiring work, slower sadness, or double skill gains. Perks only work while your buddy is out **and fed**. Rename (names are filtered by Roblox) or release buddies for Berrybucks. |
| **Berry Arcade** | Three games: *Berry Catch*, *Cereal Stacker* and *Memory Match*. |
| **Berry Dash obby** | Behind the arcade. Red parts send you back to the start; the gold pad pays a prize every 10 minutes. |
| **School / Gym** | Train **Smarts** and **Fitness**, which better jobs require. |
| **Jobs** | Factory, Grocery, Post Office, Science Lab, Town Hall. Apply at a Job Board, then **Work Shift**. Every 5 shifts gets you a promotion and a raise. |
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

**Server size:** the neighborhood has 8 houses, so set *Max Players* to 8.

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
    Pets, Outfit      buddies (perks, hunger, names); worn clothing
    Jobs, Needs       jobs and promotions; needs drain, training, furniture activities
    Arcade, Obby      server-side minigame score checks; obby resets and prize
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
    BerryCatch, Stacker, Memory   the minigames
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
