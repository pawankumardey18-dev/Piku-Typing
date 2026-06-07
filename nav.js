/* ==========================================
   nav.js — Piku Typing
   Injects on every page:
   1. Top header with hamburger button
   2. Animated sidebar navigation
   3. Theme switcher with 4 themes
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
      { key: 'midnight', label: '🌙', title: 'Midnight Blue' },
      { key: 'soft',     label: '☀️', title: 'Soft Light' },
      { key: 'forest',   label: '🌿', title: 'Forest' },
      { key: 'slate',    label: '🩶', title: 'Slate' },
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

})();