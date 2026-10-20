// Viaje Boricua engine: map painting, movement, dialog, words, saving and travel.
// Each part of the island lives in regions/*.js and registers itself with VB.region({...}).
(() => {
'use strict';

const TS = 16;
const REGIONS = [], BYID = {}, ITEMS = {}, COMING = [];

// Words used by the controls and menus. Regions add their own words.
const GL = {
  arriba: 'up', abajo: 'down', izquierda: 'left', derecha: 'right', hablar: 'to talk', tomar: 'to take', mirar: 'to look', seguir: 'to continue',
  pista: 'hint', sigue: 'follow', la: 'the', el: 'the', flecha: 'arrow', desde: 'from', ahora: 'now', toca: 'tap, touch', una: 'a, one', un: 'a, one', o: 'or',
  palabra: 'word', si: 'if', necesitas: 'you need', ayuda: 'help', ya: 'already', sabes: 'you know', llegaste: 'you arrived', a: 'to / at',
  parada: 'stop (bus stop)', guagua: 'bus (Puerto Rico)', de: 'of; from', es: 'is', 'aquí': 'here', 'estás': 'you are', habla: 'talk, speak', con: 'with',
};

// Shared tile colors.
const HOUSE = { r: ['roja', 'red', '#e2675a'], y: ['amarilla', 'yellow', '#f2c94c'], p: ['rosada', 'pink', '#f29bc0'], a: ['azul', 'blue', '#5aa0e0'], v: ['verde', 'green', '#6cc38a'] };
const BENCH = { '1': ['rojo', 'red', '#d8463a'], '2': ['azul', 'blue', '#3b78d1'], '3': ['amarillo', 'yellow', '#f0c232'] };
const POTS = { '4': ['roja', 'red', '#d8463a'], '5': ['negra', 'black', '#26262b'], '6': ['verde', 'green', '#3f9e4d'] };
const SOLID = '~#rypavDPMTF123cLKSZBmO456';

// ---------- State ----------
const SAVE_KEY = 'viaje-boricua-v2', OLD_KEY = 'viaje-boricua-v1';
const fresh = () => ({ region: REGIONS[0].id, regions: {}, seen: {}, look: {}, btn: {}, told: {}, done: {}, voiceOff: false });
const newRegionState = def => ({ q: 0, inv: {}, flags: {}, x: def.start.x, y: def.start.y, dir: def.start.dir || 'down' });
let st = null, cur = null, MAP = [], W = 0, H = 0;
function rs() { if (!st.regions[st.region]) st.regions[st.region] = newRegionState(BYID[st.region]); return st.regions[st.region]; }
function load() {
  try { const s = JSON.parse(localStorage.getItem(SAVE_KEY)); if (s && s.regions) { const n = Object.assign(fresh(), s); if (!BYID[n.region]) n.region = REGIONS[0].id; return n; } } catch (e) {}
  try {
    // Saves from the first version (one map only) become the Old San Juan save.
    const o = JSON.parse(localStorage.getItem(OLD_KEY));
    if (o && typeof o.q === 'number') {
      const n = fresh(), flags = {};
      Object.keys(o.palms || {}).forEach(k => flags['palm:' + k] = 1);
      if (o.q >= 10) flags.gateOpen = 1;
      n.regions.sanjuan = { q: o.q, inv: o.inv || {}, flags, x: o.x, y: o.y, dir: o.dir || 'down' };
      Object.assign(n, { seen: o.seen || {}, look: o.look || {}, btn: o.btn || {}, voiceOff: !!o.voiceOff });
      if (o.told && o.told.en) n.told['en:sanjuan'] = 1;
      if (o.q >= 11) { n.done.sanjuan = 1; n.told['win:sanjuan'] = 1; }
      return n;
    }
  } catch (e) {}
  return null;
}
function save() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(st)); } catch (e) {} }

// ---------- Helpers ----------
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const tileAt = (x, y) => (x < 0 || y < 0 || x >= W || y >= H) ? '~' : MAP[y][x];
function hash(x, y, n) { let h = (x * 374761393 + y * 668265263 + n * 1442695041) | 0; h = Math.imul(h ^ (h >>> 13), 1274126177); return ((h ^ (h >>> 16)) >>> 0) / 4294967296; }
function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16); let r = n >> 16, g = (n >> 8) & 255, b = n & 255;
  const t = amt < 0 ? 0 : 255, p = Math.abs(amt);
  r = Math.round(r + (t - r) * p); g = Math.round(g + (t - g) * p); b = Math.round(b + (t - b) * p);
  return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
}

