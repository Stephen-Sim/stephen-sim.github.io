# ssim-profile

Stephen Sim's personal portfolio website.

## What this is

A Vue 3 + TypeScript + Vite single-page app covering Stephen's background as a
backend engineer, his WorldSkills competition history, project deep dives, and
contact info. Styled with the "Serene Sage" light theme. Deployed to GitHub
Pages at **https://stephen-sim.github.io/**.

## Tech stack

- **Vue 3** — `<script setup lang="ts">` composition API throughout
- **vue-router** — history mode (`createWebHistory('/')`), 5 routed views
- **@unhead/vue** — per-route SEO meta (title, description, canonical, Open
  Graph/Twitter tags), set via `useHead` in each view
- **AOS** (Animate On Scroll) — scroll-reveal animations, installed from npm
  and re-run after each route change
- **Bootstrap 5** — CDN only, used for the grid and navbar collapse behavior
  (not npm-installed)
- **Font Awesome + Google Fonts** — CDN `<link>` tags in `index.html`
- **Vite** — dev server and build, with `vue-tsc` type-checking gating every
  build

## Local development

```bash
npm install
npm run dev          # starts the dev server at http://localhost:5173
npm run type-check   # runs vue-tsc --noEmit on its own
npm run build         # type-checks, builds to dist/, then copies
                       # dist/index.html -> dist/404.html for SPA deep links
npm run preview       # serves the dist/ build locally for a final check
```

## Project structure

```
index.html                 Vite entry HTML (CDN links, #app div, loads src/main.ts)
src/
  main.ts                  createApp + router + unhead + AOS init
  router/index.ts           5 routes + scrollBehavior
  App.vue                   <NavBar/> <RouterView/> <SiteFooter/>
  components/
    NavBar.vue               shared nav (scroll blur, mobile collapse, active link)
    SiteFooter.vue           shared footer (computed copyright year)
  views/
    HomeView.vue             hero, career timeline, skills grid
    AboutView.vue            personal story, Ant International case studies
    ProjectsView.vue         DirectPay and PRiM project deep dives
    WorldSkillsView.vue      medals, training narrative, competition gallery
    ContactView.vue          email, GitHub, LinkedIn, resume download
  assets/
    main.css                 whole design system (CSS custom properties + rules)
public/                     static files served as-is (favicon, robots.txt,
                            sitemap.xml, images/, assets/resume.pdf, etc.)
.github/workflows/deploy.yml  GitHub Actions build + deploy to Pages
```

## Editing content

Each view owns its own page's content — there's no more copy-pasted
navbar/footer markup to keep in sync across files, since `NavBar.vue` and
`SiteFooter.vue` are shared components edited once.

| File | Owns |
|---|---|
| `src/views/HomeView.vue` | Hero copy, career timeline, skills grid, home CTA |
| `src/views/AboutView.vue` | Personal story, Ant International case studies |
| `src/views/ProjectsView.vue` | DirectPay and PRiM case studies |
| `src/views/WorldSkillsView.vue` | Medals, training narrative, competition journey, photo gallery |
| `src/views/ContactView.vue` | Contact cards (email, GitHub, LinkedIn, resume) |
| `src/components/NavBar.vue` | Site navigation — edit once, applies everywhere |
| `src/components/SiteFooter.vue` | Site footer — edit once, applies everywhere |
| `src/assets/main.css` | All visual design — see "Retheming" below |

### Retheming via CSS variables

`src/assets/main.css` defines the whole design system as CSS custom
properties at the top of the file, in `:root`. The current theme is "Serene
Sage" — a light palette:

```css
:root {
  --bg: #F1EAD8;       /* cream page background */
  --accent: #8A8E75;   /* sage accent */
  --accent-2: #68604D; /* dark olive accent/body text */
  /* light sage (#BEC5A4) and sand (#D5C7AD) are used for tag tints,
     hover glows, and the hero radial glow */
}
```

Changing colors, fonts, corner radius, or transition speed in this block
updates the whole site — no need to hunt through individual rules.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`: `npm ci` →
type-check + build → deploy the `dist/` output to GitHub Pages via
`actions/deploy-pages`.

**One-time repo setup:** go to **Settings → Pages** and set **Source** to
"GitHub Actions" (not "Deploy from a branch"). Leave the custom-domain field
**empty** — this is a GitHub user site served directly at
`https://stephen-sim.github.io/`, not a custom domain.

SPA deep links (e.g. loading `/about` directly, or refreshing on it) work
because the build copies `index.html` to `404.html`; GitHub Pages serves that
404 page for any unknown path, which boots the Vue app and lets the router
take over.

`robots.txt` lives at the domain root (`public/robots.txt` → served at
`https://stephen-sim.github.io/robots.txt`), which crawlers honor normally
since this is a user site, not a project page under a subpath. It points to
the sitemap at `https://stephen-sim.github.io/sitemap.xml`.

## Assets note

A few files are kept in the repo unused, in case they're needed later:

- `public/images/dbfiesta-utem-first-place.jpg` — an available photo not
  currently referenced from any page
- `public/images/placeholder-wide.svg` and
  `public/assets/profile-placeholder.svg` — placeholder graphics, kept in
  case a placeholder image is ever needed again

There is currently no Open Graph/Twitter share image (`og:image`) set on any
page — social link previews will show no image or a platform default. Adding
a ~1200×630 image and wiring it up in each view's `useHead` call is an
optional follow-up.
