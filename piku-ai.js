/* ==========================================
   PIKU TYPING — piku-ai.js
   AI Buddy powered by Puter.js (free, no API key)
   ========================================== */

/* ── Inject Puter.js ── */
(function loadPuter() {
  const script = document.createElement('script');
  script.src   = 'https://js.puter.com/v2/';
  script.async = true;
  script.onload = () => initPikuAI();
  document.head.appendChild(script);
})();

/* ── Avatar SVG — middle aged man with hat ── */
const PIKU_AVATAR_SVG = `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
  <!-- Body / Shirt -->
  <ellipse cx="50" cy="88" rx="28" ry="18" fill="#3a6bc5"/>
  <ellipse cx="50" cy="78" rx="22" ry="14" fill="#4a7ed5"/>

  <!-- Neck -->
  <rect x="44" y="62" width="12" height="10" rx="4" fill="#d4956a"/>

  <!-- Head -->
  <ellipse cx="50" cy="54" rx="22" ry="24" fill="#d4956a"/>

  <!-- Ear left -->
  <ellipse cx="28" cy="55" rx="4" ry="5" fill="#c4855a"/>
  <!-- Ear right -->
  <ellipse cx="72" cy="55" rx="4" ry="5" fill="#c4855a"/>

  <!-- Hair / sideburns (greying) -->
  <ellipse cx="29" cy="50" rx="4" ry="8" fill="#888"/>
  <ellipse cx="71" cy="50" rx="4" ry="8" fill="#888"/>

  <!-- Hat brim -->
  <ellipse cx="50" cy="34" rx="28" ry="5" fill="#2a2a2a"/>
  <!-- Hat body -->
  <rect x="26" y="10" width="48" height="26" rx="8" fill="#333"/>
  <!-- Hat band -->
  <rect x="26" y="30" width="48" height="6" rx="2" fill="#4f7ec9"/>
  <!-- Hat highlight -->
  <rect x="30" y="13" width="18" height="6" rx="3" fill="rgba(255,255,255,0.08)"/>

  <!-- Eyes -->
  <ellipse cx="41" cy="53" rx="4.5" ry="4" fill="white"/>
  <ellipse cx="59" cy="53" rx="4.5" ry="4" fill="white"/>
  <ellipse cx="41" cy="53" rx="2.5" ry="2.8" fill="#3a2a1a"/>
  <ellipse cx="59" cy="53" rx="2.5" ry="2.8" fill="#3a2a1a"/>
  <!-- Eye shine -->
  <circle cx="42" cy="51.5" r="1" fill="white"/>
  <circle cx="60" cy="51.5" r="1" fill="white"/>

  <!-- Eyebrows (thick, slightly greying) -->
  <rect x="35" y="46" width="13" height="3" rx="1.5" fill="#555"/>
  <rect x="52" y="46" width="13" height="3" rx="1.5" fill="#555"/>

  <!-- Nose -->
  <ellipse cx="50" cy="60" rx="3" ry="2" fill="#c4855a"/>

  <!-- Friendly smile -->
  <path d="M 40 67 Q 50 74 60 67" stroke="#a0522d" stroke-width="2"
        fill="none" stroke-linecap="round"/>

  <!-- Moustache -->
  <path d="M 39 64 Q 50 69 61 64" stroke="#666" stroke-width="2.5"
        fill="none" stroke-linecap="round"/>

  <!-- Glasses -->
  <circle cx="41" cy="53" r="7" stroke="#555" stroke-width="1.8" fill="none"/>
  <circle cx="59" cy="53" r="7" stroke="#555" stroke-width="1.8" fill="none"/>
  <line x1="48" y1="53" x2="52" y2="53" stroke="#555" stroke-width="1.8"/>
  <line x1="27" y1="51" x2="34" y2="52" stroke="#555" stroke-width="1.8"/>
  <line x1="66" y1="52" x2="73" y2="51" stroke="#555" stroke-width="1.8"/>
</svg>
`;

/* ── System prompt for Piku ── */
function buildSystemPrompt(context) {
  return `You are Piku, a friendly and wise typing coach inside the Piku Typing web app.
Your personality: warm, encouraging, occasionally witty, like a knowledgeable mentor who genuinely cares about the user's progress.
You wear a flat cap and round glasses. You love typing and keyboard efficiency.

Your job is to help users improve their typing speed and accuracy.
You have access to the user's current session data:
- WPM: ${context.wpm || '—'}
- Accuracy: ${context.acc || '—'}%
- Errors: ${context.errors || 0}
- Most errors on keys: ${context.errorKeys?.join(', ') || 'none recorded'}
- Mode: ${context.mode || 'words'}
- Difficulty: ${context.difficulty || 'easy'}
- Session history (last sessions WPM): ${context.history?.map(h => h.wpm).join(', ') || 'no history yet'}

Rules:
- Keep responses SHORT — 2 to 4 sentences max unless asked for more
- Be specific — reference their actual stats, not generic advice
- Be encouraging — never discouraging
- If they ask for a drill or exercise, generate one using only relevant keys
- If they ask something unrelated to typing, gently redirect back to typing practice
- Never say you are an AI or mention Claude, GPT, or any AI company
- You are simply Piku, their typing coach`;
}

