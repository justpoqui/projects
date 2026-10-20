# Roadmap: the whole island

The goal is to learn Puerto Rican Spanish by traveling the island. Each place adds about 100 to 150 new words and one or two grammar ideas. English support goes down as you go: Old San Juan shows English for the first few quests, Piñones only for the first conversation, and later places should start in Spanish from the first line.

## Done

1. **Viejo San Juan**: greetings, *ser/estar* basics, colors, numbers 0 to 5, left/right/up/down, fruit, El Morro.
2. **Piñones y Loíza**: PR slang, ordering food, money (*peseta*, *chavos*, *centavos*), numbers up to 75, Afro-Puerto Rican culture (bomba, vejigantes).

## Next places

### 3. El Yunque (rainforest)
- **Words:** nature (*árbol, río, cascada, hoja, lluvia*), weather (*llueve, hace sol, está nublado*), body parts for a hiking injury, Taíno words that are still used today (*huracán, hamaca, barbacoa, canoa, yuca, iguana*).
- **Grammar:** *hace / está* for weather, giving and following commands (*sube, baja, cruza el río*).
- **Quest idea:** a park ranger sends you up the trail to the La Mina waterfall. On the way you follow spoken directions, find a lost coquí choir, and answer a Taíno petroglyph riddle.

### 4. Ponce (la Perla del Sur)
- **Words:** family (*tío, prima, suegra, ahijado*), city places, jobs.
- **Grammar:** the past tense (*fui, comí, vi*). People tell you what happened yesterday and you piece it together.
- **Quest idea:** the black-and-red Parque de Bombas firehouse has lost its carnival vejigante. You interview witnesses about yesterday and work out where it went.

### 5. Vieques (bioluminescent bay)
- **Words:** telling time, days of the week, feelings (*nervioso, emocionado, cansado*), boats and the *lancha* (ferry).
- **Grammar:** *estar* + feelings, *a las ocho*, *¿a qué hora?*
- **Quest idea:** buy ferry tickets, catch the 7:30 lancha, and get to Mosquito Bay before the night kayak tour leaves.

### 6. Jayuya (the mountains)
- **Words:** coffee farming, *jíbaro* culture, music (*cuatro, güiro, maracas*), Christmas (*parranda, coquito, pasteles, lechón*), expressions like *ay bendito* and *¡qué bueno!*
- **Grammar:** *gustar* (*me gusta, te gusta*), food likes and dislikes.
- **Quest idea:** join a *parranda* that goes from house to house at night. At each house you have to answer in song (multiple choice) to get in.

### 7. Rincón and Mayagüez (west coast)
- **Words:** surfing, the phone (*¿aló?, te llamo ahorita, déjame un mensaje*), the future (*voy a...*), the university.
- **Grammar:** *ir a* + infinitive, phone etiquette.
- **Quest idea:** organize a surf trip by phone. You call friends, understand their voicemails (spoken with no text), and make the plan.

### More ideas
- **Arecibo and the Camuy caves:** science, measurements, careful directions underground.
- **Culebra:** sea animals and colors under water, from a snorkeling trip.
- **Cabo Rojo:** salt flats and the lighthouse, sunsets, comparisons (*más grande que*).
- **Bayamón / the city:** *el tren urbano*, malls, shopping and sizes, *chinchorros* (roadside food spots).

## Features to add over time
- **Review mode:** a short daily quiz built from the words in your Diccionario that you know least well.
- **Listening challenges:** some lines are spoken only, with no text, once the voice is on.
- **Notebook of PR expressions:** collects phrases like *¿qué es la que hay?* and *ay bendito*, with what they mean and when to use them.
- **Your own name:** characters say your name in dialog.

## Adding a place

Each place is one file in `regions/` that calls `VB.region({...})`:

| Field | What it is |
| --- | --- |
| `id`, `name`, `en`, `blurb` | Internal id, Spanish name, English name, one-line summary for the travel menu |
| `map` | Rows of tile letters (see the legend at the top of each region file). All rows must be the same length. |
| `start`, `arrive` | Where you appear on a new game and when you get off the guagua |
| `npcs` | Characters: `id`, `name`, position, facing, and colors (`h` hair, `s` skin, `c` shirt, `p` pants, `b` shoes) |
| `talk(id, r)` | Returns the dialog for a character, based on quest step `r.q` and backpack `r.inv` |
| `look(x, y, ch, r)` | Optional. Dialog for tiles in this place; return `null` to use the shared default |
| `objective(r)` | `[spanish, english]` for the current quest step |
| `hint(r)`, `giver(r)` | Where the Pista arrow points, and which character shows the `!` |
| `finalQ` | The quest step that counts as finishing the place (unlocks the next one) |
| `enDialogUntil`, `enObjectiveUntil` | Up to which quest step English shows automatically |
| `items`, `glossary` | Backpack labels and the words this place teaches |

Dialog is built from `L(who, spanish, english)` lines, `ask(...)` questions with `opt(...)` answers, and `DO(() => ...)` steps that change state (`give`, `take`, `setQ`).
