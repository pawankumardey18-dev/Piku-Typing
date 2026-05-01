/* ==========================================
   PIKU TYPING — app.js
   ========================================== */ 

/* ── Accent Themes ── */
const THEMES = [
  { name: 'Blue',    accent: '#4f7ec9', soft: '#e8eff9' },
  { name: 'Purple',  accent: '#7351b5', soft: '#ede8f9' },
  { name: 'Teal',    accent: '#0e9e82', soft: '#e0f4f0' },
  { name: 'Rose',    accent: '#d04b7a', soft: '#fce8f0' },
  { name: 'Orange',  accent: '#d46b1a', soft: '#fdf0e3' },
  { name: 'Green',   accent: '#2e8b57', soft: '#e3f4ea' },
  { name: 'Red',     accent: '#c0241c', soft: '#fde8e7' },
  { name: 'Indigo',  accent: '#4a5cc0', soft: '#e8eaf9' },
  { name: 'Cyan',    accent: '#0891b2', soft: '#e0f5fa' },
  { name: 'Gold',    accent: '#b78e00', soft: '#faf4dc' },
];

/* ── Word Banks ── */
const WORDS = {
  easy: [
    'the','be','to','of','and','a','in','that','have','it',
    'for','not','on','with','he','as','you','do','at','this',
    'but','his','by','from','they','we','say','her','she','or',
    'an','will','my','one','all','would','there','their','what',
    'so','up','out','if','about','who','get','which','go','me',
    'when','make','can','like','time','no','just','him','know',
    'take','people','into','year','your','good','some','could',
    'them','see','other','than','then','now','look','only','come',
    'its','over','think','also','back','after','use','two','how',
    'our','work','first','well','way','even','new','want','because'
  ],
  medium: [
    'about','above','across','after','again','against','almost',
    'alone','along','already','always','among','around','because',
    'before','between','beyond','bring','build','change','check',
    'choose','clear','close','could','count','cover','create',
    'decide','define','design','detail','differ','direct','during',
    'early','earth','either','enough','every','example','expect',
    'explain','express','family','figure','final','first','follow',
    'found','front','given','going','great','group','hands','happy',
    'heard','heavy','hence','house','human','important','inside',
    'instead','large','later','learn','leave','light','likely',
    'listen','little','local','major','matter','maybe','moment',
    'money','month','music','never','night','north','noted','often',
    'order','other','paper','party','place','plain','plant','point',
    'power','press','price','pride','quite','reach','ready','right'
  ],
  hard: [
    'acknowledge','acquisition','administration','approximately',
    'circumstance','collaboration','communication','comprehensive',
    'consequently','consistently','contemplating','continuously',
    'corresponding','determination','differentiate','disadvantage',
    'disappointment','documentation','effectiveness','establishment',
    'extraordinary','fundamental','implementation','independence',
    'infrastructure','intelligence','international','investigation',
    'manufacturing','miscellaneous','opportunities','organizational',
    'overwhelming','participation','particularly','perspective',
    'philosophical','predominantly','prioritization','responsibilities',
    'sophisticated','straightforward','strengthening','substantially',
    'transformation','understanding','unfortunately','unquestionably',
    'accountability','accomplishment','characteristics','circumstances',
    'classification','commemoration','conceptualization','consciousness',
    'contradictions','counterproductive','decentralization','deliberation'
  ]
};

/* ── 🆕 FIX #10 — Numbers difficulty pools ── */
const NUMBERS_BANK = (difficulty) => {
  const nums = [];
  for (let i = 0; i < 60; i++) {
    if (difficulty === 'easy')        nums.push(String(Math.floor(Math.random() * 99)));
    else if (difficulty === 'medium') nums.push(String(Math.floor(Math.random() * 9999)));
    else                              nums.push(String(Math.floor(Math.random() * 999999)));
  }
  return nums;
};

/* ── 🆕 FIX #10 — Punct difficulty pools ── */
const PUNCT_EASY = [
  'hello,','world.','yes!','no?','wait...','done!','really?','okay,',
  'fine.','sure!','maybe?','never!','always,','sometimes.','perhaps?',
  'exactly!','almost,','nearly.','mostly!','often.','right?','indeed!'
];

const PUNCT_HARD = [
  '"Really?!" she asked.','Wait—are you sure?','It\'s done... finally!',
  'No! Not again...','Yes, but why though?','Fine. Whatever you say.',
  'Almost—but not quite!','Hmm, perhaps not?','Clearly, this works!',
  'Look out! It\'s there.','Oh well, never mind.','Stop! Think first.',
  'Run—don\'t walk!','Wow, that\'s great!','So... what now?'
];

/* ── 🆕 FIX #10 — Code difficulty pools ── */
const CODE_EASY = [
  'const x = 10;',
  'let name = "Piku";',
  'console.log("Hello!");',
  'let sum = a + b;',
  'const arr = [1, 2, 3];',
  'let isOn = true;',
  'x = x + 1;',
  'return a + b;',
  'let msg = "hi";',
  'const n = 42;',
  'arr.push(5);',
  'let i = 0;',
];

