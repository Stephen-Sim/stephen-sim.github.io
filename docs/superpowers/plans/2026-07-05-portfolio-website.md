# Stephen Sim Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premium, dark-mode, 6-page static portfolio website for Stephen Sim, deployable to GitHub Pages with zero build process.

**Architecture:** Plain HTML5 pages sharing a duplicated navbar/footer, one custom design-system stylesheet (`css/style.css`), one vanilla JS file (`js/script.js`). Bootstrap 5.3 (CDN) used ONLY for grid, navbar collapse, and spacing utilities — all visible styling is custom (Linear/Vercel aesthetic).

**Tech Stack:** HTML5, CSS3, vanilla JS, Bootstrap 5.3.3 (CDN), Font Awesome 6.5.2 (CDN), AOS 2.3.1 (CDN), Google Fonts (Inter, Space Grotesk, JetBrains Mono).

**Spec:** `docs/superpowers/specs/2026-07-05-portfolio-website-design.md`

## Global Constraints

- NO React, Next.js, TypeScript, Node.js, npm, backend, database, or build step. Files open directly via `file://` and deploy as-is to GitHub Pages.
- All asset/link paths RELATIVE (`css/style.css`, never `/css/style.css`).
- All external links: `target="_blank" rel="noopener"`.
- Every page: unique `<title>` + meta description, OG + Twitter tags, canonical URL base `https://stephen-sim.github.io/ssim-profile/`.
- All animation honors `prefers-reduced-motion`.
- Content facts come from the resume (in spec) — do not invent new metrics.
- Code is heavily commented for a beginner to modify by hand.
- **Testing adaptation:** no unit-test framework exists for static HTML. Each task's "test" = open the page in a browser and verify the listed checks, plus link/file existence checks. Follow the same rigor: verify BEFORE commit.

## Shared Templates (referenced by every page task)

### HEAD template

Each page's `<head>` (replace `{{TITLE}}`, `{{DESC}}`, `{{PAGE}}` from the table below):

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{TITLE}}</title>
  <meta name="description" content="{{DESC}}">
  <meta name="author" content="Stephen Sim Shan Siong">
  <link rel="canonical" href="https://stephen-sim.github.io/ssim-profile/{{PAGE}}">
  <!-- Open Graph / social sharing -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="{{TITLE}}">
  <meta property="og:description" content="{{DESC}}">
  <meta property="og:url" content="https://stephen-sim.github.io/ssim-profile/{{PAGE}}">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="{{TITLE}}">
  <meta name="twitter:description" content="{{DESC}}">
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="favicon.svg">
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;600&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
  <!-- Bootstrap 5 (grid + navbar collapse only) -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Font Awesome icons -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" rel="stylesheet">
  <!-- AOS scroll animations -->
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
  <!-- Custom design system -->
  <link href="css/style.css" rel="stylesheet">
</head>
```

| Page | {{PAGE}} | {{TITLE}} | {{DESC}} |
|---|---|---|---|
| index.html | (empty string) | Stephen Sim — Backend Engineer | Backend engineer at Ant International building payment infrastructure. Malaysia WorldSkills Lyon 2024 competitor. Java, Spring Boot, distributed systems. |
| about.html | about.html | About & Experience — Stephen Sim | Stephen Sim's engineering story and Ant International case studies: payment sandbox optimization, real-time refunds, payment account SaaS APIs. |
| projects.html | projects.html | Projects — Stephen Sim | Deep dives into DirectPay (FPX payment gateway) and PRiM (donation management for 200+ organizations). |
| worldskills.html | worldskills.html | WorldSkills Journey — Stephen Sim | Representing Malaysia at WorldSkills: Bronze at ASEAN Singapore 2023 and Asia Abu Dhabi 2023, Medallion for Excellence at Lyon 2024. |
| blog.html | blog.html | Technical Articles — Stephen Sim | Writing on payment gateway design, RabbitMQ, Redis, Java, Spring Boot, distributed systems, microservices, and AI. |
| contact.html | contact.html | Contact — Stephen Sim | Get in touch with Stephen Sim — email, GitHub, LinkedIn, resume. |

### NAVBAR template (immediately after `<body>` on every page)

```html
<!-- ============ NAVBAR (shared across all pages — edit in every file) ============ -->
<nav class="navbar navbar-expand-lg fixed-top site-nav" id="siteNav">
  <div class="container">
    <a class="navbar-brand brand" href="index.html">stephen<span class="brand-accent">.sim</span></a>
    <button class="navbar-toggler nav-toggle" type="button" data-bs-toggle="collapse"
            data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fa-solid fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navMenu">
      <ul class="navbar-nav ms-auto align-items-lg-center">
        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
        <li class="nav-item"><a class="nav-link" href="projects.html">Projects</a></li>
        <li class="nav-item"><a class="nav-link" href="worldskills.html">WorldSkills</a></li>
        <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
        <li class="nav-item ms-lg-3 mt-2 mt-lg-0">
          <a class="btn-accent btn-sm-nav" href="assets/resume.pdf" download>
            <i class="fa-solid fa-download me-2"></i>Resume
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

Active page highlighting is done by `js/script.js` (matches `location.pathname`), not hardcoded.

### FOOTER template (before closing `</body>`, followed by the three script tags)

```html
<!-- ============ FOOTER (shared across all pages — edit in every file) ============ -->
<footer class="site-footer">
  <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
    <p class="footer-copy mb-0">© <span id="year">2026</span> Stephen Sim. Built with plain HTML, CSS &amp; JavaScript.</p>
    <div class="footer-links">
      <a href="https://github.com/Stephen-Sim" target="_blank" rel="noopener" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
      <a href="https://www.linkedin.com/in/stephen-sim-343775212" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
    </div>
  </div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script src="js/script.js"></script>
</body>
</html>
```

### Section pattern (used on every page)

```html
<section class="section" id="section-id">
  <div class="container">
    <p class="section-eyebrow" data-aos="fade-up">Eyebrow label</p>
    <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Section Title</h2>
    <p class="section-lead" data-aos="fade-up" data-aos-delay="200">One-sentence lead.</p>
    <!-- section content -->
  </div>
</section>
```

