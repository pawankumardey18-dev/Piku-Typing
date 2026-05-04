/* ==========================================
   PIKU TYPING — nav.js
   Shared navbar injected into every page
   ========================================== */

const NAV_LINKS = [
  { href: 'Index.html',   label: '⌨️ Test',    id: 'nav-test'    },
  { href: 'lessons.html', label: '📚 Lessons',  id: 'nav-lessons' },
  { href: 'game.html',    label: '🎮 Game',     id: 'nav-game'    },
  { href: 'custom.html',  label: '✏️ Custom',   id: 'nav-custom'  },
];

function injectNav() {
  const header = document.querySelector('.main-header');
  if (!header) return;

  /* ── Brand (keep existing logo) ── */
  const brand = header.querySelector('.brand');

  /* ── Nav links ── */
  const nav = document.createElement('nav');
  nav.className = 'main-nav';

  const currentPage = location.pathname.split('/').pop() || 'Index.html';

  NAV_LINKS.forEach(link => {
    const a = document.createElement('a');
    a.href      = link.href;
    a.className = 'nav-link' +
      (currentPage.toLowerCase() === link.href.toLowerCase() ? ' active' : '');
    a.id        = link.id;
    a.textContent = link.label;
    nav.appendChild(a);
  });

  /* ── Header actions slot ── */
  const actions = header.querySelector('.header-actions') ||
    document.getElementById('headerActions');

  /* Insert nav between brand and actions */
  header.innerHTML = '';
  header.appendChild(brand);
  header.appendChild(nav);
  if (actions) header.appendChild(actions);
  else {
    const slot = document.createElement('div');
    slot.className = 'header-actions';
    slot.id = 'headerActions';
    header.appendChild(slot);
  }
}

/* ── Dark mode sync across pages ── */
function syncDarkMode() {
  const isDark = localStorage.getItem('pt_dark') === 'true';
  document.body.classList.toggle('dark', isDark);
}

/* Run immediately */
syncDarkMode();
document.addEventListener('DOMContentLoaded', injectNav);