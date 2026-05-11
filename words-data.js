/* ==========================================
   PIKU TYPING — words-data.js  PART 1 of 2
   Word / Number / Punct / Code banks
   ========================================== */

/* ══════════════════════════════════════════
   SECTION 1 — WORDS
   Easy: 300+ | Medium: 400+ | Hard: 200+
══════════════════════════════════════════ */
const WORD_BANK = {

  easy: [
    'the','be','to','of','and','a','in','that','have','it','for','not','on',
    'with','he','as','you','do','at','this','but','his','by','from','they',
    'we','say','her','she','or','an','will','my','one','all','would','there',
    'their','what','so','up','out','if','about','who','get','which','go','me',
    'when','make','can','like','time','no','just','him','know','take','people',
    'into','year','your','good','some','could','them','see','other','than',
    'then','now','look','only','come','its','over','think','also','back',
    'after','use','two','how','our','work','first','well','way','even','new',
    'want','because','any','these','give','day','most','us','cat','dog','run',
    'fly','big','fun','hot','sun','red','box','cup','map','top','win','may',
    'old','boy','girl','city','home','door','tree','hand','face','road','food',
    'book','play','keep','let','put','set','ask','try','add','cut','sit','end',
    'why','bad','eat','few','far','off','ago','own','low','yes','bit','lot',
    'age','air','car','job','arm','art','bed','bag','bus','bar','bay','hit',
    'ice','key','leg','mix','net','oil','pay','pen','pet','pin','pot','raw',
    'row','sea','sky','tax','tip','toe','toy','war','wet','zoo','act','aid',
    'aim','ban','bat','bow','bud','bug','bun','buy','cap','cop','cow','cry',
    'dad','dam','dip','dot','dry','ear','egg','ego','elm','era','eve','eye',
    'fad','fan','fat','fee','fig','fin','fit','fix','fog','fox','fur','gap',
    'gas','gem','god','gun','gut','guy','gym','ham','hat','hay','hen','hey',
    'hip','hop','hub','hug','hum','ill','ink','inn','ion','ivy','jab','jam',
    'jar','jaw','jet','joy','jug','keg','kin','kit','lab','lag','lap','lay',
    'led','lid','lip','lit','log','mad','man','mat','mob','mop','mud','mug',
    'nap','nod','nor','nun','oak','odd','ode','orb','ore','pad','pan','pat',
    'paw','pig','ply','pod','pop','pun','pup','rag','ram','ran','rap','rat',
    'ray','rep','rib','rid','rig','rim','rip','rob','rod','rot','rub','rug',
    'rum','rut','sag','sap','sat','saw','sew','shy','sin','sip','ski','sob',
    'sod','son','sow','spa','spy','sub','sup','tab','tan','tap','tar','ten',
    'tie','tin','ton','too','tug','urn','van','vat','vet','vow','wag','wax',
    'web','wed','wig','wit','woe','wok','won','woo','yak','yam','yap','yew',
    'yip','yet','open','once','five','part','been','long','down','side',
    'been','each','call','move','find','area','same','next','plan','help',
    'feel','fact','turn','move','live','play','fire','hold','read','pass',
    'stop','draw','left','hard','real','near','room','said','form','kind',
    'mind','body','came','show','line','life','city','land','both','name',
    'must','next','late','half','held','true','love','wish','word','note',
    'sure','made','full','done','stay','hand','high','here','case','free',
    'fall','last','able','best','deal','open','team','road','step','walk'
  ],

  medium: [
    'about','above','across','after','again','against','almost','alone',
    'along','already','always','among','around','because','before','between',
    'beyond','bring','build','change','check','choose','clear','close','could',
    'count','cover','create','decide','define','design','detail','differ',
    'direct','during','early','earth','either','enough','every','example',
    'expect','explain','express','family','figure','final','follow','found',
    'front','given','going','great','group','hands','happy','heard','heavy',
    'hence','house','human','inside','instead','large','later','learn',
    'leave','light','likely','listen','little','local','major','matter',
    'maybe','moment','money','month','music','never','night','north','noted',
    'often','order','other','paper','party','place','plain','plant','point',
    'power','press','price','pride','quite','reach','ready','right','river',
    'scene','sense','seven','shall','share','short','since','skill','small',
    'smart','smile','south','space','speed','spend','still','store','story',
    'study','style','sugar','table','teach','terms','thing','third','those',
    'three','throw','today','topic','total','touch','tough','tower','trace',
    'track','trade','trail','train','treat','trial','tried','trust','truth',
    'twice','under','unite','until','upper','usage','usual','value','video',
    'visit','voice','water','whole','whose','wider','world','worry','worth',
    'write','young','yours','basic','blend','block','blood','board','bonus',
    'bound','brain','brand','brave','break','brief','broad','brown','burst',
    'cable','catch','cause','chain','chair','chase','cheap','chess','chief',
    'child','civil','claim','class','clean','climb','clock','cloth','cloud',
    'coach','coast','coral','craft','crash','crazy','cream','crime','cross',
    'crowd','crown','cruel','crush','curve','cycle','daily','dance','dealt',
    'death','debut','decay','depth','digit','dirty','ditch','dizzy','dodge',
    'doubt','draft','drama','drawn','dread','dream','dried','drift','drink',
    'drive','drops','drove','drunk','eager','eagle','eight','elite','empty',
    'enemy','enjoy','equal','error','essay','event','exact','exist','extra',
    'faint','faith','false','fancy','fatal','fault','feast','fence','fever',
    'fewer','fiber','field','fifth','fifty','fight','final','fired','flame',
    'flash','fleet','flesh','float','floor','flour','fluid','flush','focus',
    'force','forge','forth','forty','forum','frame','frank','fraud','fresh',
    'froze','fully','funny','genre','ghost','gland','glare','glass','gloom',
    'glory','glove','grade','grain','grand','grant','grasp','grass','grave',
    'greed','green','greet','grief','grill','grind','groan','gross','grove',
    'grown','guard','guess','guest','guide','guild','guilt','guise','habit',
    'harsh','haste','haven','heart','herbs','hinge','honey','honor','horse',
    'hotel','hound','humor','hurry','ideal','image','imply','index','indie',
    'infer','intro','judge','juice','juicy','jumbo','keeps','knife','knock',
    'known','label','lance','lands','laser','laugh','layer','leads','least',
    'legal','level','liner','lobby','loose','lover','lucky','lunar','magic',
    'maker','match','media','mercy','merit','metal','miles','mixer','modal',
    'model','moral','motor','motto','mount','movie','muddy','naval','noise',
    'novel','nurse','ocean','offer','onset','opera','orbit','outer','owned',
    'panel','panic','patch','pause','peace','pearl','penny','phase','photo',
    'pilot','pitch','pixel','plaza','polar','posts','pound','prima','prime',
    'print','prior','probe','prose','proud','prove','pulse','punch','pupil',
    'queen','query','queue','quick','quiet','quote','radar','radio','rally',
    'ranch','range','rapid','ratio','realm','rebel','recap','refer','reign',
    'relax','relay','remix','repay','reply','rider','ridge','rifle','risky',
    'rival','robot','rocky','rough','round','rowdy','royal','rural','rusty',
    'saint','salad','sandy','sauce','scale','scary','scope','score','scout',
    'seize','serve','setup','shake','shame','shape','shark','sharp','sheen',
    'shine','shirt','shock','shoot','shore','shout','shrug','sight','silly',
    'sixth','sixty','sized','slash','slate','slave','sleep','sleek','slick',
    'slide','slope','sloth','small','smash','smell','smile','smoke','snail',
    'snake','sneak','solar','solve','sorry','spare','spark','speak','spend',
    'spice','spill','spine','spite','split','sport','spray','squad','stack',
    'staff','stage','stain','stake','stale','stamp','stark','start','state',
    'steal','steam','steep','steer','stern','stick','stiff','sting','stock',
    'storm','stout','stove','strap','straw','stray','strip','stuck','stump',
    'super','surge','swamp','swear','sweet','swept','swift','swipe','sword',
    'taken','tense','tenor','thick','thorn','toast','token','torso','toxic',
    'trait','tramp','trash','tread','trend','trick','troop','truly','tutor',
    'tweak','twist','ultra','uncle','urban','valid','vault','verse','viral',
    'vista','vital','vivid','vocal','voter','weary','weave','wedge','weird',
    'white','witty','women','worst','wrath','wreck','yacht','yield','zero',
    'abbey','abide','adore','agile','align','allot','allow','aloft','altar',
    'amend','amuse','angel','angry','anime','annex','antic','anvil','aorta',
    'apart','apple','apply','apron','arise','armor','aroma','array','aside',
    'attic','audit','avail','avid','azure','badge','badly','baker','baron',
    'basis','baste','beady','beard','beast','began','being','below','bench',
    'berry','biome','birch','blade','bland','blaze','bleak','bleed','bless',
    'blimp','blind','bloom','blown','blunt','blush','bogus','boast','bolts',
    'booth','boxer','brace','braid','brash','brawn','braze','bleed','brisk'
  ],

  hard: [
    'acknowledge','acquisition','administration','approximately','circumstance',
    'collaboration','communication','comprehensive','consequently','consistently',
    'contemplating','continuously','corresponding','determination','differentiate',
    'disadvantage','disappointment','documentation','effectiveness','establishment',
    'extraordinary','fundamental','implementation','independence','infrastructure',
    'intelligence','international','investigation','manufacturing','miscellaneous',
    'opportunities','organizational','overwhelming','participation','particularly',
    'perspective','philosophical','predominantly','prioritization','responsibilities',
    'sophisticated','straightforward','strengthening','substantially','transformation',
    'understanding','unfortunately','unquestionably','accountability','accomplishment',
    'characteristics','circumstances','classification','commemoration','consciousness',
    'contradictions','counterproductive','decentralization','deliberation',
    'demonstration','discrimination','dissatisfaction','electromagnetic',
    'entrepreneurship','environmental','experimentation','generalization',
    'globalization','hallucination','hospitalization','humanitarian','hypothetically',
    'identification','incomprehensible','indistinguishable','industrialization',
    'interconnected','interpretation','intimidation','justification','knowledgeable',
    'liberalization','manifestation','misrepresentation','modernization',
    'multiplication','nationalization','normalization','objectification',
    'orchestration','parliamentary','personalization','phenomenological',
    'photosynthesis','precipitation','preoccupation','professionalism',
    'proportionality','qualification','rationalization','reconsideration',
    'rehabilitation','reinforcement','representation','restructuring',
    'revolutionary','simultaneously','sophistication','standardization',
    'subordination','subterranean','sustainability','systematically',
    'technological','telecommunication','transportation','undergraduate',
    'unpredictable','unprecedented','vulnerability','reconciliation',
    'recommendation','misunderstanding','miscommunication','multidimensional',
    'straightforwardly','disproportionately','characteristically',
    'institutionalization','misappropriation','underrepresentation',
    'oversimplification','reconceptualization','desensitization',
    'counterintuitive','underperforming','interdependencies','hyperventilation',
    'thermodynamically','archaeological','neuropsychological','socioeconomically',
    'unconstitutional','pseudoscientific','multidisciplinary','disenfranchisement',
    'procrastination','articulation','authentication','authorization',
    'bureaucratization','circumnavigation','commercialization','commodification',
    'conceptualization','confederation','confrontation','congregation',
    'conservation','constellation','contemplation','contextualization',
    'contradiction','conversation','coordination','corporatization',
    'crystallization','deconstruction','dehumanization','democratization',
    'demonization','denationalization','deregulation','desegregation',
    'deterioration','digitalization','dramatization','electrification',
    'emancipation','encapsulation','enumeration','evangelization',
    'exaggeration','expropriation','extrapolation','formalization',
    'fragmentation','fundamentalism','harmonization','illumination',
    'impersonation','incompatibility','inconsistency','indeterminate',
    'indiscriminate','individualization','infiltration','inflammation',
    'intellectualization','intensification','invalidation','legitimization',
    'marginalization','mechanization','metabolization','militarization',
    'minimization','mobilization','monopolization','naturalization',
    'operationalization','optimization','palatalization','parallelization',
    'parameterization','personification','persuasiveness','polarization',
    'popularization','privatization','professionalization','recharacterization',
    'reclassification','regularization','reinterpretation','reorganization',
    'romanticization','sensitization','specialization','stratification',
    'synchronization','systematization','thermodynamics','trivialization',
    'urbanization','utilization','victimization','visualization'
  ]
};

