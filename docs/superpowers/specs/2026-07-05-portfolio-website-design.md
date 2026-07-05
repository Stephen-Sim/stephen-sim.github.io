# Stephen Sim — Personal Portfolio Website: Design Spec

**Date:** 2026-07-05
**Status:** Approved design, pending implementation plan

## Goal

A premium static personal portfolio website for Stephen Sim Shan Siong — Backend Engineer at Ant International and Malaysia WorldSkills competitor. Visual quality benchmark: engineer portfolios at Stripe, Vercel, OpenAI, Linear. Deployable directly to GitHub Pages with zero build process.

## Hard Constraints

- No React, Next.js, TypeScript, Node.js, npm, backend, or database.
- Static HTML5 + CSS3 + vanilla JavaScript only. No build step.
- Allowed libraries (all via CDN): Bootstrap 5.3, Font Awesome 6, AOS 2.3, Google Fonts.
- Code must be clean, well-commented, beginner-friendly, editable by hand.

## Approach (decided)

**Custom-first, minimal Bootstrap.** Bootstrap is used only for the responsive grid, the collapsing mobile navbar, and spacing utilities. All visible styling (cards, buttons, timeline, hero, hover effects) comes from a custom design system in `css/style.css`. Stock Bootstrap component looks (`btn-primary`, `.card` defaults) are avoided to achieve the Linear/Vercel aesthetic.

**Shared markup:** navbar and footer are duplicated in each HTML file (no JS injection). Editing nav means editing 6 files — accepted trade-off for SEO and simplicity.

**Content policy:** all copy is realistic draft text grounded in Stephen's actual resume. Placeholders only where facts are unknowable: profile photo, competition photos, architecture diagrams, screenshots, blog article bodies. Blog posts are teaser cards marked "Coming soon" — no article pages in this version.

## File Structure

```
index.html          Home (long-scroll)
about.html          About & Experience
projects.html       Projects (DirectPay, PRiM)
worldskills.html    WorldSkills journey
blog.html           Technical articles (placeholders)
contact.html        Contact
css/style.css       Single custom stylesheet (design system)
js/script.js        Single vanilla JS file (~150 commented lines)
assets/profile.jpg  Profile photo placeholder
assets/resume.pdf   Copied from user's OneDrive resume PDF
images/             Photo/diagram/screenshot placeholders
favicon.svg + favicon.ico
sitemap.xml, robots.txt
```

## Design System

**Colors (CSS variables at top of style.css):**
- Background: `#0a0a0f` (near-black); raised surfaces: `#12121a`
- Accent gradient: indigo `#6366f1` → violet `#a78bfa`
- Body text: `#9ca3af`; headings: white
- Card borders: `rgba(255,255,255,0.08)`, brightening on hover

**Typography (Google Fonts):**
- `Inter` — body/UI
- `Space Grotesk` — display headings
- `JetBrains Mono` — code and metric accents (e.g., `~80% → ~100%`)

**Effects:**
- Subtle radial indigo glow behind hero
- AOS fade-up on scroll, 600ms, subtle
- Card hover: border brighten + slight lift + soft glow
- Gradient text on key headings
- CSS `scroll-behavior: smooth`
- All animation respects `prefers-reduced-motion`

Retheming possible by editing ~10 CSS variables.

## Pages

### index.html — Home (long-scroll)
1. **Hero:** name, title line "Backend Engineer @ Ant International · Malaysia WorldSkills Competitor", location (Kuala Lumpur, Malaysia), profile photo placeholder, buttons: GitHub, LinkedIn, Download Resume.
2. **About teaser:** 2–3 sentences linking to about.html.
3. **Career Timeline (interactive):** UTeM → PRiM → DirectPay → WorldSkills ASEAN Singapore 2023 → WorldSkills Asia Abu Dhabi 2023 → WorldSkills Lyon 2024 → Ant International. Hover/click highlights a node and reveals a one-line summary with dates.
4. **Skills grid (animated cards):** Java, Spring Boot, Redis, RabbitMQ, MySQL, Docker, Git, GitHub, C#, .NET, Laravel, Prometheus, OpenTelemetry, Alibaba Cloud.
5. **Contact CTA strip** linking to contact.html.