const WORD_RE = /([A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)|([^A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)/g;
function words(text) {
  const out = []; let m; WORD_RE.lastIndex = 0;
  while ((m = WORD_RE.exec(text))) out.push(m[1] ? { w: m[1] } : { t: m[2] });
  return out;
}
function renderWords(text) {
  return words(text).map(p => {
    if (p.t) return esc(p.t);
    const k = p.w.toLowerCase();
    if (!GL[k]) return esc(p.w);
    const known = (st.seen[k] || 0) >= 6 ? ' known' : '';
    return `<span class="w${known}" data-w="${esc(k)}">${esc(p.w)}</span>`;
  }).join('');
}
function countWords(text) { words(text).forEach(p => { if (p.w) { const k = p.w.toLowerCase(); if (GL[k]) st.seen[k] = (st.seen[k] || 0) + 1; } }); }

// ---------- Speech ----------
let voiceOn = true, esVoice = null;
function pickVoice() {
  try {
    const vs = speechSynthesis.getVoices();
    esVoice = vs.find(v => /es[-_]PR/i.test(v.lang)) || vs.find(v => /es[-_](US|MX|419)/i.test(v.lang)) || vs.find(v => /^es/i.test(v.lang)) || null;
  } catch (e) {}
}
if ('speechSynthesis' in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
function speak(text, force) {
  if ((!voiceOn && !force) || !('speechSynthesis' in window)) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text.replace(/[¡¿"]/g, '').replace(/co-quí/g, 'coquí'));
    u.lang = esVoice ? esVoice.lang : 'es-US'; if (esVoice) u.voice = esVoice; u.rate = 0.9;
    speechSynthesis.speak(u);
  } catch (e) {}
}

// ---------- Sprites ----------
const PERSON_DOWN = [
  "...hhhhhh...", "..hhhhhhhh..", "..hssssssh..", "..sesssses..", "..ssssssss..", "...ssmmss...", "....ssss....",
  "..cccccccc..", ".cccccccccc.", ".sccccccccs.", ".sccccccccs.", "..pppppppp..", "..ppp..ppp..", "..ppp..ppp..", "..bbb..bbb..", "............",
];
const PERSON_UP = PERSON_DOWN.map((r, i) => i === 2 || i === 3 ? "..hhhhhhhh.." : i === 4 ? "..hssssssh.." : i === 5 ? "...ssssss..." : r);
const PERSON_LEFT = PERSON_DOWN.map((r, i) => i === 2 ? "..hsssshhh.." : i === 3 ? "..sesssshh.." : i === 4 ? "..sssssssh.." : i === 5 ? "...msssss..." : r);
const PERSON_RIGHT = PERSON_LEFT.map(r => r.split('').reverse().join(''));
const TEMPL = { down: PERSON_DOWN, up: PERSON_UP, left: PERSON_LEFT, right: PERSON_RIGHT };
function makeSprites(pal) {
  const out = {};
  for (const d in TEMPL) {
    const c = document.createElement('canvas'); c.width = 12; c.height = 16; const x = c.getContext('2d');
    TEMPL[d].forEach((row, j) => [...row].forEach((ch, i) => {
      const col = ch === '.' ? null : ch === 'e' ? '#1b1b1b' : ch === 'm' ? shade(pal.s, -0.3) : pal[ch];
      if (col) { x.fillStyle = col; x.fillRect(i, j, 1, 1); }
    }));
    out[d] = c;
  }
  return out;
}
const PLAYER_SPR = makeSprites({ h: '#5a3a22', s: '#e0ac7e', c: '#2f80c4', p: '#34405a', b: '#2a2a2a' });
const npcAt = (x, y) => cur.npcs.find(n => n.x === x && n.y === y);

// ---------- Map painting ----------
const mapCanvas = document.createElement('canvas');
const mc = mapCanvas.getContext('2d');
const R = (x, y, w, h, c) => { mc.fillStyle = c; mc.fillRect(x, y, w, h); };
const isWater = (x, y) => tileAt(x, y) === '~' || tileAt(x, y) === 'm';
const GROUND = { '=': 'cobble', '-': 'road', '.': 'sand', ',': 'grass', g: 'floor' };

function baseFor(ch, x, y) {
  if (ch === '~') return 'water';
  if (ch === 'm') return 'water';
  if (ch === 'k') return 'dock';
  if (GROUND[ch]) return GROUND[ch];
  // Objects sit on whatever ground most of their neighbours have.
  const count = {};
  [[0, 1], [1, 0], [-1, 0], [0, -1]].forEach(([dx, dy]) => { const g = GROUND[tileAt(x + dx, y + dy)]; if (g && g !== 'road') count[g] = (count[g] || 0) + 1; });
  let best = 'grass', n = 0;
  for (const k in count) if (count[k] > n) { best = k; n = count[k]; }
  return best;
}
function paintBase(kind, ox, oy, x, y) {
  if (kind === 'grass') {
    R(ox, oy, 16, 16, '#6abf4b');
    for (let i = 0; i < 5; i++) { const hx = Math.floor(hash(x, y, i) * 14), hy = Math.floor(hash(x, y, i + 9) * 14); R(ox + hx, oy + hy, 1, 2, '#57a53b'); R(ox + hx + 1, oy + hy + 1, 1, 1, '#57a53b'); }
    if (hash(x, y, 77) > 0.8) { const fx = 3 + Math.floor(hash(x, y, 78) * 10), fy = 3 + Math.floor(hash(x, y, 79) * 10); R(ox + fx, oy + fy, 2, 2, hash(x, y, 80) > .5 ? '#ffd34d' : '#ff7aa8'); }
  } else if (kind === 'sand') {
    R(ox, oy, 16, 16, '#f1d89c');
    for (let i = 0; i < 4; i++) R(ox + Math.floor(hash(x, y, i) * 15), oy + Math.floor(hash(x, y, i + 5) * 15), 1, 1, '#dcbd7c');
  } else if (kind === 'cobble') {
    R(ox, oy, 16, 16, '#5b7fae');
    for (let row = 0; row < 4; row++) {
      R(ox, oy + row * 4 + 3, 16, 1, '#46689a');
      const off = row % 2 ? 4 : 0;
      for (let col = 0; col < 3; col++) { const bx = (col * 8 + off) % 16; R(ox + bx, oy + row * 4, 1, 3, '#46689a'); R(ox + bx + 2, oy + row * 4 + 1, 2, 1, '#7a9cc6'); }
    }
  } else if (kind === 'road') {
    R(ox, oy, 16, 16, '#5d6168');
    for (let i = 0; i < 3; i++) R(ox + Math.floor(hash(x, y, i) * 15), oy + Math.floor(hash(x, y, i + 4) * 15), 1, 1, '#4c5057');
    if (x % 2 === 0) R(ox + 2, oy + 7, 8, 2, '#f0c232');
    if (tileAt(x, y - 1) !== '-') R(ox, oy, 16, 1, '#8a8f97');
    if (tileAt(x, y + 1) !== '-') R(ox, oy + 15, 16, 1, '#8a8f97');
  } else if (kind === 'floor') {
    R(ox, oy, 16, 16, '#d8c79f');
    R(ox, oy + 7, 16, 1, '#c4b187'); R(ox, oy + 15, 16, 1, '#c4b187'); R(ox + 7, oy, 1, 7, '#c4b187'); R(ox + 15, oy + 8, 1, 7, '#c4b187');
  } else if (kind === 'dock') {
    R(ox, oy, 16, 16, '#3aa6d8');
    R(ox + 1, oy, 14, 16, '#a8743f');
    for (let i = 0; i < 4; i++) R(ox + 1, oy + i * 4 + 3, 14, 1, '#875a2c');
    R(ox + 1, oy, 1, 16, '#6e4520'); R(ox + 14, oy, 1, 16, '#6e4520');
  } else if (kind === 'water') {
    R(ox, oy, 16, 16, '#3aa6d8');
    for (let i = 0; i < 2; i++) { const wx = Math.floor(hash(x, y, i) * 11), wy = Math.floor(hash(x, y, i + 3) * 14); R(ox + wx, oy + wy, 4, 1, '#62c1e8'); }
    const foam = '#c8eef9', shore = (a, b) => !isWater(a, b) && tileAt(a, b) !== 'k';
    if (shore(x, y - 1)) R(ox, oy, 16, 2, foam);
    if (shore(x, y + 1)) R(ox, oy + 14, 16, 2, foam);
    if (shore(x - 1, y)) R(ox, oy, 2, 16, foam);
    if (shore(x + 1, y)) R(ox + 14, oy, 2, 16, foam);
  }
}
function paintHouse(ch, ox, oy, x, y) {
  const col = HOUSE[ch][2], dark = shade(col, -0.25), top = tileAt(x, y - 1) !== ch;
  R(ox, oy, 16, 16, col);
  if (top) { R(ox, oy, 16, 4, '#f4f1ea'); R(ox, oy + 4, 16, 1, dark); }
  if (tileAt(x - 1, y) !== ch && tileAt(x - 1, y) !== 'D') R(ox, oy, 1, 16, dark);
  if (tileAt(x + 1, y) !== ch && tileAt(x + 1, y) !== 'D') R(ox + 15, oy, 1, 16, dark);
  const wy = top ? 6 : 3;
  R(ox + 4, oy + wy, 8, 8, '#f4f1ea'); R(ox + 5, oy + wy + 1, 3, 6, '#2e6b4f'); R(ox + 8, oy + wy + 1, 3, 6, '#2e6b4f');
  R(ox + 3, oy + wy + 8, 10, 1, dark);
}
function paintTile(x, y) {
  const ch = MAP[y][x], ox = x * TS, oy = y * TS, r = rs();
  if (HOUSE[ch]) return paintHouse(ch, ox, oy, x, y);
  if (ch === 'D') {
    const hc = tileAt(x - 1, y); paintHouse(hc, ox, oy, x, y);
    R(ox + 3, oy + 2, 10, 14, HOUSE[hc][2]);
    R(ox + 4, oy + 4, 8, 12, '#7b4a2b'); R(ox + 5, oy + 3, 6, 1, '#7b4a2b'); R(ox + 7, oy + 4, 1, 12, '#5e361d');
    R(ox + 10, oy + 10, 1, 1, '#f3c13a'); R(ox + 3, oy + 15, 10, 1, '#f4f1ea');
    return;
  }
  if (ch === '#') {
    R(ox, oy, 16, 16, '#cdb889');
    for (let k = 0; k < 4; k++) { R(ox, oy + k * 4 + 3, 16, 1, '#ab9568'); const off = k % 2 ? 0 : 4; R(ox + off, oy + k * 4, 1, 3, '#ab9568'); R(ox + off + 8, oy + k * 4, 1, 3, '#ab9568'); }
    if (tileAt(x, y - 1) !== '#') R(ox, oy, 16, 2, '#e5d6ad');
    return;
  }
  if (ch === 'G') {
    paintBase('floor', ox, oy, x, y);
    R(ox, oy, 3, 16, '#cdb889'); R(ox + 13, oy, 3, 16, '#cdb889'); R(ox, oy, 16, 3, '#cdb889');
    if (!r.flags.gateOpen) { R(ox + 3, oy + 3, 10, 13, '#5e3a22'); R(ox + 7, oy + 3, 2, 13, '#3f2615'); for (let i = 0; i < 3; i++) { R(ox + 5, oy + 6 + i * 4, 1, 1, '#c9a24a'); R(ox + 10, oy + 6 + i * 4, 1, 1, '#c9a24a'); } }
    else { R(ox + 3, oy + 3, 2, 13, '#3f2615'); R(ox + 11, oy + 3, 2, 13, '#3f2615'); }
    return;
  }
  paintBase(baseFor(ch, x, y), ox, oy, x, y);
  if (ch === 'P') {
    R(ox + 7, oy + 8, 2, 8, '#8a5a2b'); R(ox + 8, oy + 10, 1, 1, '#6e4520'); R(ox + 7, oy + 13, 1, 1, '#6e4520');
    R(ox + 2, oy + 3, 12, 2, '#2f9e44'); R(ox + 4, oy + 1, 8, 2, '#46c35a'); R(ox + 1, oy + 5, 3, 2, '#2f9e44'); R(ox + 12, oy + 5, 3, 2, '#2f9e44');
    R(ox + 6, oy + 2, 4, 3, '#46c35a'); R(ox, oy + 6, 2, 2, '#2f9e44'); R(ox + 14, oy + 6, 2, 2, '#2f9e44');
    if (!r.flags['palm:' + x + ',' + y]) { R(ox + 6, oy + 6, 2, 2, '#6b3e1e'); R(ox + 8, oy + 6, 2, 2, '#7d4a24'); }
  } else if (ch === 'M') {
    R(ox + 7, oy + 11, 2, 5, '#6e4520');
    R(ox + 2, oy + 2, 12, 9, '#2f7d32'); R(ox + 1, oy + 4, 14, 5, '#2f7d32'); R(ox + 4, oy + 1, 8, 1, '#2f7d32');
    R(ox + 4, oy + 3, 4, 2, '#4aa34d'); R(ox + 9, oy + 5, 3, 1, '#4aa34d');
    if (!r.inv.mango) { R(ox + 3, oy + 7, 2, 2, '#f39c2b'); R(ox + 10, oy + 3, 2, 2, '#f39c2b'); R(ox + 11, oy + 8, 2, 2, '#e0532f'); R(ox + 6, oy + 5, 2, 2, '#e0532f'); }
  } else if (ch === 'T') {
    R(ox + 7, oy + 10, 2, 6, '#6e4520');
    R(ox + 1, oy + 3, 14, 7, '#e2452f'); R(ox + 3, oy + 1, 10, 2, '#e2452f'); R(ox + 3, oy + 10, 10, 1, '#b73322');
    R(ox + 4, oy + 3, 2, 1, '#f7883a'); R(ox + 9, oy + 5, 2, 1, '#f7883a'); R(ox + 6, oy + 7, 2, 1, '#f7883a'); R(ox + 12, oy + 4, 1, 2, '#4aa34d'); R(ox + 2, oy + 6, 1, 2, '#4aa34d');
  } else if (ch === 'F') {
    R(ox + 1, oy + 3, 14, 11, '#c9ccd3'); R(ox + 3, oy + 1, 10, 15, '#c9ccd3');
    R(ox + 3, oy + 4, 10, 9, '#6fcdf0'); R(ox + 4, oy + 3, 8, 11, '#6fcdf0');
    R(ox + 7, oy + 5, 2, 6, '#e8f8ff'); R(ox + 5, oy + 7, 6, 1, '#bde9f7');
  } else if (BENCH[ch]) {
    const c = BENCH[ch][2];
    R(ox + 2, oy + 4, 12, 2, c); R(ox + 2, oy + 7, 12, 3, c); R(ox + 2, oy + 9, 12, 1, shade(c, -0.3));
    R(ox + 3, oy + 10, 1, 4, '#333333'); R(ox + 12, oy + 10, 1, 4, '#333333');
  } else if (POTS[ch]) {
    const c = POTS[ch][2];
    R(ox + 4, oy + 6, 8, 9, '#b8bcc4'); R(ox + 4, oy + 6, 8, 2, c); R(ox + 5, oy + 9, 6, 4, c); R(ox + 4, oy + 14, 8, 1, '#7d828b');
    R(ox + 9, oy + 3, 1, 4, '#8a5a2b'); R(ox + 9, oy + 2, 2, 1, c);
  } else if (ch === 'c') {
    R(ox + 3, oy + 7, 10, 4, '#3b3f46'); R(ox + 12, oy + 6, 2, 6, '#2a2d33'); R(ox + 4, oy + 7, 7, 1, '#5b616b');
    R(ox + 4, oy + 11, 4, 4, '#6e4520'); R(ox + 5, oy + 12, 2, 2, '#3f2615');
  } else if (ch === 'L') {
    R(ox + 3, oy + 1, 1, 15, '#8d8f96'); R(ox + 2, oy + 14, 3, 2, '#5b616b');
    for (let i = 0; i < 5; i++) R(ox + 4, oy + 1 + i * 1.4, 10, 1.4, i % 2 ? '#ffffff' : '#d8312a');
    R(ox + 4, oy + 1, 1, 7, '#2f6fc0'); R(ox + 5, oy + 2, 1, 5, '#2f6fc0'); R(ox + 6, oy + 3, 1, 3, '#2f6fc0'); R(ox + 7, oy + 4, 1, 1, '#2f6fc0'); R(ox + 5, oy + 4, 1, 1, '#ffffff');
  } else if (ch === 'K') {
    R(ox + 2, oy + 7, 12, 6, '#f4f1ea'); R(ox + 2, oy + 9, 12, 2, '#3b78d1'); R(ox + 3, oy + 13, 3, 3, '#333333'); R(ox + 10, oy + 13, 3, 3, '#333333');
    R(ox + 3, oy + 4, 2, 3, '#e2452f'); R(ox + 6, oy + 4, 2, 3, '#f0c232'); R(ox + 9, oy + 4, 2, 3, '#6cc38a'); R(ox + 12, oy + 4, 1, 3, '#8a4a2b');
    R(ox + 1, oy, 14, 2, '#e2452f'); R(ox + 4, oy, 3, 2, '#ffffff'); R(ox + 10, oy, 3, 2, '#ffffff'); R(ox + 7, oy + 2, 1, 5, '#8d8f96');
  } else if (ch === 'S') {
    // Kiosko: wooden counter under a striped awning. Neighbouring stall tiles share one awning.
    const stripe = x % 2 ? '#f0c232' : '#e2452f';
    R(ox, oy + 7, 16, 8, '#a8743f'); R(ox, oy + 7, 16, 2, '#c99257'); R(ox, oy + 11, 16, 1, '#875a2c');
    R(ox, oy, 16, 4, stripe); R(ox + 4, oy, 4, 4, '#ffffff'); R(ox + 12, oy, 4, 4, '#ffffff'); R(ox, oy + 4, 16, 1, shade(stripe, -0.3));
    if (tileAt(x - 1, y) !== 'S') R(ox + 1, oy + 4, 1, 3, '#6e4520');
    if (tileAt(x + 1, y) !== 'S') R(ox + 14, oy + 4, 1, 3, '#6e4520');
    R(ox + 3, oy + 5, 3, 2, '#c47a2c'); R(ox + 9, oy + 5, 3, 2, '#d9a441');
  } else if (ch === 'Z') {
    R(ox + 4, oy + 4, 8, 11, '#2e7d4f'); R(ox + 3, oy + 3, 10, 2, '#246640'); R(ox + 5, oy + 6, 1, 8, '#3f9e66'); R(ox + 8, oy + 6, 1, 8, '#3f9e66');
    R(ox + 4, oy + 15, 8, 1, '#1b4d30');
  } else if (ch === 'B') {
    R(ox + 7, oy + 4, 2, 12, '#8d8f96'); R(ox + 2, oy + 1, 12, 7, '#2f6fc0'); R(ox + 3, oy + 2, 10, 5, '#ffffff');
    R(ox + 4, oy + 3, 8, 2, '#2f6fc0'); R(ox + 4, oy + 5, 2, 1, '#333333'); R(ox + 10, oy + 5, 2, 1, '#333333');
  } else if (ch === 'm') {
    R(ox + 1, oy + 2, 14, 8, '#2c6b36'); R(ox + 3, oy, 10, 3, '#3a8545'); R(ox + 5, oy + 3, 4, 2, '#4f9d58');
    for (let i = 0; i < 4; i++) R(ox + 2 + i * 4, oy + 10, 1, 5, '#6b4a2b');
    R(ox + 3, oy + 12, 2, 1, '#6b4a2b'); R(ox + 11, oy + 12, 2, 1, '#6b4a2b');
  } else if (ch === 'O') {
    R(ox + 3, oy + 3, 10, 12, '#8a5a2b'); R(ox + 3, oy + 3, 10, 2, '#efe0bd'); R(ox + 3, oy + 7, 10, 1, '#c9a24a'); R(ox + 3, oy + 12, 10, 1, '#c9a24a');
    R(ox + 5, oy + 5, 1, 9, '#6e4520'); R(ox + 10, oy + 5, 1, 9, '#6e4520');
  }
}
function paintMap() { for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) paintTile(x, y); }

// ---------- Dialog engine ----------
const L = (who, es, en) => ({ who, es, en });
const DO = fn => ({ do: fn });
function ask(who, es, en, opts) {
  const node = { who, es, en, opts };
  opts.forEach(o => { if (!o.ok) o.then = (o.then || []).concat([node]); });
  return node;
}
const opt = (es, en, ok, then) => ({ es, en, ok, then: then || [] });
function give(item, n) { rs().inv[item] = n === undefined ? 1 : n; renderBag(); renderObjective(); }
function take(item) { delete rs().inv[item]; renderBag(); renderObjective(); }
function setQ(q) {
  const r = rs(); r.q = q; renderObjective();
  if (q === cur.enDialogUntil && !st.told['en:' + cur.id]) { st.told['en:' + cur.id] = 1; toast('Desde ahora: toca una palabra o EN si necesitas ayuda.', 'From now on: tap a word or EN if you need help.'); }
  if (q >= cur.finalQ) st.done[cur.id] = 1;
  save();
}

let dq = [], dialogOpen = false, curNode = null;
function runDialog(nodes) { dq = nodes.slice(); dialogOpen = true; $('dialog').hidden = false; nextNode(); }
function nextNode() {
  while (dq.length && dq[0].do) dq.shift().do();
  if (!dq.length) { closeDialog(); return; }
  curNode = dq.shift(); showNode(curNode);
}
function closeDialog() {
  dialogOpen = false; curNode = null; $('dialog').hidden = true; hidePop(); save();
  if (st.done[cur.id] && !st.told['win:' + cur.id]) { st.told['win:' + cur.id] = 1; showWin(); }
}
const enAuto = () => rs().q < cur.enDialogUntil;
function showNode(n) {
  const d = $('dialog');
  d.querySelector('.who').textContent = n.who || '';
  d.querySelector('.who').hidden = !n.who;
  d.querySelector('.text').innerHTML = renderWords(n.es);
  countWords(n.es);
  const en = d.querySelector('.en'), auto = enAuto(); en.textContent = n.en || ''; en.hidden = !auto;
  $('btnEn').hidden = auto || !n.en;
  const ch = d.querySelector('.choices'); ch.innerHTML = '';
  if (n.opts) {
    n.opts.forEach(o => {
      const b = document.createElement('button');
      b.innerHTML = esc(o.es) + (auto ? `<small>${esc(o.en)}</small>` : '');
      b.addEventListener('click', () => { countWords(o.es); speak(o.es); dq = o.then.concat(dq); nextNode(); });
      ch.appendChild(b);
    });
  }
  $('btnNext').hidden = !!n.opts;
  d.scrollTop = 0;
  speak(n.es);
}
$('btnNext').addEventListener('click', () => { if (dialogOpen && curNode && !curNode.opts) nextNode(); });
$('btnEn').addEventListener('click', () => { $('dialog').querySelector('.en').hidden = false; $('btnEn').hidden = true; });

// Things any region can look at. Regions answer first with their own look(); this is the fallback.
function genericLook(x, y, ch) {
  if (ch === 'D') { const [es, en] = HOUSE[tileAt(x - 1, y)]; return [L('', `Una casa ${es}. No hay nadie.`, `A ${en} house. Nobody is home.`)]; }
  if (HOUSE[ch]) return [L('', `Una casa ${HOUSE[ch][0]}.`, `A ${HOUSE[ch][1]} house.`)];
  if (BENCH[ch]) return [L('', `Un banco ${BENCH[ch][0]}.`, `A ${BENCH[ch][1]} bench.`)];
  if (POTS[ch]) return [L('', `Pintura ${POTS[ch][0]}.`, `${POTS[ch][1][0].toUpperCase() + POTS[ch][1].slice(1)} paint.`)];
  if (ch === 'B') return [L('', 'Es la parada de guagua. ¿Para dónde vas?', 'It\'s the bus stop. Where are you headed?'), DO(openTravel)];
  const simple = {
    P: ['Una palma muy alta.', 'A very tall palm tree.'], M: ['Es un árbol de mango. ¡Qué grande!', 'It\'s a mango tree. How big!'],
    T: ['Un flamboyán. Sus flores son rojas.', 'A flame tree. Its flowers are red.'], F: ['Una fuente. El agua está fría.', 'A fountain. The water is cold.'],
    c: ['Un cañón muy viejo.', 'A very old cannon.'], L: ['La bandera de Puerto Rico.', 'The flag of Puerto Rico.'], '#': ['Una pared muy vieja.', 'A very old wall.'],
    '~': ['El mar es azul.', 'The sea is blue.'], Z: ['Es un zafacón.', 'It\'s a trash can.'], S: ['Un kiosko. ¡Huele rico!', 'A food stand. It smells good!'],
    O: ['Un tambor de bomba.', 'A bomba drum.'], m: ['Un mangle. Sus raíces están en el agua.', 'A mangrove. Its roots are in the water.'],
    G: ['La puerta está cerrada.', 'The door is closed.'],
  };
  if (simple[ch]) return [L('', simple[ch][0], simple[ch][1])];
  return null;
}

let objEn = false;
function renderObjective() {
  const [es, en] = cur.objective(rs());
  const o = $('objective');
  o.querySelector('.es').innerHTML = renderWords(es);
  o.querySelector('.en').textContent = (rs().q <= cur.enObjectiveUntil || objEn) ? en : 'Tap a word, or tap here for English';
  $('place').textContent = cur.name;
}
$('objective').addEventListener('click', e => { if (e.target.closest('.w')) return; if (rs().q > cur.enObjectiveUntil) { objEn = !objEn; renderObjective(); } });

function renderBag() {
  const inv = rs().inv, keys = Object.keys(inv).filter(k => ITEMS[k]);
  $('bag').innerHTML = keys.length ? '<span class="lbl">Mochila:</span>' + keys.map(k => `<span class="chip">${renderWords(ITEMS[k](inv[k]))}</span>`).join('') : '';
}

// ---------- Word popup ----------
let popTimer = 0;
function showPop(el) {
  const k = el.dataset.w; if (!GL[k]) return;
  st.look[k] = (st.look[k] || 0) + 1;
  const p = $('pop'); p.innerHTML = `<b>${esc(el.textContent)}</b> · ${esc(GL[k])}`; p.hidden = false;
  const r = el.getBoundingClientRect(), pw = p.offsetWidth, ph = p.offsetHeight;
  const left = Math.min(Math.max(8, r.left + r.width / 2 - pw / 2), window.innerWidth - pw - 8);
  let top = r.top - ph - 8; if (top < 8) top = r.bottom + 8;
  p.style.left = left + 'px'; p.style.top = top + 'px';
  speak(el.textContent, true);
  clearTimeout(popTimer); popTimer = setTimeout(hidePop, 3200);
}
function hidePop() { $('pop').hidden = true; }
document.addEventListener('click', e => { const w = e.target.closest('.w[data-w]'); if (w) { e.stopPropagation(); showPop(w); } else hidePop(); }, true);

// ---------- Toast ----------
let toastTimer = 0;
function toast(es, en) {
  const t = $('toast'); t.innerHTML = renderWords(es) + (en ? `<small>${esc(en)}</small>` : ''); t.hidden = false;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.hidden = true, 4200);
}

// ---------- Controls & learning the buttons ----------
const BTN_LEARN = 12;
const DIR_V = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] };
const DIR_WORD = { up: 'arriba', down: 'abajo', left: 'izquierda', right: 'derecha' };
const ACT_EN = { hablar: 'talk', mirar: 'look', tomar: 'take', seguir: 'continue' };
function bumpBtn(word) {
  st.btn[word] = (st.btn[word] || 0) + 1;
  if (st.btn[word] === BTN_LEARN) toast(`¡Ya sabes "${word}"!`, `You know "${word}" now. The English hint is gone.`);
  refreshButtons();
}
function refreshButtons() {
  document.querySelectorAll('.dpad .ctl').forEach(b => b.classList.toggle('learned', (st.btn[DIR_WORD[b.dataset.dir]] || 0) >= BTN_LEARN));
  const a = $('bAct'); a.classList.toggle('learned', (st.btn[a.dataset.word] || 0) >= BTN_LEARN);
}
const overlayOpen = () => ['intro', 'dict', 'win', 'travel'].some(id => !$(id).hidden);
let held = null;
function press(dir, el) {
  held = dir; el && el.classList.add('on'); bumpBtn(DIR_WORD[dir]);
  if (!dialogOpen) { player.dir = dir; tryMove(); }
}
function release(el) { held = null; el && el.classList.remove('on'); }
document.querySelectorAll('.dpad .ctl').forEach(b => {
  b.addEventListener('pointerdown', e => { e.preventDefault(); b.setPointerCapture && b.setPointerCapture(e.pointerId); press(b.dataset.dir, b); });
  ['pointerup', 'pointercancel', 'lostpointercapture'].forEach(ev => b.addEventListener(ev, () => release(b)));
  b.addEventListener('contextmenu', e => e.preventDefault());
});
const bAct = $('bAct');
bAct.addEventListener('pointerdown', e => { e.preventDefault(); bAct.classList.add('on'); action(); });
['pointerup', 'pointercancel', 'pointerleave'].forEach(ev => bAct.addEventListener(ev, () => bAct.classList.remove('on')));
const KEYS = { ArrowUp: 'up', KeyW: 'up', ArrowDown: 'down', KeyS: 'down', ArrowLeft: 'left', KeyA: 'left', ArrowRight: 'right', KeyD: 'right' };
const btnFor = d => document.querySelector(`.dpad [data-dir="${d}"]`);
document.addEventListener('keydown', e => {
  if (overlayOpen()) { if (e.code === 'Escape') { $('dict').hidden = true; $('travel').hidden = true; } return; }
  const d = KEYS[e.code];
  if (d) { e.preventDefault(); if (!e.repeat) press(d, btnFor(d)); return; }
  if (['Space', 'Enter', 'KeyZ', 'KeyE'].includes(e.code)) {
    e.preventDefault(); if (e.repeat) return;
    if (dialogOpen && curNode && curNode.opts) return;
    action();
  }
});
document.addEventListener('keyup', e => { const d = KEYS[e.code]; if (d && held === d) release(btnFor(d)); });