/* ══════════════════════════════════════════
   SECTION 2 — NUMBERS
══════════════════════════════════════════ */
const NUMBER_BANK = {
  easy:   () => Array.from({length:100}, () => String(Math.floor(Math.random() * 99))),
  medium: () => Array.from({length:100}, () => String(Math.floor(Math.random() * 9999))),
  hard:   () => Array.from({length:100}, () => {
    const types = [
      () => (Math.random() * 999).toFixed(2),
      () => String(Math.floor(Math.random() * 999999)),
      () => String(Math.floor(Math.random() * 9999999)),
    ];
    return types[Math.floor(Math.random()*types.length)]();
  })
};

/* ══════════════════════════════════════════
   SECTION 3 — PUNCTUATION
══════════════════════════════════════════ */
const PUNCT_BANK = {
  easy: [
    'hello,','world.','yes!','no?','wait...','done!','really?','okay,','fine.',
    'sure!','maybe?','never!','always,','sometimes.','perhaps?','exactly!',
    'almost,','nearly.','mostly!','often.','right?','indeed!','stop!','go!',
    'wow!','oops.','hmm?','great!','thanks.','please!','sorry.','well,',
    'actually,','basically,','simply.','clearly!','truly?','fairly.','calmly!',
    'easily.','gently,','happily.','kindly,','neatly,','openly.','quickly,',
    'rarely.','safely!','slowly,','softly.','warmly.','widely!','wrongly.',
    'daily!','early,','nearly!','deeply.','freely!','truly,','lately.',
    'mostly,','partly!','really,','tightly.','boldly!','calmly,','firmly.',
    'evenly!','gently.','hugely,','justly!','keenly.','lively,','madly!'
  ],
  medium: [
    '"Really?!" she asked.','Wait—are you sure?',"It's done... finally!",
    'No! Not again...','Yes, but why though?','Fine. Whatever you say.',
    'Almost—but not quite!','Hmm, perhaps not?','Clearly, this works!',
    "Look out! It's there.",'Oh well, never mind.','Stop! Think first.',
    "Run—don't walk!",'Wow, that\'s great!','So... what now?',
    'Really, though?','I said: stop it!','Was it worth it?',
    'Of course—always.','Never again, right?','Well, here we go.',
    'Are you certain?','Just... do it!','Right then, let\'s go.',
    "That's odd—very odd.",'Hmm, I\'m not sure.','Let\'s think this through.',
    'Wait—what just happened?','Oh no, not again!','Well, that\'s unexpected.',
    "Can't stop now!",'Almost there—keep going!','Done! Finally, done.',
    "That's the spirit!",'No way—seriously?','Yes! Absolutely yes.',
    "Don't give up!",'Almost—just one more.','Breathe... and continue.',
    'Quick! Before it\'s too late.','Careful—it\'s fragile.','Stop, look, listen.',
    'Now or never!','Ready? Set? Go!','Think fast—decide now.',
    'Look before you leap.','Better late than never!',"If not now, when?"
  ],
  hard: [
    '"The result?" she asked, incredulous.','Wait—but that contradicts everything!',
    "It's complicated; don't oversimplify.",'No—the data says otherwise.',
    'Yes, precisely: collaboration wins.','Fine. Reconsider the framework.',
    'Almost right—adjust the variable.','Hmm; the hypothesis needs revision.',
    'Clearly, the algorithm failed here.','Look: three errors in the output.',
    'Oh well—iteration is the process.','Stop: debug before proceeding further.',
    'Run the diagnostics—then report back.','Wow; that\'s a complex edge case.',
    'So... the implementation was flawed?','Really—after all that refactoring?',
    '"Proceed," she said, "but carefully."',"It's not broken; it's... unconventional.",
    'Of course: polymorphism explains it.','Never: that\'s an anti-pattern.',
    '"Fascinating!" he exclaimed, leaning forward.','The paradox—if solved—changes everything.',
    'Yes; the correlation is statistically significant.','No; correlation does not imply causation.',
    '"Eureka!" she cried. "It works!"','Wait—did you validate the edge cases?',
    'Precisely: O(n log n) complexity.','That\'s a memory leak—profile it.',
    'Interesting; the recursion terminates correctly.','Done—but optimize before deploying.',
    'Consider the trade-offs: speed vs. memory.','Refactor first; optimize second; ship third.',
    '"Impossible?" he laughed. "Watch me."','The spec changed—again. Adapt accordingly.'
  ]
};

