// Región 2: Piñones y Loíza. Puerto Rican slang, ordering food, money, and Afro-Puerto Rican culture (bomba, vejigantes).
(() => {
const { L, ask, opt, DO, give, take, setQ, toast, speak, POTS } = VB;

const N = { chofer: 'Chofer', javi: 'Javi', tata: 'Doña Tata', pepe: 'Don Pepe', yari: 'Yari', raul: 'Don Raúl', luz: 'Doña Luz' };
const COINS = [{ x: 6, y: 4 }, { x: 20, y: 3 }, { x: 27, y: 6 }];
const PESETAS = ['ninguna', 'una', 'dos', 'tres'];
const JUICES = [['china', 'orange'], ['parcha', 'passion fruit'], ['guanábana', 'soursop'], ['coco', 'coconut']];
const juiceEn = f => (JUICES.find(x => x[0] === f) || [f, f])[1];
const ZAFACON = { x: 17, y: 7 }, BLACK_PAINT = { x: 19, y: 11 }, STOP = { x: 2, y: 8 };

function stallOwner(x) { return x === 8 || x === 9 ? 'tata' : x === 12 || x === 13 ? 'pepe' : null; }

function talk(id, r) {
  const q = r.q, A = N[id], inv = r.inv;
  if (id === 'chofer') return [L(A, '¡Saludos! La guagua sale cuando quieras. ¿Para dónde vas?', 'Hi! The bus leaves whenever you want. Where are you headed?'), DO(VB.openTravel)];
  if (id === 'javi') {
    if (q === 0) return [
      L(A, '¡Wepa! ¿Qué es la que hay, pana?', 'Woo! What\'s up, buddy?'),
      L(A, 'Aquí en Puerto Rico, "¿qué es la que hay?" es como decir "¿qué pasa?"', 'Here in Puerto Rico, "¿qué es la que hay?" is like saying "what\'s up?"'),
      ask(A, '¿Todo bien?', 'All good?', [
        opt('Todo bien, ¿y tú?', 'All good, and you?', true, [L(A, '¡Brutal! Yo estoy bien también.', 'Awesome! I\'m good too.')]),
        opt('Soy una guagua.', 'I am a bus.', false, [L(A, '¡Jaja! No, mano. La guagua es el bus.', 'Haha! No, bro. The guagua is the bus.')]),
      ]),
      L(A, 'Yo soy Javi. Tengo hambre, pero no tengo chavos.', 'I\'m Javi. I\'m hungry, but I don\'t have any money.'),
      L(A, 'Chavos es dinero. Se me cayeron tres pesetas en la arena.', '"Chavos" means money. I dropped three quarters in the sand.'),
      L(A, 'Una peseta es veinticinco centavos. ¡Búscalas en la playa, por favor!', 'A peseta is twenty-five cents. Look for them on the beach, please!'),
      DO(() => setQ(1)),
    ];
    if (q === 1 && (inv.pesetas || 0) >= 3) return [
      L(A, '¡Una, dos, tres pesetas! Setenta y cinco centavos.', 'One, two, three quarters! Seventy-five cents.'),
      L(A, '¡Brutal! Ve al kiosko de Doña Tata.', 'Awesome! Go to Doña Tata\'s stand.'),
      L(A, 'Quiero una alcapurria y un bacalaíto.', 'I want an alcapurria and a bacalaíto.'),
      DO(() => setQ(2)),
    ];
    if (q === 1) return [L(A, `Necesito tres pesetas. Tienes ${PESETAS[inv.pesetas || 0]}.`, `I need three quarters. You have ${['none', 'one', 'two', 'three'][inv.pesetas || 0]}.`)];
    if (q === 2) return [L(A, 'Quiero una alcapurria y un bacalaíto. ¡Ve al kiosko!', 'I want an alcapurria and a bacalaíto. Go to the stand!')];
    if (q === 3 && inv.comida) return [
      L(A, '¡Wepa! ¡Qué rico!', 'Woo! Delicious!'),
      DO(() => take('comida')),
      L(A, 'Ahora tengo sed. Tráeme un jugo de china.', 'Now I\'m thirsty. Bring me a china juice.'),
      L(A, '¿China? Sí, mano. En Puerto Rico, china es naranja.', 'China? Yes, bro. In Puerto Rico, "china" means orange.'),
      L(A, 'Don Pepe vende jugos. Dile que es para mí.', 'Don Pepe sells juices. Tell him it\'s for me.'),
      DO(() => setQ(4)),
    ];
    if (q === 4 && inv.jugo === 'china') return [
      L(A, '¡Jugo de china! ¡Gracias, pana!', 'Orange juice! Thanks, buddy!'),
      DO(() => { take('jugo'); give('vaso'); }),
      L(A, 'Oye, no tires el vaso en la arena. Bótalo en el zafacón.', 'Hey, don\'t throw the cup on the sand. Toss it in the trash can.'),
      L(A, 'Zafacón es como decimos "basurero" aquí.', '"Zafacón" is how we say "trash can" here.'),
      L(A, 'Después, ve a ver a Don Raúl. Hace caretas de vejigante.', 'Then go see Don Raúl. He makes vejigante masks.'),
      DO(() => setQ(5)),
    ];
    if (q === 4 && inv.jugo) return [L(A, `Ay, mano, esto es de ${inv.jugo}. Yo quiero de china.`, `Oh, bro, this is ${juiceEn(inv.jugo)}. I want orange.`)];
    if (q === 4) return [L(A, 'Tráeme un jugo de china. China es naranja.', 'Bring me an orange juice. "China" is orange.')];
    if (q === 5) return [L(A, 'Bota el vaso en el zafacón, al lado de los kioskos.', 'Toss the cup in the trash can, next to the food stands.')];
    if (q >= 6 && q < 9) return [L(A, 'Don Raúl está al lado de su casa azul, cerca de la plaza.', 'Don Raúl is next to his blue house, near the plaza.')];
    return [L(A, '¡Wepa! ¡Bailas brutal, pana!', 'Woo! You dance great, buddy!')];
  }
  if (id === 'tata') {
    if (q === 2) {
      const wrong = [L(A, 'Hmm... piensa, nene. ¿Qué quiere tu pana?', 'Hmm... think, kid. What does your buddy want?')];
      return [
        L(A, '¡Buenas, nene! Tengo alcapurrias, bacalaítos y pinchos.', 'Hi, kid! I have alcapurrias, bacalaítos and skewers.'),
        ask(A, '¿Qué te doy?', 'What can I get you?', [
          opt('Dos pinchos, por favor.', 'Two skewers, please.', false, wrong),
          opt('Una alcapurria y un bacalaíto, por favor.', 'An alcapurria and a bacalaíto, please.', true),
          opt('Una piragua de limón.', 'A lemon piragua.', false, [L(A, '¡Jaja! Aquí no vendo piraguas.', 'Haha! I don\'t sell piraguas here.')]),
        ]),
        L(A, 'Son setenta y cinco centavos.', 'That\'s seventy-five cents.'),
        DO(() => { take('pesetas'); give('comida'); }),
        L('', 'Pagas tres pesetas. Tienes una alcapurria y un bacalaíto.', 'You pay three quarters. You have an alcapurria and a bacalaíto.'),
        DO(() => setQ(3)),
      ];
    }
    if (q > 2) return [L(A, '¡Buen provecho, nene!', 'Enjoy your food, kid!')];
    return [L(A, '¡Frituras calientes! Alcapurrias, bacalaítos...', 'Hot fritters! Alcapurrias, bacalaítos...')];
  }
  if (id === 'pepe') {
    if (q === 4 && inv.jugo !== 'china') {
      const opts = JUICES.slice().sort(() => Math.random() - 0.5).map(([es, en]) =>
        opt('De ' + es + '.', en + '.', true, [DO(() => give('jugo', es)), L('', `Tienes un jugo de ${es}.`, `You have a ${en} juice.`)]));
      return [
        inv.jugo ? L(A, '¿Otro jugo? ¡Claro!', 'Another juice? Sure!') : L(A, '¿Es para Javi? ¡Ese es mi pana! Va gratis.', 'It\'s for Javi? He\'s my buddy! It\'s on the house.'),
        ask(A, '¿De qué lo quieres?', 'What flavor do you want?', opts),
      ];
    }
    if (q === 4) return [L(A, '¡Llévale el jugo a Javi!', 'Take the juice to Javi!')];
    return [L(A, '¡Jugos frescos! ¡Coco frío!', 'Fresh juices! Cold coconut water!')];
  }
  if (id === 'yari') {
    if (q === 5) return [L(A, 'Si tienes basura, el zafacón está al lado de los kioskos.', 'If you have trash, the trash can is next to the food stands.')];
    return [
      L(A, '¡Saludos! Soy salvavidas.', 'Hi! I\'m a lifeguard.'),
      L(A, '¡Cuidado! Hoy el mar está bravo.', 'Careful! The sea is rough today.'),
    ];
  }
  if (id === 'raul') {
    if (q === 6) return [
      L(A, '¡Saludos! Soy Raúl, artesano de Loíza.', 'Greetings! I\'m Raúl, a craftsman from Loíza.'),
      L(A, 'Hago caretas de vejigante para las fiestas de Santiago Apóstol.', 'I make vejigante masks for the festivals of Santiago Apóstol.'),
      L(A, 'Las caretas son de coco y tienen muchos cuernos.', 'The masks are made of coconut and have lots of horns.'),
      L(A, 'Mi careta está casi lista. Necesito la pintura negra.', 'My mask is almost ready. I need the black paint.'),
      L(A, 'Las pinturas están al lado de mi casa.', 'The paints are next to my house.'),
      DO(() => setQ(7)),
    ];
    if (q === 7 && inv.pintura === 'negra') return [
      L(A, '¡Eso es! Pintura negra.', 'That\'s it! Black paint.'),
      DO(() => { take('pintura'); give('careta'); }),
      L(A, 'Mira: rojo, amarillo, verde y negro. ¡Lista!', 'Look: red, yellow, green and black. Ready!'),
      L(A, 'Toma, la careta es para ti. ¡Ahora eres un vejigante!', 'Here, the mask is for you. Now you\'re a vejigante!'),
      L(A, 'La fiesta de bomba es en la plaza. Habla con Doña Luz.', 'The bomba party is in the plaza. Talk to Doña Luz.'),
      DO(() => setQ(8)),
    ];
    if (q === 7 && inv.pintura) return [
      L(A, `No, mano. Esta pintura es ${inv.pintura}. Necesito la negra.`, `No, bro. This paint is ${POTS[Object.keys(POTS).find(k => POTS[k][0] === inv.pintura)][1]}. I need the black one.`),
      DO(() => take('pintura')),
    ];
    if (q === 7) return [L(A, 'Necesito la pintura negra. Está al lado de mi casa.', 'I need the black paint. It\'s next to my house.')];
    if (q > 7) return [L(A, '¡Qué bien te queda la careta!', 'The mask looks great on you!')];
    return [L(A, 'Buenas. Estoy trabajando en una careta.', 'Hello. I\'m working on a mask.')];
  }
  if (id === 'luz') {
    const again = [L(A, 'No, nene. ¡Piensa otra vez!', 'No, kid. Think again!')];
    if (q === 8) return [
      L(A, '¡Wepa! Soy Luz. Toco el tambor de bomba.', 'Woo! I\'m Luz. I play the bomba drum.'),
      L(A, 'La bomba es música y baile de Loíza, de nuestros ancestros africanos.', 'Bomba is music and dance from Loíza, from our African ancestors.'),
      L(A, 'Antes de bailar, contesta tres preguntas.', 'Before dancing, answer three questions.'),
      ask(A, 'Uno: ¿Qué es una peseta?', 'One: What is a peseta?', [opt('Un dólar.', 'A dollar.', false, again), opt('Veinticinco centavos.', 'Twenty-five cents.', true), opt('Una fruta.', 'A fruit.', false, again)]),
      ask(A, 'Dos: En Puerto Rico, ¿qué es una china?', 'Two: In Puerto Rico, what is a "china"?', [opt('Una guagua.', 'A bus.', false, again), opt('Una careta.', 'A mask.', false, again), opt('Una naranja.', 'An orange.', true)]),
      ask(A, 'Tres: ¿Dónde botas la basura?', 'Three: Where do you throw away trash?', [opt('En el zafacón.', 'In the trash can.', true), opt('En la arena.', 'On the sand.', false, again), opt('En el mar.', 'In the sea.', false, again)]),
      L(A, '¡Brutal! ¡A bailar bomba!', 'Awesome! Let\'s dance bomba!'),
      L('', 'Bailas bomba con tu careta de vejigante. Todos gritan: ¡Wepa!', 'You dance bomba in your vejigante mask. Everyone shouts: Wepa!'),
      DO(() => setQ(9)),
    ];
    if (q > 8) return [L(A, '¡Wepa! ¡Vuelve pronto, nene!', 'Woo! Come back soon, kid!')];
    return [L(A, '¡La fiesta de bomba es esta noche!', 'The bomba party is tonight!')];
  }
  return [];
}

function look(x, y, ch, r) {
  const q = r.q;
  if (ch === 'S') {
    const owner = stallOwner(x);
    if (owner) return talk(owner, r);
    return [
      L('', 'El kiosko está cerrado. Abre ahorita.', 'The stand is closed. It opens in a bit.'),
      L('', 'En Puerto Rico, "ahorita" puede ser en cinco minutos... o en dos horas.', 'In Puerto Rico, "ahorita" can mean in five minutes... or in two hours.'),
    ];
  }
  if (ch === 'Z' && q === 5 && r.inv.vaso) return [
    DO(() => take('vaso')),
    L('', 'Botas el vaso en el zafacón. ¡La playa está limpia!', 'You toss the cup in the trash can. The beach is clean!'),
    DO(() => setQ(6)),
  ];
  if (POTS[ch] && q === 7) {
    const [es, en] = POTS[ch];
    return [DO(() => give('pintura', es)), L('', `Tomas la pintura ${es}.`, `You take the ${en} paint.`)];
  }
  if (ch === 'O' && q > 8) return [L('', '¡Bum, bum, bum! Tocas el tambor de bomba.', 'Boom, boom, boom! You play the bomba drum.')];
  return null;
}

VB.region({
  id: 'pinones',
  name: 'Piñones y Loíza',
  en: 'Piñones & Loíza',
  blurb: 'Jerga boricua, comida, dinero, bomba · Puerto Rican slang, food, money, bomba',
  // ~ sea / lagoon  . sand  , grass  - road  = plaza  S kiosko  Z zafacón  B bus stop  P palm  T flamboyán
  // m mangrove  O bomba drum  4 5 6 paint (roja, negra, verde)  a D = Don Raúl's blue house
  map: [
    "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
    "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
    "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
    "~~~..........~~~~.............~~~~~~",
    "~~.....P.........P......P.......~~~~",
    "~~..P.......P..........P.....P...~~~",
    "~~.............................,,~~~",
    "~~,,SS,,SS,,SS,,,Z,,,,,,,,,,,,,,,~~~",
    "~~B------------------------------,~~",
    "~~,,,,,,,,,,,,,,,,,,,,,,,,,=====,,~~",
    "~~,,P,,,,T,,,,,,,,,,,,aaa,,=O=O=,,~~",
    "~~,,,,,,,,,,,,,,,,456,aDa,,=====,,~~",
    "~~,,,,P,,,,,,,,,,,,,,,,,,,,=====,,~~",
    "~~,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,~~",
    "~~,,,,mm~~~~~~~~~~~~~~~~mm,,,,,,,,~~",
    "~~,,,m~~~~~~~~~~~~~~~~~~~~m,,,,,,,~~",
    "~~,,m~~~~~~~~~~~~~~~~~~~~~~m,,,,,,~~",
    "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
  ],
  start: { x: 3, y: 8, dir: 'right' },
  arrive: { x: 3, y: 8, dir: 'right' },
  enDialogUntil: 1,
  enObjectiveUntil: 0,
  finalQ: 9,
  npcs: [
    { id: 'chofer', name: 'Chofer', x: 3, y: 9, dir: 'up', pal: { h: '#2b2b2b', s: '#8d5a3b', c: '#f4f1ea', p: '#34405a', b: '#222222' } },
    { id: 'javi', name: 'Javi', x: 10, y: 9, dir: 'left', pal: { h: '#1b1b1b', s: '#8d5a3b', c: '#e2453c', p: '#2f80c4', b: '#f4f1ea' } },
    { id: 'tata', name: 'Doña Tata', x: 9, y: 6, dir: 'down', pal: { h: '#f4f1ea', s: '#6e4528', c: '#f2c94c', p: '#e2675a', b: '#5a3a22' } },
    { id: 'pepe', name: 'Don Pepe', x: 13, y: 6, dir: 'down', pal: { h: '#bbbbbb', s: '#c98d61', c: '#6cc38a', p: '#34405a', b: '#222222' } },
    { id: 'yari', name: 'Yari', x: 20, y: 5, dir: 'down', pal: { h: '#6b3e1e', s: '#b77b52', c: '#e2452f', p: '#e2452f', b: '#f1d89c' } },
    { id: 'raul', name: 'Don Raúl', x: 21, y: 12, dir: 'up', pal: { h: '#2b2b2b', s: '#6e4528', c: '#f4f1ea', p: '#8a7a4a', b: '#222222' } },
    { id: 'luz', name: 'Doña Luz', x: 29, y: 11, dir: 'down', pal: { h: '#f2c94c', s: '#5b3a22', c: '#ffffff', p: '#e2452f', b: '#222222' } },
  ],
  talk, look,
  actionWord(x, y, ch, r) {
    if (POTS[ch] && r.q === 7) return 'tomar';
    if (ch === 'Z' && r.q === 5) return 'tomar';
    return null;
  },
  onStep(x, y, r) {
    if (r.q !== 1) return;
    const k = 'coin:' + x + ',' + y;
    if (!COINS.some(c => c.x === x && c.y === y) || r.flags[k]) return;
    r.flags[k] = 1;
    const n = (r.inv.pesetas || 0) + 1;
    give('pesetas', n);
    const es = n === 1 ? '¡Una peseta! Tienes una.' : `¡Una peseta! Tienes ${PESETAS[n]}.`;
    toast(es, `A quarter! You have ${['', 'one', 'two', 'three'][n]}.`); speak(es);
  },
  drawExtras(P, t, r) {
    if (r.q !== 1) return;
    COINS.forEach((c, i) => {
      if (r.flags['coin:' + c.x + ',' + c.y]) return;
      const px = c.x * 16 + 6, py = c.y * 16 + 7;
      P(px, py, 4, 4, '#c9a24a'); P(px + 1, py, 2, 1, '#f3d36b'); P(px, py + 1, 1, 2, '#f3d36b');
      if (Math.floor(t / 350 + i) % 3 === 0) { P(px + 4, py - 2, 1, 1, '#ffffff'); P(px - 2, py + 4, 1, 1, '#ffffff'); }
    });
  },
  objective(r) {
    const n = r.inv.pesetas || 0;
    return [
      ['Habla con Javi, tu nuevo pana.', 'Talk to Javi, your new buddy.'],
      [`Busca tres pesetas en la arena. (${n}/3)`, `Find three quarters in the sand. (${n}/3)`],
      ['Compra una alcapurria y un bacalaíto en el kiosko de Doña Tata.', 'Buy an alcapurria and a bacalaíto at Doña Tata\'s stand.'],
      ['Lleva la comida a Javi.', 'Take the food to Javi.'],
      ['Trae un jugo de china a Javi.', 'Bring an orange juice to Javi.'],
      ['Bota el vaso en el zafacón.', 'Throw the cup in the trash can.'],
      ['Habla con Don Raúl, el artesano.', 'Talk to Don Raúl, the craftsman.'],
      ['Lleva la pintura negra a Don Raúl.', 'Bring the black paint to Don Raúl.'],
      ['Ve a la plaza y habla con Doña Luz.', 'Go to the plaza and talk to Doña Luz.'],
      ['¡Explora Piñones o toma la guagua!', 'Explore Piñones or take the bus!'],
    ][Math.min(r.q, 9)];
  },
  giver: r => ({ 0: 'javi', 6: 'raul', 8: 'luz' })[r.q],
  hint(r) {
    const npc = VB.npc;
    switch (r.q) {
      case 0: return npc('javi');
      case 1: return (r.inv.pesetas || 0) >= 3 ? npc('javi') : COINS.find(c => !r.flags['coin:' + c.x + ',' + c.y]) || npc('javi');
      case 2: return npc('tata');
      case 3: return npc('javi');
      case 4: return r.inv.jugo === 'china' ? npc('javi') : npc('pepe');
      case 5: return ZAFACON;
      case 6: return npc('raul');
      case 7: return r.inv.pintura === 'negra' ? npc('raul') : BLACK_PAINT;
      case 8: return npc('luz');
      default: return STOP;
    }
  },
  win: {
    title: '¡Wepa!',
    es: 'Bailaste bomba en Loíza con tu careta de vejigante. Ya hablas como un boricua.',
    en: 'You danced bomba in Loíza wearing your vejigante mask. Now you talk like a real boricua.',
  },
  items: {
    pesetas: n => n === 1 ? 'una peseta' : `${PESETAS[n]} pesetas`,
    comida: () => 'una alcapurria y un bacalaíto',
    jugo: f => 'jugo de ' + f,
    vaso: () => 'un vaso',
    pintura: c => 'pintura ' + c,
    careta: () => 'una careta de vejigante',
  },
  glossary: {
    'piñones': 'Piñones, a beach and mangrove forest in Loíza', 'loíza': 'Loíza, a town famous for Afro-Puerto Rican culture',
    wepa: 'woo! yay! (Puerto Rico)', pana: 'buddy, friend (Puerto Rico)', mano: 'bro (short for hermano)', brutal: 'awesome (Puerto Rico)',
    nene: 'kid, boy (Puerto Rico)', chavos: 'money (Puerto Rico)', peseta: 'quarter, 25 cents (Puerto Rico)', pesetas: 'quarters (Puerto Rico)',
    china: 'orange, the fruit (Puerto Rico)', parcha: 'passion fruit (Puerto Rico)', 'guanábana': 'soursop, a tropical fruit',
    'zafacón': 'trash can (Puerto Rico)', basurero: 'trash can (most other countries)', ahorita: 'in a little while (in PR, maybe a long while)',
    alcapurria: 'fritter of green banana and yautía, stuffed with meat', 'bacalaíto': 'crispy codfish fritter',
    'bacalaítos': 'crispy codfish fritters', alcapurrias: 'stuffed fritters', frituras: 'fried snacks', pinchos: 'grilled skewers',
    kiosko: 'food stand', kioskos: 'food stands', vejigante: 'masked character of Loíza and Ponce festivals', careta: 'mask', caretas: 'masks',
    bomba: 'Afro-Puerto Rican drum music and dance', tambor: 'drum', artesano: 'craftsman', pintura: 'paint', pinturas: 'paints', negra: 'black', negro: 'black',
    arena: 'sand', basura: 'trash', tires: 'throw (no tires = don\'t throw)', 'bótalo': 'throw it away (Puerto Rico)', bota: 'throw away',
    botas: 'you throw away', se: '(reflexive: se me cayeron = I dropped)', cayeron: 'fell', centavos: 'cents', setenta: 'seventy', veinticinco: 'twenty-five',
    naranja: 'orange', decimos: 'we say', decir: 'to say', jugo: 'juice', jugos: 'juices', bailar: 'to dance', bailas: 'you dance', bailaste: 'you danced',
    todo: 'everything, all', dinero: 'money', 'búscalas': 'look for them', 'tráeme': 'bring me', 'dile': 'tell him / her', vende: 'sells',
    doy: 'I give (¿qué te doy? = what can I get you?)', te: 'you (to you)', vendo: 'I sell', pagas: 'you pay', calientes: 'hot',
    frescos: 'fresh', 'frío': 'cold', gratis: 'free', va: 'goes', ese: 'that one', lo: 'it', quieres: 'you want', 'llévale': 'take to him / her',
    'después': 'after, then', ver: 'to see', como: 'like, as', pasa: 'happens (¿qué pasa? = what\'s up?)',
    estoy: 'I am', vaso: 'cup, glass', limpia: 'clean', saludos: 'greetings; hi', salvavidas: 'lifeguard', cuidado: 'careful!',
    bravo: 'rough (the sea); angry', hago: 'I make', fiestas: 'festivals, parties', fiesta: 'party', santiago: 'Saint James',
    'apóstol': 'apostle', muchos: 'many', cuernos: 'horns', casi: 'almost', lista: 'ready', 'eso': 'that', mira: 'look',
    ti: 'you (para ti = for you)', toco: 'I play (an instrument)', tocas: 'you play', 'música': 'music', baile: 'dance', nuestros: 'our',
    ancestros: 'ancestors', africanos: 'African', antes: 'before', todos: 'everyone', gritan: 'shout', tu: 'your', tus: 'your',
    vuelve: 'come back', pronto: 'soon', esta: 'this', noche: 'night (esta noche = tonight)', abre: 'opens', puede: 'can, may',
    minutos: 'minutes', horas: 'hours', tomas: 'you take', queda: 'fits, suits (te queda bien = it looks good on you)',
    trabajando: 'working', sale: 'leaves', cuando: 'when', quieras: 'you want', 'chofer': 'driver', boricua: 'Puerto Rican (from Borikén, the Taíno name)',
    su: 'his, her', lado: 'side (al lado de = next to)', ninguna: 'none', comida: 'food',
  },
});
})();