const CODE_HARD = [
  'async function getData() { const res = await fetch(url); return res.json(); }',
  'const filtered = arr.filter(x => x % 2 === 0).map(x => x * 2);',
  'class Animal { constructor(name) { this.name = name; } speak() { return this.name; } }',
  'fetch("/api").then(r => r.json()).then(d => console.log(d)).catch(e => console.error(e));',
  'const [count, setCount] = useState(0); useEffect(() => { fetchData(); }, [count]);',
  'return Object.keys(obj).reduce((acc, key) => { acc[key] = obj[key] * 2; return acc; }, {});',
  'const sorted = arr.sort((a, b) => b.wpm - a.wpm).slice(0, 10).map(e => e.name);',
  'try { const data = JSON.parse(str); return data; } catch(e) { console.error(e); return null; }',
];

const CODE_MEDIUM = [
  'function add(a, b) { return a + b; }',
  'if (x > 5) { console.log("big"); }',
  'for (let i = 0; i < 10; i++) { console.log(i); }',
  'arr.forEach(n => console.log(n));',
  'const obj = { key: "value", num: 42 };',
  'document.getElementById("app").style.display = "flex";',
  'const sum = arr.reduce((a, b) => a + b, 0);',
  'const doubled = arr.map(x => x * 2);',
  'export default function App() { return <div>Hello</div>; }',
  'import React, { useState } from "react";',
  'const max = Math.max(...arr);',
  'localStorage.setItem("key", JSON.stringify(data));',
];

/* ── DOM References ── */
const typingDisplay   = document.getElementById('typingDisplay');
const hiddenInput     = document.getElementById('hiddenInput');
const timerDisplay    = document.getElementById('timerDisplay');
const liveWpm         = document.getElementById('liveWpm');
const liveAccuracy    = document.getElementById('liveAccuracy');
const restartBtn      = document.getElementById('restartBtn');
const newTestBtn      = document.getElementById('newTestBtn');
const resultDetails   = document.getElementById('resultDetails');
const leaderboardList = document.getElementById('leaderboardList');
const heatmapGrid     = document.getElementById('heatmapGrid');
const historyChart    = document.getElementById('historyChart');
const chartNote       = document.getElementById('chartNote');
const capsWarning     = document.getElementById('capsWarning');
const headerActions   = document.getElementById('headerActions');
const themePicker     = document.getElementById('themePicker');
const authModal       = document.getElementById('authModal');
const authForm        = document.getElementById('authForm');
const lbTabPersonal   = document.getElementById('lbTabPersonal');
const lbTabGlobal     = document.getElementById('lbTabGlobal');
const clearResultBtn  = document.getElementById('clearResultBtn');
const clearLBBtn      = document.getElementById('clearLeaderboardBtn');
const oauthNotice     = document.getElementById('oauthNotice');
const progressBarFill = document.getElementById('progressBarFill');
const wordsRemaining  = document.getElementById('wordsRemaining');
const restartHint     = document.getElementById('restartHint');

/* ── State ── */
let currentMode       = 'words';
let currentTime       = 30;
let currentTheme      = 0;
let currentDifficulty = 'easy';
let isDark            = false;
let currentUser       = null;
let isGuest           = false;
let leaderboardTab    = 'personal';

let testWords         = [];
let testText          = '';
let charSpans         = [];
let currentPos        = 0;
let currentWordIndex  = 0; /* 🆕 FIX #6 — track actual word index */
let startTime         = null;
let timerInterval     = null;
let timeLeft          = 30;
let testRunning       = false;
let testFinished      = false;
let correctChars      = 0;
let totalTyped        = 0;
let errorMap          = {};

/* 🆕 FIX #7 — persistent chart history */
let sessionHistory    = [];

/* ==========================================
   INIT
   ========================================== */
window.addEventListener('load', () => {
  loadPrefs();
  buildThemePicker();
  buildHeatmap();
  setupModeButtons();
  setupDifficultyButtons();
  setupTimeButtons();
  setupTestEvents();
  setupAuthModal();
  setupHeaderActions();
  waitForFirebase();
  generateTest();
  updateLeaderboard();
  setupMobileScrollFix();

  /* 🆕 FIX #7 — load saved history on startup */
  const saved = localStorage.getItem('pt_history');
  if (saved) {
    try {
      sessionHistory = JSON.parse(saved);
      drawChart(sessionHistory);
    } catch {}
  }
});

/* ==========================================
   🆕 FIX #6 — MOBILE SCROLL JERK FIX
   ========================================== */
function setupMobileScrollFix() {
  hiddenInput.addEventListener('focus', () => {
    const scrollY = window.scrollY;
    requestAnimationFrame(() => {
      window.scrollTo({ top: scrollY, behavior: 'instant' });
    });
  });

  typingDisplay.addEventListener('click', () => {
    /* 🆕 FIX #3 & #9 — if test finished, tap restarts */
    if (testFinished) { resetTest(); return; }
    hiddenInput.removeAttribute('readonly');
    hiddenInput.focus();
    setTimeout(() => hiddenInput.setAttribute('readonly', ''), 100);
  });

  document.addEventListener('keydown', (e) => {
    if (!testFinished && e.key.length === 1) {
      hiddenInput.removeAttribute('readonly');
      hiddenInput.focus();
    }
  });
}

/* ==========================================
   FIREBASE WAIT
   ========================================== */