// ---------- Player & world ----------
const player = { x: 0, y: 0, dir: 'down', moving: null, step: 0 };
function solid(x, y) {
  const ch = tileAt(x, y);
  if (ch === 'G') return !rs().flags.gateOpen;
  return SOLID.includes(ch) || !!npcAt(x, y);
}
function tryMove() {
  if (player.moving || dialogOpen) return;
  const [dx, dy] = DIR_V[player.dir], tx = player.x + dx, ty = player.y + dy;
  if (solid(tx, ty)) return;
  player.moving = { fx: player.x, fy: player.y, tx, ty, t: 0 };
}
function facing() { const [dx, dy] = DIR_V[player.dir]; return { x: player.x + dx, y: player.y + dy }; }
function actionWord() {
  if (dialogOpen) return 'seguir';
  const f = facing(), ch = tileAt(f.x, f.y);
  const special = cur.actionWord && cur.actionWord(f.x, f.y, ch, rs());
  if (special) return special;
  if (npcAt(f.x, f.y) || 'DKSB'.includes(ch) || (ch === 'G' && !rs().flags.gateOpen)) return 'hablar';
  if (SOLID.includes(ch)) return 'mirar';
  return 'hablar';
}
function action() {
  bumpBtn(actionWord());
  if (dialogOpen) { if (curNode && !curNode.opts) nextNode(); return; }
  if (player.moving) return;
  const f = facing(), n = npcAt(f.x, f.y), ch = tileAt(f.x, f.y);
  let nodes = null;
  if (n) { n.dir = { up: 'down', down: 'up', left: 'right', right: 'left' }[player.dir]; nodes = cur.talk(n.id, rs()); }
  else nodes = (cur.look && cur.look(f.x, f.y, ch, rs())) || genericLook(f.x, f.y, ch);
  if (nodes && nodes.length) runDialog(nodes);
}

