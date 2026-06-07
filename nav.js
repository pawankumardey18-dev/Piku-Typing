/* ==========================================
   nav.js — Piku Typing
   Injects on every page:
   1. Top header with hamburger button
   2. Animated sidebar navigation
   3. Professor Piku AI chat bubble
   ========================================== */

(function () {

  /* ── Detect current page ── */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const isActive = (page) => {
    if (page === 'index.html') return path === '' || path === 'index.html' || path === 'Index.html';
    return path.toLowerCase() === page.toLowerCase();
  };

  /* ── Inject global styles ── */
  const style = document.createElement('style');
  style.textContent = `

    /* ── Sidebar overlay ── */
    .nav-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 900;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
      backdrop-filter: blur(3px);
    }
    .nav-overlay.open {
      opacity: 1;
      pointer-events: all;
    }

    /* ── Sidebar panel ── */
    .nav-sidebar {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 280px;
      background: var(--surface);
      border-right: 1px solid var(--border-light);
      box-shadow: 8px 0 40px rgba(0, 0, 0, 0.15);
      z-index: 950;
      transform: translateX(-100%);
      transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .nav-sidebar.open {
      transform: translateX(0);
    }

    /* Sidebar header */
    .nav-sidebar-header {
      padding: 1.6rem 1.5rem 1.2rem;
      border-bottom: 1px solid var(--border-light);
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: var(--gradient-brand);
    }
    .nav-sidebar-logo {
      font-family: var(--font-display);
      font-size: 1.6rem;
      font-weight: 800;
      color: white;
      letter-spacing: -0.5px;
    }
    .nav-sidebar-close {
      background: rgba(255,255,255,0.15);
      border: none;
      border-radius: 50%;
      width: 36px;
      height: 36px;
      color: white;
      font-size: 1.2rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.15s;
      font-family: inherit;
      line-height: 1;
    }
    .nav-sidebar-close:hover { background: rgba(255,255,255,0.25); }

    /* Sidebar nav links */
    .nav-sidebar-links {
      flex: 1;
      padding: 1rem 0.8rem;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      overflow-y: auto;
    }
    .nav-sidebar-link {
      display: flex;
      align-items: center;
      gap: 0.9rem;
      padding: 0.85rem 1.1rem;
      border-radius: 16px;
      text-decoration: none;
      color: var(--text-secondary);
      font-weight: 600;
      font-size: 1rem;
      font-family: var(--font-body);
      transition: all 0.18s ease;
      position: relative;
      border: 1.5px solid transparent;
    }
    .nav-sidebar-link:hover {
      background: var(--accent-soft);
      color: var(--accent);
      border-color: var(--border-light);
      transform: translateX(4px);
    }
    .nav-sidebar-link.active {
      background: var(--accent);
      color: white;
      border-color: var(--accent);
      box-shadow: 0 4px 14px rgba(79,126,201,0.35);
    }
    .nav-sidebar-icon {
      font-size: 1.25rem;
      width: 28px;
      text-align: center;
      flex-shrink: 0;
    }
    .nav-sidebar-label { flex: 1; }
    .nav-sidebar-link.active .nav-sidebar-badge {
      background: rgba(255,255,255,0.25);
      color: white;
    }
    .nav-sidebar-badge {
      font-size: 0.7rem;
      background: var(--accent-soft);
      color: var(--accent);
      padding: 0.15rem 0.5rem;
      border-radius: 99px;
      font-weight: 700;
    }

    /* Sidebar divider */
    .nav-sidebar-divider {
      height: 1px;
      background: var(--border-light);
      margin: 0.5rem 1rem;
    }

    /* Sidebar footer */
    .nav-sidebar-footer {
      padding: 1rem 1.4rem 1.4rem;
      border-top: 1px solid var(--border-light);
      font-size: 0.8rem;
      color: var(--text-secondary);
      text-align: center;
    }
    .nav-sidebar-footer strong {
      color: var(--accent);
      font-weight: 700;
    }

    /* ── Hamburger button (always visible) ── */
    .nav-hamburger {
      background: var(--accent-soft);
      border: 1.5px solid var(--border-light);
      border-radius: 14px;
      width: 44px;
      height: 44px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5px;
      transition: all 0.15s;
      flex-shrink: 0;
    }
    .nav-hamburger:hover {
      background: var(--accent);
      border-color: var(--accent);
    }
    .nav-hamburger:hover .ham-line { background: white; }
    .ham-line {
      width: 20px;
      height: 2px;
      background: var(--text-primary);
      border-radius: 99px;
      transition: background 0.15s;
    }

    /* ── Top nav links (desktop only) ── */
    .main-nav {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      flex-wrap: wrap;
    }
    @media (max-width: 860px) {
      .main-nav { display: none; }
    }

    /* ── Professor Piku Bubble ── */
    .piku-bubble {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      z-index: 800;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.8rem;
    }

    .piku-avatar-btn {
      width: 68px;
      height: 68px;
      border-radius: 50%;
      background: var(--gradient-brand);
      border: 3px solid white;
      box-shadow: 0 8px 28px rgba(79,126,201,0.45);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s;
      overflow: hidden;
      padding: 0;
      position: relative;
    }
    .piku-avatar-btn:hover {
      transform: scale(1.1) rotate(-3deg);
      box-shadow: 0 14px 36px rgba(79,126,201,0.55);
    }
    .piku-avatar-btn svg {
      width: 100%;
      height: 100%;
    }

    /* Notification dot */
    .piku-notif {
      position: absolute;
      top: 2px;
      right: 2px;
      width: 16px;
      height: 16px;
      background: #e53e3e;
      border-radius: 50%;
      border: 2px solid white;
      display: none;
      animation: piku-ping 1.2s ease infinite;
    }
    .piku-notif.visible { display: block; }
    @keyframes piku-ping {
      0%, 100% { transform: scale(1); opacity: 1; }
      50%       { transform: scale(1.2); opacity: 0.8; }
    }

    /* Chat panel */
    .piku-chat-panel {
      background: var(--surface);
      border: 1px solid var(--border-light);
      border-radius: 24px;
      width: 340px;
      max-height: 500px;
      box-shadow: 0 24px 60px rgba(0,0,0,0.22);
      display: none;
      flex-direction: column;
      overflow: hidden;
      transform: scale(0.92) translateY(12px);
      transform-origin: bottom right;
      opacity: 0;
      transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1),
                  opacity 0.2s ease;
    }
    .piku-chat-panel.open {
      display: flex;
      transform: scale(1) translateY(0);
      opacity: 1;
    }

    /* Chat header */
    .piku-chat-header {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      padding: 1rem 1.2rem;
      border-bottom: 1px solid var(--border-light);
      background: var(--gradient-brand);
      color: white;
      flex-shrink: 0;
    }
    .piku-chat-header-avatar {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: rgba(255,255,255,0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      flex-shrink: 0;
      border: 2px solid rgba(255,255,255,0.3);
    }
    .piku-chat-name { font-weight: 700; font-size: 1rem; }
    .piku-chat-status {
      font-size: 0.75rem;
      opacity: 0.85;
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }
    .piku-status-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #68d391;
      display: inline-block;
      animation: statusPulse 2s ease infinite;
    }
    @keyframes statusPulse {
      0%, 100% { opacity: 1; }
      50%       { opacity: 0.4; }
    }
    .piku-close-btn {
      margin-left: auto;
      background: rgba(255,255,255,0.15);
      border: none;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      color: white;
      font-size: 1rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.15s;
      font-family: inherit;
      line-height: 1;
      flex-shrink: 0;
    }
    .piku-close-btn:hover { background: rgba(255,255,255,0.28); }

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
    .piku-messages::-webkit-scrollbar-thumb {
      background: var(--border-light);
      border-radius: 99px;
    }

    .piku-msg { display: flex; gap: 0.5rem; align-items: flex-end; }
    .piku-msg.user { flex-direction: row-reverse; }
    .piku-msg-avatar {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: var(--gradient-brand);
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    .piku-msg-bubble {
      background: var(--accent-soft);
      border-radius: 18px 18px 18px 4px;
      padding: 0.65rem 1rem;
      font-size: 0.88rem;
      line-height: 1.55;
      max-width: 82%;
      border: 1px solid var(--border-light);
      color: var(--text-primary);
    }
    .piku-msg.user .piku-msg-bubble {
      background: var(--accent);
      color: white;
      border-radius: 18px 18px 4px 18px;
      border-color: var(--accent);
    }

    /* Typing indicator */
    .piku-typing {
      display: flex;
      gap: 4px;
      padding: 0.55rem 0.9rem;
      background: var(--accent-soft);
      border-radius: 18px 18px 18px 4px;
      border: 1px solid var(--border-light);
      width: fit-content;
      align-items: center;
    }
    .piku-typing span {
      width: 7px; height: 7px;
      border-radius: 50%;
      background: var(--text-secondary);
      animation: pikuBounce 1.2s infinite;
    }
    .piku-typing span:nth-child(2) { animation-delay: 0.2s; }
    .piku-typing span:nth-child(3) { animation-delay: 0.4s; }
    @keyframes pikuBounce {
      0%, 60%, 100% { transform: translateY(0);   opacity: 0.4; }
      30%            { transform: translateY(-7px); opacity: 1;   }
    }

    /* Input row */
    .piku-input-row {
      display: flex;
      gap: 0.5rem;
      padding: 0.8rem;
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
      font-size: 0.88rem;
      outline: none;
      transition: border 0.15s;
    }
    #pikuInput:focus { border-color: var(--accent); }
    .piku-send-btn {
      background: var(--accent);
      color: white;
      border: none;
      border-radius: 50%;
      width: 38px;
      height: 38px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      transition: filter 0.15s, transform 0.15s;
      flex-shrink: 0;
      font-family: inherit;
    }
    .piku-send-btn:hover { filter: brightness(1.12); transform: scale(1.06); }

    @media (max-width: 500px) {
      .piku-bubble { bottom: 1rem; right: 1rem; }
      .piku-chat-panel { width: calc(100vw - 2rem); }
    }
  `;
  document.head.appendChild(style);

  /* ══════════════════════════════════════
     1.  SIDEBAR HTML
  ══════════════════════════════════════ */
  const overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  overlay.id = 'navOverlay';

  const sidebar = document.createElement('nav');
  sidebar.className = 'nav-sidebar';
  sidebar.id = 'navSidebar';
  sidebar.innerHTML = `
    <div class="nav-sidebar-header">
      <span class="nav-sidebar-logo">Piku Typing</span>
      <button class="nav-sidebar-close" id="sidebarClose" aria-label="Close menu">✕</button>
    </div>

    <div class="nav-sidebar-links">

      <a href="index.html" class="nav-sidebar-link ${isActive('index.html') ? 'active' : ''}">
        <span class="nav-sidebar-icon">⌨️</span>
        <span class="nav-sidebar-label">Typing Test</span>
      </a>

      <a href="lessons.html" class="nav-sidebar-link ${isActive('lessons.html') ? 'active' : ''}">
        <span class="nav-sidebar-icon">📚</span>
        <span class="nav-sidebar-label">Lessons</span>
        <span class="nav-sidebar-badge">27</span>
      </a>

      <a href="game.html" class="nav-sidebar-link ${isActive('game.html') ? 'active' : ''}">
        <span class="nav-sidebar-icon">🎮</span>
        <span class="nav-sidebar-label">Falling Words</span>
      </a>

      <a href="custom.html" class="nav-sidebar-link ${isActive('custom.html') ? 'active' : ''}">
        <span class="nav-sidebar-icon">✏️</span>
        <span class="nav-sidebar-label">Custom Text</span>
      </a>

      <div class="nav-sidebar-divider"></div>

      <a href="home.html" class="nav-sidebar-link ${isActive('home.html') ? 'active' : ''}">
        <span class="nav-sidebar-icon">🏠</span>
        <span class="nav-sidebar-label">Home</span>
      </a>

    </div>

    <div class="nav-sidebar-footer">
      Made with ❤️ by <strong>Pawan</strong><br>
      <span style="opacity:0.6;font-size:0.72rem;">Piku Typing © 2026</span>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.appendChild(sidebar);

  /* ── Sidebar open/close logic ── */
  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  overlay.addEventListener('click', closeSidebar);
  document.getElementById('sidebarClose').addEventListener('click', closeSidebar);

  /* Close on Escape key */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSidebar();
  });

  /* ══════════════════════════════════════
     2.  HEADER — inject hamburger + top nav
  ══════════════════════════════════════ */
  const existingHeader = document.querySelector('.main-header');
  if (existingHeader) {

    /* Inject hamburger as first child of header */
    const hamburger = document.createElement('button');
    hamburger.className = 'nav-hamburger';
    hamburger.id = 'navHamburger';
    hamburger.setAttribute('aria-label', 'Open menu');
    hamburger.innerHTML = `
      <span class="ham-line"></span>
      <span class="ham-line"></span>
      <span class="ham-line"></span>
    `;
    hamburger.addEventListener('click', openSidebar);
    existingHeader.insertBefore(hamburger, existingHeader.firstChild);

    /* ── Theme Switcher ── */
    const SITE_THEMES = [
      { key: 'midnight', label: '🌙 Midnight', title: 'Midnight Blue' },
      { key: 'soft',     label: '☀️ Soft',     title: 'Soft Light' },
      { key: 'forest',   label: '🌿 Forest',   title: 'Forest' },
      { key: 'slate',    label: '🩶 Slate',    title: 'Slate' },
    ];

    function applyTheme(key) {
      document.documentElement.setAttribute('data-theme', key);
      try { localStorage.setItem('pt_site_theme', key); } catch {}
    }

    function loadSavedTheme() {
      const saved = localStorage.getItem('pt_site_theme') || 'midnight';
      applyTheme(saved);
      return saved;
    }

    const currentThemeKey = loadSavedTheme();

    /* Build the switcher buttons and inject into header-actions */
    const headerActions = existingHeader.querySelector('.header-actions') ||
                          existingHeader.querySelector('#headerActions');

    if (headerActions) {
      const themeWrap = document.createElement('div');
      themeWrap.className = 'site-theme-switcher';
      themeWrap.id = 'siteThemeSwitcher';

      SITE_THEMES.forEach(t => {
        const btn = document.createElement('button');
        btn.className = 'site-theme-btn' + (t.key === currentThemeKey ? ' active' : '');
        btn.textContent = t.label;
        btn.title = t.title;
        btn.dataset.themeKey = t.key;
        btn.addEventListener('click', () => {
          applyTheme(t.key);
          document.querySelectorAll('.site-theme-btn').forEach(b =>
            b.classList.toggle('active', b.dataset.themeKey === t.key)
          );
          /* Sync app.js chart redraw if on index page */
          if (typeof drawChart === 'function' && typeof sessionHistory !== 'undefined') {
            drawChart(sessionHistory);
          }
        });
        themeWrap.appendChild(btn);
      });

      /* Insert theme switcher BEFORE existing content in header-actions */
      headerActions.insertBefore(themeWrap, headerActions.firstChild);
    }

    /* Top nav links (desktop — hidden on mobile via CSS) */
    const topNav = document.createElement('nav');
    topNav.className = 'main-nav';
    topNav.innerHTML = `
      <a href="index.html"   class="nav-link ${isActive('index.html')   ? 'active' : ''}">⌨️ Test</a>
      <a href="lessons.html" class="nav-link ${isActive('lessons.html') ? 'active' : ''}">📚 Lessons</a>
      <a href="game.html"    class="nav-link ${isActive('game.html')    ? 'active' : ''}">🎮 Game</a>
      <a href="custom.html"  class="nav-link ${isActive('custom.html')  ? 'active' : ''}">✏️ Custom</a>
    `;

    /* Insert after brand, before header-actions */
    const brand    = existingHeader.querySelector('.brand');
    const actions  = existingHeader.querySelector('.header-actions');
    if (brand && actions) {
      existingHeader.insertBefore(topNav, actions);
    } else if (brand) {
      existingHeader.appendChild(topNav);
    }
  }

  /* ══════════════════════════════════════
     3.  PROFESSOR PIKU BUBBLE — every page
  ══════════════════════════════════════ */
  const pikuBubble = document.createElement('div');
  pikuBubble.className = 'piku-bubble';
  pikuBubble.id = 'pikuBubble';
  pikuBubble.innerHTML = `

    <!-- Chat panel -->
    <div class="piku-chat-panel" id="pikuPanel">

      <div class="piku-chat-header">
        <div class="piku-chat-header-avatar">
          <!-- Professor Piku SVG avatar — glasses, beard, young teacher -->
          <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
            <!-- Background circle -->
            <circle cx="40" cy="40" r="40" fill="#2a3a6e"/>
            <!-- Body / shirt -->
            <ellipse cx="40" cy="72" rx="22" ry="16" fill="#3a5aad"/>
            <!-- Collar -->
            <path d="M33 58 L40 65 L47 58" fill="white" opacity="0.9"/>
            <!-- Neck -->
            <rect x="35" y="52" width="10" height="8" rx="3" fill="#c8956c"/>
            <!-- Head -->
            <ellipse cx="40" cy="38" rx="17" ry="19" fill="#c8956c"/>
            <!-- Hair -->
            <path d="M23 34 Q24 18 40 17 Q56 18 57 34 Q55 22 40 21 Q25 22 23 34Z"
                  fill="#1a1008"/>
            <!-- Ear left -->
            <ellipse cx="23" cy="39" rx="3" ry="4" fill="#b8855c"/>
            <!-- Ear right -->
            <ellipse cx="57" cy="39" rx="3" ry="4" fill="#b8855c"/>
            <!-- Beard -->
            <path d="M27 46 Q28 56 40 58 Q52 56 53 46 Q48 52 40 53 Q32 52 27 46Z"
                  fill="#1a1008" opacity="0.85"/>
            <!-- Mustache -->
            <path d="M33 44 Q37 47 40 46 Q43 47 47 44 Q44 46 40 45 Q36 46 33 44Z"
                  fill="#1a1008"/>
            <!-- Eyes whites -->
            <ellipse cx="33" cy="37" rx="5.5" ry="5" fill="white"/>
            <ellipse cx="47" cy="37" rx="5.5" ry="5" fill="white"/>
            <!-- Pupils -->
            <circle cx="33.5" cy="37.5" r="2.5" fill="#1a1008">
              <animate attributeName="cx" values="33.5;34.5;33.5" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="47.5" cy="37.5" r="2.5" fill="#1a1008">
              <animate attributeName="cx" values="47.5;48.5;47.5" dur="3s" repeatCount="indefinite"/>
            </circle>
            <!-- Eye shine -->
            <circle cx="34.5" cy="36.2" r="1" fill="white" opacity="0.8"/>
            <circle cx="48.5" cy="36.2" r="1" fill="white" opacity="0.8"/>
            <!-- Glasses frame left -->
            <rect x="27" y="33" width="13" height="9" rx="3"
                  fill="none" stroke="#1a1008" stroke-width="1.8"/>
            <!-- Glasses frame right -->
            <rect x="40" y="33" width="13" height="9" rx="3"
                  fill="none" stroke="#1a1008" stroke-width="1.8"/>
            <!-- Glasses bridge -->
            <line x1="40" y1="37.5" x2="40" y2="37.5"
                  stroke="#1a1008" stroke-width="1.5"
                  stroke-linecap="round"/>
            <!-- Glasses arms -->
            <line x1="27" y1="37" x2="23" y2="37"
                  stroke="#1a1008" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="53" y1="37" x2="57" y2="37"
                  stroke="#1a1008" stroke-width="1.5" stroke-linecap="round"/>
            <!-- Subtle smile -->
            <path d="M36 47 Q40 50 44 47" fill="none" stroke="#8b5e3c"
                  stroke-width="1.2" stroke-linecap="round"/>
          </svg>
        </div>
        <div>
          <div class="piku-chat-name">Professor Piku</div>
          <div class="piku-chat-status">
            <span class="piku-status-dot"></span> Your typing coach
          </div>
        </div>
        <button class="piku-close-btn" id="pikuClose" aria-label="Close chat">✕</button>
      </div>

      <div class="piku-messages" id="pikuMessages">
        <div class="piku-msg">
          <div class="piku-msg-avatar">
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="#2a3a6e"/>
              <ellipse cx="20" cy="19" rx="8" ry="9" fill="#c8956c"/>
              <path d="M12 17 Q12 9 20 9 Q28 9 28 17 Q27 11 20 11 Q13 11 12 17Z" fill="#1a1008"/>
              <ellipse cx="17" cy="18" rx="2.5" ry="2.2" fill="white"/>
              <ellipse cx="23" cy="18" rx="2.5" ry="2.2" fill="white"/>
              <circle cx="17.3" cy="18.3" r="1.1" fill="#1a1008"/>
              <circle cx="23.3" cy="18.3" r="1.1" fill="#1a1008"/>
              <rect x="13" y="16" width="7" height="5" rx="1.5" fill="none" stroke="#1a1008" stroke-width="1.1"/>
              <rect x="20" y="16" width="7" height="5" rx="1.5" fill="none" stroke="#1a1008" stroke-width="1.1"/>
              <path d="M14 23 Q16 26 20 27 Q24 26 26 23 Q22 25 20 25 Q18 25 14 23Z" fill="#1a1008" opacity="0.8"/>
            </svg>
          </div>
          <div class="piku-msg-bubble" id="pikuWelcomeMsg">
            Hey! I'm <strong>Professor Piku</strong> 👋<br>
            Complete a typing test and I'll give you personalised coaching based on your actual performance!
          </div>
        </div>
      </div>

      <div class="piku-input-row">
        <input
          type="text"
          id="pikuInput"
          placeholder="Ask Professor Piku..."
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
        />
        <button class="piku-send-btn" id="pikuSend" aria-label="Send">➤</button>
      </div>
    </div>

    <!-- Avatar button -->
    <button class="piku-avatar-btn" id="pikuAvatarBtn" aria-label="Chat with Professor Piku">
      <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="40" fill="#2a3a6e"/>
        <ellipse cx="40" cy="72" rx="22" ry="16" fill="#3a5aad"/>
        <path d="M33 58 L40 65 L47 58" fill="white" opacity="0.9"/>
        <rect x="35" y="52" width="10" height="8" rx="3" fill="#c8956c"/>
        <ellipse cx="40" cy="38" rx="17" ry="19" fill="#c8956c"/>
        <path d="M23 34 Q24 18 40 17 Q56 18 57 34 Q55 22 40 21 Q25 22 23 34Z" fill="#1a1008"/>
        <ellipse cx="23" cy="39" rx="3" ry="4" fill="#b8855c"/>
        <ellipse cx="57" cy="39" rx="3" ry="4" fill="#b8855c"/>
        <path d="M27 46 Q28 56 40 58 Q52 56 53 46 Q48 52 40 53 Q32 52 27 46Z" fill="#1a1008" opacity="0.85"/>
        <path d="M33 44 Q37 47 40 46 Q43 47 47 44 Q44 46 40 45 Q36 46 33 44Z" fill="#1a1008"/>
        <ellipse cx="33" cy="37" rx="5.5" ry="5" fill="white"/>
        <ellipse cx="47" cy="37" rx="5.5" ry="5" fill="white"/>
        <circle cx="33.5" cy="37.5" r="2.5" fill="#1a1008">
          <animate attributeName="cy" values="37.5;38;37.5" dur="4s" repeatCount="indefinite"/>
        </circle>
        <circle cx="47.5" cy="37.5" r="2.5" fill="#1a1008">
          <animate attributeName="cy" values="37.5;38;37.5" dur="4s" repeatCount="indefinite"/>
        </circle>
        <circle cx="34.5" cy="36.2" r="1" fill="white" opacity="0.8"/>
        <circle cx="48.5" cy="36.2" r="1" fill="white" opacity="0.8"/>
        <rect x="27" y="33" width="13" height="9" rx="3" fill="none" stroke="#1a1008" stroke-width="1.8"/>
        <rect x="40" y="33" width="13" height="9" rx="3" fill="none" stroke="#1a1008" stroke-width="1.8"/>
        <line x1="27" y1="37" x2="23" y2="37" stroke="#1a1008" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="53" y1="37" x2="57" y2="37" stroke="#1a1008" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M36 47 Q40 50 44 47" fill="none" stroke="#8b5e3c" stroke-width="1.2" stroke-linecap="round"/>
      </svg>
      <div class="piku-notif" id="pikuNotif"></div>
    </button>
  `;

  document.body.appendChild(pikuBubble);

  /* ── Chat panel open/close ── */
  const pikuPanel     = document.getElementById('pikuPanel');
  const pikuAvatarBtn = document.getElementById('pikuAvatarBtn');
  const pikuClose     = document.getElementById('pikuClose');
  const pikuNotif     = document.getElementById('pikuNotif');
  const pikuMessages  = document.getElementById('pikuMessages');
  const pikuInput     = document.getElementById('pikuInput');
  const pikuSend      = document.getElementById('pikuSend');

  let pikuOpen = false;

  function openPiku() {
    pikuOpen = true;
    pikuPanel.classList.add('open');
    pikuPanel.style.display = 'flex';
    /* Trigger animation on next frame */
    requestAnimationFrame(() => {
      pikuPanel.style.transform = 'scale(1) translateY(0)';
      pikuPanel.style.opacity   = '1';
    });
    pikuNotif.classList.remove('visible');
    setTimeout(() => pikuInput.focus(), 300);
  }

  function closePiku() {
    pikuOpen = false;
    pikuPanel.style.transform = 'scale(0.92) translateY(12px)';
    pikuPanel.style.opacity   = '0';
    setTimeout(() => {
      pikuPanel.classList.remove('open');
      pikuPanel.style.display = 'none';
    }, 220);
  }

  pikuAvatarBtn.addEventListener('click', () => pikuOpen ? closePiku() : openPiku());
  pikuClose.addEventListener('click', closePiku);

  /* Prevent chat input from triggering typing test */
  pikuInput.addEventListener('keydown', (e) => {
    e.stopPropagation();
    if (e.key === 'Enter') sendPikuMessage();
  });
  pikuSend.addEventListener('click', sendPikuMessage);

  /* ── Message helpers ── */
  function addMessage(text, role = 'piku') {
    const msg = document.createElement('div');
    msg.className = `piku-msg ${role === 'user' ? 'user' : ''}`;

    if (role !== 'user') {
      msg.innerHTML = `
        <div class="piku-msg-avatar">
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#2a3a6e"/>
            <ellipse cx="20" cy="19" rx="8" ry="9" fill="#c8956c"/>
            <path d="M12 17 Q12 9 20 9 Q28 9 20 9 Q28 9 28 17 Q27 11 20 11 Q13 11 12 17Z" fill="#1a1008"/>
            <ellipse cx="17" cy="18" rx="2.5" ry="2.2" fill="white"/>
            <ellipse cx="23" cy="18" rx="2.5" ry="2.2" fill="white"/>
            <circle cx="17.3" cy="18.3" r="1.1" fill="#1a1008"/>
            <circle cx="23.3" cy="18.3" r="1.1" fill="#1a1008"/>
            <rect x="13" y="16" width="7" height="5" rx="1.5" fill="none" stroke="#1a1008" stroke-width="1.1"/>
            <rect x="20" y="16" width="7" height="5" rx="1.5" fill="none" stroke="#1a1008" stroke-width="1.1"/>
          </svg>
        </div>
        <div class="piku-msg-bubble">${text}</div>
      `;
    } else {
      msg.innerHTML = `<div class="piku-msg-bubble">${text}</div>`;
    }

    pikuMessages.appendChild(msg);
    pikuMessages.scrollTop = pikuMessages.scrollHeight;
    return msg;
  }

  function showTypingIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'piku-msg';
    indicator.id = 'pikuTypingIndicator';
    indicator.innerHTML = `
      <div class="piku-msg-avatar">
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" fill="#2a3a6e"/>
          <ellipse cx="20" cy="19" rx="8" ry="9" fill="#c8956c"/>
          <rect x="13" y="16" width="7" height="5" rx="1.5" fill="none" stroke="#1a1008" stroke-width="1.1"/>
          <rect x="20" y="16" width="7" height="5" rx="1.5" fill="none" stroke="#1a1008" stroke-width="1.1"/>
        </svg>
      </div>
      <div class="piku-typing">
        <span></span><span></span><span></span>
      </div>
    `;
    pikuMessages.appendChild(indicator);
    pikuMessages.scrollTop = pikuMessages.scrollHeight;
  }

  function removeTypingIndicator() {
    const el = document.getElementById('pikuTypingIndicator');
    if (el) el.remove();
  }

  /* ── Send message + AI call ── */
  async function sendPikuMessage() {
    const text = pikuInput.value.trim();
    if (!text) return;

    pikuInput.value = '';
    addMessage(text, 'user');
    showTypingIndicator();

    /* Gather session context */
    const context = gatherSessionContext();

    /* Build system prompt */
    const systemPrompt = `You are Professor Piku, a 25-year-old cool, sharp typing coach embedded in the Piku Typing platform. You are helpful, direct, and encouraging — like a brilliant young professor who genuinely cares about improvement.

RULES:
- Keep replies to 2-4 sentences max unless asked for more
- Always reference the user's actual stats if available
- Never mention being an AI, Claude, GPT, Groq, or any model
- You are simply Professor Piku, their typing coach
- If WPM improved → celebrate with specifics
- If accuracy < 80% → tell them to slow down and focus on accuracy first
- If error keys detected → suggest a drill for those specific keys
- If WPM >= 100 → acknowledge elite status
- Redirect off-topic questions warmly back to typing improvement
- Be personable, use light humour, feel like a real coach

${context ? `CURRENT SESSION DATA:\n${context}` : 'No test completed yet — encourage the user to take a test.'}`;

    try {
      const reply = await callAI(text, systemPrompt);
      removeTypingIndicator();
      addMessage(reply, 'piku');
    } catch (err) {
      removeTypingIndicator();
      addMessage("Hmm, my connection hiccuped! Try again in a moment. 🔄", 'piku');
    }
  }

  /* ── AI fallback chain: Groq → Gemini → Puter.js ── */
  async function callAI(userMessage, systemPrompt) {

    const GROQ_KEY   = window.PIKU_GROQ_KEY   || '';
    const GEMINI_KEY = window.PIKU_GEMINI_KEY  || '';

    /* ── 1. Try Groq (fastest) ── */
    if (GROQ_KEY) {
      try {
        const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${GROQ_KEY}`
          },
          body: JSON.stringify({
            model: 'llama3-8b-8192',
            messages: [
              { role: 'system',    content: systemPrompt },
              { role: 'user',      content: userMessage  }
            ],
            max_tokens: 200,
            temperature: 0.75
          })
        });
        if (res.ok) {
          const data = await res.json();
          return data.choices[0].message.content.trim();
        }
      } catch {}
    }

    /* ── 2. Try Gemini ── */
    if (GEMINI_KEY) {
      try {
        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{
                parts: [{ text: `${systemPrompt}\n\nUser: ${userMessage}` }]
              }],
              generationConfig: { maxOutputTokens: 200, temperature: 0.75 }
            })
          }
        );
        if (res.ok) {
          const data = await res.json();
          return data.candidates[0].content.parts[0].text.trim();
        }
      } catch {}
    }

    /* ── 3. Fallback: Puter.js (no key needed, no forced login) ── */
    try {
      if (typeof puter !== 'undefined' && puter.ai) {
        const res = await puter.ai.chat(
          `${systemPrompt}\n\nUser: ${userMessage}`,
          { model: 'gpt-4o-mini' }
        );
        return (res?.message?.content || res?.text || '').trim();
      }
    } catch {}

    /* ── 4. Smart offline fallback ── */
    return getOfflineFallback(userMessage);
  }

  /* ── Offline fallback responses ── */
  function getOfflineFallback(message) {
    const msg = message.toLowerCase();
    if (msg.includes('wpm') || msg.includes('speed'))
      return "Speed comes from consistency! Practice the same text twice — first slow and accurate, then push your pace. 🎯";
    if (msg.includes('accur') || msg.includes('error') || msg.includes('mistake'))
      return "Slow down by 20% until you hit 95%+ accuracy. Speed without accuracy is just chaos! Then push back up. 💪";
    if (msg.includes('finger') || msg.includes('hand') || msg.includes('position'))
      return "Home row is everything — ASDF for left, JKL; for right. Every finger should return there between keystrokes. 🖐️";
    if (msg.includes('practice') || msg.includes('improve') || msg.includes('better'))
      return "20 minutes daily beats 2 hours once a week, every time. Consistency is the whole game. Start a lesson now! 📚";
    return "Take a test first and I'll give you coaching based on your actual results! The data tells me everything. ⌨️";
  }

  /* ── Gather typing session context from the page ── */
  function gatherSessionContext() {
    try {
      const stats = document.querySelectorAll('.result-stat-item');
      if (!stats.length) return null;

      const wpm      = stats[0]?.textContent?.trim() || '—';
      const acc      = stats[1]?.textContent?.trim() || '—';
      const errors   = stats[2]?.textContent?.trim() || '—';
      const errorKeys = [...document.querySelectorAll('.key-chip.error')]
                          .map(k => k.textContent.trim()).join(', ') || 'none';
      const mode     = document.querySelector('.mode-btn.active')?.dataset?.mode || '—';
      const diff     = document.querySelector('.diff-btn.active')?.dataset?.diff || '—';
      const history  = (() => {
        try { return JSON.parse(localStorage.getItem('pt_history') || '[]').slice(-5); }
        catch { return []; }
      })();

      return `WPM: ${wpm} | Accuracy: ${acc} | Errors: ${errors}
Error keys: ${errorKeys}
Mode: ${mode} | Difficulty: ${diff}
Last 5 sessions: ${JSON.stringify(history)}`;
    } catch {
      return null;
    }
  }

  /* ── Show notification dot when test completes & panel is closed ── */
  const resultObserver = new MutationObserver(() => {
    if (!pikuOpen) {
      pikuNotif.classList.add('visible');
    }
    /* Update welcome message with test context */
    const context = gatherSessionContext();
    if (context) {
      const welcomeMsg = document.getElementById('pikuWelcomeMsg');
      if (welcomeMsg) {
        welcomeMsg.innerHTML = `Nice work! Open me up and I'll break down your performance. 📊`;
      }
    }
  });

  const resultDetails = document.getElementById('resultDetails');
  if (resultDetails) {
    resultObserver.observe(resultDetails, { childList: true, subtree: true });
  }

})();