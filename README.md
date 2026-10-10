# Berryvale

A Roblox life-sim inspired by **Millsberry**, the old General Mills virtual
town. Get a house, hold down a job, buy food and furniture, adopt a buddy, and
play arcade games to earn **Berrybucks**.

Everything (the town, the houses, the furniture, the pets, the UI) is built
from code, so there are no assets to upload. It's a [Rojo](https://rojo.space)
project.

## What you can do

| Place | What it's for |
| --- | --- |
| **Your house** (Maple Court) | Every player gets a house. Buy furniture and place it inside. Beds, sofas, TVs and bookshelves have activities (sleep, relax, watch, read). Hold **F** next to furniture to pick it back up. |
| **Berryvale Grocery** | Buy food to keep your Hunger up. You can also work here as a clerk. |
| **Cozy Home Furnishings** | Beds, sofas, TVs, lamps, rugs, plants, an arcade cabinet... |
| **Buddy Barn** | Adopt a buddy (puppy, kitten, bunny, robot, dragon) that follows you around. |
| **Berry Arcade** | Play *Berry Catch*: catch purple and gold berries, dodge rotten ones. Pays Berrybucks. |
| **School / Gym** | Train **Smarts** and **Fitness**, which better jobs require. |
| **Factory, Post Office, Science Lab, Town Hall** | Jobs. Apply at the Job Board, then use **Work Shift**. Every 5 shifts gets you a promotion and a raise (5 levels, from "Box Folder" up to "Mayor"). |

**Needs:** Hunger, Energy and Happiness drain over time. Working and training
use Energy; eat food and sleep to recover. Happy workers earn a 10% bonus and
unhappy ones earn less. Starving makes you unhappy fast.

The bottom menu has **Backpack** (eat food, place furniture, walk your buddy),
**Me** (job, skills, home stats), **Go Home** and **Go to Town**.

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
    Config.luau      items, prices, jobs, stats tuning: edit this to balance the game
    Builders.luau    part-built furniture and buddy models
    Remotes.luau     the list of RemoteEvents/Functions
  server/      (ServerScriptService.Server)
    Main.server.luau  starts everything; routes ProximityPrompts to systems
    WorldBuilder      builds the town and house plots
    PlayerData        DataStore load/save, leaderstats, replication to client
    Housing           plot assignment, furniture placement/pickup, teleports
    Shops             buying and eating/using items
    Jobs, Needs       jobs and promotions; needs drain, training, furniture activities
    Buddies, Arcade   pets that follow you; server-side arcade score checks
    Cooldowns         per-player cooldown helper
  client/      (StarterPlayerScripts.Client)
    Main.client.luau  wires up HUD and server-driven windows
    UI, Hud, Panels   UI toolkit, stat bars and menu, shop/backpack/job/profile windows
    Placement         furniture placement preview
    BerryCatch        the arcade minigame
    State             latest copy of the player's profile
```

The server never trusts the client with money: purchases check price, stock
and that you're standing at the counter; furniture placement is bounds-checked
against your own house; arcade rounds are timed by the server and scores are
capped.

## Ideas for next steps

- More minigames (Millsberry had dozens): each just needs a client game plus a
  server `Start`/`Submit` pair like `Arcade.luau`.
- Visiting other players' houses works already; a "Visit" list in the HUD would
  make it easier.
- Clubs, trading, house color/wallpaper choices, a bank with interest.