---

### Task 1: Project scaffold and assets

**Files:**
- Create: `.gitignore`, `favicon.svg`, `assets/profile-placeholder.svg`, `images/placeholder-wide.svg`, `robots.txt`
- Copy: `assets/resume.pdf` (from user's OneDrive resume)

**Interfaces:**
- Produces: `favicon.svg`, `assets/resume.pdf`, `assets/profile-placeholder.svg` (hero photo), `images/placeholder-wide.svg` (reused by WorldSkills photos, architecture diagrams, screenshots). All later tasks reference these exact paths.

- [ ] **Step 1: Create folders and .gitignore**

```powershell
New-Item -ItemType Directory -Force css, js, assets, images
```

`.gitignore`:
```
Thumbs.db
.DS_Store
```

- [ ] **Step 2: Create favicon.svg** — gradient "S" monogram matching the accent palette:

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#6366f1"/>
      <stop offset="1" stop-color="#a78bfa"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="14" fill="#0a0a0f"/>
  <text x="32" y="44" font-family="Arial, sans-serif" font-size="36" font-weight="bold"
        text-anchor="middle" fill="url(#g)">S</text>
</svg>
```

- [ ] **Step 3: Create assets/profile-placeholder.svg** (square avatar placeholder; user replaces with `assets/profile.jpg` later):

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
  <rect width="400" height="400" rx="24" fill="#12121a"/>
  <circle cx="200" cy="150" r="60" fill="#232334"/>
  <path d="M 90 340 Q 90 240 200 240 Q 310 240 310 340 Z" fill="#232334"/>
  <text x="200" y="380" font-family="Arial" font-size="16" fill="#4b5563" text-anchor="middle">Replace with assets/profile.jpg</text>
</svg>
```

- [ ] **Step 4: Create images/placeholder-wide.svg** (16:9 placeholder for photos/diagrams/screenshots):

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450">
  <rect width="800" height="450" rx="16" fill="#12121a"/>
  <rect x="1" y="1" width="798" height="448" rx="16" fill="none" stroke="#232334" stroke-width="2" stroke-dasharray="8 8"/>
  <text x="400" y="220" font-family="Arial" font-size="22" fill="#4b5563" text-anchor="middle">Image placeholder</text>
  <text x="400" y="250" font-family="Arial" font-size="14" fill="#374151" text-anchor="middle">Drop your image into /images and update the src</text>
</svg>
```

- [ ] **Step 5: Copy resume PDF**

```powershell
Copy-Item "C:\Users\simsh\OneDrive - Universiti Teknikal Malaysia Melaka\ssim-resume-0521.pdf" "assets\resume.pdf"
```

- [ ] **Step 6: Create robots.txt**

```
User-agent: *
Allow: /
Sitemap: https://stephen-sim.github.io/ssim-profile/sitemap.xml
```

- [ ] **Step 7: Verify** — `Get-ChildItem -Recurse` shows all files; `assets/resume.pdf` is ~176 KB; open `favicon.svg` in browser and see gradient "S".

- [ ] **Step 8: Commit** — `git add -A; git commit -m "feat: scaffold project structure and assets"`

---

### Task 2: Design system CSS + shared JS + page shell

**Files:**
- Create: `css/style.css`, `js/script.js`, `index.html` (shell only: head + navbar + empty `<main>` + footer; hero content comes in Task 3)

**Interfaces:**
- Produces: every CSS class used by later tasks: `.site-nav`, `.site-nav.scrolled`, `.brand`, `.brand-accent`, `.btn-accent`, `.btn-ghost`, `.btn-sm-nav`, `.section`, `.section-eyebrow`, `.section-title`, `.section-lead`, `.glass-card`, `.gradient-text`, `.tag`, `.site-footer`, `.footer-links`, `.footer-copy`, `.nav-toggle`. Produces JS behaviors: AOS init (guarded), navbar scroll class, active nav link, footer year.

- [ ] **Step 1: Write css/style.css** — complete foundation (comment each block; this is the whole file at this stage):

```css
/* ==========================================================================
   Stephen Sim — Portfolio design system
   Edit the variables below to retheme the entire site.
   ========================================================================== */
:root {
  /* Colors */
  --bg: #0a0a0f;                    /* page background (near-black) */
  --surface: #12121a;               /* raised cards/panels */
  --surface-2: #181824;             /* hover state surfaces */
  --border: rgba(255, 255, 255, 0.08);
  --border-hover: rgba(167, 139, 250, 0.45);
  --text: #9ca3af;                  /* body text */
  --text-bright: #f9fafb;           /* headings */
  --text-dim: #6b7280;              /* meta text, dates */
  --accent: #6366f1;                /* indigo */
  --accent-2: #a78bfa;              /* violet */
  --gradient: linear-gradient(135deg, var(--accent), var(--accent-2));
  /* Type */
  --font-body: 'Inter', system-ui, sans-serif;
  --font-display: 'Space Grotesk', var(--font-body);
  --font-mono: 'JetBrains Mono', monospace;
  /* Shape & motion */
  --radius: 14px;
  --transition: 0.25s ease;
}

/* ---------- Base ---------- */
html { scroll-behavior: smooth; }
body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}
h1, h2, h3, h4 { font-family: var(--font-display); color: var(--text-bright); }
a { color: var(--accent-2); text-decoration: none; transition: color var(--transition); }
a:hover { color: var(--text-bright); }
::selection { background: rgba(99, 102, 241, 0.35); color: var(--text-bright); }

/* Respect users who prefer reduced motion: disable smooth scroll + transitions */
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { transition: none !important; animation: none !important; }
}

/* ---------- Reusable helpers ---------- */
.gradient-text {
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.mono { font-family: var(--font-mono); }

/* Small pill label for tech tags */
.tag {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--accent-2);
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.25);
  border-radius: 999px;
  padding: 0.15rem 0.65rem;
  margin: 0 0.35rem 0.35rem 0;
}