function waitForFirebase() {
  const check = setInterval(() => {
    if (window.firebaseAuth) {
      clearInterval(check);
      window.firebaseAuth.onAuthStateChanged(user => {
        currentUser = user;
        isGuest = !user;
        renderHeader();
        updateLeaderboard();
      });
    }
  }, 100);
}

/* ==========================================
   PREFERENCES
   ========================================== */
function loadPrefs() {
  isDark = localStorage.getItem('pt_dark') === 'true';
  document.body.classList.toggle('dark', isDark);

  currentTheme = parseInt(localStorage.getItem('pt_theme') || '0');
  applyTheme(currentTheme);

  const savedMode = localStorage.getItem('pt_mode');
  if (savedMode) currentMode = savedMode;

  const savedTime = parseInt(localStorage.getItem('pt_time'));
  if (savedTime) currentTime = savedTime;
  timeLeft = currentTime;

  const savedDiff = localStorage.getItem('pt_diff');
  if (savedDiff) currentDifficulty = savedDiff;
}

function savePrefs() {
  localStorage.setItem('pt_dark',  isDark);
  localStorage.setItem('pt_theme', currentTheme);
  localStorage.setItem('pt_mode',  currentMode);
  localStorage.setItem('pt_time',  currentTime);
  localStorage.setItem('pt_diff',  currentDifficulty);
}

/* ==========================================
   THEME SYSTEM
   ========================================== */
function buildThemePicker() {
  THEMES.forEach((t, i) => {
    const dot = document.createElement('button');
    dot.className = 'theme-dot' + (i === currentTheme ? ' active' : '');
    dot.title = t.name;
    dot.style.background = t.accent;
    dot.addEventListener('click', () => {
      currentTheme = i;
      applyTheme(i);
      document.querySelectorAll('.theme-dot').forEach((d, j) =>
        d.classList.toggle('active', j === i));
      savePrefs();
    });
    themePicker.appendChild(dot);
  });
}

function applyTheme(i) {
  const t = THEMES[i];
  document.documentElement.style.setProperty('--accent', t.accent);
  document.documentElement.style.setProperty('--accent-soft', t.soft);
  document.documentElement.style.setProperty('--gradient-brand',
    `linear-gradient(135deg, ${t.accent}, ${t.accent}99)`);
}

/* ==========================================
   🆕 FIX #1 — MODE BUTTONS auto-generate test
   ========================================== */
function setupModeButtons() {
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === currentMode);
    btn.addEventListener('click', () => {
      if (btn.dataset.mode === currentMode) return;
      currentMode = btn.dataset.mode;
      document.querySelectorAll('.mode-btn').forEach(b =>
        b.classList.toggle('active', b === btn));
      savePrefs();
      generateTest();  /* auto fresh test */
      resetTest(false);
    });
  });
}

/* ==========================================
   🆕 FIX #1 — DIFFICULTY BUTTONS auto-generate test
   ========================================== */
function setupDifficultyButtons() {
  document.querySelectorAll('.diff-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.diff === currentDifficulty);
    btn.addEventListener('click', () => {
      if (btn.dataset.diff === currentDifficulty) return;
      currentDifficulty = btn.dataset.diff;
      document.querySelectorAll('.diff-btn').forEach(b =>
        b.classList.toggle('active', b === btn));
      savePrefs();
      generateTest();  /* auto fresh test */
      resetTest(false);
    });
  });
}

/* ==========================================
   🆕 FIX #1 — TIME BUTTONS auto-generate test
   ========================================== */
function setupTimeButtons() {
  document.querySelectorAll('.time-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.time) === currentTime);
    btn.addEventListener('click', () => {
      const t = parseInt(btn.dataset.time);
      if (t === currentTime) return;
      currentTime = t;
      timeLeft = currentTime;
      document.querySelectorAll('.time-btn').forEach(b =>
        b.classList.toggle('active', b === btn));
      savePrefs();
      generateTest();  /* auto fresh test */
      resetTest(false);
    });
  });
}

/* ==========================================
   🆕 FIX #10 — GENERATE TEST WITH DIFFICULTY
   affects all modes now
   ========================================== */
function generateTest() {
  let words = [];

  if (currentMode === 'words') {
    let pool;
    if (currentDifficulty === 'easy')        pool = [...WORDS.easy];
    else if (currentDifficulty === 'medium') pool = [...WORDS.medium];
    else                                     pool = [...WORDS.hard];
    pool.sort(() => Math.random() - 0.5);
    words = pool.slice(0, 80);

  } else if (currentMode === 'numbers') {
    /* 🆕 FIX #10 — difficulty changes number range */
    words = NUMBERS_BANK(currentDifficulty);

  } else if (currentMode === 'punct') {
    /* 🆕 FIX #10 — difficulty changes punct style */
    const pool = currentDifficulty === 'hard'
      ? [...PUNCT_HARD]
      : [...PUNCT_EASY];
    pool.sort(() => Math.random() - 0.5);
    words = Array.from({ length: 40 }, () =>
      pool[Math.floor(Math.random() * pool.length)]);

  } else if (currentMode === 'code') {
    /* 🆕 FIX #10 — difficulty changes code complexity */
    let pool;
    if (currentDifficulty === 'easy')        pool = [...CODE_EASY];
    else if (currentDifficulty === 'medium') pool = [...CODE_MEDIUM];
    else                                     pool = [...CODE_HARD];
    pool.sort(() => Math.random() - 0.5);
    words = pool.slice(0, 10);
  }

  testWords = words;
  testText  = words.join(' ');
  renderText();
}