/* ══════════════════════════════════════════
   SECTION 4 — CODE
══════════════════════════════════════════ */
const CODE_BANK = {
  easy: [
    'const x = 10;','let name = "Piku";','console.log("Hello!");',
    'let sum = a + b;','const arr = [1, 2, 3];','let isOn = true;',
    'x = x + 1;','return a + b;','let msg = "hi";','const n = 42;',
    'arr.push(5);','let i = 0;','let count = 0;','const pi = 3.14;',
    'let flag = false;','arr.pop();','let str = "";','const max = 100;',
    'let min = 0;','arr.length;','str.trim();','num.toString();',
    'Math.random();','Math.floor(x);','parseInt("42");','parseFloat("3.14");',
    'Boolean(0);','String(42);','Number("7");','arr.reverse();',
    'str.split(",");','str.toUpperCase();','str.toLowerCase();','arr.join(", ");',
    'typeof x;','delete obj.key;','void 0;','null ?? "default";',
    'true && false;','true || false;','!true;','x === y;',
    'x !== y;','x >= 10;','x <= 5;','x > 0 ? "pos" : "neg";'
  ],
  medium: [
    'function add(a, b) { return a + b; }',
    'if (x > 5) { console.log("big"); }',
    'for (let i = 0; i < 10; i++) { console.log(i); }',
    'arr.forEach(n => console.log(n));',
    'const obj = { key: "value", num: 42 };',
    'document.getElementById("app").style.display = "flex";',
    'const sum = arr.reduce((a, b) => a + b, 0);',
    'const doubled = arr.map(x => x * 2);',
    'const evens = arr.filter(x => x % 2 === 0);',
    'const found = arr.find(x => x > 5);',
    'const idx = arr.findIndex(x => x === 3);',
    'const keys = Object.keys(obj);',
    'const vals = Object.values(obj);',
    'const copy = { ...obj, extra: true };',
    'const [a, b, ...rest] = arr;',
    'const { name, age } = person;',
    'const square = n => n * n;',
    'setTimeout(() => run(), 1000);',
    'setInterval(() => tick(), 500);',
    'localStorage.setItem("key", JSON.stringify(data));',
    'const data = JSON.parse(localStorage.getItem("key") || "{}");',
    'const max = Math.max(...arr);',
    'const min = Math.min(...arr);',
    'const sorted = [...arr].sort((a,b) => a - b);',
    'const unique = [...new Set(arr)];',
    'const str = arr.join(" ");',
    'const entries = Object.entries(obj);',
    'const merged = Object.assign({}, obj1, obj2);',
    'const cloned = structuredClone(obj);',
    'arr.splice(1, 1);',
    'arr.slice(0, 3);',
    'arr.includes(5);',
    'arr.some(x => x > 3);',
    'arr.every(x => x > 0);',
    'arr.flat(2);',
    'arr.flatMap(x => [x, x * 2]);',
    'str.startsWith("Hello");',
    'str.endsWith("world");',
    'str.includes("Piku");',
    'str.replace("old", "new");',
    'str.repeat(3);',
    'str.padStart(10, "0");',
    'str.padEnd(10, ".");',
    'str.slice(0, 5);',
    'str.indexOf("a");',
    'str.charAt(0);',
    'str.charCodeAt(0);',
    'Number.isNaN(x);',
    'Number.isFinite(x);',
    'Number.isInteger(x);'
  ],
  hard: [
    'async function getData() { const res = await fetch(url); return res.json(); }',
    'const filtered = arr.filter(x => x % 2 === 0).map(x => x * 2);',
    'class Animal { constructor(name) { this.name = name; } speak() { return this.name; } }',
    'fetch("/api").then(r => r.json()).then(d => console.log(d)).catch(e => console.error(e));',
    'const [count, setCount] = useState(0); useEffect(() => { fetchData(); }, [count]);',
    'return Object.keys(obj).reduce((acc, key) => { acc[key] = obj[key] * 2; return acc; }, {});',
    'const sorted = arr.sort((a, b) => b.wpm - a.wpm).slice(0, 10).map(e => e.name);',
    'try { const data = JSON.parse(str); return data; } catch(e) { console.error(e); return null; }',
    'const memoize = fn => { const cache = {}; return (...args) => cache[args] ?? (cache[args] = fn(...args)); };',
    'const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };',
    'const throttle = (fn, ms) => { let last = 0; return (...a) => { if (Date.now()-last > ms) { last=Date.now(); fn(...a); } }; };',
    'const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);',
    'const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);',
    'const flatten = arr => arr.reduce((a,b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);',
    'const groupBy = (arr, key) => arr.reduce((acc, x) => { (acc[x[key]] = acc[x[key]] || []).push(x); return acc; }, {});',
    'class EventEmitter { on(e,fn){ (this.events[e]=this.events[e]||[]).push(fn); } emit(e,...a){ (this.events[e]||[]).forEach(f=>f(...a)); } }',
    'const worker = new Worker("worker.js"); worker.postMessage({data}); worker.onmessage = e => console.log(e.data);',
    'async function* stream(url) { const res = await fetch(url); const reader = res.body.getReader(); while(true) { const {done,value} = await reader.read(); if(done) break; yield value; } }',
    'const proxy = new Proxy(target, { get(t,k){ console.log("get",k); return t[k]; }, set(t,k,v){ t[k]=v; return true; } });',
    'const weakMap = new WeakMap(); const key = {}; weakMap.set(key, "value"); console.log(weakMap.get(key));',
    'function* fibonacci() { let [a, b] = [0, 1]; while(true) { yield a; [a, b] = [b, a + b]; } }',
    'const observable = { subscribe(fn) { this.listeners.push(fn); }, notify(data) { this.listeners.forEach(fn => fn(data)); } };',
    'const cache = new Map(); function cachedFetch(url) { if(cache.has(url)) return cache.get(url); const p = fetch(url).then(r=>r.json()); cache.set(url,p); return p; }',
    'class LinkedList { constructor(){ this.head=null; } prepend(val){ this.head={val, next:this.head}; } toArray(){ const a=[]; let n=this.head; while(n){ a.push(n.val); n=n.next; } return a; } }',
    'const scheduler = tasks => tasks.reduce((p, task) => p.then(task), Promise.resolve());'
  ]
};

