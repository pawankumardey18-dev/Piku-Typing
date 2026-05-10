/* ==========================================
   piku-ai.js — Professor Piku AI Coach
   Drop <script src="piku-ai.js"> in ANY page.
   Works on: home, test, lessons, game, custom.
   AI chain: Groq → Gemini → Puter.js (no login forced)
   ========================================== */

/* ── YOUR API KEYS — fill these in ─────────────────────
   Groq  : free at https://console.groq.com
   Gemini: free at https://aistudio.google.com
──────────────────────────────────────────────────────── */
const PIKU_CONFIG = {
  groqKey:   'YOUR_GROQ_API_KEY',
  geminiKey: 'YOUR_GEMINI_API_KEY',
};

/* ════════════════════════════════════════
   PROFESSOR PIKU AVATAR SVG
   Young professor — glasses, beard, warm
   Inspired by: short dark hair, thick frames,
   neat beard, smart-casual, 25 yrs old
════════════════════════════════════════ */
const PIKU_AVATAR_SVG = `
<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
  <defs>
    <linearGradient id="pikuBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3a6bc5"/>
      <stop offset="100%" style="stop-color:#7351b5"/>
    </linearGradient>
    <clipPath id="pikuClip"><circle cx="40" cy="40" r="40"/></clipPath>
  </defs>

  <!-- Background -->
  <circle cx="40" cy="40" r="40" fill="url(#pikuBg)"/>

  <!-- Subtle background pattern -->
  <circle cx="60" cy="15" r="25" fill="rgba(255,255,255,0.06)"/>
  <circle cx="10" cy="65" r="18" fill="rgba(255,255,255,0.04)"/>

  <g clip-path="url(#pikuClip)">
    <!-- Shirt / body -->
    <ellipse cx="40" cy="82" rx="28" ry="16" fill="#2d3a6b"/>
    <!-- Collar -->
    <path d="M31 70 L40 75 L49 70 L53 82 L27 82Z" fill="#3d4f8a"/>
    <!-- White collar line -->
    <path d="M35 70 L40 74 L45 70" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>

    <!-- Neck -->
    <rect x="36" y="61" width="8" height="10" rx="3" fill="#c8956c"/>

    <!-- Head base -->
    <ellipse cx="40" cy="43" rx="19" ry="21" fill="#c8956c"/>

    <!-- Hair — short, neat, dark -->
    <ellipse cx="40" cy="25" rx="19" ry="11" fill="#1a1208"/>
    <rect x="21" y="25" width="38" height="10" fill="#1a1208"/>
    <!-- Hair fade sides -->
    <rect x="21" y="30" width="5" height="14" rx="3" fill="#1a1208"/>
    <rect x="54" y="30" width="5" height="14" rx="3" fill="#1a1208"/>
    <!-- Hair top detail -->
    <ellipse cx="40" cy="22" rx="15" ry="7" fill="#211608"/>

    <!-- Ears -->
    <ellipse cx="21.5" cy="45" rx="3.5" ry="5.5" fill="#b8845c"/>
    <ellipse cx="58.5" cy="45" rx="3.5" ry="5.5" fill="#b8845c"/>

    <!-- ── GLASSES (signature feature) ── -->
    <!-- Frame left -->
    <rect x="23" y="39" width="14" height="10" rx="3.5"
          fill="rgba(0,0,0,0.07)" stroke="#111" stroke-width="2.2"/>
    <!-- Frame right -->
    <rect x="43" y="39" width="14" height="10" rx="3.5"
          fill="rgba(0,0,0,0.07)" stroke="#111" stroke-width="2.2"/>
    <!-- Bridge -->
    <line x1="37" y1="44" x2="43" y2="44" stroke="#111" stroke-width="2"/>
    <!-- Arms -->
    <line x1="20" y1="44" x2="23" y2="44" stroke="#111" stroke-width="1.8"/>
    <line x1="57" y1="44" x2="61" y2="44" stroke="#111" stroke-width="1.8"/>

    <!-- Eyes (inside glasses) -->
    <ellipse cx="30" cy="44" rx="4.5" ry="3.8" fill="white"/>
    <ellipse cx="50" cy="44" rx="4.5" ry="3.8" fill="white"/>
    <!-- Pupils with blink animation -->
    <ellipse cx="30.5" cy="44" rx="2.2" ry="2.2" fill="#1a0d05">
      <animate attributeName="ry" values="2.2;0.15;2.2;2.2;2.2" dur="5s" repeatCount="indefinite" begin="1.5s"/>
    </ellipse>
    <ellipse cx="50.5" cy="44" rx="2.2" ry="2.2" fill="#1a0d05">
      <animate attributeName="ry" values="2.2;0.15;2.2;2.2;2.2" dur="5s" repeatCount="indefinite" begin="1.5s"/>
    </ellipse>
    <!-- Eye shine -->
    <circle cx="32" cy="42.8" r="0.8" fill="white" opacity="0.7"/>
    <circle cx="52" cy="42.8" r="0.8" fill="white" opacity="0.7"/>

    <!-- Nose -->
    <path d="M38 51 Q40 55 42 51" fill="none" stroke="#a0715a"
          stroke-width="1.5" stroke-linecap="round"/>

    <!-- ── BEARD (short, neat) ── -->
    <path d="M25 57 Q30 64 40 66 Q50 64 55 57 Q53 65 50 67 Q40 71 30 67 Q27 65 25 57Z"
          fill="#1a1208" opacity="0.68"/>
    <!-- Mustache -->
    <path d="M34 54 Q37 57 40 55 Q43 57 46 54"
          fill="#1a1208" opacity="0.55"/>

    <!-- Smile -->
    <path d="M34 57 Q40 62 46 57"
          fill="none" stroke="#8b4f2a" stroke-width="1.8" stroke-linecap="round"/>
  </g>

  <!-- Floating idle bob animation overlay — subtle -->
  <animateTransform
    attributeName="transform"
    type="translate"
    values="0,0; 0,-1.5; 0,0"
    dur="3.5s"
    repeatCount="indefinite"
    additive="sum"/>
</svg>`;

