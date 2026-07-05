# ssim-profile

Stephen Sim's personal portfolio website — a static, six-page site covering his
background as a backend engineer, his WorldSkills competition history, project
deep dives, technical writing, and contact info.

## What this is

A plain HTML/CSS/JS static site. No build step, no framework, no bundler, no
package.json. Six pages share one design system (`css/style.css`) and one
small script file (`js/script.js`). Layout uses Bootstrap 5 (grid + navbar
collapse only) loaded from a CDN; icons come from Font Awesome; scroll-reveal
animation comes from AOS. All three are loaded via `<link>`/`<script>` tags
pointing at CDNs — there is nothing to `npm install`.

Pages:

- `index.html` — home / hero / career timeline / skills
- `about.html` — story + Ant International experience case studies
- `projects.html` — DirectPay and PRiM project deep dives
- `worldskills.html` — WorldSkills Singapore/Abu Dhabi/Lyon journey
- `blog.html` — planned technical articles (all marked "Coming soon")
- `contact.html` — email, GitHub, LinkedIn, resume download

## Local preview

There is no build step. Just open `index.html` directly in a browser
(double-click it, or `start index.html` / drag it into a browser tab). Every
link between pages is a relative path (`about.html`, `images/...`,
`assets/...`), so the site works correctly straight off the filesystem via
`file://` — no local server required. (A local server, e.g. `npx serve` or
the VS Code "Live Server" extension, works too if you prefer it, but it is
optional.)

## Editing content

Every page repeats the same navbar and footer markup — **there is no shared
include mechanism**, so any change to navigation (adding a page, renaming a
link, changing the resume path, editing social links) must be made in **all
six HTML files**. Look for the comments:

```html
<!-- ============ NAVBAR (shared across all pages — edit in every file) ============ -->
...
<!-- ============ FOOTER (shared across all pages — edit in every file) ============ -->
```

Other than that, each page owns its own content in a straightforward way:

| File | Owns |
|---|---|
| `index.html` | Hero copy, career timeline, skills grid, home CTA |
| `about.html` | Personal story, Ant International case studies (problem/solution/architecture/impact) |
| `projects.html` | DirectPay and PRiM case studies |
| `worldskills.html` | Medals, training narrative, competition journey, photo gallery, lessons |
| `blog.html` | Planned article cards (titles/teasers only — no article pages exist yet) |
| `contact.html` | Contact cards (email, GitHub, LinkedIn, resume) |
| `css/style.css` | All visual design — see "Retheming" below |
| `js/script.js` | Navbar scroll behavior, active-link highlighting, AOS init, footer year |

### Retheming via CSS variables

`css/style.css` defines its whole design system as CSS custom properties at
the top of the file, in `:root`:

```css
:root {
  --bg: #0a0a0f;             /* page background */
  --surface: #12121a;        /* card/panel background */
  --surface-2: #181824;      /* hover-state surface */
  --border: rgba(255,255,255,0.08);
  --border-hover: rgba(167,139,250,0.45);
  --text: #9ca3af;           /* body text */
  --text-bright: #f9fafb;    /* headings */
  --text-dim: #6b7280;       /* meta text, dates */
  --accent: #6366f1;         /* indigo */
  --accent-2: #a78bfa;       /* violet */
  --gradient: linear-gradient(135deg, var(--accent), var(--accent-2));
  --font-body: 'Inter', system-ui, sans-serif;
  --font-display: 'Space Grotesk', var(--font-body);
  --font-mono: 'JetBrains Mono', monospace;
  --radius: 14px;
  --transition: 0.25s ease;
}
```

Changing colors, fonts, corner radius, or transition speed here updates the
whole site — no need to hunt through individual rules.

## Replacing remaining placeholders

Most of the photography on the site is real:

- Hero photo (`index.html`) — `assets/profile.jpg`
- About page team photo — `images/ant-international-team.jpg`
- WorldSkills page — 7 real competition photos (`images/worldskills-*.jpg`)

What's still a placeholder (`images/placeholder-wide.svg`), and should be
swapped for a real image before the site is considered finished:

- `about.html` — 2 architecture diagrams (Payment Sandbox Optimization,
  Real-Time Refund Withdrawals, Payment Account SaaS APIs, AI Translation
  Extension case studies — 4 images across those case study blocks all use
  the same placeholder)
- `projects.html` — 4 images: architecture diagram + screenshots placeholder
  for both DirectPay and PRiM

To replace a placeholder: drop the real image into `images/`, then update the
matching `<img src="images/placeholder-wide.svg" ...>` tag to point at the new
filename and write a real `alt` description.

There is also one unused photo already sitting in `images/`:
`images/dbfiesta-utem-first-place.jpg`. It isn't referenced from any page —
add it to `about.html` (or wherever fits) if you want it included.

## Before you publish

- **Resolve the draft tech-stack notes.** Both `projects.html` case studies
  (DirectPay and PRiM) carry a visible `(draft — verify/edit the exact
  stack)` note right under their "Technologies" tag list. Confirm the actual
  stack for each project, update the `<span class="tag">` list accordingly,
  and delete the draft note.
- **Swap the remaining placeholder diagrams/screenshots** (see above) —
  publishing with `placeholder-wide.svg` still in place is fine as an interim
  state but should not be the final version.
- **Consider a dedicated Open Graph image.** Right now there's no
  `og:image`/`twitter:image` tag on any page, so social shares will show no
  preview image (or a platform-default fallback). If you want a polished link
  preview on LinkedIn/Twitter/etc., create a ~1200×630 image and add
  `<meta property="og:image" content="...">` and
  `<meta name="twitter:image" content="...">` to every page's `<head>`.
- **Favicon is SVG-only.** `favicon.svg` is the only favicon asset — there is
  no `.ico` fallback. All modern browsers (Chrome, Firefox, Edge, Safari 16+)
  support SVG favicons directly, so this is intentional, not an oversight;
  only very old browsers won't show it.

## Deploying to GitHub Pages

1. Create a new GitHub repository named `ssim-profile` under the `Stephen-Sim`
   account.
2. Push this project to it:
   ```
   git remote add origin https://github.com/Stephen-Sim/ssim-profile.git
   git push -u origin build-site
   ```
   (or merge `build-site` into your default branch first, then push that).
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", choose **Deploy from a branch**, pick the
   branch you pushed (root `/`), and save.
5. The site will be published at:
   `https://stephen-sim.github.io/ssim-profile/`

**If you use a different repository name or GitHub account/org**, the site
will be served from a different URL, and every hardcoded absolute URL in this
project must be updated to match:

- The `<link rel="canonical">` and `og:url` tags in the `<head>` of all six
  HTML files
- The `Sitemap:` line in `robots.txt`
- All six `<loc>` entries in `sitemap.xml`

All internal links between pages use relative paths (`about.html`,
`images/...`, `css/style.css`, etc.), so they work under any repo name or
subpath without changes — only the absolute canonical/OG/sitemap URLs above
need updating.