/* ══════════════════════════════════════════
   END OF PART 1
   Continue in Part 2: SENTENCE_BANK,
   PARAGRAPH_BANK, PASSAGE_BANK,
   and infinite shuffle engine
══════════════════════════════════════════ */
/* ==========================================
   PIKU TYPING — words-data.js
   PART 2 — SUBPART 1 of 3
   Contains: SENTENCE_BANK (100+ sentences)
   Paste this directly below Part 1.
   ========================================== */

/* ══════════════════════════════════════════
   SECTION 5 — SENTENCES
   100+ sentences across all genres
   Used by Sentences mode in app.js
══════════════════════════════════════════ */
const SENTENCE_BANK = [

  /* ── Everyday Life ── */
  'The quick brown fox jumps over the lazy dog near the old wooden fence.',
  'She opened the window to let in the cool morning breeze from the garden.',
  'Every morning he brewed a fresh pot of coffee before reading the newspaper.',
  'The children laughed and played in the park until the sun went down.',
  'Learning to type faster takes daily practice and a great deal of patience.',
  'The library was quiet except for the soft sound of pages turning slowly.',
  'He packed his bag carefully, making sure nothing important was forgotten.',
  'The train arrived exactly on time, which surprised everyone on the platform.',
  'She smiled when she saw the first stars beginning to appear in the evening sky.',
  'The old clock on the wall had not worked properly in many long years.',
  'They decided to take a different route home through the winding forest path.',
  'The dog wagged its tail excitedly and barked when its owner came through the door.',
  'A gentle rain began to fall just as they finally reached the front door.',
  'He spent the whole afternoon carefully fixing the broken chair in the corner.',
  'The smell of fresh bread drifted through the entire street outside the small bakery.',
  'She wrote a long letter to her best friend who now lived in another city.',
  'The market was packed on Saturday morning with people shopping for fresh produce.',
  'They sat by the crackling fire and told old stories until well past midnight.',
  'The cat curled up on the warm windowsill and watched the birds singing outside.',
  'He could not remember where he had left his keys earlier that same morning.',
  'The painting on the wall had been in the family for three full generations.',
  'She decided to learn one completely new skill every single month of the year.',
  'The river flowed slowly and quietly through the valley between two tall mountains.',
  'They built a small cabin in the woods and spent every summer there together.',
  'He found an old photograph tucked inside the pages of a book on the shelf.',
  'The streets were empty and still at three in the morning after the heavy snow.',
  'She kept a small notebook where she wrote down every idea that came to her.',
  'The bus pulled away just as he reached the stop, still slightly out of breath.',
  'They watched the sunset from the hilltop without saying anything for a long time.',
  'He fixed the leaking pipe himself after watching three videos about it online.',

  /* ── Technology ── */
  'The software update fixed several critical bugs that users had been reporting for weeks.',
  'She learned three new programming languages over the course of the summer break.',
  'The server went down for scheduled maintenance at precisely two in the morning.',
  'He configured the network settings carefully to avoid any future connection drops.',
  'The new algorithm processes data ten times faster than the previous version did.',
  'She debugged the code for hours before finding the single misplaced semicolon.',
  'The database stores millions of records and retrieves each one in milliseconds.',
  'He deployed the application to production only after running all of the unit tests.',
  'The team worked in two-week sprints to deliver features incrementally to their clients.',
  'She reviewed the pull request thoroughly and left detailed comments for the developer.',
  'The firewall blocked all suspicious traffic before it could reach the main server.',
  'He set up a continuous integration pipeline that ran every test automatically on push.',
  'She optimized the slow query by adding the correct index to the database table.',
  'The containerized application could now be deployed to any cloud provider with ease.',
  'He refactored the entire module over a single weekend and cut the file size in half.',
  'The frontend renders in under two hundred milliseconds on even slow connections.',
  'She wrote unit tests for every function before writing the functions themselves.',
  'The API rate limit was set too low and caused failures during the evening peak.',
  'He documented every endpoint clearly so future developers would not be confused.',
  'The load balancer distributed traffic evenly across all eight available servers.',

  /* ── Nature and Science ── */
  'Photosynthesis allows plants to convert sunlight directly into chemical energy.',
  'The annual migration of monarch butterflies spans thousands of miles each year.',
  'Ocean currents play a crucial and complex role in regulating the global climate.',
  'The tallest trees in the ancient forest can live for more than a thousand years.',
  'Lightning strikes the surface of the earth approximately one hundred times per second.',
  'The deep ocean still contains creatures that have never been seen by human eyes.',
  'Volcanic eruptions can release enough ash to block sunlight for entire seasons.',
  'The honeybee communicates the exact location of flowers through a waggle dance.',
  'Water expands when it freezes, which is why ice always floats on liquid water.',
  'The human brain contains roughly eighty-six billion neurons connected by synapses.',
  'A single teaspoon of healthy soil contains more organisms than people on the earth.',
  'The northern lights are caused by charged particles from the sun hitting the atmosphere.',
  'Coral reefs support more species of fish than any other marine environment on earth.',
  'Earthquakes occur when tectonic plates suddenly slip along deep underground fault lines.',
  'The James Webb telescope captures light from galaxies formed over thirteen billion years ago.',
  'Black holes have gravity so strong that not even light can escape their pull.',
  'Bats navigate in complete darkness using high-frequency sound waves called echolocation.',
  'The cheetah is the fastest land animal, capable of reaching over one hundred kilometers per hour.',
  'Trees in a forest communicate and share nutrients through vast underground fungal networks.',
  'The average cloud weighs more than five hundred thousand kilograms despite appearing weightless.',

  /* ── History and Society ── */
  'The printing press transformed the spread of knowledge across all of medieval Europe.',
  'Ancient civilizations built remarkable structures without modern machinery or tools.',
  'The industrial revolution permanently changed the nature of work and city life.',
  'Languages evolve constantly over centuries as communities borrow words from each other.',
  'The steam engine was among the most transformative inventions in all of human history.',
  'Trade routes across deserts and seas connected distant cultures for thousands of years.',
  'The development of writing allowed humans to record and pass on knowledge across generations.',
  'Democratic systems of government have taken many different forms throughout recorded history.',
  'The abolition of slavery stands as one of the great moral achievements of the modern era.',
  'Urban planning fundamentally shapes the way people experience and move through their cities.',
  'The first moon landing remains one of the greatest collective achievements of our species.',
  'Libraries have served as centers of learning and community for thousands of years.',
  'The invention of the internet changed how humanity communicates, learns, and does business.',
  'Paper money replaced metal coins gradually as trade expanded beyond local communities.',
  'The photograph changed how human beings understood memory, history, and visual truth.',

  /* ── Philosophy and Thought ── */
  'The pursuit of knowledge is one of the most fundamentally human of all activities.',
  'Every decision we make is shaped by assumptions we are almost never consciously aware of.',
  'The meaning of any word is determined by how it is actually used within a community.',
  'Consciousness remains one of the deepest and most persistently unsolved mysteries in science.',
  'Justice requires not only fair rules but also their fair and consistent application.',
  'The greatest obstacle to discovery is not ignorance but the illusion of already knowing.',
  'What we call reality may be shaped far more by our minds than by the external world.',
  'Freedom without responsibility is not true liberation but simply another form of chaos.',
  'The value of any idea is measured by the concrete actions it inspires in the world.',
  'Doubt is not the enemy of knowledge; it is the very foundation on which knowledge rests.',
  'We are defined not by what we feel but by what we consistently choose to do each day.',
  'A question asked sincerely is often more valuable than an answer offered too quickly.',
  'The examined life requires not comfort but the willingness to be genuinely changed.',
  'Wisdom is not the accumulation of facts but knowing which facts actually matter.',
  'Every generation inherits a world it did not build and a future it must choose to shape.',

  /* ── Adventure and Exploration ── */
  'They paddled steadily upstream for three full days before reaching the hidden waterfall.',
  'The climbers finally reached the summit just as the storm clouds began to gather.',
  'She navigated the narrow canyon using nothing but a compass and a paper map.',
  'The expedition set out before dawn with enough supplies for two complete weeks.',
  'He swam through the dark underwater cave and emerged into a sunlit underground pool.',
  'The jeep skidded hard to a halt at the very edge of the dry cracked river bed.',
  'She spotted the extremely rare bird through her binoculars and immediately began sketching.',
  'The rescue team pushed through the entire night to reach the stranded mountain climbers.',
  'He repaired the broken mast using rope and driftwood before the next squall arrived.',
  'They crossed the old rope bridge one at a time, holding their breath with every step.',
  'The map was wrong in three places, which they only discovered after the fact.',
  'She set off alone into the canyon with two days of food and absolute confidence.',
  'The river was higher than expected and they had to find a new crossing point.',
  'He had been to forty countries and said this valley was the most beautiful of all.',
  'They spent the night in a cave and woke to find fresh snow covering the mountain.',

  /* ── Humor and Wit ── */
  'The cat knocked the glass off the table while maintaining complete and direct eye contact.',
  'He confidently walked into entirely the wrong meeting and sat down for twenty minutes.',
  'She spent four hours trying to assemble the furniture before finally reading the instructions.',
  'The autocorrect turned his carefully worded serious email into something very hard to explain.',
  'He fell soundly asleep during his own presentation on the vital importance of staying awake.',
  'The dog really did eat the homework, which was true but helped absolutely no one.',
  'She accidentally sent the message to the exact person it had been written about.',
  'He set three separate alarms and still somehow managed to sleep cleanly through all of them.',
  'The houseplant she was given died before she could even learn what species it was.',
  'They arrived at the restaurant only to discover that neither of them had brought a wallet.',
  'He gave a very confident answer to the wrong question and nobody corrected him.',
  'She bought an umbrella the day after the only rainstorm of the entire month.',
  'The instructions said it would take thirty minutes and it took him four hours.',
  'He learned the hard way that confidence is not the same thing as competence.',
  'She organized her desk perfectly and then immediately could not find anything on it.',

  /* ── Motivation and Growth ── */
  'Consistency compounds quietly over time until the results become impossible to ignore.',
  'Every expert in any field was once an absolute beginner who refused to quit.',
  'The gap between effort and visible reward is exactly where most people choose to stop.',
  'Small daily improvements lead to results that seem staggering when viewed over years.',
  'Your current level of skill is not your ceiling; it is simply your current starting point.',
  'Improvement is invisible day to day but unmistakable when you look back across months.',
  'The best time to start building a habit was a year ago; the next best time is today.',
  'Show up every single day, and especially on the days when you do not feel like it.',
  'Talent determines where you begin; discipline determines how far you actually go.',
  'Speed in typing is a natural byproduct of accuracy practiced carefully over time.',
  'The person who practices a little every day will always outpace the one who waits.',
  'Frustration is a sign that you are learning something that is just beyond your current reach.',
  'Every mistake you make while practicing is one fewer mistake you will make in performance.',
  'The hardest part of any long journey is usually not the distance but the beginning.',
  'Progress feels slow from the inside and looks fast from the outside looking back.'

];