/* ════════════════════════════════════════
   INJECT STYLES
════════════════════════════════════════ */
const pikuCSS = `
  /* ── Floating bubble ── */
  .piku-bubble {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 500;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.8rem;
  }

  /* ── Avatar button ── */
  .piku-avatar-btn {
    width: 66px; height: 66px;
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 8px 28px rgba(79,126,201,0.45),
                0 2px 8px rgba(0,0,0,0.15);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 0;
    background: transparent;
    transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1),
                box-shadow 0.22s ease;
    position: relative;
  }
  .piku-avatar-btn:hover {
    transform: scale(1.1) rotate(-3deg);
    box-shadow: 0 14px 36px rgba(79,126,201,0.55);
  }
  .piku-avatar-btn:active { transform: scale(0.97); }

  /* Notification dot */
  .piku-notif {
    position: absolute;
    top: 1px; right: 1px;
    width: 17px; height: 17px;
    background: #e53e3e;
    border-radius: 50%;
    border: 2.5px solid white;
    display: none;
    animation: pikuPing 1.4s ease infinite;
  }
  .piku-notif.visible { display: block; }

  @keyframes pikuPing {
    0%   { transform: scale(1);   opacity: 1; }
    60%  { transform: scale(1.4); opacity: 0.6; }
    100% { transform: scale(1);   opacity: 1; }
  }

  /* ── Chat panel ── */
  .piku-panel {
    background: var(--surface);
    border: 1px solid var(--border-light);
    border-radius: 26px;
    width: 348px;
    max-height: 500px;
    box-shadow: 0 24px 60px rgba(0,0,0,0.22);
    display: none;
    flex-direction: column;
    overflow: hidden;
    transform: scale(0.92) translateY(16px);
    opacity: 0;
    transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1),
                opacity   0.22s ease;
  }
  .piku-panel.open {
    display: flex;
    transform: scale(1) translateY(0);
    opacity: 1;
  }
  /* animate-in trigger */
  .piku-panel.animating {
    transform: scale(1) translateY(0) !important;
    opacity: 1 !important;
  }

  /* Panel header */
  .piku-panel-head {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.95rem 1.2rem;
    background: var(--gradient-brand);
    flex-shrink: 0;
  }

  .piku-head-avatar {
    width: 42px; height: 42px;
    border-radius: 50%;
    border: 2px solid rgba(255,255,255,0.35);
    overflow: hidden;
    flex-shrink: 0;
    background: rgba(255,255,255,0.15);
  }

  .piku-head-info { flex: 1; }
  .piku-head-name {
    font-weight: 700;
    font-size: 0.97rem;
    color: white;
  }
  .piku-head-status {
    font-size: 0.75rem;
    color: rgba(255,255,255,0.8);
    display: flex;
    align-items: center;
    gap: 0.35rem;
    margin-top: 1px;
  }
  .piku-status-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: #48bb78;
    animation: statusPulse 2.2s ease infinite;
  }
  @keyframes statusPulse {
    0%,100% { opacity: 1; }
    50%      { opacity: 0.4; }
  }

  .piku-close-btn {
    background: rgba(255,255,255,0.15);
    border: 1.5px solid rgba(255,255,255,0.3);
    color: white;
    width: 32px; height: 32px;
    border-radius: 50%;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s, transform 0.18s;
    font-family: inherit;
    line-height: 1;
    margin-left: auto;
    flex-shrink: 0;
  }
  .piku-close-btn:hover {
    background: rgba(255,255,255,0.3);
    transform: rotate(90deg);
  }

  /* Messages area */
  .piku-messages {
    flex: 1;
    overflow-y: auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    scroll-behavior: smooth;
  }
  .piku-messages::-webkit-scrollbar { width: 4px; }
  .piku-messages::-webkit-scrollbar-track { background: transparent; }
  .piku-messages::-webkit-scrollbar-thumb {
    background: var(--border-light);
    border-radius: 4px;
  }

  /* Message rows */
  .piku-msg {
    display: flex;
    gap: 0.55rem;
    align-items: flex-end;
    animation: msgSlideIn 0.25s ease forwards;
  }
  .piku-msg.user { flex-direction: row-reverse; }

  @keyframes msgSlideIn {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0);   }
  }

  .piku-msg-avatar {
    width: 28px; height: 28px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    border: 1.5px solid var(--border-light);
    background: var(--accent-soft);
  }

  .piku-bubble-text {
    max-width: 82%;
    padding: 0.65rem 0.95rem;
    border-radius: 18px 18px 18px 4px;
    font-size: 0.875rem;
    line-height: 1.55;
    background: var(--accent-soft);
    border: 1px solid var(--border-light);
    color: var(--text-primary);
    word-break: break-word;
  }
  .piku-msg.user .piku-bubble-text {
    background: var(--accent);
    color: white;
    border-color: var(--accent);
    border-radius: 18px 18px 4px 18px;
  }

  /* Typing indicator */
  .piku-typing {
    display: flex;
    gap: 4px;
    padding: 0.55rem 0.9rem;
    background: var(--accent-soft);
    border: 1px solid var(--border-light);
    border-radius: 18px 18px 18px 4px;
    align-items: center;
    width: fit-content;
  }
  .piku-typing span {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: var(--text-secondary);
    animation: typingBounce 1.3s ease infinite;
    display: block;
  }
  .piku-typing span:nth-child(2) { animation-delay: 0.18s; }
  .piku-typing span:nth-child(3) { animation-delay: 0.36s; }
  @keyframes typingBounce {
    0%,60%,100% { transform: translateY(0);    opacity: 0.4; }
    30%          { transform: translateY(-7px); opacity: 1;   }
  }

  /* Input row */
  .piku-input-row {
    display: flex;
    gap: 0.5rem;
    padding: 0.75rem;
    border-top: 1px solid var(--border-light);
    flex-shrink: 0;
  }

  #pikuInput {
    flex: 1;
    padding: 0.6rem 1rem;
    border-radius: 20px;
    border: 1.5px solid var(--border-light);
    background: var(--bg);
    color: var(--text-primary);
    font-family: var(--font-body);
    font-size: 0.875rem;
    outline: none;
    transition: border-color 0.15s;
  }
  #pikuInput:focus { border-color: var(--accent); }

  .piku-send {
    width: 38px; height: 38px;
    border-radius: 50%;
    background: var(--accent);
    border: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 0.15s, transform 0.15s;
    flex-shrink: 0;
    font-family: inherit;
  }
  .piku-send:hover  { filter: brightness(1.12); transform: scale(1.07); }
  .piku-send:active { transform: scale(0.95); }
  .piku-send:disabled { opacity: 0.45; cursor: default; transform: none; }

  /* Quick suggestion chips */
  .piku-suggestions {
    display: flex;
    gap: 0.4rem;
    padding: 0 0.75rem 0.6rem;
    flex-wrap: wrap;
    flex-shrink: 0;
  }
  .piku-chip {
    background: var(--accent-soft);
    border: 1px solid var(--border-light);
    border-radius: 20px;
    padding: 0.3rem 0.8rem;
    font-size: 0.76rem;
    cursor: pointer;
    color: var(--text-secondary);
    transition: background 0.15s, color 0.15s;
    font-family: var(--font-body);
    white-space: nowrap;
  }
  .piku-chip:hover { background: var(--accent); color: white; border-color: var(--accent); }

  @media (max-width: 600px) {
    .piku-bubble { bottom: 1rem; right: 1rem; }
    .piku-panel  { width: calc(100vw - 2rem); }
  }
`;