/* ==========================================
   RENDER TEXT
   ========================================== */
function renderText() {
  typingDisplay.innerHTML = '';
  charSpans = [];

  for (let i = 0; i < testText.length; i++) {
    const span = document.createElement('span');
    span.className = 'char' + (i === 0 ? ' current' : '');
    span.textContent = testText[i] === ' ' ? '\u00A0' : testText[i];
    typingDisplay.appendChild(span);
    charSpans.push(span);
  }

  currentPos        = 0;
  currentWordIndex  = 0;
  correctChars      = 0;
  totalTyped        = 0;
  errorMap          = {};

  timerDisplay.textContent = `⏳ ${currentTime}s`;
  liveWpm.textContent      = '⚡ — WPM';
  liveAccuracy.textContent = '🎯 100%';

  updateProgressBar(currentTime, currentTime);
  updateWordsRemaining();

  restartHint.textContent = '';
  restartHint.classList.remove('visible');
}

/* ==========================================
   TEST EVENTS
   ========================================== */
function setupTestEvents() {
  typingDisplay.addEventListener('click', () => {
    if (testFinished) { resetTest(); return; }
    hiddenInput.removeAttribute('readonly');
    hiddenInput.focus();
  });

  hiddenInput.addEventListener('input', onInput);
  hiddenInput.addEventListener('keydown', onKeyDown);

  restartBtn.addEventListener('click', resetTest);
  newTestBtn.addEventListener('click', () => { generateTest(); resetTest(false); });

  clearResultBtn.addEventListener('click', () => {
    resultDetails.innerHTML =
      '<span style="color:var(--text-secondary)">Complete a test to see results.</span>';
    sessionHistory = [];
    localStorage.removeItem('pt_history');
    drawChart([]);
    chartNote.textContent = '';
  });

  clearLBBtn.addEventListener('click', () => {
    if (confirm('Clear your personal leaderboard?')) {
      localStorage.removeItem(`pt_lb_${currentMode}_${currentTime}`);
      updateLeaderboard();
    }
  });

  lbTabPersonal.addEventListener('click', () => {
    leaderboardTab = 'personal';
    lbTabPersonal.classList.add('active');
    lbTabGlobal.classList.remove('active');
    updateLeaderboard();
  });

  lbTabGlobal.addEventListener('click', () => {
    leaderboardTab = 'global';
    lbTabGlobal.classList.add('active');
    lbTabPersonal.classList.remove('active');
    updateLeaderboard();
  });

  /* 🆕 FIX #5 — caps lock on keydown AND input */
  document.addEventListener('keydown', e => {
    capsWarning.style.display =
      e.getModifierState('CapsLock') ? 'flex' : 'none';
  });
  hiddenInput.addEventListener('keyup', e => {
    capsWarning.style.display =
      e.getModifierState('CapsLock') ? 'flex' : 'none';
  });
}

/* ── Input Handler ── */
function onInput(e) {
  if (testFinished) return;

  const val   = hiddenInput.value;
  const typed = val[val.length - 1];
  if (typed === undefined) return;

  if (!testRunning) startTest();
  if (currentPos >= testText.length) return;

  const expected = testText[currentPos];
  const correct  = typed === expected;

  charSpans[currentPos].classList.remove('current');

  if (correct) {
    charSpans[currentPos].classList.add('correct');
    correctChars++;
    /* 🆕 FIX #6 — track word index when space typed */
    if (expected === ' ') currentWordIndex++;
  } else {
    charSpans[currentPos].classList.add('incorrect');
    const key = expected === ' ' ? 'Space' : expected;
    errorMap[key] = (errorMap[key] || 0) + 1;
  }

  totalTyped++;
  currentPos++;

  if (currentPos < testText.length) {
    charSpans[currentPos].classList.add('current');
    scrollToCursor();
  }

  hiddenInput.value = '';
  updateLiveStats();
  updateWordsRemaining();

  if (currentPos >= testText.length) finishTest();
}

/* ── Backspace ── */
function onKeyDown(e) {
  if (testFinished) return;

  if (e.key === 'Tab') {
    e.preventDefault();
    resetTest();
    return;
  }

  if (e.key === 'Backspace') {
    e.preventDefault();
    if (currentPos === 0) return;

    const prevChar = testText[currentPos - 1];

    /* 🆕 FIX #11 — allow crossing ONE space to fix previous word */
    if (prevChar === ' ') {
      /* only cross if the space itself was typed correctly */
      if (charSpans[currentPos - 1].classList.contains('correct')) {
        currentPos--;
        /* un-mark the space */
        charSpans[currentPos].classList.remove('correct', 'incorrect', 'current');
        charSpans[currentPos].classList.add('current');
        if (currentPos + 1 < charSpans.length)
          charSpans[currentPos + 1].classList.remove('current');
        if (currentWordIndex > 0) currentWordIndex--;
        if (totalTyped > 0) totalTyped--;
        correctChars = Math.max(0, correctChars - 1);
        hiddenInput.value = '';
        updateLiveStats();
        updateWordsRemaining();
      }
      /* whether we crossed or not, stop here */
      return;
    }

    /* normal backspace within a word */
    currentPos--;
    const wasCorrect = charSpans[currentPos].classList.contains('correct');
    charSpans[currentPos].classList.remove('correct', 'incorrect', 'current');
    charSpans[currentPos].classList.add('current');

    if (currentPos + 1 < charSpans.length)
      charSpans[currentPos + 1].classList.remove('current');

    if (totalTyped > 0) totalTyped--;
    if (wasCorrect) correctChars = Math.max(0, correctChars - 1);

    hiddenInput.value = '';
    updateLiveStats();
    updateWordsRemaining();
  }
}