let hintUntil = 0;
$('btnHint').addEventListener('click', () => {
  hintUntil = performance.now() + 6000;
  toast('Pista: sigue la flecha.', 'Hint: follow the arrow.');
});

// ---------- Travel ----------
function regionUnlocked(i) { return i === 0 || !!st.done[REGIONS[i - 1].id]; }
function openTravel() {
  const list = $('travelList'); list.innerHTML = '';
  REGIONS.forEach((def, i) => {
    const here = def.id === cur.id, open = regionUnlocked(i), done = st.done[def.id];
    const b = document.createElement('button');
    b.className = 'stop'; b.disabled = here || !open;
    const status = here ? 'Estás aquí · You are here' : !open ? `Termina ${REGIONS[i - 1].name} primero · Finish ${REGIONS[i - 1].en} first` : done ? 'Completado · Completed' : 'Nuevo · New';
    b.innerHTML = `<span class="nm">${esc(def.name)}</span><span class="sub">${esc(def.blurb)}</span><span class="st">${esc(status)}</span>`;
    b.addEventListener('click', () => travelTo(def.id));
    list.appendChild(b);
  });
  COMING.forEach(c => {
    const d = document.createElement('div'); d.className = 'stop soon';
    d.innerHTML = `<span class="nm">${esc(c.name)}</span><span class="sub">${esc(c.blurb)}</span><span class="st">Próximamente · Coming soon</span>`;
    list.appendChild(d);
  });
  $('travel').hidden = false;
}
$('btnTravelClose').addEventListener('click', () => $('travel').hidden = true);
function travelTo(id) {
  $('travel').hidden = true;
  st.region = id;
  const def = BYID[id], r = rs();
  if (def.arrive) Object.assign(r, { x: def.arrive.x, y: def.arrive.y, dir: def.arrive.dir || 'down' });
  loadRegion();
  toast(`¡Llegaste a ${def.name}!`, `You arrived in ${def.en}!`);
  speak(`¡Llegaste a ${def.name}!`);
  save();
}