const pikuStyleEl = document.createElement('style');
pikuStyleEl.textContent = pikuCSS;
document.head.appendChild(pikuStyleEl);

/* ════════════════════════════════════════
   INJECT HTML
════════════════════════════════════════ */
const pikuRoot = document.createElement('div');
pikuRoot.innerHTML = `
  <div class="piku-bubble" id="pikuBubble">

    <!-- Chat panel (above button) -->
    <div class="piku-panel" id="pikuPanel" role="dialog" aria-label="Professor Piku chat">

      <!-- Header -->
      <div class="piku-panel-head">
        <div class="piku-head-avatar">
          ${PIKU_AVATAR_SVG}
        </div>
        <div class="piku-head-info">
          <div class="piku-head-name">Professor Piku</div>
          <div class="piku-head-status">
            <span class="piku-status-dot"></span>
            Your typing coach
          </div>
        </div>
        <button class="piku-close-btn" id="pikuCloseBtn" aria-label="Close chat">✕</button>
      </div>

      <!-- Messages -->
      <div class="piku-messages" id="pikuMessages"></div>

      <!-- Quick suggestions -->
      <div class="piku-suggestions" id="pikuSuggestions">
        <button class="piku-chip" data-msg="How can I improve my WPM?">💡 Improve WPM</button>
        <button class="piku-chip" data-msg="I keep making errors. What should I do?">🎯 Reduce errors</button>
        <button class="piku-chip" data-msg="Give me a finger drill for weak keys.">🖐 Finger drills</button>
      </div>

      <!-- Input -->
      <div class="piku-input-row">
        <input
          type="text"
          id="pikuInput"
          placeholder="Ask Professor Piku..."
          autocomplete="off"
          autocorrect="off"
          autocapitalize="none"
          spellcheck="false"
          maxlength="300"
        >
        <button class="piku-send" id="pikuSendBtn" aria-label="Send message">➤</button>
      </div>

    </div>

    <!-- Avatar button -->
    <button class="piku-avatar-btn" id="pikuAvatarBtn" aria-label="Open Professor Piku chat">
      ${PIKU_AVATAR_SVG}
      <span class="piku-notif" id="pikuNotif" aria-hidden="true"></span>
    </button>

  </div>
`;
document.body.appendChild(pikuRoot);