function scrollToCursor() {
  const cur = charSpans[currentPos];
  if (!cur) return;
  const display = typingDisplay;
  const curTop  = cur.offsetTop;
  const curBot  = curTop + cur.offsetHeight;
  const disTop  = display.scrollTop;
  const disBot  = disTop + display.clientHeight;
  if (curTop < disTop || curBot > disBot) {
    display.scrollTop = curTop - display.clientHeight / 2;
  }
}

/* ==========================================
   PROGRESS BAR
   ========================================== */
function updateProgressBar(remaining, total) {
  const pct = (remaining / total) * 100;
  progressBarFill.style.width = pct + '%';
  progressBarFill.classList.remove('warning', 'critical');
  if (pct <= 10)      progressBarFill.classList.add('critical');
  else if (pct <= 30) progressBarFill.classList.add('warning');
}

/* ==========================================
   🆕 FIX #6 — WORDS REMAINING (actual word index)
   ========================================== */
function updateWordsRemaining() {
  if (currentMode === 'code') {
    wordsRemaining.textContent = '';
    return;
  }
  const total     = testWords.length;
  const remaining = total - currentWordIndex;
  wordsRemaining.textContent =
    `${remaining} word${remaining !== 1 ? 's' : ''} left`;
}

/* ==========================================
   TIMER
   ========================================== */
function startTest() {
  testRunning = true;
  startTime   = Date.now();
  timeLeft    = currentTime;

  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `⏳ ${timeLeft}s`;
    updateProgressBar(timeLeft, currentTime);

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      finishTest();
    }
  }, 1000);
}

/* ==========================================
   LIVE STATS
   ========================================== */
function updateLiveStats() {
  const elapsed = startTime ? (Date.now() - startTime) / 60000 : 0;
  const wpm     = elapsed > 0 ? Math.round((correctChars / 5) / elapsed) : 0;
  const acc     = totalTyped > 0
    ? Math.round((correctChars / totalTyped) * 100) : 100;

  liveWpm.textContent      = `⚡ ${wpm} WPM`;
  liveAccuracy.textContent = `🎯 ${acc}%`;
}

/* ==========================================
   FINISH TEST
   ========================================== */
function finishTest() {
  if (testFinished) return;
  testFinished = true;
  testRunning  = false;
  clearInterval(timerInterval);
  hiddenInput.blur();

  const elapsed = (Date.now() - startTime) / 60000;
  const wpm     = Math.round((correctChars / 5) / elapsed);
  const acc     = totalTyped > 0
    ? Math.round((correctChars / totalTyped) * 100) : 100;
  const errors  = totalTyped - correctChars;
  const now     = new Date();

  showResult(wpm, acc, errors, now);
  updateHeatmap();

  /* 🆕 FIX #7 — save history to localStorage */
  sessionHistory.push({ wpm, acc, date: now.toISOString() });
  try {
    localStorage.setItem('pt_history',
      JSON.stringify(sessionHistory.slice(-30)));
  } catch {}
  drawChart(sessionHistory);

  saveToLeaderboard(wpm, acc, now);
  if (currentUser) saveToFirestore(wpm, acc, errors);

  /* 🆕 FIX #3 & #9 — show tap/tab hint */
  const isMobile = window.matchMedia('(pointer: coarse)').matches;
  restartHint.textContent = isMobile ? '👆 Tap here to restart' : '↹ Tab to restart';
  restartHint.classList.add('visible');

  updateProgressBar(0, currentTime);
}

/* ==========================================
   RESULT DISPLAY
   ========================================== */
function showResult(wpm, acc, errors, date) {
  const grade =
    wpm >= 100 ? '🏆 Elite'      :
    wpm >= 70  ? '🔥 Advanced'   :
    wpm >= 50  ? '⚡ Skilled'    :
    wpm >= 30  ? '📈 Developing' : '🌱 Beginner';

  resultDetails.innerHTML = `
    <div class="result-stats-grid">
      <div class="result-stat-item">⚡ ${wpm} WPM</div>
      <div class="result-stat-item">🎯 ${acc}%</div>
      <div class="result-stat-item">❌ ${errors} errors</div>
      <div class="result-stat-item">${grade}</div>
    </div>
    <div class="result-meta">
      ${date.toLocaleTimeString()} · ${currentMode} · ${currentTime}s · ${currentDifficulty}
    </div>
  `;

  const card = resultDetails.closest('.card');
  card.classList.add('result-flash');
  setTimeout(() => card.classList.remove('result-flash'), 800);
}

/* ==========================================
   RESET TEST
   ========================================== */