/* ══════════════════════════════════════════
   END OF PART 2 — SUBPART 1
   Next: Subpart 2 = PARAGRAPH_BANK
         Subpart 3 = PASSAGE_BANK + shuffle engine
══════════════════════════════════════════ */
/* ==========================================
   PIKU TYPING — words-data.js
   PART 2 — SUBPART 2 of 3
   Contains: PARAGRAPH_BANK (25 paragraphs)
   Paste this directly below Subpart 1.
   ========================================== */

/* ══════════════════════════════════════════
   SECTION 6 — PARAGRAPHS
   25 paragraph blocks, 80-130 words each
   All genres — clean flowing prose
   Used by Paragraphs mode in app.js
══════════════════════════════════════════ */
const PARAGRAPH_BANK = [

  /* ── Nature ── */
  `The forest woke slowly each morning. Mist curled between the pine trunks and settled in the low places where the ground was soft and dark. Birds began their calls one by one until the air was thick with overlapping sound. A deer stood perfectly still at the edge of the clearing, ears forward, reading the wind for any signal of danger. Everything was watchful and patient. The forest had no sense of urgency. It had been here before the roads came, before the fences, before the names people gave to hills and streams. It would be here long after all of that was gone. That quiet indifference was its deepest and most enduring power.`,

  `Rain in the mountains is not like rain anywhere else. It comes suddenly, turning paths into small rivers and filling the air with the sharp clean smell of wet stone and pine. The temperature drops immediately, sometimes by ten degrees in the space of a few minutes. Animals disappear. Birds go silent. The forest seems to hold its breath while the water passes through it. Then, just as suddenly, the rain stops. The sky lightens at the edges. Steam rises from the warm rocks. Every surface shines. The forest exhales and begins again, slightly changed, carrying the memory of the water in every root and leaf and grain of dark soil.`,

  /* ── Adventure ── */
  `They had been walking for six hours when the path completely disappeared into tall grass. The guide crouched low and examined the ground carefully, looking for the faint impression of previous footsteps. There was nothing. The group gathered behind him, exhausted and dangerously low on water. The mountains they needed to cross were still visible to the north, but the sun was already tilting toward the western ridge and the light was changing. A decision had to be made quickly. They could camp here, exposed and uncertain, or push on through the grass and hope the path resumed beyond the long rise ahead. He stood without speaking, adjusted his pack, and started walking north.`,

  `The cave entrance was barely wide enough to squeeze through with a pack on. Inside, the darkness was total and absolute. She switched on her headlamp and the beam caught the edge of a vast underground chamber stretching far beyond the light. The ceiling was alive with formations that had taken ten thousand years to grow to their current size. Water dripped somewhere deep in the rock, the sound travelling strangely in the still air. She moved forward carefully, testing each footfall before committing her weight. The floor was slick with mineral deposits and uneven in ways that did not appear until you were already stepping on them. She breathed slowly and kept moving. The passage was narrowing again ahead.`,

  /* ── Science ── */
  `Light travels approximately one hundred and eighty-six thousand miles every single second. At that speed, it takes about eight minutes for sunlight to reach the surface of the earth after leaving the sun. When you look at the night sky, you are looking directly into the past. The light arriving from distant stars began its long journey thousands or even millions of years ago. Some of those stars no longer exist. They burned out long before the light they once emitted finally reached your eyes tonight. The universe is in this sense a vast and silent archive of moments that have already passed, displayed across the darkness for anyone patient enough to look up and consider what they are actually seeing.`,

  `The human immune system is one of the most sophisticated defence mechanisms ever produced by evolution. It distinguishes between the body's own cells and foreign invaders with remarkable precision, responding to threats it has never encountered before while remembering every pathogen it has previously defeated. When a virus enters the body, specialised cells immediately begin analysing its structure and signalling for reinforcements. Within days, the system produces targeted antibodies designed specifically for that threat. This entire process happens automatically, continuously, without any conscious direction from the person it protects. Most of the time we are entirely unaware that a war is being fought on our behalf at the cellular level, being won quietly while we go about our ordinary day.`,

  /* ── Philosophy ── */
  `Every map is a simplification. It chooses what to show and what to leave out entirely. Roads appear, but not the sound of the traffic moving along them. Rivers are drawn as clean blue lines, but their cold temperature and the force of their current are completely absent. The map is useful precisely because it removes most of the world and leaves only what the mapmaker decided mattered. To navigate, we need that reduction. But we must never mistake the map for the territory it represents. The same applies to our mental models of other people and situations. We hold simplified versions in our minds and respond to those, often failing to see what the simplification has quietly edited away. This is where most serious misunderstandings begin.`,

  `We tend to think of attention as something we direct toward the world. But attention also shapes what we notice is there at all. Two people can stand in the same room and have genuinely different experiences of it, because each one is attending to different features of the same space. The expert sees things the novice simply does not register. The anxious person sees threats the relaxed one walks past without concern. This means that developing a skill or changing a habit is not just about doing something differently. It is about learning to see differently. The world you inhabit is partly a product of where you have trained your attention to go, moment by moment, day by day over a lifetime.`,

  /* ── Technology ── */
  `The first computers filled entire rooms and required teams of trained engineers to operate continuously. They performed calculations that would have taken human mathematicians weeks or months to complete by hand. Today a device that fits easily in your pocket contains millions of times more processing power than those early machines. The rate of improvement has been so steep and so consistent over so many decades that it has become genuinely difficult to imagine where it ultimately leads. But the fundamental challenge has not changed at all since the very beginning: how to translate a human question into a form a machine can actually process, and how to translate its answer back into something a human being can understand and use.`,

  `Open source software is one of the strangest and most remarkable things that has ever happened in the history of technology. Millions of people around the world contribute their time and expertise to building tools that they then give away completely for free. The operating systems running most of the servers on the internet were built this way. The languages many programmers use every day were built this way. The browsers people use to access the web were built this way. No single organisation planned this or paid for it. It emerged from a culture of sharing and mutual improvement that developed organically among people who simply wanted to build good things and let others build on top of them.`,

  /* ── History ── */
  `The city had been built entirely on trade. Its position at the bend of the great river made it a natural stopping point for merchants moving goods between the coast and the inland regions. Over many centuries, the market grew into a district, the district grew into a city, and the city grew into a centre of culture and political power that drew people from every direction. Languages mixed freely in its crowded streets. Foods and fabrics and ideas arrived constantly from distant places, were absorbed and transformed, and were sent back out again in new forms no one had originally planned. The city did not belong to any one people or group. It belonged to the continuous movement of goods and people and ideas flowing through it.`,

  `The library at Alexandria did not burn in a single catastrophic night as the popular story suggests. It declined slowly over many centuries, losing texts through neglect, theft, underfunding, and the gradual shift of scholars and resources to other cities. By the time the final physical structure was destroyed, much of what made the library significant had already been lost or dispersed. This is a more uncomfortable story than the dramatic fire because it does not give us a single villain or a single moment to point to. The real lesson of Alexandria is about the fragility of accumulated knowledge and the constant effort required simply to preserve what has already been learned by previous generations who are no longer here.`,

  /* ── Mystery ── */
  `The letter had arrived without a postmark. That was the first unusual thing. The second was that it contained a photograph of a house that had burned to the ground eleven years before the photograph appeared to have been taken. The detective laid it carefully on the table under the lamp and examined it in silence. The angle suggested the photographer had been standing in the garden, near the old rosebush just visible in the lower left corner of the frame. She knew that garden. She had stood in it herself, once, many years ago, in a different life. She turned the photograph over slowly and held it closer to the light. On the back, in faint pencil, were two words: you know.`,

  /* ── Humor ── */
  `He had prepared extensively for the interview. He knew the company history, the current product roadmap, the names of the board members, and the founding story down to specific dates. He had rehearsed answers to thirty-seven possible questions and carefully timed each response. He arrived twelve minutes early, which he had calculated was the perfect margin. The interviewer came out, shook his hand warmly, and led him into a bright room overlooking the street. She asked her first question and he answered with genuine confidence. She nodded and made a small note on her pad. Then she asked a follow-up question that had no relation whatsoever to anything he had prepared. He stared at her for a long moment. Then he answered honestly. He got the job.`,

  `She had been cooking the same pasta dish for fifteen years and considered herself completely competent at it. Then she watched a professional chef make the exact same dish in twelve minutes and realised she had been doing at least four things wrong the entire time. The water temperature was wrong. The salt quantity was wrong. The timing was wrong. The way she was draining it was wrong. She stood in her kitchen afterward and looked at her own pots and pans with a new and slightly unsettling feeling. It was not incompetence she felt exactly. It was the particular discomfort of discovering that something you thought you understood completely is actually much more interesting than you had realised.`,

  /* ── Motivation ── */
  `Improvement is almost never visible in the short term. A person who practises a skill carefully every day will notice very little change from one day to the next. The feedback is weak and the progress is real but invisible. Compare that same person to where they were six months earlier, however, and the difference is unmistakable and often dramatic. The difficulty is that we always live in the present, trying to judge progress in real time, where the signal is faint and the noise is very loud. Consistency compounds over time in ways that are genuinely counterintuitive. What feels like repetition without result is very often the slow accumulation of real capability happening below the surface of what can be seen.`,

  `The seed does not announce its intentions. It simply responds to the conditions around it, to warmth and moisture and the faint pull of light from somewhere above the dark soil. The early growth happens entirely underground where no one can observe it, where the roots must reach deep before the shoot can rise at all. This is not delay. It is essential preparation. The plant that rushes to the surface before its root system is properly established will not survive the first dry week of summer heat. The same patient logic applies to skills, to relationships, and to ideas. The most durable things in any domain grow from the inside outward, establishing depth quietly before they seek height in the open air.`,

  /* ── Ocean ── */
  `Below the sunlit surface layer, the ocean becomes a completely different and largely unexplored world. Light fades as depth increases, first losing the warm reds and oranges, then the yellows and greens, until at significant depth everything is a faint blue and finally total darkness. In the lightless zones of the deep ocean, creatures have evolved extraordinary and sometimes bizarre adaptations over millions of years of isolation. Some produce their own cold blue light through bioluminescence to attract prey or find mates in the permanent darkness. Others have developed expandable jaws capable of swallowing prey much larger than themselves. The pressure at great depths would instantly crush an unprotected human body, yet complex life persists there in abundance and in forms we are still discovering.`,

  /* ── Time ── */
  `We experience time as a river with a fixed and irreversible direction. The past is settled and cannot be altered. The future remains genuinely open and undetermined. But physicists describe time in a fundamentally different way. The basic equations of physics work equally well whether they are run forward or backward in time. The strong arrow of time that we experience so viscerally does not appear anywhere in the underlying fundamental laws. It seems to emerge from something else: from the strong tendency of physical systems to move from ordered to disordered states, from the overall direction of increasing entropy. Our powerful intuitive sense that the past is fixed and the future is open may be a feature of how biological minds process experience rather than a deep feature of physical reality itself.`,

  /* ── Craft and Making ── */
  `The potter worked without once looking directly at the clay she was shaping. Her hands moved entirely from long memory and from the subtle information coming through her fingertips, reading the small moment-to-moment signals of resistance and give that told her what the material needed from her at each instant. She had been doing this work for twenty years, and the knowledge had long since migrated out of her conscious mind and settled deep into her hands and arms. A student watching her from across the studio would see only smooth and seemingly effortless motion. They would not see the thousands of small continuous corrections happening every second, each one too slight to name individually but together producing the form emerging from the spinning center of the wheel.`,

  /* ── City ── */
  `The city was loudest in the early evening, in the particular hour when the day shift ended and the night had not yet fully begun. The streets filled rapidly with people moving in dozens of different directions at once, the underground platforms crowded to their edges, the buses standing in patient lines at every red light. Food carts released columns of steam into the cooling autumn air. A horn sounded somewhere to the east, then another answered it. The sky between the buildings still held the last orange light of the setting sun while the streets below had already fallen into shadow and were beginning to glow softly with the neon of the shops and restaurants opening for the evening crowd moving through them.`,

  /* ── Stars and Space ── */
  `On a genuinely clear night far from any city lights, the Milky Way appears as a pale luminous river stretched from one horizon to the other across the full width of the sky. What you are seeing is the combined ancient light of hundreds of billions of individual stars, most far too faint to distinguish separately but together bright enough to cast a faint but real shadow on a white surface held below them. Our own sun is one of those innumerable stars, entirely unremarkable in its size and surface temperature, located in one of the galaxy's quieter outer spiral arms. The light from the bright galactic centre takes twenty-six thousand years to reach our eyes. To look toward it is to look twenty-six thousand years into the past of your own home galaxy.`,

  /* ── Language ── */
  `Language changes faster than most people notice and slower than most people fear. New words enter circulation through slang, through technology, through cultural contact and exchange, through the natural drift of meaning that happens whenever large numbers of people use the same words in slightly different situations over many years. Old words shift their meanings gradually and then suddenly seem to mean something quite different from what they once did. Languages that stop changing are languages that have stopped being spoken by living communities of people. The rules that feel permanent and obvious to any given generation are almost always temporary agreements that will eventually dissolve into new patterns that a later generation will feel are equally permanent and obvious. This is not decay. It is simply how living language works.`,

  /* ── Relationships ── */
  `Good conversations are genuinely difficult to find and harder to sustain than most people realise. Not the kind that fill time comfortably, or exchange useful information efficiently, or establish where each person fits in the social order, but the kind where both people are actually and seriously trying to understand something together. Where the questions asked are real questions rather than rhetorical ones, and where an answer that actually changes your mind is welcomed rather than quietly resisted. This kind of conversation requires a particular willingness to remain uncertain for longer than is comfortable, to hold your current position loosely enough that new information can genuinely affect it. It also requires patience. You have to let the other person fully finish. You have to resist the strong pull to begin composing your reply before they have arrived at what they are trying to say.`

];

/* ══════════════════════════════════════════
   END OF PART 2 — SUBPART 2
   Next: Subpart 3 = PASSAGE_BANK
                   + infinite shuffle engine
                   + getTestContent() function
══════════════════════════════════════════ */