/* ════════════════════════════════════════
   STATE
════════════════════════════════════════ */
let pikuOpen      = false;
let pikuBusy      = false;
let pikuHistory   = [];   /* {role, content}[] — last 12 turns */
let hasGreeted    = false;

const panel       = document.getElementById('pikuPanel');
const messages    = document.getElementById('pikuMessages');
const input       = document.getElementById('pikuInput');
const sendBtn     = document.getElementById('pikuSendBtn');
const avatarBtn   = document.getElementById('pikuAvatarBtn');
const closeBtn    = document.getElementById('pikuCloseBtn');
const notifDot    = document.getElementById('pikuNotif');
const suggestions = document.getElementById('pikuSuggestions');

/* ════════════════════════════════════════
   OPEN / CLOSE
════════════════════════════════════════ */
function openPiku() {
  pikuOpen = true;
  panel.style.display = 'flex';
  /* trigger CSS animation */
  requestAnimationFrame(() => {
    requestAnimationFrame(() => panel.classList.add('open'));
  });
  hideNotif();
  input.focus();
  if (!hasGreeted) {
    hasGreeted = true;
    greetUser();
  }
}

function closePiku() {
  pikuOpen = false;
  panel.classList.remove('open');
  setTimeout(() => { panel.style.display = 'none'; }, 280);
}