function resetTest(keepText = true) {
  clearInterval(timerInterval);
  testRunning      = false;
  testFinished     = false;
  timeLeft         = currentTime;
  currentWordIndex = 0;

  timerDisplay.textContent = `⏳ ${currentTime}s`;
  liveWpm.textContent      = '⚡ — WPM';
  liveAccuracy.textContent = '🎯 100%';
  hiddenInput.value        = '';

  updateProgressBar(currentTime, currentTime);

  restartHint.textContent = '';
  restartHint.classList.remove('visible');

  if (!keepText) generateTest();
  else renderText();

  setTimeout(() => {
    hiddenInput.removeAttribute('readonly');
    hiddenInput.focus();
  }, 50);
}

/* ==========================================
   LEADERBOARD — Personal
   ========================================== */
function saveToLeaderboard(wpm, acc, date) {
  const key = `pt_lb_${currentMode}_${currentTime}`;
  const lb  = JSON.parse(localStorage.getItem(key) || '[]');
  lb.push({
    wpm, acc,
    date: date.toISOString(),
    user: currentUser?.displayName || 'Guest',
    diff: currentDifficulty
  });
  lb.sort((a, b) => b.wpm - a.wpm);
  lb.splice(10);
  localStorage.setItem(key, JSON.stringify(lb));
  if (leaderboardTab === 'personal') renderPersonalLB();
}

function renderPersonalLB() {
  const key = `pt_lb_${currentMode}_${currentTime}`;
  const lb  = JSON.parse(localStorage.getItem(key) || '[]');

  if (!lb.length) {
    leaderboardList.innerHTML =
      '<li class="lb-placeholder">Complete a test to rank!</li>';
    return;
  }

  leaderboardList.innerHTML = lb.map((e, i) => `
    <li>
      <span>
        ${i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i + 1}`}
        &nbsp;${e.user}
        <small style="color:var(--text-secondary);font-size:0.75rem">
          · ${e.diff || ''}
        </small>
      </span>
      <span>⚡${e.wpm} &nbsp;🎯${e.acc}%</span>
    </li>
  `).join('');
}

/* ==========================================
   LEADERBOARD — Global (Firestore)
   ========================================== */
async function saveToFirestore(wpm, acc, errors) {
  if (!window.firebaseDB || !currentUser) return;
  const {
    db, collection, addDoc, serverTimestamp,
    doc, getDoc, setDoc
  } = window.firebaseDB;

  try {
    await addDoc(collection(db, 'scores'), {
      uid:      currentUser.uid,
      name:     currentUser.displayName || 'Anonymous',
      avatar:   currentUser.photoURL || '',
      wpm, acc, errors,
      mode:     currentMode,
      diff:     currentDifficulty,
      duration: currentTime,
      ts:       serverTimestamp()
    });

    const userRef = doc(db, 'users', currentUser.uid);
    const snap    = await getDoc(userRef);
    const coins   = calculateCoins(wpm, acc);

    if (!snap.exists()) {
      await setDoc(userRef, {
        name:       currentUser.displayName || 'Anonymous',
        avatar:     currentUser.photoURL || '',
        bestWpm:    wpm,
        totalTests: 1,
        totalCoins: coins,
        joined:     serverTimestamp()
      });
    } else {
      const data = snap.data();
      await setDoc(userRef, {
        name:       currentUser.displayName || data.name,
        avatar:     currentUser.photoURL    || data.avatar,
        bestWpm:    Math.max(data.bestWpm || 0, wpm),
        totalTests: (data.totalTests || 0) + 1,
        totalCoins: (data.totalCoins || 0) + coins,
        joined:     data.joined
      }, { merge: true });
    }

    if (leaderboardTab === 'global') await renderGlobalLB();
    renderHeader();
  } catch (err) {
    console.warn('Firestore save failed:', err.message);
  }
}

function calculateCoins(wpm, acc) {
  return Math.round((wpm * (acc / 100)) / 5);
}

async function renderGlobalLB() {
  if (!window.firebaseDB) {
    leaderboardList.innerHTML =
      '<li class="lb-placeholder">Sign in to see global scores.</li>';
    return;
  }

  const { db, collection, query, orderBy, limit, getDocs } = window.firebaseDB;
  leaderboardList.innerHTML = '<li class="lb-placeholder">Loading...</li>';

  try {
    const q    = query(
      collection(db, 'scores'),
      orderBy('wpm', 'desc'),
      limit(10)
    );
    const snap = await getDocs(q);
    const docs = [];
    snap.forEach(d => docs.push(d.data()));

    if (!docs.length) {
      leaderboardList.innerHTML =
        '<li class="lb-placeholder">No global scores yet!</li>';
      return;
    }

    leaderboardList.innerHTML = docs.map((e, i) => `
      <li>
        <span>
          ${i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i + 1}`}
          &nbsp;${e.name || 'Anonymous'}
        </span>
        <span>⚡${e.wpm} &nbsp;🎯${e.acc}%</span>
      </li>
    `).join('');
  } catch (err) {
    leaderboardList.innerHTML =
      `<li class="lb-placeholder">Could not load global scores.</li>`;
    console.warn('Firestore read failed:', err.message);
  }
}

function updateLeaderboard() {
  if (leaderboardTab === 'personal') renderPersonalLB();
  else renderGlobalLB();
}

/* ==========================================
   HISTORY CHART
   ========================================== */
