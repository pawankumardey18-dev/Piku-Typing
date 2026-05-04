/* ==========================================
   PIKU TYPING — lessons-data.js
   All 27 lessons, fully structured
   ========================================== */

const LESSONS_DATA = {

  /* ==========================================
     TRACK 1 — BEGINNER
     ========================================== */
  beginner: {
    label: '🟢 Beginner',
    description: 'Start from zero. Learn finger placement row by row.',
    lessons: [
      {
        id: 'b1',
        title: 'Home Row — Index Fingers',
        keys: 'f j',
        description: 'The two most important keys. Your index fingers live here.',
        tasks: [
          { label: 'f j', text: 'fj jf ff jj fj jf fj jf ff jj fj jf fj jf fj jf fj jf ff jj fj jf fj jf' },
          { label: 'f j g h', text: 'fg jh gf hj fg jh fj gh fj jf gh hg fg jh gf hj fg jh fj gh fj jf' },
          { label: 'full index', text: 'fjgh ghfj fghj jghf ghjf fjgh fghj fj gh fj gh fj jf gh hg fg jh' }
        ]
      },
      {
        id: 'b2',
        title: 'Home Row — Adding D K',
        keys: 'd f j k',
        description: 'Middle fingers join. Keep index fingers on F and J.',
        tasks: [
          { label: 'd k', text: 'dk kd dd kk dk kd dk kd dd kk dk kd dk kd dk kd dk kd dd kk dk kd' },
          { label: 'd f j k', text: 'dfkj jkfd dfjk kfjd dfkj jkfd dfjk dfkj jkfd dfjk kfjd dfkj jkfd' },
          { label: 'mixed', text: 'fjdk dkfj fjdk kdjf dfkj jfkd fjdk dkfj fjdk kdjf dfkj jfkd fjdk' }
        ]
      },
      {
        id: 'b3',
        title: 'Home Row — Adding S L',
        keys: 's d f j k l',
        description: 'Ring fingers now. Your hand is taking shape.',
        tasks: [
          { label: 's l', text: 'sl ls ss ll sl ls sl ls ss ll sl ls sl ls sl ls sl ls ss ll sl ls' },
          { label: 's d f j k l', text: 'sdfkjl lkjfds sdfkjl lkjfds sdfkjl lkjfds sdfkjl lkjfds sdfkjl' },
          { label: 'mixed', text: 'flask flasks sldk dksl fjls lsjf dksl sldk fjls lsjf flasks flask' }
        ]
      },
      {
        id: 'b4',
        title: 'Home Row — Full Row',
        keys: 'a s d f g h j k l ;',
        description: 'The complete home row. This is your foundation.',
        tasks: [
          { label: 'a ;', text: 'a; ;a aa ;; a; ;a a; ;a aa ;; a; ;a a; ;a a; ;a a; ;a aa ;; a; ;a' },
          { label: 'full home row', text: 'asdf jkl; asdf jkl; fdsa ;lkj asdf jkl; fdsa ;lkj asdf jkl; fdsa' },
          { label: 'home row words', text: 'add ask fall glad hash jab flask salad flag dash glad lash half asks' },
          { label: 'sentences', text: 'a sad lad had a flask a glad lass has a flag dad had a salad all fall' }
        ]
      },
      {
        id: 'b5',
        title: 'Top Row — Index Fingers',
        keys: 'r t y u',
        description: 'Moving up. Index fingers reach for R T Y U.',
        tasks: [
          { label: 'r u', text: 'ru ur rr uu ru ur ru ur rr uu ru ur ru ur ru ur ru ur rr uu ru ur' },
          { label: 'r t y u', text: 'rtyu yutr rtyu yutr rtyu yutr tryu uryt rtyu yutr rtyu yutr tryu' },
          { label: 'words', text: 'try rut fury jury hurt rut fury try jury hurt try rut fury jury hurt rut' }
        ]
      },
      {
        id: 'b6',
        title: 'Top Row — Adding E I',
        keys: 'e r t y u i',
        description: 'Middle fingers reach up to E and I.',
        tasks: [
          { label: 'e i', text: 'ei ie ee ii ei ie ei ie ee ii ei ie ei ie ei ie ei ie ee ii ei ie' },
          { label: 'e r t y u i', text: 'ertui iutre ertui iutre ertui iutre ertui iutre ertui iutre ertui' },
          { label: 'words', text: 'tire fire hire rite kite site write quite tired fired hired rites' }
        ]
      },
      {
        id: 'b7',
        title: 'Top Row — Adding W O',
        keys: 'w e r t y u i o',
        description: 'Ring fingers take W and O.',
        tasks: [
          { label: 'w o', text: 'wo ow ww oo wo ow wo ow ww oo wo ow wo ow wo ow wo ow ww oo wo ow' },
          { label: 'w e r t y u i o', text: 'wert yuio wert yuio wert yuio wert yuio wert yuio wert yuio wert' },
          { label: 'words', text: 'wore word work worm wore word work worm wore wire woke wore word work' }
        ]
      },
      {
        id: 'b8',
        title: 'Top Row — Full Row',
        keys: 'q w e r t y u i o p',
        description: 'Complete top row. Pinky fingers reach Q and P.',
        tasks: [
          { label: 'q p', text: 'qp pq qq pp qp pq qp pq qq pp qp pq qp pq qp pq qp pq qq pp qp pq' },
          { label: 'full top row', text: 'qwer tyui op qwer tyui op qwer tyui op poiu ytre wq qwer tyui op' },
          { label: 'top row words', text: 'quit quip rope ripe type wipe yore pure pore wire quite ripe type' },
          { label: 'sentences', text: 'write your report type your words quite right your power is unique' }
        ]
      },
      {
        id: 'b9',
        title: 'Bottom Row — V M',
        keys: 'v m',
        description: 'Reaching down. Index fingers go to V and M.',
        tasks: [
          { label: 'v m', text: 'vm mv vv mm vm mv vm mv vv mm vm mv vm mv vm mv vm mv vv mm vm mv' },
          { label: 'v m words', text: 'vim vim vim move move move vim move vim move vim move vim move vim' },
          { label: 'mixed', text: 'move vim vamp mave move vim vamp mave move vim vamp mave move vim' }
        ]
      },
      {
        id: 'b10',
        title: 'Bottom Row — Adding C N',
        keys: 'c v b n m',
        description: 'Middle and index fingers cover C V B N M.',
        tasks: [
          { label: 'c n', text: 'cn nc cc nn cn nc cn nc cc nn cn nc cn nc cn nc cn nc cc nn cn nc' },
          { label: 'c v b n m', text: 'cvbnm mnbvc cvbnm mnbvc cvbnm mnbvc cvbnm mnbvc cvbnm mnbvc cvbnm' },
          { label: 'words', text: 'can van ban man van can ban man can van ban man can van ban man can' }
        ]
      },
      {
        id: 'b11',
        title: 'Bottom Row — Full Row',
        keys: 'z x c v b n m , . /',
        description: 'Complete bottom row including Z X and punctuation.',
        tasks: [
          { label: 'z x', text: 'zx xz zz xx zx xz zx xz zz xx zx xz zx xz zx xz zx xz zz xx zx xz' },
          { label: 'full bottom', text: 'zxcv bnm, zxcv bnm, zxcv bnm, zxcv bnm, zxcv bnm, zxcv bnm,' },
          { label: 'bottom words', text: 'zinc next calm bomb next zinc calm bomb zinc next calm bomb next zinc' },
          { label: 'sentences', text: 'mix zinc and calm next box fix zinc calm bomb next zinc calm fix' }
        ]
      }
    ]
  },

  /* ==========================================
     TRACK 2 — INTERMEDIATE
     ========================================== */
  intermediate: {
    label: '🟡 Intermediate',
    description: 'Combine rows, add numbers and symbols.',
    lessons: [
      {
        id: 'i1',
        title: 'Home + Top Combined',
        keys: 'a-l + q-p',
        description: 'Move between home and top row smoothly.',
        tasks: [
          { label: 'alternating rows', text: 'fruit salad quiet water power glory fresh glory quite flower power' },
          { label: 'common words', text: 'after light world every great those under quite people water right' },
          { label: 'sentences', text: 'the quick wren flew past the great oak tree quite fast after sunrise' }
        ]
      },
      {
        id: 'i2',
        title: 'Home + Bottom Combined',
        keys: 'a-l + z-/',
        description: 'Move between home and bottom row smoothly.',
        tasks: [
          { label: 'alternating rows', text: 'black flame dance blank clams blank flame clams dance black flame' },
          { label: 'common words', text: 'blank slack clamp flame dance cable clank blank flame dance cable' },
          { label: 'sentences', text: 'she can dance and clap and clam bake and make black bean cake' }
        ]
      },
      {
        id: 'i3',
        title: 'All Three Rows',
        keys: 'full keyboard',
        description: 'Fluid movement across all letter keys.',
        tasks: [
          { label: 'all rows mixed', text: 'because before between beyond build change check choose clear close' },
          { label: 'common words', text: 'people think great world every place right those quite power often' },
          { label: 'paragraph', text: 'the quick brown fox jumps over the lazy dog every single morning without fail' }
        ]
      },
      {
        id: 'i4',
        title: 'Number Row',
        keys: '1 2 3 4 5 6 7 8 9 0',
        description: 'Reach up to the number row without looking.',
        tasks: [
          { label: '1-5', text: '12345 54321 12345 54321 12345 54321 11 22 33 44 55 12 34 51 23 45' },
          { label: '6-0', text: '67890 09876 67890 09876 67890 09876 66 77 88 99 00 67 89 06 78 90' },
          { label: 'full number', text: '1234567890 0987654321 1234567890 0987654321 123 456 789 012 345' },
          { label: 'mixed with words', text: 'I have 3 cats and 2 dogs and 10 fish and 1 bird and 5 turtles today' }
        ]
      },
      {
        id: 'i5',
        title: 'Shift Key — Capitals',
        keys: 'Shift + letters',
        description: 'Practice typing capital letters using the Shift key.',
        tasks: [
          { label: 'basic caps', text: 'Hello World Hello World Hello World Hello World Hello World Hello' },
          { label: 'names', text: 'Alice Bob Charlie David Emma Frank Grace Henry Iris Jack Kate Liam' },
          { label: 'sentences', text: 'The Quick Brown Fox Jumps Over The Lazy Dog Every Morning At Dawn' },
          { label: 'mixed case', text: 'JavaScript Python HTML CSS React Node Express Django Flask Ruby Go' }
        ]
      },
      {
        id: 'i6',
        title: 'Special Symbols',
        keys: '! @ # $ % & * ( ) - _ = +',
        description: 'Symbols used in writing, coding and passwords.',
        tasks: [
          { label: 'basic symbols', text: '!!! ??? ... --- === +++ *** &&& ||| !!! ??? ... --- === +++ *** &&&' },
          { label: 'shift symbols', text: '! @ # $ % ^ & * ( ) ! @ # $ % ^ & * ( ) ! @ # $ % ^ & * ( )' },
          { label: 'mixed', text: 'hello! world? yes... no--- wait=== go+++ run*** fly&&& jump||| ok!' },
          { label: 'passwords style', text: 'Pass@123! Code#456$ Data%789^ User&012* Admin(345) Root_678+' }
        ]
      },
      {
        id: 'i7',
        title: 'Punctuation Practice',
        keys: '. , ; : ! ? \' "',
        description: 'Type punctuation accurately and consistently.',
        tasks: [
          { label: 'commas periods', text: 'one, two, three. four, five, six. seven, eight, nine. ten, done.' },
          { label: 'colons semicolons', text: 'wait; think: act. stop; look: listen. ready; set: go. done; rest:' },
          { label: 'questions exclamations', text: 'really? yes! maybe? no! truly? always! never? sometimes! right? ok!' },
          { label: 'full sentences', text: 'She said, "Hello!" He replied, "Hi there!" She asked, "How are you?"' }
        ]
      },
      {
        id: 'i8',
        title: 'Full Keyboard Fluency',
        keys: 'all keys',
        description: 'Everything together — numbers, symbols, letters, punctuation.',
        tasks: [
          { label: 'mixed all', text: 'Hello! I have 3 cats, 2 dogs & 10 fish. Total: 15 pets. Amazing, right?' },
          { label: 'code style', text: 'x = 10; y = 20; z = x + y; print(z); // outputs 30 as expected!' },
          { label: 'paragraph', text: 'In 2024, JavaScript & Python are the top 2 languages. Why? Because they\'re versatile!' },
          { label: 'real world', text: 'Contact us at hello@piku.dev or call +1 (800) 123-4567. Open 9am-5pm, Mon-Fri.' }
        ]
      }
    ]
  },

  /* ==========================================
     TRACK 3 — ADVANCED
     ========================================== */
  advanced: {
    label: '🔴 Advanced',
    description: 'Speed drills, anagrams and complex patterns.',
    lessons: [
      {
        id: 'a1',
        title: 'Common Bigrams',
        keys: 'th he in er an',
        description: 'The most frequent two-letter pairs in English. Type them until they feel automatic.',
        tasks: [
          { label: 'top bigrams', text: 'th he in er an re on en at nd st es ed to it ti or te is al' },
          { label: 'bigram words', text: 'the then there these their them theory thermal therapist theatre' },
          { label: 'speed drill', text: 'th th th he he he in in in er er er an an an re re re on on on' }
        ]
      },
      {
        id: 'a2',
        title: 'Common Trigrams',
        keys: 'the and ing ion',
        description: 'Three-letter sequences that appear in nearly every sentence.',
        tasks: [
          { label: 'top trigrams', text: 'the and ing ion ent for tio ere her ter hat tha nth was ith' },
          { label: 'trigram words', text: 'thing think there other enter after under inter their these' },
          { label: 'sentences', text: 'entering the interesting intersection and thinking about everything carefully' }
        ]
      },
      {
        id: 'a3',
        title: 'Anagrams — 3 Letters',
        keys: 'short words',
        description: 'Short scrambled words to sharpen letter recognition.',
        tasks: [
          { label: 'set 1', text: 'act cat tap pat lap pal nap pan map amp cap can arc car arc bar' },
          { label: 'set 2', text: 'eat tea ate net ten hen den end bed deb led del leg gel peg' },
          { label: 'speed', text: 'sit its tip pit lip oil ion now own won ton not top pot opt hop' }
        ]
      },
      {
        id: 'a4',
        title: 'Anagrams — 4 Letters',
        keys: 'medium words',
        description: 'Four-letter anagrams for faster pattern recognition.',
        tasks: [
          { label: 'set 1', text: 'star rats arts tsar snap naps pans span stop tops pots opts post' },
          { label: 'set 2', text: 'emit mite item time laps alps slap pals evil vile live veil' },
          { label: 'speed', text: 'note tone nope peon open pore rope robe bore lore role lore' }
        ]
      },
      {
        id: 'a5',
        title: 'Anagrams — 5 Letters',
        keys: 'longer words',
        description: 'Five-letter anagram challenges.',
        tasks: [
          { label: 'set 1', text: 'stare rates tears crate trace react cater tares aster resat' },
          { label: 'set 2', text: 'stone tones notes onset inset stein tines snite neist' },
          { label: 'speed', text: 'pleat leapt plate petal tapes septa paste spate pates' }
        ]
      },
      {
        id: 'a6',
        title: 'Speed Burst — Short Words',
        keys: '2-3 letter words',
        description: 'Type as fast as possible. Short words, pure speed.',
        tasks: [
          { label: 'burst 1', text: 'go do so to no of it at is he we me be up in on if or as by my' },
          { label: 'burst 2', text: 'the and but for not yet nor so too use got let set put cut run' },
          { label: 'burst 3', text: 'can may was has had its our who why how all any few own say see' }
        ]
      },
      {
        id: 'a7',
        title: 'Speed Burst — Long Words',
        keys: '8+ letter words',
        description: 'Long complex words. Accuracy first, then speed.',
        tasks: [
          { label: 'burst 1', text: 'beautiful wonderful important knowledge together children question different' },
          { label: 'burst 2', text: 'government production information development environment international' },
          { label: 'burst 3', text: 'acknowledge approximately circumstance collaboration comprehensive determination' }
        ]
      }
    ]
  },

  /* ==========================================
     TRACK 4 — WORD FREQUENCY
     ========================================== */
  frequency: {
    label: '📖 Word Frequency',
    description: 'Practice the most common English words.',
    lessons: [
      {
        id: 'f1',
        title: 'Top 100 Most Common',
        keys: 'most used words',
        description: 'These 100 words make up over 50% of all written English.',
        tasks: [
          { label: 'words 1-25', text: 'the of and a to in is you that it he was for on are with as his they' },
          { label: 'words 26-50', text: 'at be this have from or one had by word but not what all were we when' },
          { label: 'words 51-75', text: 'your can said there use an each which she do how their if will up other' },
          { label: 'words 76-100', text: 'about out many then them these so some her would make like him into time' }
        ]
      },
      {
        id: 'f2',
        title: 'Top 200 Most Common',
        keys: 'frequent words',
        description: 'Expand your automatic word recognition.',
        tasks: [
          { label: 'set 1', text: 'has look more write go see number no way could people my than first water' },
          { label: 'set 2', text: 'been called who oil its now find long down day did get come made may part' },
          { label: 'set 3', text: 'over new sound take only little work know place years live me back give most' },
          { label: 'set 4', text: 'very after things our just name good sentence man think say great where help' }
        ]
      },
      {
        id: 'f3',
        title: 'Top 500 Most Common',
        keys: 'expanded vocabulary',
        description: 'Master the words that appear in everyday writing.',
        tasks: [
          { label: 'set 1', text: 'through large often hand high place hold such small next early eyes never' },
          { label: 'set 2', text: 'between city trees cross since hard start might story saw far sea draw left' },
          { label: 'set 3', text: 'late run while press close night real life few north open seem together next' },
          { label: 'set 4', text: 'white children begin got walk example ease paper group always music those both' }
        ]
      },
      {
        id: 'f4',
        title: 'Top 1000 Most Common',
        keys: 'mastery level',
        description: 'The full foundation. Master these and you can type anything.',
        tasks: [
          { label: 'set 1', text: 'certain field today passed half blue let above girl sometimes mountain cut young' },
          { label: 'set 2', text: 'talk soon list song being leave family body music color stand sun questions fish' },
          { label: 'set 3', text: 'area mark dog horse birds problem complete room knew since ever piece told usually' },
          { label: 'set 4', text: 'door product black short numeral class wind question happen complete ship area half' }
        ]
      }
    ]
  },

  /* ==========================================
     TRACK 5 — CODE
     ========================================== */
  code: {
    label: '💻 Code',
    description: 'Type like a developer. Symbols, brackets and syntax.',
    lessons: [
      {
        id: 'c1',
        title: 'Code Symbols',
        keys: '{ } [ ] ( ) < > ; :',
        description: 'The symbols every developer types hundreds of times a day.',
        tasks: [
          { label: 'brackets', text: '() [] {} <> () [] {} <> () [] {} <> () [] {} <> () [] {} <>()[]{}' },
          { label: 'mixed', text: '(a) [b] {c} <d> (ab) [bc] {cd} <de> (abc) [bcd] {cde} <def>' },
          { label: 'code style', text: 'if (x) { do(); } for (i) { go[i]; } while (ok) { run(); } end;' }
        ]
      },
      {
        id: 'c2',
        title: 'JavaScript Basics',
        keys: 'JS syntax',
        description: 'Common JavaScript patterns and syntax.',
        tasks: [
          { label: 'variables', text: 'const x = 10; let name = "Piku"; var count = 0; const arr = [];' },
          { label: 'functions', text: 'function add(a, b) { return a + b; } const mul = (a, b) => a * b;' },
          { label: 'arrays', text: 'const arr = [1, 2, 3]; arr.push(4); arr.map(x => x * 2); arr.filter(x => x > 1);' },
          { label: 'async', text: 'async function getData() { const res = await fetch(url); return res.json(); }' }
        ]
      },
      {
        id: 'c3',
        title: 'Python Basics',
        keys: 'Python syntax',
        description: 'Common Python patterns and syntax.',
        tasks: [
          { label: 'variables', text: 'x = 10 name = "Piku" count = 0 arr = [] obj = {} flag = True num = 3.14' },
          { label: 'functions', text: 'def add(a, b): return a + b def greet(name): print(f"Hello, {name}!")' },
          { label: 'loops', text: 'for i in range(10): print(i) while x > 0: x -= 1 print("done")' },
          { label: 'list ops', text: 'arr.append(4) arr.sort() arr.reverse() len(arr) arr[0] arr[-1] arr[1:3]' }
        ]
      },
      {
        id: 'c4',
        title: 'HTML & CSS',
        keys: 'markup syntax',
        description: 'Web development markup and styling syntax.',
        tasks: [
          { label: 'html tags', text: '<div> <p> <span> <h1> <ul> <li> <a href=""> <img src=""> <input type="">' },
          { label: 'attributes', text: 'class="container" id="main" style="color:red;" type="text" href="#top"' },
          { label: 'css rules', text: 'display: flex; margin: 0 auto; padding: 1rem; border-radius: 8px; color: #333;' },
          { label: 'full snippet', text: '<div class="card"> <h2>Title</h2> <p>Content here.</p> </div>' }
        ]
      }
    ]
  }

};

/* ── Flatten all lessons into a single array for easy lookup ── */
const ALL_LESSONS_FLAT = [];
Object.entries(LESSONS_DATA).forEach(([trackKey, track]) => {
  track.lessons.forEach((lesson, idx) => {
    ALL_LESSONS_FLAT.push({
      ...lesson,
      trackKey,
      trackLabel: track.label,
      indexInTrack: idx
    });
  });
});

/* ── Get lesson by ID ── */
function getLessonById(id) {
  return ALL_LESSONS_FLAT.find(l => l.id === id) || null;
}

/* ── Get completed lessons from localStorage ── */
function getCompletedLessons() {
  try {
    return JSON.parse(localStorage.getItem('pt_completed_lessons') || '[]');
  } catch { return []; }
}

/* ── Mark lesson as completed ── */
function markLessonComplete(id) {
  const completed = getCompletedLessons();
  if (!completed.includes(id)) {
    completed.push(id);
    localStorage.setItem('pt_completed_lessons', JSON.stringify(completed));
  }
}