// ---------- Rendering ----------
const cv = $('game'), ctx = cv.getContext('2d');
let S = 4, VW = 0, VH = 0;
function resize() {
  const r = cv.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 3);
  cv.width = Math.max(1, Math.round(r.width * dpr)); cv.height = Math.max(1, Math.round(r.height * dpr));
  S = Math.max(1, Math.round(Math.min(cv.width, cv.height) / (9 * TS)));
  VW = cv.width / S; VH = cv.height / S;
}
window.addEventListener('resize', resize);

function draw(t) {
  ctx.imageSmoothingEnabled = false;
  ctx.fillStyle = '#3aa6d8'; ctx.fillRect(0, 0, cv.width, cv.height);
  let ppx = player.x * TS, ppy = player.y * TS;
  if (player.moving) { const m = player.moving, k = Math.min(1, m.t); ppx = (m.fx + (m.tx - m.fx) * k) * TS; ppy = (m.fy + (m.ty - m.fy) * k) * TS; }
  let cx = ppx + 8 - VW / 2, cy = ppy + 8 - VH / 2;
  const mw = W * TS, mh = H * TS;
  cx = mw <= VW ? (mw - VW) / 2 : Math.max(0, Math.min(mw - VW, cx));
  cy = mh <= VH ? (mh - VH) / 2 : Math.max(0, Math.min(mh - VH, cy));
  cx = Math.round(cx * S) / S; cy = Math.round(cy * S) / S;
  const sx = Math.max(0, cx), sy = Math.max(0, cy), sw = Math.min(mw, cx + VW) - sx, sh = Math.min(mh, cy + VH) - sy;
  ctx.drawImage(mapCanvas, sx, sy, sw, sh, (sx - cx) * S, (sy - cy) * S, sw * S, sh * S);
  const P = (x, y, w, h, c) => { ctx.fillStyle = c; ctx.fillRect(Math.round((x - cx) * S), Math.round((y - cy) * S), Math.ceil(w * S), Math.ceil(h * S)); };

  // water sparkles
  const tick = Math.floor(t / 600);
  const x0 = Math.max(0, Math.floor(cx / TS)), y0 = Math.max(0, Math.floor(cy / TS)), x1 = Math.min(W - 1, Math.ceil((cx + VW) / TS)), y1 = Math.min(H - 1, Math.ceil((cy + VH) / TS));
  for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) {
    if (MAP[y][x] !== '~' || hash(x, y, tick) < 0.75) continue;
    P(x * TS + 2 + Math.floor(hash(x, y, tick + 1) * 10), y * TS + 3 + Math.floor(hash(x, y, tick + 2) * 10), 3, 1, '#e8f8ff');
  }
  if (cur.drawExtras) cur.drawExtras(P, t, rs());

  // entities sorted by y
  const r = rs(), giver = cur.giver && cur.giver(r);
  const ents = cur.npcs.map(n => ({ x: n.x * TS, y: n.y * TS, spr: n.spr[n.dir], bob: Math.floor(t / 500 + n.x) % 2, npc: n }));
  ents.push({ x: ppx, y: ppy, spr: PLAYER_SPR[player.dir], bob: player.moving ? (player.step % 2) : 0 });
  ents.sort((a, b) => a.y - b.y);
  for (const e of ents) {
    P(e.x + 3, e.y + 13, 10, 3, 'rgba(0,0,0,.22)');
    ctx.drawImage(e.spr, Math.round((e.x + 2 - cx) * S), Math.round((e.y - 2 - e.bob - cy) * S), 12 * S, 16 * S);
    if (e.npc && giver === e.npc.id && !dialogOpen) {
      const by = e.y - 12 - (Math.floor(t / 300) % 2);
      P(e.x + 4, by, 8, 9, '#ffffff'); P(e.x + 4, by + 9, 8, 1, '#33445c'); P(e.x + 7, by + 1, 2, 5, '#c8412f'); P(e.x + 7, by + 7, 2, 1, '#c8412f');
    }
  }

  // hint arrow
  if (t < hintUntil) {
    const h = cur.hint(r);
    if (h) {
      const ax = h.x * TS + 4, ay = h.y * TS - 14 + (Math.floor(t / 200) % 2) * 2;
      P(ax - 1, ay - 1, 10, 6, '#13202e'); P(ax + 2, ay + 5, 4, 3, '#13202e');
      P(ax, ay, 8, 4, '#f3c13a'); P(ax + 2, ay + 4, 4, 2, '#f3c13a'); P(ax + 3, ay + 6, 2, 1, '#f3c13a');
    }
  }
}