function drawChart(history) {
  const ctx = historyChart.getContext('2d');
  const w   = historyChart.width;
  const h   = historyChart.height;
  ctx.clearRect(0, 0, w, h);

  if (!history.length) return;

  const accent = THEMES[currentTheme].accent;
  const data   = history.slice(-15);
  const maxWpm = Math.max(...data.map(d => d.wpm), 1);
  const pad    = 30;
  const stepX  = (w - pad * 2) / Math.max(data.length - 1, 1);

  ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  ctx.lineWidth = 1;
  [0.25, 0.5, 0.75, 1].forEach(f => {
    const y = h - pad - f * (h - pad * 2);
    ctx.beginPath(); ctx.moveTo(pad, y); ctx.lineTo(w - pad, y); ctx.stroke();
    ctx.fillStyle = isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)';
    ctx.font = '11px monospace';
    ctx.fillText(Math.round(f * maxWpm), 2, y + 4);
  });

  ctx.strokeStyle = accent;
  ctx.lineWidth   = 2.5;
  ctx.lineJoin    = 'round';
  ctx.beginPath();
  data.forEach((d, i) => {
    const x = pad + i * stepX;
    const y = h - pad - (d.wpm / maxWpm) * (h - pad * 2);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.stroke();

  const grd = ctx.createLinearGradient(0, pad, 0, h - pad);
  grd.addColorStop(0, accent + '40');
  grd.addColorStop(1, accent + '00');
  ctx.fillStyle = grd;
  ctx.beginPath();
  data.forEach((d, i) => {
    const x = pad + i * stepX;
    const y = h - pad - (d.wpm / maxWpm) * (h - pad * 2);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.lineTo(pad + (data.length - 1) * stepX, h - pad);
  ctx.lineTo(pad, h - pad);
  ctx.closePath();
  ctx.fill();

  data.forEach((d, i) => {
    const x = pad + i * stepX;
    const y = h - pad - (d.wpm / maxWpm) * (h - pad * 2);
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fillStyle   = accent;
    ctx.fill();
    ctx.strokeStyle = isDark ? '#1c1e2a' : '#fff';
    ctx.lineWidth   = 2;
    ctx.stroke();

    ctx.fillStyle = isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.35)';
    ctx.font = '9px monospace';
    const label = d.date
      ? new Date(d.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      : i + 1;
    ctx.fillText(label, x - 12, h - 5);
  });

  chartNote.textContent =
    `Last ${data.length} session${data.length > 1 ? 's' : ''} · ${currentMode} · ${currentTime}s`;
}

/* ==========================================
   HEATMAP
   ========================================== */
const KEYBOARD_KEYS = [
  '`','1','2','3','4','5','6','7','8','9','0','-','=',
  'q','w','e','r','t','y','u','i','o','p','[',']','\\',
  'a','s','d','f','g','h','j','k','l',';',"'",
  'z','x','c','v','b','n','m',',','.','/','Space'
];

function buildHeatmap() {
  heatmapGrid.innerHTML = '';
  KEYBOARD_KEYS.forEach(k => {
    const chip       = document.createElement('div');
    chip.className   = 'key-chip';
    chip.id          = `key_${k}`;
    chip.textContent = k;
    heatmapGrid.appendChild(chip);
  });
}

function updateHeatmap() {
  KEYBOARD_KEYS.forEach(k => {
    const chip = document.getElementById(`key_${k}`);
    if (!chip) return;
    chip.classList.toggle('error', !!errorMap[k]);
  });
}

/* ==========================================
   HEADER ACTIONS
   ========================================== */
function setupHeaderActions() { renderHeader(); }

async function renderHeader() {
  headerActions.innerHTML = '';

  const darkBtn = document.createElement('button');
  darkBtn.className   = 'btn';
  darkBtn.textContent = isDark ? '☀️ Light' : '🌙 Dark';
  darkBtn.addEventListener('click', () => {
    isDark = !isDark;
    document.body.classList.toggle('dark', isDark);
    savePrefs();
    darkBtn.textContent = isDark ? '☀️ Light' : '🌙 Dark';
    drawChart(sessionHistory);
  });
  headerActions.appendChild(darkBtn);

  if (currentUser) {
    let coins = 0;
    if (window.firebaseDB) {
      try {
        const { db, doc, getDoc } = window.firebaseDB;
        const snap = await getDoc(doc(db, 'users', currentUser.uid));
        if (snap.exists()) coins = snap.data().totalCoins || 0;
      } catch {}
    }

    const coinBadge       = document.createElement('span');
    coinBadge.className   = 'user-badge';
    coinBadge.textContent = `🪙 ${coins}`;
    coinBadge.title       = 'Your coins';
    headerActions.appendChild(coinBadge);

    const badge     = document.createElement('span');
    badge.className = 'user-badge';
    if (currentUser.photoURL) {
      const img     = document.createElement('img');
      img.src       = currentUser.photoURL;
      img.className = 'user-avatar';
      img.alt       = '';
      badge.appendChild(img);
    }
    const nameSpan       = document.createElement('span');
    nameSpan.textContent =
      currentUser.displayName ||
      currentUser.email?.split('@')[0] || 'User';
    badge.appendChild(nameSpan);
    headerActions.appendChild(badge);

    const outBtn       = document.createElement('button');
    outBtn.className   = 'btn';
    outBtn.textContent = '🚪 Sign Out';
    outBtn.addEventListener('click', () => window.firebaseAuth.signOut());
    headerActions.appendChild(outBtn);

  } else {
    const signInBtn       = document.createElement('button');
    signInBtn.className   = 'btn';
    signInBtn.textContent = isGuest ? '👤 Guest · Sign In' : '🔑 Sign In';
    signInBtn.addEventListener('click', openModal);
    headerActions.appendChild(signInBtn);
  }
}

/* ==========================================
   AUTH MODAL
   ========================================== */
function openModal() {
  authModal.style.display = 'flex';
  document.getElementById('authEmail').focus();
}

function closeModal() {
  authModal.style.display = 'none';
  authForm.reset();
  clearErrors();
  document.getElementById('successMsg').style.display = 'none';
}

function setupAuthModal() {
  document.getElementById('modalCloseBtn')
    .addEventListener('click', closeModal);
  authModal.addEventListener('click', e => {
    if (e.target === authModal) closeModal();
  });

  const tabSignIn    = document.getElementById('tabSignIn');
  const tabSignUp    = document.getElementById('tabSignUp');
  const signUpFields = document.getElementById('signUpFields');
  const confirmField = document.getElementById('confirmField');
  const tabHint      = document.getElementById('tabSwitchHint');
  const tabLink      = document.getElementById('tabSwitchLink');
  const submitBtn    = document.getElementById('submitBtn');

  let mode = 'signin';

  function setMode(m) {
    mode = m;
    tabSignIn.classList.toggle('active', m === 'signin');
    tabSignUp.classList.toggle('active', m === 'signup');
    signUpFields.style.display = m === 'signup' ? 'block' : 'none';
    confirmField.style.display = m === 'signup' ? 'block' : 'none';
    submitBtn.textContent      = m === 'signup' ? 'Create Account' : 'Sign In';
    tabHint.innerHTML = m === 'signin'
      ? `Don't have an account? <a id="tabSwitchLink">Sign Up →</a>`
      : `Already have an account? <a id="tabSwitchLink">Sign In →</a>`;
    document.getElementById('tabSwitchLink')
      .addEventListener('click', () =>
        setMode(mode === 'signin' ? 'signup' : 'signin'));
    clearErrors();
  }

  tabSignIn.addEventListener('click', () => setMode('signin'));
  tabSignUp.addEventListener('click', () => setMode('signup'));
  tabLink.addEventListener('click',   () =>
    setMode(mode === 'signin' ? 'signup' : 'signin'));

  authForm.addEventListener('submit', async e => {
    e.preventDefault();
    clearErrors();

    const email    = document.getElementById('authEmail').value.trim();
    const password = document.getElementById('authPassword').value;
    const name     = document.getElementById('displayName')?.value.trim();
    const confirm  = document.getElementById('confirmPassword')?.value;

    if (!email)    { showErr('errEmail',    'Email is required');    return; }
    if (!password) { showErr('errPassword', 'Password is required'); return; }

    if (mode === 'signup') {
      if (!name)               { showErr('errName',    'Name is required');       return; }
      if (password.length < 6) { showErr('errPassword','Min 6 characters');       return; }
      if (password !== confirm) { showErr('errConfirm','Passwords do not match'); return; }
    }

    submitBtn.textContent = 'Please wait...';
    submitBtn.disabled    = true;

    try {
      const {
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        updateProfile
      } = await import("https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js");

      const auth = window.firebaseAuth._auth;

      if (mode === 'signup') {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(cred.user, { displayName: name });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      closeModal();
    } catch (err) {
      const msg =
        err.code === 'auth/email-already-in-use' ? 'Email already in use'       :
        err.code === 'auth/wrong-password'        ? 'Wrong password'             :
        err.code === 'auth/user-not-found'        ? 'No account with that email' :
        err.code === 'auth/invalid-email'         ? 'Invalid email format'       :
        err.message;
      showErr('errEmail', msg);
    } finally {
      submitBtn.textContent = mode === 'signup' ? 'Create Account' : 'Sign In';
      submitBtn.disabled    = false;
    }
  });

  async function oauthLogin(providerFn, name) {
    try {
      await providerFn();
      closeModal();
    } catch (err) {
      if (err.code !== 'auth/popup-closed-by-user')
        oauthNotice.classList.add('visible');
      console.warn(name, err.code);
    }
  }

  document.getElementById('oauthGoogle')
    .addEventListener('click', () =>
      oauthLogin(window.firebaseAuth.signInWithGoogle, 'Google'));
  document.getElementById('oauthFacebook')
    .addEventListener('click', () =>
      oauthLogin(window.firebaseAuth.signInWithFacebook, 'Facebook'));
  document.getElementById('oauthMicrosoft')
    .addEventListener('click', () =>
      oauthLogin(window.firebaseAuth.signInWithMicrosoft, 'Microsoft'));

  document.getElementById('oauthNoticeDismiss')
    .addEventListener('click', () =>
      oauthNotice.classList.remove('visible'));

  document.getElementById('guestSkip').addEventListener('click', () => {
    isGuest = true;
    closeModal();
    renderHeader();
  });
}

/* ── Form Helpers ── */
function showErr(id, msg) {
  const el = document.getElementById(id);
  if (el) el.textContent = msg;
}

function clearErrors() {
  ['errName','errEmail','errPassword','errConfirm'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = '';
  });
}
