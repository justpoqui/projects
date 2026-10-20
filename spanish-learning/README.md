# Viaje Boricua

A pixel-art RPG that teaches Puerto Rican Spanish while you play. Start in Old San Juan, help the neighbors, then ride the **guagua** (bus) to new parts of the island. Each place has its own map, characters, quests and words.

Open `index.html` in any browser. It works on phones too, and there's nothing to install or build.

## How it teaches

- **Spanish buttons.** You move with `arriba`, `abajo`, `izquierda` and `derecha`. Each button's English hint disappears after you've pressed it 12 times.
- **Tap any underlined word** to hear it and see what it means. A word stops being underlined once you've seen it 6 times.
- **English fades out.** You get English subtitles at the start of each place, then they go away. Tap **EN** in a dialog, or tap the objective banner, if you get stuck.
- **Quests check that you understood.** House colors, bench colors, flavors, prices and quizzes only work out if you read the Spanish.
- **Diccionario** shows every word you've met, with stars for how well you know it.
- Progress is saved in the browser. Saves from the first version carry over.

## Places

| # | Place | What you learn |
| --- | --- | --- |
| 1 | **Viejo San Juan** | Greetings, colors, numbers, directions, fruit, *piraguas*, El Morro |
| 2 | **Piñones y Loíza** | Puerto Rican slang (*wepa, pana, chavos, peseta, china, zafacón, ahorita, brutal*), ordering *frituras* at the kioskos, paying, *vejigante* masks, *bomba* |

Finish a place to unlock the next stop on the guagua. Places still to come are listed in [ROADMAP.md](ROADMAP.md).

## Files

| File | What's in it |
| --- | --- |
| `index.html` | Page layout, styles, and the script tags that load everything |
| `engine.js` | Map drawing, movement, dialogs, word popups, saving, travel |
| `regions/san-juan.js` | Old San Juan: map, characters, quests, words |
| `regions/pinones.js` | Piñones y Loíza: map, characters, quests, words |
| `regions/coming-soon.js` | Places shown as "Próximamente" on the travel menu |

To add a place, copy `regions/pinones.js`, change the map and story, add a `<script>` tag for it in `index.html` (before `coming-soon.js`), and remove its entry from `coming-soon.js`. [ROADMAP.md](ROADMAP.md) explains the fields.