// ---------- Loop ----------
let last = 0, lastWord = '';
function frame(t) {
  const dt = Math.min(0.05, (t - (last || t)) / 1000); last = t;
  if (player.moving) {
    player.moving.t += dt / 0.17;
    if (player.moving.t >= 1) {
      player.x = player.moving.tx; player.y = player.moving.ty; player.moving = null; player.step++;
      const r = rs(); r.x = player.x; r.y = player.y; r.dir = player.dir;
      if (cur.onStep) cur.onStep(player.x, player.y, r);
      if (player.step % 8 === 0) save();
      if (held && !dialogOpen) { player.dir = held; tryMove(); }
    }
  } else if (held && !dialogOpen) { player.dir = held; tryMove(); }
  const w = actionWord();
  if (w !== lastWord) {
    lastWord = w; bAct.dataset.word = w;
    bAct.querySelector('.es').textContent = w; bAct.querySelector('.hint').textContent = ACT_EN[w];
    refreshButtons();
  }
  draw(t);
  requestAnimationFrame(frame);
}

// ---------- Panels ----------
function stats() { const ks = Object.keys(st.seen); return [ks.length, ks.filter(k => st.seen[k] >= 6).length]; }
$('btnDict').addEventListener('click', () => {
  const [seen, learned] = stats(); $('dSeen').textContent = seen; $('dLearned').textContent = learned;
  const ks = Object.keys(st.seen).filter(k => GL[k]).sort((a, b) => st.seen[b] - st.seen[a] || a.localeCompare(b, 'es'));
  $('dictList').innerHTML = ks.length ? ks.map(k => {
    const n = st.seen[k], stars = n >= 6 ? '★★★' : n >= 3 ? '★★☆' : '★☆☆';
    return `<button data-say="${esc(k)}"><span>${esc(k)} <span class="m">· ${esc(GL[k])}</span></span><span class="stars">${stars}</span></button>`;
  }).join('') : '<p class="en">No words yet. Go talk to someone!</p>';
  $('dict').hidden = false;
});
$('dictList').addEventListener('click', e => { const b = e.target.closest('[data-say]'); if (b) speak(b.dataset.say, true); });
$('btnDictClose').addEventListener('click', () => $('dict').hidden = true);
function setVoice(on) { voiceOn = on; $('btnVoice').setAttribute('aria-pressed', on); $('btnVoice').textContent = on ? 'Voz' : 'Voz no'; }
$('btnVoice').addEventListener('click', () => {
  setVoice(!voiceOn);
  if (!voiceOn) try { speechSynthesis.cancel(); } catch (e) {}
  st.voiceOff = !voiceOn; save();
});
function showWin() {
  const [seen, learned] = stats(); $('wSeen').textContent = seen; $('wLearned').textContent = learned;
  $('wTitle').textContent = cur.win.title; $('wEs').innerHTML = renderWords(cur.win.es); $('wEn').textContent = cur.win.en;
  $('win').hidden = false;
}
$('btnKeep').addEventListener('click', () => $('win').hidden = true);
$('btnRestart').addEventListener('click', () => { st.regions[cur.id] = newRegionState(cur); st.told['win:' + cur.id] = 1; loadRegion(); $('win').hidden = true; save(); });