/* ---------- Buttons ---------- */
.btn-accent {
  display: inline-block;
  background: var(--gradient);
  color: #fff;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 0.7rem 1.5rem;
  border-radius: 10px;
  border: none;
  transition: transform var(--transition), box-shadow var(--transition);
}
.btn-accent:hover {
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(99, 102, 241, 0.35);
}
.btn-ghost {
  display: inline-block;
  color: var(--text-bright);
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.7rem 1.5rem;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: transparent;
  transition: border-color var(--transition), background var(--transition), transform var(--transition);
}
.btn-ghost:hover {
  color: var(--text-bright);
  border-color: var(--border-hover);
  background: var(--surface);
  transform: translateY(-2px);
}
.btn-sm-nav { /* compact resume button inside the navbar */
  display: inline-block;
  background: var(--gradient);
  color: #fff;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 0.45rem 1rem;
  border-radius: 8px;
}
.btn-sm-nav:hover { color: #fff; box-shadow: 0 4px 18px rgba(99, 102, 241, 0.4); }

/* ---------- Navbar ---------- */
.site-nav {
  padding: 1rem 0;
  background: transparent;
  transition: background var(--transition), border-color var(--transition), padding var(--transition);
  border-bottom: 1px solid transparent;
}
/* .scrolled is added by js/script.js once the page scrolls down */
.site-nav.scrolled {
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom-color: var(--border);
  padding: 0.6rem 0;
}
.brand {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--text-bright);
}
.brand:hover { color: var(--text-bright); }
.brand-accent { color: var(--accent-2); }
.site-nav .nav-link {
  color: var(--text);
  font-size: 0.92rem;
  font-weight: 500;
  margin: 0 0.35rem;
  transition: color var(--transition);
}
.site-nav .nav-link:hover { color: var(--text-bright); }
.site-nav .nav-link.active { color: var(--text-bright); }
.nav-toggle { border: 1px solid var(--border); color: var(--text-bright); font-size: 1rem; }
.nav-toggle:focus { box-shadow: none; }
/* Mobile dropdown panel */
@media (max-width: 991px) {
  .navbar-collapse {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1rem;
    margin-top: 0.75rem;
  }
}

/* ---------- Sections ---------- */
.section { padding: 6rem 0; }
.section-eyebrow {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent-2);
  margin-bottom: 0.75rem;
}
.section-title { font-size: clamp(1.7rem, 3.5vw, 2.4rem); font-weight: 700; margin-bottom: 1rem; }
.section-lead { max-width: 640px; font-size: 1.05rem; margin-bottom: 2.5rem; }

/* ---------- Cards ---------- */
.glass-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.75rem;
  height: 100%;
  transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
}
.glass-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(99, 102, 241, 0.12);
}

/* ---------- Footer ---------- */
.site-footer {
  border-top: 1px solid var(--border);
  padding: 2.5rem 0;
  margin-top: 4rem;
}
.footer-copy { font-size: 0.88rem; color: var(--text-dim); }
.footer-links a {
  color: var(--text-dim);
  font-size: 1.15rem;
  margin-left: 1.25rem;
  transition: color var(--transition);
}
.footer-links a:hover { color: var(--text-bright); }
```

- [ ] **Step 2: Write js/script.js** — complete file:

```js
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
```

- [ ] **Step 3: Write index.html shell** — HEAD template (index row) + NAVBAR + `<main id="main"></main>` + FOOTER + scripts. Add `<html lang="en">` and `<!DOCTYPE html>`.

- [ ] **Step 4: Verify in browser** — open `index.html`: near-black background; sticky transparent navbar gains blur+border after scrolling (temporarily add `<div style="height:200vh"></div>` in main to test, then REMOVE it); mobile width (~375px): hamburger opens the surface-colored panel; footer year shows 2026; "Home" link is highlighted; Resume button downloads the PDF.

- [ ] **Step 5: Commit** — `git add -A; git commit -m "feat: add design system, shared JS, and page shell"`

---

### Task 3: Home page (index.html)

**Files:**
- Modify: `index.html` (fill `<main>`)
- Modify: `css/style.css` (append hero, timeline, skills styles)

**Interfaces:**
- Consumes: all Task 2 classes; `assets/profile-placeholder.svg`.
- Produces: nothing later tasks depend on (page-local styles: `.hero`, `.hero-glow`, `.hero-photo`, `.timeline`, `.timeline-item`, `.timeline-dot`, `.timeline-date`, `.timeline-detail`, `.skill-card`, `.cta-strip`).

- [ ] **Step 1: Append page CSS to style.css**

```css
/* ---------- Hero (index.html) ---------- */
.hero { position: relative; padding: 10rem 0 6rem; overflow: hidden; }
.hero-glow { /* soft indigo radial glow behind the hero content */
  position: absolute;
  top: -20%; left: 50%;
  transform: translateX(-50%);
  width: 900px; height: 600px;
  background: radial-gradient(ellipse at center, rgba(99, 102, 241, 0.18), transparent 65%);
  pointer-events: none;
}
.hero-eyebrow { font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-2); letter-spacing: 0.1em; }
.hero h1 { font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 700; margin: 0.5rem 0 1rem; }
.hero-tagline { font-size: 1.15rem; max-width: 560px; }
.hero-photo {
  width: 100%; max-width: 320px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
}

/* ---------- Career timeline (index.html) ---------- */
.timeline { position: relative; max-width: 720px; margin: 0 auto; padding-left: 2rem; }
.timeline::before { /* the vertical connecting line */
  content: '';
  position: absolute;
  left: 7px; top: 6px; bottom: 6px;
  width: 2px;
  background: linear-gradient(to bottom, var(--accent), var(--accent-2));
  opacity: 0.35;
}
.timeline-item { position: relative; padding: 0 0 2.25rem 1.5rem; cursor: pointer; }
.timeline-dot {
  position: absolute;
  left: -2rem; top: 6px;
  width: 16px; height: 16px;
  border-radius: 50%;
  background: var(--bg);
  border: 2px solid var(--accent);
  transition: background var(--transition), box-shadow var(--transition);
}
.timeline-item:hover .timeline-dot,
.timeline-item.open .timeline-dot {
  background: var(--accent);
  box-shadow: 0 0 16px rgba(99, 102, 241, 0.6);
}
.timeline-date { font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-dim); }
.timeline-item h3 { font-size: 1.1rem; margin: 0.15rem 0; transition: color var(--transition); }
.timeline-item:hover h3 { color: var(--accent-2); }
.timeline-detail { /* hidden one-liner, revealed on hover or tap */
  max-height: 0;
  overflow: hidden;
  font-size: 0.92rem;
  transition: max-height 0.35s ease, opacity 0.35s ease;
  opacity: 0;
}
.timeline-item:hover .timeline-detail,
.timeline-item.open .timeline-detail { max-height: 90px; opacity: 1; }

