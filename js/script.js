/* ==========================================================================
   Stephen Sim — Portfolio scripts (vanilla JS, no dependencies required)
   Each block is independent: the site still works if one is removed.
   ========================================================================== */

// 1) Scroll animations — initialize AOS only if its CDN loaded (graceful fallback)
if (window.AOS) {
  AOS.init({
    duration: 600,      // subtle, fast animations
    once: true,         // animate only the first time an element scrolls in
    offset: 60,
    disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
  });
}

// 2) Navbar: add a blurred background once the user scrolls down
const nav = document.getElementById('siteNav');
function updateNav() {
  if (window.scrollY > 24) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav(); // run once on load (page may load mid-scroll)

// 3) Highlight the nav link that matches the current page
const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.site-nav .nav-link').forEach(function (link) {
  if (link.getAttribute('href') === current) link.classList.add('active');
});

// 4) Footer: keep the copyright year current
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// 5) Career timeline (index.html): click a node to expand its detail
document.querySelectorAll('.timeline-item').forEach(function (item) {
  item.addEventListener('click', function () {
    item.classList.toggle('open');
  });
});