function loadRegion() {
  cur = BYID[st.region];
  MAP = cur.map.map(r => r.split('')); H = MAP.length; W = MAP[0].length;
  MAP.forEach((row, i) => { if (row.length !== W) console.warn(`${cur.id}: row ${i} has ${row.length} tiles, expected ${W}`); });
  mapCanvas.width = W * TS; mapCanvas.height = H * TS;
  const r = rs();
  Object.assign(player, { x: r.x, y: r.y, dir: r.dir, moving: null });
  objEn = false; hintUntil = 0; lastWord = '';
  paintMap(); renderObjective(); renderBag(); refreshButtons();
}

// ---------- Public API for region files ----------
Object.assign(window.VB = window.VB || {}, {
  region(def) {
    def.npcs.forEach(n => n.spr = makeSprites(n.pal));
    REGIONS.push(def); BYID[def.id] = def;
    Object.assign(GL, def.glossary || {}); Object.assign(ITEMS, def.items || {});
  },
  comingSoon(list) { COMING.push(...list); },
  L, ask, opt, DO, give, take, setQ, toast, speak, openTravel, tileAt, HOUSE, BENCH, POTS,
  repaint: (x, y) => paintTile(x, y),
  mapRows: () => MAP,
  npc: id => cur.npcs.find(n => n.id === id),
  start() {
    const boot = data => {
      st = (data && data.st) || load();
      if (st) { $('btnStart').innerHTML = 'Continuar<small>Continue</small>'; $('btnNew').hidden = false; }
      else st = fresh();
      if (data && data.st) $('intro').hidden = true;
      setVoice(!st.voiceOff);
      loadRegion(); resize(); requestAnimationFrame(frame);
    };
    const hello = () => { if (!st.told.start && st.region === REGIONS[0].id && rs().q === 0) { st.told.start = 1; toast('¡Hola! Habla con Abuela Carmen.', 'Hi! Talk to Grandma Carmen (follow the !).'); speak('¡Hola!'); } };
    $('btnStart').addEventListener('click', () => { $('intro').hidden = true; resize(); hello(); });
    $('btnNew').addEventListener('click', () => { st = fresh(); setVoice(true); loadRegion(); save(); $('intro').hidden = true; resize(); hello(); });
    window.claude?.hot?.snapshot?.(() => ({ st }));
    window.claude?.hot?.ready ? window.claude.hot.ready(boot) : boot(window.claude?.hot?.data ?? {});
  },
});
})();