/* ---------- Skills grid (index.html) ---------- */
.skill-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.25rem 1rem;
  text-align: center;
  height: 100%;
  transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
}
.skill-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.15);
}
.skill-card i { font-size: 1.6rem; color: var(--accent-2); margin-bottom: 0.6rem; display: block; }
.skill-card span { color: var(--text-bright); font-size: 0.9rem; font-weight: 500; }

/* ---------- Contact CTA strip (index.html) ---------- */
.cta-strip {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 3rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.cta-strip::before { /* thin gradient line along the top edge */
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: var(--gradient);
}
```

- [ ] **Step 2: Fill `<main>` with five sections.**

**Hero** (photo right on desktop, stacked on mobile):

```html
<header class="hero">
  <div class="hero-glow"></div>
  <div class="container">
    <div class="row align-items-center g-5">
      <div class="col-lg-7" data-aos="fade-up">
        <p class="hero-eyebrow">Backend Engineer · Kuala Lumpur, Malaysia</p>
        <h1>Stephen <span class="gradient-text">Sim</span></h1>
        <p class="hero-tagline">
          I build payment infrastructure at <strong class="text-light">Ant International</strong> —
          distributed backend systems that move money reliably across Southeast Asia.
          Represented Malaysia at <strong class="text-light">WorldSkills Lyon 2024</strong>.
        </p>
        <div class="d-flex flex-wrap gap-3 mt-4">
          <a class="btn-accent" href="assets/resume.pdf" download><i class="fa-solid fa-download me-2"></i>Download Resume</a>
          <a class="btn-ghost" href="https://github.com/Stephen-Sim" target="_blank" rel="noopener"><i class="fa-brands fa-github me-2"></i>GitHub</a>
          <a class="btn-ghost" href="https://www.linkedin.com/in/stephen-sim-343775212" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin-in me-2"></i>LinkedIn</a>
        </div>
      </div>
      <div class="col-lg-5 text-center" data-aos="fade-up" data-aos-delay="150">
        <!-- Replace with your real photo: save it as assets/profile.jpg and update src -->
        <img class="hero-photo" src="assets/profile-placeholder.svg" alt="Stephen Sim">
      </div>
    </div>
  </div>
</header>
```

**About teaser** (section pattern, id `about-teaser`, eyebrow "About", title "Engineering, end to end"). Body copy:

> From building donation platforms for 200+ Malaysian organizations as a student, to competing for Malaysia on the WorldSkills world stage, to optimizing payment systems used by millions of e-commerce customers — I care about one thing: software that works, reliably, at scale.

Followed by `<a class="btn-ghost" href="about.html">Read my story <i class="fa-solid fa-arrow-right ms-2"></i></a>`.

**Career timeline** (section id `timeline`, eyebrow "Career", title "The journey so far", lead "Hover or tap each milestone."). One `.timeline-item` per row of this table (structure below), each with `data-aos="fade-up"`:

| # | Date (mono) | Title | Detail one-liner |
|---|---|---|---|
| 1 | 2021 — 2023 | PRiM — People Relationship Information Management | Built donation management and school-fee payment systems serving 200+ organizations. |
| 2 | 2023 — 2025 | Universiti Teknikal Malaysia Melaka (UTeM) | B.CS (Software Development), CGPA 3.93/4.00 — Vice Chancellor's Award recipient. |
| 3 | 2023 — 2024 | DirectPay Payment Gateway | Developed a 0-to-1 FPX-integrated payment middleware platform. |
| 4 | 2023 | WorldSkills ASEAN, Singapore | Bronze Medal — IT Software Solutions for Business. |
| 5 | 2023 | WorldSkills Asia, Abu Dhabi | Bronze Medal — representing Malaysia against the region's best. |
| 6 | 2024 | WorldSkills, Lyon | Medallion for Excellence at the 47th WorldSkills competition. |
| 7 | 2025 — Now | Ant International | Java Backend Engineer on Payment Account SaaS — sandbox, refunds, merchant APIs. |

```html
<div class="timeline-item" data-aos="fade-up">
  <span class="timeline-dot"></span>
  <p class="timeline-date">2021 — 2023</p>
  <h3>PRiM — People Relationship Information Management</h3>
  <p class="timeline-detail">Built donation management and school-fee payment systems serving 200+ organizations.</p>
</div>
```

(Note: timeline is ordered by when each chapter *started* — PRiM predates university per the resume.)

**Skills grid** (section id `skills`, eyebrow "Toolbox", title "Skills & technologies"). Bootstrap grid `row g-3`, each card in `col-6 col-md-4 col-lg-3`, with `data-aos="fade-up"` and `data-aos-delay` staggered 0/50/100/150 repeating. One card per row:

| Skill | Font Awesome icon class |
|---|---|
| Java | `fa-brands fa-java` |
| Spring Boot | `fa-solid fa-leaf` |
| Redis | `fa-solid fa-bolt` |
| RabbitMQ | `fa-solid fa-envelopes-bulk` |
| MySQL | `fa-solid fa-database` |
| Docker | `fa-brands fa-docker` |
| Git | `fa-brands fa-git-alt` |
| GitHub | `fa-brands fa-github` |
| C# | `fa-solid fa-code` |
| .NET | `fa-brands fa-microsoft` |
| Laravel | `fa-brands fa-laravel` |
| Prometheus | `fa-solid fa-fire` |
| OpenTelemetry | `fa-solid fa-wave-square` |
| Alibaba Cloud | `fa-solid fa-cloud` |

```html
<div class="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="50">
  <div class="skill-card"><i class="fa-brands fa-java"></i><span>Java</span></div>
</div>
```

**Contact CTA** (section id `cta`):

```html
<section class="section pt-0">
  <div class="container">
    <div class="cta-strip" data-aos="fade-up">
      <h2 class="section-title mb-2">Let's build something reliable.</h2>
      <p class="mb-4">Open to interesting conversations about payments, distributed systems, and backend engineering.</p>
      <a class="btn-accent" href="contact.html">Get in touch <i class="fa-solid fa-arrow-right ms-2"></i></a>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Verify in browser** — hero glow visible; all 3 hero buttons work (resume downloads, GitHub/LinkedIn open in new tabs); timeline reveals details on hover AND on click/tap (mobile width); 14 skill cards, hover lift works; AOS fade-ups fire on scroll; no horizontal scrollbar at 375px.

- [ ] **Step 4: Commit** — `git add -A; git commit -m "feat: build home page with hero, timeline, and skills"`

---

### Task 4: About & Experience page (about.html)

**Files:**
- Create: `about.html`
- Modify: `css/style.css` (append case-study styles)

**Interfaces:**
- Consumes: Task 2 templates/classes, `images/placeholder-wide.svg`.
- Produces: `.case-study`, `.case-label`, `.metric-highlight` styles (also used by projects.html Task 6 via `.case-label`).

- [ ] **Step 1: Append page CSS**

```css
/* ---------- Case studies (about.html) & project deep-dives (projects.html) ---------- */
.case-study {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 2.25rem;
  margin-bottom: 2rem;
  transition: border-color var(--transition);
}
.case-study:hover { border-color: var(--border-hover); }
.case-label { /* "Problem", "Solution", ... subsection labels */
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent-2);
  margin: 1.5rem 0 0.4rem;
}
.case-study h3 { font-size: 1.35rem; }
.metric-highlight { /* big mono metric, e.g. "~80% → ~100%" */
  font-family: var(--font-mono);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-bright);
}
```

- [ ] **Step 2: Write about.html** — head (about row) + navbar + main + footer. Main content:

**Story section** (id `story`, eyebrow "About", title "Software that works when it matters"). Three paragraphs, `data-aos="fade-up"` each:

> My path into backend engineering started before university. In 2021 I began building PRiM, a donation and school-fee management platform that grew to serve more than 200 Malaysian organizations — schools, NGOs, and religious institutions. Real users, real money, real consequences when something broke. That experience shaped how I think about software: reliability isn't a feature, it's the foundation.
>
> That mindset took me to the WorldSkills stage, representing Malaysia in IT Software Solutions for Business — Bronze medals at ASEAN Singapore 2023 and Asia Abu Dhabi 2023, and a Medallion for Excellence at WorldSkills Lyon 2024. Competing taught me to deliver complete, working systems under pressure: requirements to deployment, on the clock, no excuses.
>
> Today I'm a Java Backend Engineer at Ant International, working on payment infrastructure that serves e-commerce merchants across Southeast Asia. I spend my days in the world of distributed systems — microservices, message queues, caches, and the careful engineering that makes money movement boring in the best possible way. I'm still learning something new every week, and I wouldn't have it any other way.

**Experience section** (id `experience`, eyebrow "Experience", title "Ant International — case studies", lead "Java Backend Engineer · Mar 2025 – Present. Selected work, told the way engineers actually think: problem, solution, impact."). Four `.case-study` blocks, each `data-aos="fade-up"`. Full markup pattern (first case study shown; repeat structure for all four with the copy below):

```html
<article class="case-study" data-aos="fade-up">
  <h3>Payment Sandbox Optimization</h3>
  <div class="mt-2">
    <span class="tag">Java</span><span class="tag">Spring Boot</span><span class="tag">Redis</span>
    <span class="tag">MySQL</span><span class="tag">RabbitMQ</span>
  </div>
  <p class="case-label">Problem</p>
  <p>The payment sandbox that merchants and internal teams rely on for integration testing had a transaction success rate of only ~80%. Flaky simulated payments meant slow merchant onboarding and unreliable automated test suites.</p>
  <p class="case-label">Solution</p>
  <p>Optimized the sandbox services end to end — improving performance, scalability, and developer testing efficiency so that simulated transactions behave as dependably as production ones.</p>
  <p class="case-label">Architecture</p>
  <p>Spring Boot microservices with Redis for hot-path state, RabbitMQ for asynchronous processing, and MySQL for persistence.</p>
  <img class="img-fluid rounded mt-2 mb-2" src="images/placeholder-wide.svg" alt="Payment sandbox architecture diagram placeholder">
  <p class="case-label">Impact &amp; Metrics</p>
  <p class="metric-highlight">~80% &rarr; ~100%</p>
  <p>Transaction success rate raised from roughly 80% to near 100%, making merchant integration testing dramatically faster and more predictable.</p>
</article>
```

Copy for the remaining three case studies (same structure — Problem / Solution / Architecture / Impact & Metrics, tags as listed):

**2. Real-Time Refund Withdrawals — Lazada PH Wallet** (tags: Java, Spring Boot, Payment APIs, RabbitMQ)
- Problem: Refund coupon withdrawals to user bank accounts settled on a T+1 cycle — customers waited a full day for their money after a refund.
- Solution: Enabled a real-time withdrawal flow from the Lazada PH wallet to user bank accounts, removing the batch settlement wait.
- Architecture: Event-driven flow on the Payment Account SaaS platform — withdrawal requests processed through asynchronous messaging with idempotent handling, so a payout is never lost or duplicated.
- Impact metric: `T+1 → real-time`. Customers receive refund money in their bank accounts immediately instead of the next day.

**3. Payment Account SaaS APIs** (tags: Java, Spring Boot, MySQL, Redis)
- Problem: Regional e-commerce platforms — including Lazada and Daraz — depend on the Payment Account SaaS microservice APIs; they must evolve continuously without breaking merchant integrations.
- Solution: Maintain and enhance these APIs — new capabilities, performance improvements, and careful backward compatibility for every change.
- Architecture: Multi-tenant SaaS microservices serving merchants across Southeast Asia, built on the Java/Spring Boot stack with MySQL and Redis.
- Impact: Stable payment account operations for major regional e-commerce platforms; no metric highlight — use text only.

**4. AI Translation Extension — Backend** (tags: Java, Spring Boot, AI)
- Problem: A global workforce means colleagues work across many languages every day; internal tools and documents weren't equally accessible to everyone.
- Solution: Designed and developed the backend architecture for an AI-powered browser translation extension used internally.
- Architecture: Backend services that broker between the browser extension and AI translation models, handling authentication, request routing, and response streaming.
- Impact metric: `1,000+ employees`. Adopted by over a thousand employees, improving multilingual accessibility and day-to-day productivity.

- [ ] **Step 3: Verify in browser** — nav highlights "About"; story reads well; 4 case studies with correct labels and metrics (`~80% → ~100%`, `T+1 → real-time`, `1,000+ employees`); diagram placeholder images render; mobile 375px: no overflow.

- [ ] **Step 4: Commit** — `git add -A; git commit -m "feat: add about & experience page with case studies"`

---

### Task 5: WorldSkills page (worldskills.html)

**Files:**
- Create: `worldskills.html`
- Modify: `css/style.css` (append medal styles)

**Interfaces:**
- Consumes: Task 2 templates/classes, `images/placeholder-wide.svg`, `.glass-card`.
- Produces: page-local `.medal-card`, `.medal-icon` styles.

- [ ] **Step 1: Append page CSS**

```css
/* ---------- Medals (worldskills.html) ---------- */
.medal-card { text-align: center; }
.medal-icon {
  width: 64px; height: 64px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.6rem;
}
.medal-icon.bronze { background: rgba(205, 127, 50, 0.12); color: #cd7f32; border: 1px solid rgba(205, 127, 50, 0.4); }
.medal-icon.excellence { background: rgba(167, 139, 250, 0.12); color: var(--accent-2); border: 1px solid rgba(167, 139, 250, 0.4); }
.medal-card .mono-date { font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-dim); }
```

- [ ] **Step 2: Write worldskills.html** — head (worldskills row) + navbar + main + footer. Sections:

**Intro** (eyebrow "WorldSkills", title "Competing for Malaysia", lead): 

> From February 2023 to September 2024, I trained and competed as Malaysia's representative in IT Software Solutions for Business under Jabatan Pembangunan Kemahiran (JPK) — a journey through three international competitions on three stages.

**Medals showcase** — `row g-4`, three `.glass-card.medal-card` in `col-md-4`:

| Icon class | Award | Event | Date |
|---|---|---|---|
| `medal-icon bronze` + `fa-solid fa-medal` | Bronze Medal | WorldSkills ASEAN — Singapore | 2023 |
| `medal-icon bronze` + `fa-solid fa-medal` | Bronze Medal | WorldSkills Asia — Abu Dhabi | 2023 |
| `medal-icon excellence` + `fa-solid fa-award` | Medallion for Excellence | 47th WorldSkills — Lyon, France | 2024 |

```html
<div class="col-md-4" data-aos="fade-up">
  <div class="glass-card medal-card">
    <div class="medal-icon bronze"><i class="fa-solid fa-medal"></i></div>
    <h3 class="h5">Bronze Medal</h3>
    <p class="mb-1">WorldSkills ASEAN — Singapore</p>
    <p class="mono-date">2023</p>
  </div>
</div>
```

**Preparation** (eyebrow "Preparation", title "Training like it's the real thing"):

> WorldSkills isn't a coding contest — it's a full software delivery marathon. Each competition compresses the entire development lifecycle into timed modules: requirements analysis, system design, database modeling, implementation, testing, and deployment. Training meant building complete business applications in .NET Core and MSSQL, over and over, against the clock — then reviewing every decision to shave minutes and eliminate mistakes.

**Competition journey** (eyebrow "The Journey", title "Three stages, three lessons") — three short narrative blocks with `data-aos`, each followed by a `images/placeholder-wide.svg` photo placeholder:

> **Singapore 2023 — WorldSkills ASEAN.** My first taste of international competition. Learning to perform under observation, manage nerves, and trust preparation. Result: Bronze Medal.
>
> **Abu Dhabi 2023 — WorldSkills Asia.** A bigger stage and stronger field. I refined my speed-versus-correctness trade-offs and my module time management. Result: Bronze Medal.
>
> **Lyon 2024 — the 47th WorldSkills.** The world final, with the best young developers from every continent. Four days of competition modules in front of thousands of spectators. Result: Medallion for Excellence — awarded for meeting the international standard of excellence.

**Lessons learned** (eyebrow "Takeaways", title "What competition taught me") — four `.glass-card` in a `row g-4` / `col-md-6`:

1. **Pressure is a skill** — Delivering working software with a countdown clock running rewires how you handle production incidents. Calm is trainable.
2. **Scope ruthlessly** — When time is fixed, scope is the only variable. Ship the core flow first; polish is a bonus, not a foundation.
3. **Practice the whole pipeline** — Speed comes from having done requirements-to-deployment so many times that nothing is novel on the day.
4. **Standards matter** — WorldSkills grades against an international standard, not against other competitors. Aim at the standard, not the field.

**Results link** — closing `.cta-strip`: "Official results" text + `btn-ghost` link to `https://results.worldskills.org/results?event=579&offset=10&skill=1680&base_skill=221` ("View official WorldSkills results").

- [ ] **Step 3: Verify in browser** — nav highlights "WorldSkills"; three medal cards render with bronze/violet icon colors; photo placeholders show; results link opens in new tab; mobile OK.

- [ ] **Step 4: Commit** — `git add -A; git commit -m "feat: add WorldSkills journey page"`

---

### Task 6: Projects page (projects.html)

**Files:**
- Create: `projects.html`

**Interfaces:**
- Consumes: `.case-study`, `.case-label` (Task 4), `.tag`, `images/placeholder-wide.svg`.

- [ ] **Step 1: Write projects.html** — head (projects row) + navbar + main + footer. Intro section (eyebrow "Projects", title "Things I've built", lead "Two products, built end to end — both moving real money for real users."). Then two `.case-study` articles with labels: Overview / My Responsibilities / Architecture / Screenshots / Technologies / Challenges / Lessons Learned.

**DirectPay Payment Gateway** — `Oct 2023 – Sep 2024 · directpay.my` (mono date line; live link `https://directpay.my` target blank):
- Overview: A 0-to-1 payment middleware platform integrated with FPX (Malaysia's online banking payment network) for secure, seamless online payment processing. Built from nothing to a live product processing real transactions.
- My Responsibilities: Designed scalable backend workflows for payment processing and settlement reconciliation; implemented automated transaction-inquiry CRON jobs; built pending-transaction handling to keep payment states accurate even when bank responses are delayed.
- Architecture: `images/placeholder-wide.svg` placeholder with alt "DirectPay architecture diagram placeholder", plus one sentence: Payment requests flow through the middleware to FPX; scheduled inquiry jobs reconcile any transaction whose final state wasn't confirmed in real time.
- Screenshots: `images/placeholder-wide.svg` placeholder, alt "DirectPay screenshots placeholder".
- Technologies (tags): Laravel · MySQL · FPX Integration · CRON Jobs · Payment APIs *(draft — verify/edit the exact stack)*
- Challenges: Payments can fail in ambiguous ways — a bank timeout doesn't mean the payment failed. Designing the pending-transaction flow so no payment is ever lost or double-counted was the hardest and most important part.
- Lessons Learned: Reconciliation isn't an afterthought — it IS the payment system. Idempotency and state machines beat optimistic assumptions every time.

**PRiM — People Relationship Information Management** — `Aug 2021 – Apr 2023 · prim.my` (live link `https://prim.my/derma`):
- Overview: A donation and organization management platform serving 200+ Malaysian organizations — schools, NGOs, and religious institutions — handling donations, school fee payments, and administrative workflows.
- My Responsibilities: Developed donation management services; built school-fee payment systems for primary and secondary schools with integrated payment workflows; developed administrative modules for organization management.
- Architecture: placeholder image, alt "PRiM architecture diagram placeholder", plus: A multi-organization platform where each institution manages its own donations, fees, and members on shared infrastructure.
- Screenshots: placeholder image, alt "PRiM screenshots placeholder".
- Technologies (tags): Laravel · MySQL · Payment Workflows *(draft — verify/edit the exact stack)*
- Challenges: 200+ organizations means 200+ ways to configure fees, donation categories, and receipts. Designing flexible-but-safe payment workflows that non-technical administrators could operate was a constant balancing act.
- Lessons Learned: This project taught me that software serving real communities has to be boring and dependable. It's also where I fell in love with payment systems — a passion that shaped everything after.

*(The two "verify/edit" italic notes are visible page text removed by the user later, OR replace with confirmed stacks before publishing — flag this in the final summary to the user.)*

- [ ] **Step 2: Verify in browser** — nav highlights "Projects"; both articles show all 7 labeled subsections; live links open in new tabs; tags render; mobile OK.

- [ ] **Step 3: Commit** — `git add -A; git commit -m "feat: add projects page with DirectPay and PRiM deep dives"`

---

### Task 7: Blog page (blog.html)

**Files:**
- Create: `blog.html`
- Modify: `css/style.css` (append article-card styles)

**Interfaces:**
- Consumes: Task 2 classes.
- Produces: page-local `.article-card`, `.coming-soon` styles.

- [ ] **Step 1: Append page CSS**

```css
/* ---------- Article cards (blog.html) ---------- */
.article-card { display: flex; flex-direction: column; }
.article-card h3 { font-size: 1.1rem; margin: 0.5rem 0 0.6rem; }
.article-card p { font-size: 0.92rem; flex-grow: 1; }
.coming-soon {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-dim);
}
```

- [ ] **Step 2: Write blog.html** — head (blog row) + navbar + main + footer. Intro section (eyebrow "Writing", title "Technical articles", lead "Notes from building payment systems and distributed backends. Articles are in the works — titles below are what's coming."). Grid `row g-4`, each card `col-md-6 col-lg-4`, staggered `data-aos-delay`:

```html
<div class="col-md-6 col-lg-4" data-aos="fade-up">
  <div class="glass-card article-card">
    <div><span class="tag">Payments</span><span class="tag">Architecture</span></div>
    <h3>Designing a Payment Gateway: Lessons from Building DirectPay</h3>
    <p>What actually happens between "Pay Now" and "Payment Successful" — states, reconciliation, and the failure modes nobody tells you about.</p>
    <span class="coming-soon"><i class="fa-regular fa-clock me-2"></i>Coming soon</span>
  </div>
</div>
```

All 8 cards (title / teaser / tags):

1. **Designing a Payment Gateway: Lessons from Building DirectPay** — "What actually happens between 'Pay Now' and 'Payment Successful' — states, reconciliation, and the failure modes nobody tells you about." — Payments, Architecture
2. **RabbitMQ in Payment Systems: Reliable Async Processing** — "Why message queues are the backbone of money movement, and the patterns that keep a payout from being lost or sent twice." — RabbitMQ, Messaging
3. **Redis Beyond Caching: Patterns for Payment Workloads** — "Distributed locks, rate limiting, and hot-path state — where Redis shines in a payment platform and where it bites." — Redis, Performance
4. **Modern Java for Backend Engineers** — "The Java I actually write day to day — records, streams, virtual threads, and the parts of the language worth mastering in 2026." — Java
5. **Spring Boot in Production: What I've Learned** — "Configuration, observability, and graceful degradation — hard-won lessons from running Spring Boot services that can't go down." — Spring Boot, Production
6. **Distributed Systems Fundamentals for Payment Engineers** — "Consistency, idempotency, and exactly-once myths — the concepts that matter most when the data is money." — Distributed Systems
7. **Microservices Boundaries: Splitting a Payment Platform** — "How to draw service boundaries that survive growth — and the coupling traps that turn microservices into a distributed monolith." — Microservices, Architecture
8. **AI in the Backend: Building an Internal Translation Extension** — "What it takes to put AI models behind a production API — routing, streaming, and serving 1,000+ daily users." — AI, Backend

- [ ] **Step 3: Verify in browser** — nav highlights "Blog"; 8 cards with tags + "Coming soon"; equal card heights per row; mobile OK.

- [ ] **Step 4: Commit** — `git add -A; git commit -m "feat: add blog page with upcoming article cards"`

---

### Task 8: Contact page (contact.html)

**Files:**
- Create: `contact.html`
- Modify: `css/style.css` (append contact-card styles)

**Interfaces:**
- Consumes: Task 2 classes.
- Produces: page-local `.contact-card` style.

- [ ] **Step 1: Append page CSS**

```css
/* ---------- Contact cards (contact.html) ---------- */
.contact-card {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  text-decoration: none;
}
.contact-card i.contact-icon {
  font-size: 1.5rem;
  color: var(--accent-2);
  width: 52px; height: 52px;
  flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.25);
  border-radius: 12px;
}
.contact-card h3 { font-size: 1rem; margin-bottom: 0.15rem; }
.contact-card p { font-size: 0.88rem; margin: 0; color: var(--text-dim); }
```

- [ ] **Step 2: Write contact.html** — head (contact row) + navbar + main + footer. Section (eyebrow "Contact", title "Say hello", lead "The fastest way to reach me is email. I'm always happy to talk payments, backend engineering, or WorldSkills."). Grid `row g-4`, each card `col-md-6`, each is an `<a>` wrapping a `.glass-card.contact-card`:

| Icon | Title | Sub-text | href | external? |
|---|---|---|---|---|
| `fa-solid fa-envelope` | Email | simshansiong2002@gmail.com | `mailto:simshansiong2002@gmail.com` | no |
| `fa-brands fa-github` | GitHub | github.com/Stephen-Sim | `https://github.com/Stephen-Sim` | yes |
| `fa-brands fa-linkedin-in` | LinkedIn | linkedin.com/in/stephen-sim-343775212 | `https://www.linkedin.com/in/stephen-sim-343775212` | yes |
| `fa-solid fa-file-arrow-down` | Resume | Download PDF | `assets/resume.pdf` + `download` attr | no |

```html
<div class="col-md-6" data-aos="fade-up">
  <a class="glass-card contact-card" href="mailto:simshansiong2002@gmail.com">
    <i class="fa-solid fa-envelope contact-icon"></i>
    <div>
      <h3>Email</h3>
      <p>simshansiong2002@gmail.com</p>
    </div>
  </a>
</div>
```

- [ ] **Step 3: Verify in browser** — nav highlights "Contact"; 4 cards; mailto opens mail client, GitHub/LinkedIn new tabs, resume downloads; hover states work; mobile OK.

- [ ] **Step 4: Commit** — `git add -A; git commit -m "feat: add contact page"`

---

### Task 9: SEO finish, README, and full-site verification

**Files:**
- Create: `sitemap.xml`, `README.md`

**Interfaces:**
- Consumes: all six pages.

- [ ] **Step 1: Create sitemap.xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://stephen-sim.github.io/ssim-profile/</loc></url>
  <url><loc>https://stephen-sim.github.io/ssim-profile/about.html</loc></url>
  <url><loc>https://stephen-sim.github.io/ssim-profile/projects.html</loc></url>
  <url><loc>https://stephen-sim.github.io/ssim-profile/worldskills.html</loc></url>
  <url><loc>https://stephen-sim.github.io/ssim-profile/blog.html</loc></url>
  <url><loc>https://stephen-sim.github.io/ssim-profile/contact.html</loc></url>
</urlset>
```

- [ ] **Step 2: Create README.md** — sections: what this is; local preview (just open index.html); how to edit content (which file owns what); how to replace placeholders (profile.jpg, WorldSkills photos, diagrams); how to deploy to GitHub Pages (create repo `ssim-profile` under Stephen-Sim → push → Settings → Pages → Deploy from branch `master` / root → site at `https://stephen-sim.github.io/ssim-profile/`); note to update canonical URLs in every `<head>`, `robots.txt`, and `sitemap.xml` if the repo name differs.

- [ ] **Step 3: Full-site verification checklist**
  - Every page opens via `file://` with no console errors (F12).
  - Nav works from every page to every page; active link correct on each.
  - All external links (GitHub, LinkedIn, directpay.my, prim.my/derma, WorldSkills results) open in new tabs.
  - `assets/resume.pdf` downloads from navbar, hero, and contact page.
  - Responsive at 375px / 768px / 1280px: no horizontal scroll, hamburger works.
  - View-source check on all 6 pages: unique title + description, OG tags present, favicon link present.
  - Temporarily block CDNs (DevTools → Network request blocking, block `cdn.jsdelivr.net` + `unpkg.com`) → content still readable (unstyled grid is acceptable; AOS elements must still be visible).

- [ ] **Step 4: Commit** — `git add -A; git commit -m "feat: add sitemap, README, and finish SEO"`

---

## Self-Review Notes (completed during planning)

- Spec coverage: every spec section maps to a task (design system→T2, home→T3, about/experience→T4, worldskills→T5, projects→T6, blog→T7, contact→T8, SEO/deploy/verification→T1+T9). Favicon.ico from the spec was consciously replaced with SVG-only favicon (no raster tooling available without npm); README documents this.
- The two project tech-stack lines are marked as drafts IN THE VISIBLE PAGE TEXT and must be flagged to the user at handoff.
- Class names cross-checked: `.case-study`/`.case-label` defined in Task 4, reused in Task 6. `.glass-card` defined Task 2, reused Tasks 5/7/8. `.tag` defined Task 2, reused Tasks 4/6/7.
