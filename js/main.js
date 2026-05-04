// Scroll fade-in
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.1 }
);
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Active nav
const page = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href') === page) a.classList.add('active');
});

// Mobile nav
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const open = navLinks.style.display === 'flex';
    Object.assign(navLinks.style, {
      display:         open ? '' : 'flex',
      flexDirection:   'column',
      position:        'absolute',
      top:             '64px',
      left:            '0',
      right:           '0',
      background:      'rgba(11,21,38,.98)',
      padding:         '16px 24px',
      gap:             '16px',
      zIndex:          '99',
    });
    if (open) navLinks.style.display = '';
  });
}

// Hero search → resources page
const heroSearch = document.querySelector('.hero-search');
if (heroSearch) {
  heroSearch.addEventListener('submit', e => {
    e.preventDefault();
    const q = heroSearch.querySelector('input').value.trim();
    if (q) window.location.href = `resources.html?q=${encodeURIComponent(q)}`;
  });
  heroSearch.querySelector('button')?.addEventListener('click', () => heroSearch.dispatchEvent(new Event('submit')));
}

// Resource filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    document.querySelectorAll('.resource-card[data-cat]').forEach(card => {
      card.closest('.resource-wrap').style.display =
        (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
    });
  });
});

// Email signup demo
document.querySelectorAll('.waitlist-form, .newsletter-form, .ea-signup-form, #eaForm').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"], button');
    const orig = btn.textContent;
    btn.textContent = '✓ You\'re on the list!';
    btn.style.background = '#16a34a';
    btn.disabled = true;
    form.querySelector('input[type="email"]').value = '';
    setTimeout(() => { btn.textContent = orig; btn.style.background = ''; btn.disabled = false; }, 4000);
  });
});

// Guide sidebar active section tracking
const guideLinks = document.querySelectorAll('.guide-sidebar-nav a');
if (guideLinks.length) {
  const sections = Array.from(document.querySelectorAll('.guide-content h2[id]'));
  window.addEventListener('scroll', () => {
    let current = sections[0]?.id;
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
    guideLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }, { passive: true });
}