/* ── Opening messages Piku says after a test ── */
function buildOpeningMessage(context) {
  const { wpm, acc, errorKeys, history } = context;

  if (!wpm) {
    return "Hey there! I'm Piku, your typing coach. Complete a test and I'll give you personalised feedback! 🎯";
  }

  const prevWpm = history?.length >= 2
    ? history[history.length - 2]?.wpm : null;
  const improved = prevWpm && wpm > prevWpm;
  const dropped  = prevWpm && wpm < prevWpm - 5;

  if (improved) {
    return `Nice work! You jumped from ${prevWpm} to ${wpm} WPM — that's real progress! ${
      acc < 90
        ? `Your accuracy at ${acc}% is a bit shaky though. Slow down just a touch and you'll fly.`
        : `And ${acc}% accuracy? Solid. Keep this pace going.`
    }`;
  }

  if (dropped) {
    return `Your WPM dipped a bit this round — ${wpm} vs ${prevWpm} last time. Don't worry, it happens. ${
      errorKeys?.length
        ? `Looks like ${errorKeys.slice(0,2).join(' and ')} are giving you trouble. Want a quick drill?`
        : `Take a breath and focus on rhythm rather than speed.`
    }`;
  }

  if (acc < 80) {
    return `${wpm} WPM but accuracy is at ${acc}% — you're rushing. Slow is smooth, smooth is fast. ${
      errorKeys?.length
        ? `Your main problem keys are: ${errorKeys.slice(0,3).join(', ')}. Want me to generate a drill?`
        : `Focus on hitting each key cleanly before speeding up.`
    }`;
  }

  if (wpm >= 80) {
    return `${wpm} WPM at ${acc}% accuracy — you're genuinely fast! ${
      wpm >= 100
        ? `100+ WPM club. Very few people get here. What are you aiming for next?`
        : `80 WPM is the threshold where typing stops being a bottleneck. Push for 100?`
    }`;
  }

  return `${wpm} WPM at ${acc}% accuracy. ${
    errorKeys?.length
      ? `Your weakest keys right now are ${errorKeys.slice(0,3).join(', ')}. Want a targeted drill?`
      : `Clean session! Try bumping up the difficulty for more challenge.`
  }`;
}

/* ── Main init ── */
function initPikuAI() {
  injectUI();
  setupEvents();
  setupTestListener();
}

/* ── Inject HTML into page ── */
function injectUI() {
  const wrap = document.createElement('div');
  wrap.className = 'piku-bubble';
  wrap.id        = 'pikuBubble';

  wrap.innerHTML = `
    <!-- Avatar button -->
    <button class="piku-avatar-btn" id="pikuAvatarBtn" title="Chat with Piku">
      ${PIKU_AVATAR_SVG}
      <div class="piku-notif" id="pikuNotif"></div>
    </button>

    <!-- Chat panel -->
    <div class="piku-chat-panel" id="pikuChatPanel">

      <!-- Header -->
      <div class="piku-chat-header">
        <div class="piku-chat-header-avatar">
          ${PIKU_AVATAR_SVG}
        </div>
        <div>
          <div class="piku-chat-name">Piku</div>
          <div class="piku-chat-status">Your typing coach</div>
        </div>
        <button class="piku-close-btn" id="pikuCloseBtn">✕</button>
      </div>

      <!-- Messages -->
      <div class="piku-messages" id="pikuMessages">
        <div class="piku-msg">
          <div class="piku-msg-bubble">
            Hey! I'm Piku 👋 Complete a typing test and I'll give you
            personalised coaching based on your results!
          </div>
        </div>
      </div>

      <!-- Input row -->
      <div class="piku-input-row">
        <input
          type="text"
          class="piku-input"
          id="pikuInput"
          placeholder="Ask Piku anything..."
          autocomplete="off"
        >
        <button class="piku-send-btn" id="pikuSendBtn">➤</button>
      </div>

    </div>
  `;

  document.body.appendChild(wrap);
}

/* ── Events ── */
function setupEvents() {
  const avatarBtn  = document.getElementById('pikuAvatarBtn');
  const closeBtn   = document.getElementById('pikuCloseBtn');
  const chatPanel  = document.getElementById('pikuChatPanel');
  const sendBtn    = document.getElementById('pikuSendBtn');
  const input      = document.getElementById('pikuInput');
  const notif      = document.getElementById('pikuNotif');

  avatarBtn.addEventListener('click', () => {
    const isOpen = chatPanel.classList.contains('open');
    chatPanel.classList.toggle('open', !isOpen);
    notif.classList.remove('visible');
    if (!isOpen) {
      setTimeout(() => input.focus(), 200);
    }
  });

  closeBtn.addEventListener('click', () => {
    chatPanel.classList.remove('open');
  });

  sendBtn.addEventListener('click', sendMessage);

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') sendMessage();
  });
}

/* ── Listen for test completion ── */
function setupTestListener() {
  /* Watch for result card update — that means a test finished */
  const observer = new MutationObserver(() => {
    const result = document.getElementById('resultDetails');
    if (!result) return;

    /* only trigger if result has actual stats */
    if (result.querySelector('.result-stats-grid')) {
      setTimeout(() => triggerPostTestMessage(), 800);
    }
  });

  const resultCard = document.getElementById('resultDetails');
  if (resultCard) {
    observer.observe(resultCard, { childList: true, subtree: true });
  }
}

/* ── Trigger message after test ── */
function triggerPostTestMessage() {
  const context  = gatherContext();
  const message  = buildOpeningMessage(context);
  const notif    = document.getElementById('pikuNotif');
  const panel    = document.getElementById('pikuChatPanel');

  /* Show notification dot if panel is closed */
  if (!panel.classList.contains('open')) {
    notif.classList.add('visible');
  }

  addMessage(message, 'piku');
}

/* ── Gather context from the page ── */
function gatherContext() {
  const context = {};

  /* Pull from result card */
  const statItems = document.querySelectorAll('.result-stat-item');
  if (statItems.length >= 2) {
    const wpmText = statItems[0]?.textContent || '';
    const accText = statItems[1]?.textContent || '';
    const errText = statItems[2]?.textContent || '';

    context.wpm    = parseInt(wpmText.replace(/\D/g, '')) || 0;
    context.acc    = parseInt(accText.replace(/\D/g, '')) || 100;
    context.errors = parseInt(errText.replace(/\D/g, '')) || 0;
  }

  /* Pull error keys from heatmap */
  const errorKeys = [];
  document.querySelectorAll('.key-chip.error').forEach(k => {
    errorKeys.push(k.textContent.trim());
  });
  context.errorKeys = errorKeys;

  /* Pull mode and difficulty from active buttons */
  const modeBtn = document.querySelector('.mode-btn.active');
  const diffBtn = document.querySelector('.diff-btn.active');
  context.mode       = modeBtn?.dataset?.mode || 'words';
  context.difficulty = diffBtn?.dataset?.diff || 'easy';

  /* Pull history from localStorage */
  try {
    context.history = JSON.parse(
      localStorage.getItem('pt_history') || '[]'
    ).slice(-10);
  } catch {
    context.history = [];
  }

  return context;
}

/* ── Send user message ── */
async function sendMessage() {
  const input = document.getElementById('pikuInput');
  const text  = input.value.trim();
  if (!text) return;

  input.value = '';
  addMessage(text, 'user');
  showTypingIndicator();

  const context  = gatherContext();
  const sysPrompt = buildSystemPrompt(context);

  try {
    const response = await puter.ai.chat(text, {
      system: sysPrompt,
      model:  'claude-sonnet-4-5'
    });

    removeTypingIndicator();

    const reply = typeof response === 'string'
      ? response
      : response?.message?.content?.[0]?.text
        || response?.text
        || response?.content
        || "I didn't catch that — could you rephrase?";

    addMessage(reply, 'piku');

  } catch (err) {
    removeTypingIndicator();
    console.warn('Piku AI error:', err);
    addMessage(
      "Hmm, I'm having a little trouble connecting right now. Try again in a moment!",
      'piku'
    );
  }
}

/* ── Add message to chat ── */
function addMessage(text, sender) {
  const messages = document.getElementById('pikuMessages');
  if (!messages) return;

  const msgDiv = document.createElement('div');
  msgDiv.className = `piku-msg ${sender === 'user' ? 'user' : ''}`;

  const bubble = document.createElement('div');
  bubble.className   = 'piku-msg-bubble';
  bubble.textContent = text;

  msgDiv.appendChild(bubble);
  messages.appendChild(msgDiv);
  messages.scrollTop = messages.scrollHeight;

  /* Open panel if Piku speaks */
  if (sender === 'piku') {
    const panel = document.getElementById('pikuChatPanel');
    if (panel && panel.classList.contains('open')) {
      messages.scrollTop = messages.scrollHeight;
    }
  }
}

/* ── Typing indicator ── */
function showTypingIndicator() {
  const messages = document.getElementById('pikuMessages');
  if (!messages) return;

  const div = document.createElement('div');
  div.className = 'piku-msg';
  div.id        = 'pikuTypingIndicator';

  div.innerHTML = `
    <div class="piku-typing-indicator">
      <span></span><span></span><span></span>
    </div>
  `;

  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function removeTypingIndicator() {
  const el = document.getElementById('pikuTypingIndicator');
  if (el) el.remove();
}