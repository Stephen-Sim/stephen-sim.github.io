# Vue 3 Migration Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement task-by-task.

**Goal:** Convert the finished static portfolio (5 HTML pages) into a Vue 3 + Vite SPA with identical design and content, deployed to GitHub Pages via GitHub Actions.

**Architecture:** Vue 3 (composition API, `<script setup>`), vue-router with `createWebHistory('/ssim-profile/')`, @unhead/vue for per-route meta, AOS from npm. Shared NavBar/SiteFooter components replace the duplicated markup. Existing `css/style.css` becomes `src/assets/main.css` nearly unchanged. Static files (images, resume, favicon, robots, sitemap) move to `public/`. SPA deep links handled by copying `index.html` to `404.html` at build time.

**Tech Stack:** vue ^3.5, vue-router ^4, @unhead/vue ^2, aos ^2.3.4, vite ^7, @vitejs/plugin-vue.

## Global Constraints

- Content and visual design must NOT change: same copy, same CSS custom properties, classes, and layout. This is a restructure, not a redesign.
- Base path `/ssim-profile/` everywhere (vite `base`, router history base, canonical URLs stay `https://stephen-sim.github.io/ssim-profile/...`).
- Bootstrap stays CDN (grid + collapse only) in `index.html` head — do NOT npm-install Bootstrap. Font Awesome + Google Fonts stay CDN. AOS moves to npm (CSS imported in main.js).
- Keep code beginner-friendly and commented.
- Verification: `npm run build` must succeed; `npm run preview` pages must render identically to the old static pages; router navigation works; AOS animates after route changes.

## File Structure (target)

```
package.json, vite.config.js, index.html (Vite entry)
.github/workflows/deploy.yml
public/            favicon.svg, robots.txt, sitemap.xml, images/*, assets/{profile.jpg,resume.pdf}
src/main.js        createApp + router + head + AOS init
src/router/index.js
src/App.vue        <NavBar/> <RouterView/> <SiteFooter/>
src/assets/main.css
src/components/NavBar.vue, SiteFooter.vue
src/views/HomeView.vue, AboutView.vue, ProjectsView.vue, WorldSkillsView.vue, ContactView.vue
```

### Task V1: Vite scaffold + shared shell
package.json (scripts: dev/build/preview; postbuild copies dist/index.html→dist/404.html via `node -e "require('fs').copyFileSync('dist/index.html','dist/404.html')"`), vite.config.js (`base: '/ssim-profile/'`), Vite index.html (keeps CDN links for Bootstrap/Font Awesome/Google Fonts + favicon + default meta), src/main.js (imports main.css, aos/dist/aos.css, creates app+router+unhead; AOS.init once; `router.afterEach` → `nextTick` → `AOS.refreshHard()` guarded by prefers-reduced-motion), router with 5 routes + `scrollBehavior` (savedPosition or top), App.vue, NavBar.vue (RouterLink links; scroll blur via onMounted listener; Bootstrap collapse still via CDN JS — collapse closes on route change), SiteFooter.vue (computed year), main.css = old style.css with `.site-nav .nav-link.active` selector extended to `.router-link-active`. Move static files to public/. Old root HTML/css/js left in place until V3.

### Task V2: Views with verbatim content
Convert each old page's `<main>` content into the matching view component, copy VERBATIM (copy, classes, data-aos attributes, image paths stay `images/...`-relative). Per-view `useHead` sets the same title/description/OG/canonical as the old page. Timeline click-to-open becomes a small `ref`-based toggle in HomeView (replacing the old script.js binding).

### Task V3: Workflow, cleanup, README
`.github/workflows/deploy.yml`: on push to master → checkout, setup-node 22 + npm cache, `npm ci`, `npm run build`, upload dist artifact, deploy with actions/deploy-pages (permissions pages:write, id-token:write; environment github-pages). Delete old root files (index.html at root is now Vite's — the OLD about/projects/worldskills/contact.html, css/, js/, root favicon.svg/robots.txt/sitemap.xml, assets/ and images/ once moved). Rewrite README (dev workflow: npm install / npm run dev; deployment: push to master, Pages source = "GitHub Actions"). Full verification: build, preview, click through all 5 routes, deep-link refresh check on /about.
