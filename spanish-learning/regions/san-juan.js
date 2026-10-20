// Región 1: Viejo San Juan. Greetings, colors, numbers, directions, food and the basics.
(() => {
const { L, ask, opt, DO, give, take, setQ, HOUSE, BENCH } = VB;

const N = { abuela: 'Abuela Carmen', miguel: 'Miguel', rosa: 'Doña Rosa', sofia: 'Sofía', luis: 'Don Luis', tito: 'Tito', guardia: 'Guardia', vecino: 'Vecino' };
const NUM = ['cero', 'uno', 'dos'];
const FLAVORS = [['fresa', 'strawberry'], ['coco', 'coconut'], ['limón', 'lemon'], ['tamarindo', 'tamarind']];
const flavorEn = f => (FLAVORS.find(x => x[0] === f) || [f, f])[1];
const PINK_DOOR = { x: 17, y: 11 }, BLUE_BENCH = { x: 15, y: 16 }, MANGO = { x: 5, y: 13 }, FLAG = { x: 10, y: 4 }, STOP = { x: 3, y: 12 };

function talk(id, r) {
  const q = r.q, A = N[id];
  if (id === 'abuela') {
    if (q === 0) return [
      L(A, '¡Hola! ¡Bienvenido a Puerto Rico!', 'Hello! Welcome to Puerto Rico!'),
      ask(A, 'Yo soy Abuela Carmen. ¿Cómo estás?', 'I\'m Grandma Carmen. How are you?', [
        opt('Bien, gracias.', 'Fine, thanks.', true, [L(A, '¡Qué bueno! Me alegro.', 'Great! I\'m glad.')]),
        opt('Me llamo mango.', 'My name is mango.', false, [L(A, '¡Jaja! No, tú no eres un mango.', 'Haha! No, you are not a mango.')]),
        opt('Tengo un perro.', 'I have a dog.', false, [L(A, 'Qué bien... pero, ¿cómo estás?', 'How nice... but how are you?')]),
      ]),
      L(A, 'Tengo hambre. ¿Me traes un mango, por favor?', 'I\'m hungry. Will you bring me a mango, please?'),
      L(A, 'El árbol de mango está a la izquierda, cerca de las casas.', 'The mango tree is to the left, near the houses.'),
      DO(() => setQ(1)),
    ];
    if (q === 1 && r.inv.mango) return [
      L(A, '¡Un mango! ¡Gracias, mi amor!', 'A mango! Thank you, dear!'),
      L(A, 'Mmm... ¡qué rico!', 'Mmm... how tasty!'),
      DO(() => take('mango')),
      L(A, 'Ahora, por favor, ayuda a Miguel. Él es el cartero.', 'Now, please, help Miguel. He\'s the mail carrier.'),
      L(A, 'Miguel está en la calle, cerca de las casas.', 'Miguel is on the street, near the houses.'),
      DO(() => setQ(2)),
    ];
    if (q === 1) return [L(A, 'El árbol de mango está a la izquierda.', 'The mango tree is to the left.')];
    return [L(A, '¡Hola, mi amor! ¿Cómo estás?', 'Hi, dear! How are you?')];
  }
  if (id === 'miguel') {
    if (q === 2) return [
      L(A, '¡Hola! Tengo una carta para Doña Rosa.', 'Hi! I have a letter for Doña Rosa.'),
      ask(A, '¿Me ayudas?', 'Will you help me?', [
        opt('Sí, claro.', 'Yes, of course.', true),
        opt('No, gracias.', 'No, thanks.', false, [L(A, 'Ay... por favor. ¡Es muy importante!', 'Oh... please. It\'s very important!')]),
      ]),
      L(A, '¡Gracias! Doña Rosa vive en la casa rosada.', 'Thanks! Doña Rosa lives in the pink house.'),
      DO(() => give('carta')),
      L('', 'Tienes una carta.', 'You have a letter.'),
      DO(() => setQ(3)),
    ];
    if (q === 3) return [L(A, 'Doña Rosa vive en la casa rosada.', 'Doña Rosa lives in the pink house.')];
    if (q > 3) return [L(A, '¡Gracias por tu ayuda!', 'Thanks for your help!')];
    return [L(A, '¡Buenos días! Soy Miguel, el cartero.', 'Good morning! I\'m Miguel, the mail carrier.')];
  }
  if (id === 'sofia') {
    if (q === 4) return [
      L(A, '¡Ay, ay, ay! Perdí mi coquí.', 'Oh no! I lost my coquí.'),
      L(A, 'El coquí es una rana pequeña. Canta: ¡co-quí! ¡co-quí!', 'The coquí is a small frog. It sings: co-quí! co-quí!'),
      L(A, 'Creo que está debajo del banco azul.', 'I think it\'s under the blue bench.'),
      DO(() => setQ(5)),
    ];
    if (q === 5 && r.inv.coqui) return [
      L(A, '¡Mi coquí! ¡Muchas gracias!', 'My coquí! Thank you so much!'),
      DO(() => take('coqui')),
      L(A, 'Mi abuelo, Don Luis, es pescador. Está en la playa.', 'My grandpa, Don Luis, is a fisherman. He\'s at the beach.'),
      L(A, 'La playa está abajo, al sur.', 'The beach is down, to the south.'),
      DO(() => setQ(6)),
    ];
    if (q === 5) return [L(A, 'Está debajo del banco azul. ¡Por favor!', 'It\'s under the blue bench. Please!')];
    if (q === 6 || q === 7) return [L(A, 'Mi abuelo está en la playa.', 'My grandpa is at the beach.')];
    if (q === 8 && r.inv.piragua === 'limón') return [
      L(A, '¡Una piragua de limón! ¡Mi favorita!', 'A lemon piragua! My favorite!'),
      DO(() => take('piragua')),
      L(A, '¡Gracias! Eres muy amable.', 'Thanks! You\'re very kind.'),
      L(A, 'Oye, el guardia de El Morro quiere hablar contigo.', 'Hey, the guard at El Morro wants to talk with you.'),
      L(A, 'El Morro está arriba, al norte.', 'El Morro is up, to the north.'),
      DO(() => setQ(9)),
    ];
    if (q === 8 && r.inv.piragua) return [L(A, `Ay... es de ${r.inv.piragua}. Yo quiero de limón.`, `Oh... it's ${flavorEn(r.inv.piragua)}. I want lemon.`)];
    if (q === 8) return [L(A, 'Hace calor... Quiero una piragua de limón.', 'It\'s hot... I want a lemon piragua.')];
    if (q > 8) return [L(A, '¡Co-quí! ¡Co-quí! Mi coquí está feliz.', 'Co-quí! Co-quí! My coquí is happy.')];
    return [L(A, 'Hola. Me llamo Sofía.', 'Hi. My name is Sofía.')];
  }
  if (id === 'luis') {
    if (q === 6) return [
      L(A, '¡Buenas! Soy Don Luis, el pescador.', 'Hello! I\'m Don Luis, the fisherman.'),
      L(A, 'Tengo mucha sed. ¿Me traes dos cocos?', 'I\'m very thirsty. Will you bring me two coconuts?'),
      L(A, 'Hay cocos en las palmas de la playa.', 'There are coconuts in the palm trees on the beach.'),
      DO(() => setQ(7)),
    ];
    if (q === 7 && (r.inv.coco || 0) >= 2) return [
      L(A, 'Uno... dos... ¡Perfecto! ¡Gracias!', 'One... two... Perfect! Thanks!'),
      DO(() => take('coco')),
      L(A, 'Ahh, ¡qué rico! Pero hace mucho calor hoy.', 'Ahh, delicious! But it\'s very hot today.'),
      L(A, 'Sofía tiene calor también. Ella quiere una piragua de limón.', 'Sofía is hot too. She wants a lemon piragua.'),
      L(A, 'Toma un dólar. El piragüero está cerca de la calle.', 'Take a dollar. The piragua seller is near the street.'),
      DO(() => { give('dolar'); setQ(8); }),
    ];
    if (q === 7) return [L(A, `Necesito dos cocos. Tienes ${NUM[r.inv.coco || 0]}.`, `I need two coconuts. You have ${['zero', 'one', 'two'][r.inv.coco || 0]}.`)];
    return [L(A, '¡Buenas! Hoy el mar está tranquilo.', 'Hi! The sea is calm today.')];
  }
  if (id === 'tito') {
    if (q === 8 && r.inv.piragua !== 'limón' && (r.inv.dolar || r.inv.piragua)) {
      const opts = FLAVORS.slice().sort(() => Math.random() - 0.5).map(([es, en]) =>
        opt(es, en, true, [DO(() => { take('dolar'); give('piragua', es); }), L('', `Tienes una piragua de ${es}.`, `You have a ${en} piragua.`)]));
      return [
        r.inv.piragua ? L(A, '¿Otro sabor? ¡Claro que sí!', 'Another flavor? Of course!') : L(A, '¡Hola! Una piragua cuesta un dólar.', 'Hi! A piragua costs one dollar.'),
        ask(A, '¿De qué sabor?', 'What flavor?', opts),
      ];
    }
    if (q === 8) return [L(A, '¡Buen provecho!', 'Enjoy!')];
    return [L(A, '¡Piraguas! ¡Piraguas frías!', 'Piraguas! Cold piraguas!')];
  }
  if (id === 'guardia') {
    const again = [L(A, 'No. ¡Piensa otra vez!', 'No. Think again!')];
    if (q === 9) return [
      L(A, '¡Alto! Esto es El Morro, un fuerte muy viejo.', 'Stop! This is El Morro, a very old fort.'),
      L(A, 'Para entrar, contesta tres preguntas.', 'To enter, answer three questions.'),
      ask(A, 'Uno: ¿De qué color es el mar?', 'One: What color is the sea?', [opt('Rojo.', 'Red.', false, again), opt('Azul.', 'Blue.', true), opt('Amarillo.', 'Yellow.', false, again)]),
      ask(A, 'Dos: ¿Cuántos cocos tiene Don Luis?', 'Two: How many coconuts does Don Luis have?', [opt('Cinco.', 'Five.', false, again), opt('Tres.', 'Three.', false, again), opt('Dos.', 'Two.', true)]),
      ask(A, 'Tres: ¿Dónde estaba el coquí?', 'Three: Where was the coquí?', [opt('Debajo del banco azul.', 'Under the blue bench.', true), opt('En la playa.', 'On the beach.', false, again), opt('En la casa rosada.', 'In the pink house.', false, again)]),
      L(A, '¡Muy bien! Puedes entrar.', 'Very good! You may enter.'),
      DO(() => { r.flags.gateOpen = 1; VB.repaint(9, 7); setQ(10); }),
      L(A, 'Sube a la bandera de Puerto Rico.', 'Go up to the flag of Puerto Rico.'),
    ];
    if (q >= 10) return [L(A, '¡Bienvenido a El Morro!', 'Welcome to El Morro!')];
    return [L(A, '¡Alto! El Morro está cerrado.', 'Stop! El Morro is closed.')];
  }
  return [];
}

function look(x, y, ch, r) {
  const q = r.q;
  if (ch === 'D') {
    const [es, en] = HOUSE[VB.tileAt(x - 1, y)];
    if (x === PINK_DOOR.x && y === PINK_DOOR.y) {
      if (q === 3) return [
        L(N.rosa, '¿Una carta? ¿Para mí? ¡Gracias!', 'A letter? For me? Thank you!'),
        DO(() => take('carta')),
        L(N.rosa, 'Es de mi hijo. Él vive en Nueva York.', 'It\'s from my son. He lives in New York.'),
        L(N.rosa, 'Ay, mi nieta Sofía está triste. Está a la derecha de la plaza.', 'Oh, my granddaughter Sofía is sad. She\'s to the right of the plaza.'),
        DO(() => setQ(4)),
      ];
      if (q > 3) return [L(N.rosa, '¡Hola! Gracias por la carta.', 'Hi! Thanks for the letter.')];
    }
    if (q === 3) return [L(N.vecino, `Hola. No, Doña Rosa no vive aquí. Esta casa es ${es}.`, `Hi. No, Doña Rosa doesn't live here. This house is ${en}.`)];
    return null;
  }
  if (BENCH[ch] && q === 5 && !r.inv.coqui) {
    const [es, en] = BENCH[ch];
    if (ch === '2') return [DO(() => give('coqui')), L('', '¡Co-quí! ¡Co-quí! ¡Encontraste el coquí!', 'Co-quí! Co-quí! You found the coquí!')];
    return [L('', `No hay nada debajo del banco ${es}.`, `There's nothing under the ${en} bench.`)];
  }
  if (ch === 'M' && q === 1 && !r.inv.mango) return [DO(() => { give('mango'); VB.repaint(x, y); }), L('', '¡Un mango! Tienes un mango.', 'A mango! You have a mango.')];
  if (ch === 'P' && q === 7) {
    const k = 'palm:' + x + ',' + y;
    if ((r.inv.coco || 0) >= 2) return [L('', 'Ya tienes dos cocos.', 'You already have two coconuts.')];
    if (!r.flags[k]) return [DO(() => { r.flags[k] = 1; give('coco', (r.inv.coco || 0) + 1); VB.repaint(x, y); }),
      { who: '', get es() { return r.inv.coco === 2 ? 'Tienes dos cocos.' : 'Tienes un coco.'; }, get en() { return r.inv.coco === 2 ? 'You have two coconuts.' : 'You have one coconut.'; } }];
    return [L('', 'Una palma. No hay más cocos.', 'A palm tree. There are no more coconuts.')];
  }
  if (ch === 'K') return talk('tito', r);
  if (ch === 'G' && !r.flags.gateOpen) return [L('', 'La puerta está cerrada.', 'The door is closed.'), ...talk('guardia', r)];
  if (ch === 'L' && q === 10) return [
    L('', '¡La bandera de Puerto Rico!', 'The flag of Puerto Rico!'),
    L('', 'Desde aquí ves el mar, la ciudad y toda la isla.', 'From here you see the sea, the city and the whole island.'),
    L('', '¡Felicidades! Ahora hablas un poco de español.', 'Congratulations! Now you speak a little Spanish.'),
    L('', 'La guagua te lleva a otras partes de la isla.', 'The bus takes you to other parts of the island.'),
    DO(() => setQ(11)),
  ];
  return null;
}

VB.region({
  id: 'sanjuan',
  name: 'Viejo San Juan',
  en: 'Old San Juan',
  blurb: 'Saludos, colores, números, comida · Greetings, colors, numbers, food',
  // ~ sea  . sand  , grass  = blue cobblestone (adoquines)  # fort wall  g fort floor  G fort gate  B bus stop
  // r y p a v = houses (roja, amarilla, rosada, azul, verde)  D door  P palm  M mango tree  T flamboyán
  // F fountain  1 2 3 benches (rojo, azul, amarillo)  k dock  c cannon  L flag  K piragua cart
  map: [
    "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
    "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
    "~~~############~~~~~~~~~~~~~~~~~~~~~",
    "~~~#gggggggggg#~~~~~~~~~~~~~~~~~~~~~",
    "~~~#ggcgggLgcg#~~~~~~~~~~~~~~~~~~~~~",
    "~~~#gggggggggg#.....~~~~~~~~~~~~~~~~",
    "~~~#gcggggggcg#,,,,,,..~~~~~~~~~~~~~",
    "~~~######G#####,,,,,,,,.~~~~~~~~~~~~",
    "~~...,,,,=,,,,,,,,T,,,,,..~~~~~~~~~~",
    "~~..,rrr,=,yyy,,ppp,,aaa,,T,,..~~~~~",
    "~~..,rrr,=,yyy,,ppp,,aaa,,,,,,..~~~~",
    "~~..,rDr,=,yDy,,pDp,,aDa,,,,,,..~~~~",
    "~~.B===========================..~~~",
    "~~..,M,,,=,,,,==========,,,,,,..~~~~",
    "~~..,,,,,=,,,,=1======3=,,,,,,..~~~~",
    "~~..,,,,,=,,,,====F=====,,,,,,..~~~~",
    "~~..,,,,,=,,,,=2========,,,,,,..~~~~",
    "~~..,,,,,=,,,,==========,,,,,,..~~~~",
    "~~..,vvv,=,,T,,,,,,=,,,,T,,,,,..~~~~",
    "~~..,vDv,=,,,,,,,,,=,,,,,,,,,,..~~~~",
    "~~..,,,,,,,,,,,,,,,=,,K,,,,,,,..~~~~",
    "~~...,,,,P,,,,,,,,,=,,,,,,P,,,...~~~",
    "~~~.....P...........P......P....~~~~",
    "~~~~..........kkk.......P....~~~~~~~",
    "~~~~~~~~~~~~~~kkk~~~~~~~~~~~~~~~~~~~",
    "~~~~~~~~~~~~~~kkk~~~~~~~~~~~~~~~~~~~",
    "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
    "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
  ],
  start: { x: 14, y: 12, dir: 'down' },
  arrive: { x: 4, y: 12, dir: 'right' },
  enDialogUntil: 3,
  enObjectiveUntil: 3,
  finalQ: 11,
  npcs: [
    { id: 'abuela', name: 'Abuela Carmen', x: 20, y: 14, dir: 'down', pal: { h: '#e8e8e8', s: '#c98d61', c: '#a845b8', p: '#a845b8', b: '#5a3a22' } },
    { id: 'miguel', name: 'Miguel', x: 11, y: 13, dir: 'down', pal: { h: '#24406e', s: '#a8714a', c: '#3a63a8', p: '#2a3f6b', b: '#222222' } },
    { id: 'sofia', name: 'Sofía', x: 25, y: 16, dir: 'left', pal: { h: '#3b2416', s: '#c98d61', c: '#f2c94c', p: '#f28aa8', b: '#e44d3a' } },
    { id: 'luis', name: 'Don Luis', x: 15, y: 25, dir: 'up', pal: { h: '#e8c66a', s: '#9c6a45', c: '#f4f1ea', p: '#4a6a91', b: '#5a3a22' } },
    { id: 'tito', name: 'Tito', x: 21, y: 20, dir: 'down', pal: { h: '#2b2b2b', s: '#b77b52', c: '#e2453c', p: '#34405a', b: '#222222' } },
    { id: 'guardia', name: 'Guardia', x: 10, y: 8, dir: 'down', pal: { h: '#4a3a24', s: '#a8714a', c: '#8a7a4a', p: '#5a4e30', b: '#222222' } },
  ],
  talk, look,
  actionWord(x, y, ch, r) {
    if (ch === 'M' && r.q === 1 && !r.inv.mango) return 'tomar';
    if (ch === 'P' && r.q === 7 && !r.flags['palm:' + x + ',' + y] && (r.inv.coco || 0) < 2) return 'tomar';
    return null;
  },
  objective(r) {
    return [
      ['Habla con Abuela Carmen en la plaza.', 'Talk to Grandma Carmen in the plaza.'],
      ['Trae un mango a Abuela.', 'Bring a mango to Grandma.'],
      ['Busca a Miguel, el cartero.', 'Find Miguel, the mail carrier.'],
      ['Lleva la carta a la casa rosada.', 'Take the letter to the pink house.'],
      ['Habla con Sofía, a la derecha de la plaza.', 'Talk to Sofía, to the right of the plaza.'],
      ['Busca el coquí debajo del banco azul.', 'Look for the coquí under the blue bench.'],
      ['Ve a la playa y habla con Don Luis.', 'Go to the beach and talk to Don Luis.'],
      ['Trae dos cocos a Don Luis.', 'Bring two coconuts to Don Luis.'],
      ['Compra una piragua de limón para Sofía.', 'Buy a lemon piragua for Sofía.'],
      ['Habla con el guardia de El Morro.', 'Talk to the guard at El Morro.'],
      ['Sube a la bandera de El Morro.', 'Climb up to the flag of El Morro.'],
      ['Ve a la parada de guagua. ¡Hay más isla!', 'Go to the bus stop. There\'s more island to see!'],
    ][Math.min(r.q, 11)];
  },
  giver: r => ({ 0: 'abuela', 2: 'miguel', 4: 'sofia', 6: 'luis', 9: 'guardia' })[r.q],
  hint(r) {
    const npc = VB.npc;
    switch (r.q) {
      case 0: return npc('abuela');
      case 1: return r.inv.mango ? npc('abuela') : MANGO;
      case 2: return npc('miguel');
      case 3: return PINK_DOOR;
      case 4: return npc('sofia');
      case 5: return r.inv.coqui ? npc('sofia') : BLUE_BENCH;
      case 6: return npc('luis');
      case 7: {
        if ((r.inv.coco || 0) >= 2) return npc('luis');
        const rows = VB.mapRows();
        for (let y = 0; y < rows.length; y++) for (let x = 0; x < rows[y].length; x++) if (rows[y][x] === 'P' && !r.flags['palm:' + x + ',' + y]) return { x, y };
        return npc('luis');
      }
      case 8: return r.inv.piragua === 'limón' ? npc('sofia') : npc('tito');
      case 9: return npc('guardia');
      case 10: return FLAG;
      default: return STOP;
    }
  },
  win: {
    title: '¡Felicidades!',
    es: 'Llegaste a la bandera de El Morro. Ahora hablas un poco de español. La guagua te espera en la parada.',
    en: 'You reached the flag of El Morro. Now you speak a little Spanish. The bus is waiting for you at the stop.',
  },
  items: {
    mango: () => 'un mango', carta: () => 'una carta', coqui: () => 'el coquí', coco: n => n === 2 ? 'dos cocos' : 'un coco',
    dolar: () => 'un dólar', piragua: f => 'piragua de ' + f,
  },
  glossary: {
    hola: 'hello', bienvenido: 'welcome', puerto: 'port', rico: 'tasty; rich', yo: 'I', soy: 'I am', abuela: 'grandma',
    'cómo': 'how', bien: 'well, fine', gracias: 'thank you', 'qué': 'what; how (¡qué...! = how...!)',
    bueno: 'good', me: 'me, myself', alegro: 'I\'m glad (me alegro)', llamo: 'I call (me llamo = my name is)', mango: 'mango', jaja: 'haha',
    no: 'no; not', 'tú': 'you', eres: 'you are', tengo: 'I have', perro: 'dog', pero: 'but', hambre: 'hunger (tengo hambre = I\'m hungry)',
    traes: 'you bring', por: 'for; by', favor: 'favor (por favor = please)', las: 'the (plural)', los: 'the (plural)',
    'árbol': 'tree', 'está': 'is (location / state)', cerca: 'near', casas: 'houses', casa: 'house', tienes: 'you have', grande: 'big',
    mi: 'my', amor: 'love; dear', 'él': 'he', cartero: 'mail carrier', en: 'in; on; at', calle: 'street', buenos: 'good',
    'días': 'days (buenos días = good morning)', para: 'for', 'doña': 'title of respect for a woman', don: 'title of respect for a man',
    ayudas: 'you help', 'sí': 'yes', claro: 'of course; clear', ay: 'oh!', muy: 'very', importante: 'important', vive: 'lives', rosada: 'pink',
    carta: 'letter', lleva: 'take, carry', esta: 'this', roja: 'red', rojo: 'red', amarilla: 'yellow', amarillo: 'yellow', azul: 'blue',
    verde: 'green', nadie: 'nobody', hay: 'there is / there are', 'mí': 'me', hijo: 'son', nueva: 'new', nieta: 'granddaughter', triste: 'sad',
    plaza: 'town square', fuente: 'fountain', 'perdí': 'I lost', 'coquí': 'coquí, the tiny singing frog of Puerto Rico',
    rana: 'frog', 'pequeña': 'small', canta: 'sings', creo: 'I think', que: 'that', debajo: 'under (debajo de)', del: 'of the', banco: 'bench',
    nada: 'nothing', encontraste: 'you found', muchas: 'many (muchas gracias = thanks a lot)', abuelo: 'grandpa', pescador: 'fisherman',
    playa: 'beach', sur: 'south', norte: 'north', al: 'to the', hoy: 'today', mar: 'sea', tranquilo: 'calm', buenas: 'hi (short for buenas tardes)',
    mucha: 'a lot of', mucho: 'a lot', sed: 'thirst (tengo sed = I\'m thirsty)', dos: 'two', cocos: 'coconuts', coco: 'coconut', palmas: 'palm trees',
    palma: 'palm tree', 'más': 'more', alta: 'tall', necesito: 'I need', uno: 'one', cero: 'zero', tres: 'three', cinco: 'five',
    perfecto: 'perfect', hace: 'it makes (hace calor = it\'s hot)', calor: 'heat (tengo calor = I\'m hot)', 'también': 'also, too', ella: 'she',
    quiere: 'wants', quiero: 'I want', piragua: 'Puerto Rican shaved ice with syrup', piraguas: 'shaved ices', 'limón': 'lemon / lime',
    toma: 'take (this)', 'dólar': 'dollar', 'piragüero': 'piragua seller', 'frías': 'cold', cuesta: 'costs', sabor: 'flavor', fresa: 'strawberry',
    tamarindo: 'tamarind', otro: 'another', favorita: 'favorite', amable: 'kind', oye: 'hey, listen', guardia: 'guard',
    morro: 'headland (El Morro is the old fort)', contigo: 'with you', alto: 'stop!; tall', esto: 'this', fuerte: 'fort; strong',
    viejo: 'old', vieja: 'old', entrar: 'to enter', contesta: 'answer', preguntas: 'questions', color: 'color', 'cuántos': 'how many', tiene: 'has',
    'dónde': 'where', estaba: 'was', piensa: 'think', otra: 'another', vez: 'time (otra vez = again)', puedes: 'you can', sube: 'go up',
    bandera: 'flag', ves: 'you see', ciudad: 'city', toda: 'all, the whole', isla: 'island', felicidades: 'congratulations',
    hablas: 'you speak', poco: 'a little', 'español': 'Spanish', 'cañón': 'cannon', agua: 'water', 'fría': 'cold', 'flamboyán': 'flame tree',
    sus: 'its, their', flores: 'flowers', son: 'are', rojas: 'red', feliz: 'happy', puerta: 'door', cerrada: 'closed', cerrado: 'closed',
    ve: 'go', busca: 'look for', trae: 'bring', compra: 'buy', explora: 'explore', bonito: 'pretty', buen: 'good', provecho: 'enjoy (buen provecho)',
    y: 'and', tu: 'your', pared: 'wall', te: 'you (to you)', otras: 'other', partes: 'parts', espera: 'waits',
  },
});
})();