avatarBtn.addEventListener('click', () => pikuOpen ? closePiku() : openPiku());
closeBtn.addEventListener('click', closePiku);

/* Stop typing test from capturing keys when piku input is focused */
input.addEventListener('keydown', e => {
  e.stopPropagation();
  if (e.key === 'Enter') { e.preventDefault(); sendMessage(); }
});

sendBtn.addEventListener('click', sendMessage);

/* Quick suggestion chips */
document.querySelectorAll('.piku-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    if (pikuBusy) return;
    const msg = chip.dataset.msg;
    if (msg) sendMessage(msg);
  });
});

/* ════════════════════════════════════════
   NOTIFICATION DOT
════════════════════════════════════════ */
function showNotif() { notifDot.classList.add('visible'); }
function hideNotif() { notifDot.classList.remove('visible'); }

/* ════════════════════════════════════════
   CONTEXT — reads current page data
════════════════════════════════════════ */
function getPageContext() {
  const page = window.location.pathname.split('/').pop().toLowerCase();
  let ctx = '';

  try {
    if (page === 'index.html' || page === '') {
      const statItems = document.querySelectorAll('.result-stat-item');
      if (statItems.length >= 2) {
        const wpm  = statItems[0]?.textContent?.replace(/\D+(\d+).*/,'$1') || '?';
        const acc  = statItems[1]?.textContent?.replace(/\D+(\d+).*/,'$1') || '?';
        const errs = statItems[2]?.textContent?.replace(/\D+(\d+).*/,'$1') || '?';
        ctx = `Student just finished a typing test. WPM: ${wpm}, Accuracy: ${acc}%, Errors: ${errs}.`;
        const errorKeys = [...document.querySelectorAll('.key-chip.error')]
          .map(k => k.textContent.trim()).filter(Boolean).join(', ');
        if (errorKeys) ctx += ` Most-missed keys: ${errorKeys}.`;
        const mode = document.querySelector('.mode-btn.active')?.dataset?.mode || '';
        const diff = document.querySelector('.diff-btn.active')?.dataset?.diff || '';
        if (mode) ctx += ` Mode: ${mode}.`;
        if (diff) ctx += ` Difficulty: ${diff}.`;
      } else {
        ctx = 'Student is on the Typing Test page, no test completed yet.';
      }
    } else if (page === 'lessons.html') {
      const done = document.querySelectorAll('.lesson-card.completed').length;
      ctx = `Student is browsing the Lessons hub. They have completed ${done} lessons so far.`;
    } else if (page === 'lesson.html') {
      const title = document.querySelector('.lesson-header h2')?.textContent || 'a lesson';
      const taskDone = document.querySelectorAll('.task-pip.done').length;
      ctx = `Student is doing lesson: "${title}". Tasks completed: ${taskDone}.`;
    } else if (page === 'game.html') {
      const score = document.getElementById('sideScore')?.textContent || '0';
      const level = document.getElementById('sideLevel')?.textContent || '1';
      const words = document.getElementById('sideWords')?.textContent || '0';
      ctx = `Student is playing the Falling Words game. Score: ${score}, Level: ${level}, Words typed: ${words}.`;
    } else if (page === 'custom.html') {
      ctx = 'Student is practising with their own custom text.';
    } else if (page === 'home.html') {
      ctx = 'Student is on the Piku Typing home page.';
    }
  } catch (e) { /* silent */ }

  return ctx;
}

/* ════════════════════════════════════════
   SYSTEM PROMPT
════════════════════════════════════════ */
function buildSystemPrompt() {
  const ctx = getPageContext();
  return `You are Professor Piku — a 25-year-old cool, sharp, energetic typing coach. You wear thick rectangular glasses, have a neat beard, and short dark hair. You are embedded inside the Piku Typing web app.

PERSONALITY:
- Young, relatable, slightly witty — think favourite professor vibes
- Genuinely invested in the student's improvement
- Direct, confident, warm — never generic or robotic

RULES (strictly follow all):
- Maximum 3 sentences per reply unless the student explicitly asks for more detail
- Always cite actual stats when available — never vague advice
- Never reveal you are an AI; never mention Claude, GPT, Groq, or Gemini; you are only Professor Piku
- If WPM went up → celebrate it with specific energy
- If accuracy < 80% → be firm but kind: slow down, accuracy first
- If error keys detected → give a targeted drill for exactly those keys
- If WPM ≥ 100 → acknowledge elite status with real enthusiasm
- If question is off-topic → warm redirect back to typing in one sentence
- Keep language natural and conversational, light humour is fine
- Never start a message with "I"

${ctx ? `LIVE CONTEXT: ${ctx}` : 'No specific test data available yet.'}`;
}