### about.html — About & Experience
1. **Engineering story:** narrative (not a tech list) covering backend engineering, distributed systems, payment infrastructure, building reliable software, passion for learning.
2. **Ant International case studies** (Problem / Solution / Architecture / Impact / Metrics format):
   - **Payment Sandbox Optimization** — transaction success rate ~80% → near 100%; improved developer testing efficiency.
   - **Lazada PH Real-Time Refund Withdrawals** — refund coupon withdrawals to user bank accounts, T+1 → real-time.
   - **Payment Account SaaS APIs** — microservice APIs serving regional e-commerce merchants including Lazada and Daraz.
   - **AI Translation Extension Backend** — backend architecture for AI-powered browser translation extension used by 1,000+ employees.
   - Tech stack shown per case study: Java, Spring Boot, Redis, MySQL, RabbitMQ, Payment APIs.

### worldskills.html — WorldSkills Journey
- Narrative sections: selection under JPK (Feb 2023 – Sep 2024), preparation, competition journey.
- **Medals showcase:** Bronze — WorldSkills ASEAN Singapore 2023; Bronze — WorldSkills Asia Abu Dhabi 2023; Medallion for Excellence — WorldSkills Lyon 2024 (47th WorldSkills). Category: IT Software Solutions for Business. Stack: .NET Core, MSSQL.
- Lessons learned section (full SDLC under pressure).
- Photo placeholders; link to official results page: https://results.worldskills.org/results?event=579&offset=10&skill=1680&base_skill=221

### projects.html — Projects
Two deep project cards, each with: Overview / Responsibilities / Architecture diagram placeholder / Screenshots placeholder / Technologies / Challenges / Lessons learned.
- **DirectPay Payment Gateway** (Oct 2023 – Sep 2024, https://directpay.my): 0-to-1 FPX-integrated payment middleware; automated transaction-inquiry CRON jobs; pending-transaction handling; settlement reconciliation workflows.
- **PRiM** (Aug 2021 – Apr 2023, https://prim.my/derma): donation management for 200+ organizations (schools, NGOs, religious institutions); school fee payment systems; administrative modules.

### blog.html — Technical Articles
8 placeholder article cards with title, teaser blurb, topic tags, and "Coming soon" state. Topics: Payment Gateway Design, RabbitMQ, Redis, Java, Spring Boot, Distributed Systems, Microservices, AI. No article pages in this version.

### contact.html — Contact
Elegant link cards: Email (simshansiong2002@gmail.com), GitHub (https://github.com/Stephen-Sim), LinkedIn (https://www.linkedin.com/in/stephen-sim-343775212), Download Resume. **No contact form** (no backend).

### Shared: Navbar & Footer
- Sticky navbar: logo/name left; links Home, About, Projects, WorldSkills, Blog, Contact; background blur + border appears on scroll; Bootstrap collapse for mobile hamburger.
- Footer: copyright with auto-updating year, GitHub and LinkedIn icon links.

## JavaScript (js/script.js)

Single file, well-commented, no dependencies beyond CDN libraries:
1. Navbar scroll state (adds blur/border class past threshold)
2. Active nav-link highlighting per page
3. AOS initialization (guarded: `if (window.AOS)` so missing CDN degrades gracefully)
4. Timeline node interaction (hover/click reveal)
5. Skill-card staggered entrance
6. Footer year auto-update

Site remains fully readable and navigable with JavaScript disabled.

## SEO & Meta

- Unique `<title>` and `<meta name="description">` per page
- Open Graph tags (og:title, og:description, og:type, og:image → profile placeholder) + Twitter card tags
- Canonical URLs, semantic HTML5 landmarks (header/nav/main/section/footer), heading hierarchy
- Favicon: favicon.svg with .ico fallback
- sitemap.xml and robots.txt

## Deployment

Push to a GitHub repository, enable GitHub Pages (deploy from branch). All asset paths relative (`css/style.css`, not `/css/style.css`) so the site works at both `username.github.io` and `username.github.io/repo-name/`.

## Error Handling / Robustness

- CDN failure degrades gracefully: content renders without animation (AOS elements must not be hidden by default without AOS present — use AOS's own CSS, which only animates when initialized) and layout survives without Bootstrap grid on modern browsers where feasible; this is accepted residual risk.
- All external links use `target="_blank" rel="noopener"`.
- Images have alt text; placeholders are styled divs or SVG placeholders, not broken `<img>` references.

## Verification

- Open every page locally in a browser; click every nav and content link.
- Responsive check at ~375px (mobile), ~768px (tablet), ~1280px (desktop).
- Lighthouse pass for Performance / SEO / Accessibility sanity.
- Confirm resume.pdf downloads and all external profile links resolve.

## Out of Scope (this version)

- Individual blog article pages; contact form; light-mode toggle; CMS or content pipeline; analytics.