/* ════════════════════════════════════════
   AI CHAIN: Groq → Gemini → Puter.js
════════════════════════════════════════ */

async function callGroq(messages) {
  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${PIKU_CONFIG.groqKey}`
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      max_tokens: 180,
      temperature: 0.75,
      messages
    })
  });
  if (!res.ok) throw new Error(`Groq ${res.status}`);
  const d = await res.json();
  return d.choices[0].message.content.trim();
}

async function callGemini(messages) {
  /* Convert OpenAI-style messages to Gemini format */
  const system = messages.find(m => m.role === 'system')?.content || '';
  const contents = messages
    .filter(m => m.role !== 'system')
    .map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${PIKU_CONFIG.geminiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: system }] },
        contents,
        generationConfig: { maxOutputTokens: 180, temperature: 0.75 }
      })
    }
  );
  if (!res.ok) throw new Error(`Gemini ${res.status}`);
  const d = await res.json();
  return d.candidates[0].content.parts[0].text.trim();
}

async function callPuter(userText, systemPrompt) {
  /* Puter.js — no API key required, but may show login for heavy usage */
  if (typeof puter === 'undefined') throw new Error('Puter.js not loaded');
  /* Use puter.ai without forcing the login modal */
  const res = await puter.ai.chat(
    `${systemPrompt}\n\nStudent: ${userText}`,
    { model: 'gpt-4o-mini' }
  );
  const text = (typeof res === 'string')
    ? res
    : (res?.message?.content || res?.text || '');
  return text.trim();
}

async function askPiku(userText) {
  const systemPrompt = buildSystemPrompt();
  const apiMessages = [
    { role: 'system', content: systemPrompt },
    ...pikuHistory.slice(-12),
    { role: 'user', content: userText }
  ];

  /* 1️⃣ Try Groq */
  if (PIKU_CONFIG.groqKey && !PIKU_CONFIG.groqKey.startsWith('YOUR_')) {
    try { return await callGroq(apiMessages); } catch (e) { /* fall through */ }
  }

  /* 2️⃣ Try Gemini */
  if (PIKU_CONFIG.geminiKey && !PIKU_CONFIG.geminiKey.startsWith('YOUR_')) {
    try { return await callGemini(apiMessages); } catch (e) { /* fall through */ }
  }

  /* 3️⃣ Puter.js — no key needed, no forced login */
  try { return await callPuter(userText, systemPrompt); } catch (e) { /* fall through */ }

  /* 4️⃣ Graceful offline fallback */
  return "Hmm, having a quick connectivity hiccup! Add your Groq or Gemini API key in piku-ai.js and I'll be fully online. 🔑";
}

/* ════════════════════════════════════════
   SEND / RECEIVE
════════════════════════════════════════ */
async function sendMessage(overrideText) {
  const text = (overrideText || input.value).trim();
  if (!text || pikuBusy) return;

  input.value = '';
  suggestions.style.display = 'none';
  addMessage('user', text);

  pikuHistory.push({ role: 'user', content: text });
  pikuBusy = true;
  sendBtn.disabled = true;

  const typingEl = showTypingIndicator();

  let reply = '';
  try {
    reply = await askPiku(text);
  } catch (e) {
    reply = "Something went wrong on my end — try again! 🙃";
  }

  typingEl.remove();
  pikuBusy = false;
  sendBtn.disabled = false;

  pikuHistory.push({ role: 'assistant', content: reply });
  if (pikuHistory.length > 24) pikuHistory.splice(0, 2);

  addMessage('assistant', reply);
  input.focus();
}

/* ════════════════════════════════════════
   UI HELPERS
════════════════════════════════════════ */
function addMessage(role, text) {
  const row = document.createElement('div');
  row.className = `piku-msg ${role}`;

  const avatarEl = document.createElement('div');
  avatarEl.className = 'piku-msg-avatar';

  if (role === 'assistant') {
    avatarEl.innerHTML = PIKU_AVATAR_SVG;
  } else {
    avatarEl.style.cssText = 'background:var(--accent);display:flex;align-items:center;justify-content:center;color:white;font-size:0.8rem;font-weight:700;';
    avatarEl.textContent = '👤';
  }

  const bubble = document.createElement('div');
  bubble.className = 'piku-bubble-text';
  bubble.textContent = text;

  row.appendChild(avatarEl);
  row.appendChild(bubble);
  messages.appendChild(row);

  /* Smooth scroll to bottom */
  messages.scrollTop = messages.scrollHeight;
}

function showTypingIndicator() {
  const row = document.createElement('div');
  row.className = 'piku-msg';

  const avatarEl = document.createElement('div');
  avatarEl.className = 'piku-msg-avatar';
  avatarEl.innerHTML = PIKU_AVATAR_SVG;

  const indicator = document.createElement('div');
  indicator.className = 'piku-typing';
  indicator.innerHTML = '<span></span><span></span><span></span>';

  row.appendChild(avatarEl);
  row.appendChild(indicator);
  messages.appendChild(row);
  messages.scrollTop = messages.scrollHeight;
  return row;
}

function greetUser() {
  const page = window.location.pathname.split('/').pop().toLowerCase();
  const greetings = {
    'index.html': "Hey! Professor Piku here 👋 Complete a typing test and I'll break down exactly what to work on.",
    '':           "Hey! Professor Piku here 👋 Complete a typing test and I'll break down exactly what to work on.",
    'lessons.html': "Welcome to Lessons! 📚 Work through them in order — each one builds on the last. Ask me anything.",
    'lesson.html':  "Let's crush this lesson! 💪 Focus on accuracy before speed — ask me for tips anytime.",
    'game.html':    "Game mode activated! 🎮 Type fast, build combos. Ask me how to improve between rounds.",
    'custom.html':  "Custom text mode — great for focused practice! ✍️ Ask me for pacing tips.",
    'home.html':    "Welcome to Piku Typing! I'm Professor Piku, your personal typing coach. Where do you want to start? ⌨️",
  };
  const msg = greetings[page] || "Professor Piku at your service! Ask me anything about improving your typing. ⌨️";
  addMessage('assistant', msg);
}

/* ════════════════════════════════════════
   AUTO-TRIGGER AFTER TYPING TEST
   Watches for result stats appearing in DOM
════════════════════════════════════════ */
const resultContainer = document.getElementById('resultDetails');
if (resultContainer) {
  const observer = new MutationObserver(mutations => {
    for (const m of mutations) {
      for (const node of m.addedNodes) {
        if (node.nodeType === 1 && node.classList?.contains('result-stats-grid')) {
          /* Test just finished! */
          if (!pikuOpen) showNotif();

          /* Auto-coach after 1.8s — give DOM time to populate */
          setTimeout(async () => {
            const autoMsg = "Just finished! What do you think of my results, Professor?";
            if (pikuOpen) {
              await sendMessage(autoMsg);
            } else {
              /* Pre-fetch silently so reply is ready when panel opens */
              try {
                const reply = await askPiku(autoMsg);
                pikuHistory.push({ role: 'user', content: autoMsg });
                pikuHistory.push({ role: 'assistant', content: reply });
                /* Store reply to show on panel open */
                panel.dataset.pendingReply = reply;
              } catch {}
            }
          }, 1800);

          break;
        }
      }
    }
  });
  observer.observe(resultContainer, { childList: true, subtree: true });
}

/* Show pending reply when panel is opened */
const _origOpen = openPiku;
function openPiku() {
  _origOpen();
  if (panel.dataset.pendingReply) {
    const reply = panel.dataset.pendingReply;
    delete panel.dataset.pendingReply;
    /* Clear greeting if already shown and show the coaching reply */
    if (pikuHistory.length >= 2) {
      addMessage('assistant', reply);
    }
  }
}

/* Re-bind avatar button with overridden openPiku */
avatarBtn.removeEventListener('click', avatarBtn._handler);
avatarBtn._handler = () => pikuOpen ? closePiku() : openPiku();
avatarBtn.addEventListener('click', avatarBtn._handler);