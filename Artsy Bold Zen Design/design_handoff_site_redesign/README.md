# Handoff: Personal site redesign (sebastianruizsebas/site)

## Overview
A full visual + structural redesign of Sebastian Ruiz's academic site (currently the stock `academicpages`/Minimal Mistakes Jekyll theme). Goals: feel artsy, bold, and intellectually calm; reward faculty who linger and read closely rather than skim; keep the same content model (Publications, Talks, Teaching, Portfolio, CV) but with a distinct visual system and a light/dark toggle.

## About the design files
The files in `reference/` are a **design reference built with our design tool's own HTML templating format**, not production code. They render as a real, clickable static page (open `reference/index.html` in any browser — click nav items to switch pages, click the pill switch top-right to toggle light/dark), but the underlying markup uses a small proprietary runtime (`support.js`, custom tags, `{{ }}` template holes) specific to that tool. **Do not port `support.js` or the custom tags into the codebase.** The task is to recreate the visual design and behavior described below using this repo's existing environment: Jekyll layouts/includes, Liquid, and Sass (`_sass/`, compiled via `assets/css/main.scss`), following the patterns already established in this codebase.

## Fidelity
**High-fidelity.** Colors, type, and spacing below are final values (given as CSS `oklch()` — supported in all current browsers) — recreate pixel-perfectly.

## Design tokens

**Type:** IBM Plex Serif (display headlines, italic pull-quotes, ledger-row titles), IBM Plex Sans (body copy), IBM Plex Mono (nav, labels, dates, meta — always uppercase, letter-spacing 0.05–0.16em). Load via Google Fonts:
`https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,400;0,600;1,400&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap`

**Light theme colors:**
- Background: `oklch(93% 0.022 75)` (warm sand)
- Headline ink: `oklch(24% 0.02 60)` · Body text: `oklch(26–32% 0.02 60)`
- Muted text: `oklch(45% 0.02 65)` · Faint separators: `oklch(62% 0.02 65)`
- Borders: `oklch(83% 0.02 70)` (major) / `oklch(86% 0.02 70)` (row dividers)
- Accent (links, rules, underlines): `oklch(48% 0.09 350)` — muted plum/rose
- Hero meta-tag accent only: `oklch(48% 0.13 250)` — a blue that nods to the water background

**Dark theme colors:**
- Background: `oklch(14% 0.012 260)` (charcoal-indigo)
- Headline ink: `oklch(93% 0.006 260)` · Body text: `oklch(78% 0.01 260)`
- Muted text: `oklch(60% 0.01 260)` / `oklch(55% 0.01 260)` · Borders: `oklch(28% 0.012 260)` / `oklch(26% 0.012 260)`
- Accent (links, rules, meta tags, star color): `oklch(74% 0.11 350)` — same plum hue as light theme, brightened

**Spacing/type scale:** page padding uses `clamp()` for fluid responsiveness (e.g. `clamp(20px,4vw,40px)` horizontal, `clamp(36px,6vw,64px)` hero top). Hero display name: `clamp(64px,13vw,128px)`. Page titles: `clamp(32px,5vw,44px)`. Body copy 12–16px. Section label chips: 10.5px mono uppercase.

## Screens

All screens share: a persistent **masthead** (wordmark "Sebas" in italic serif, links home, left; nav — Publications / Talks / Teaching / Portfolio / Field Notes / CV — plus a small pill light/dark toggle, right; wraps on narrow widths) and a 42px-wide **vertical spine column** on the left of the content area (`writing-mode: vertical-rl`, mono uppercase, reads "Statistics · Computational Neuroscience · FSU").

### Home
- Portrait: a 64×64 circular drag-and-drop photo placeholder (prototype-only — use a plain `<img>` in production) next to an italic serif pull-quote ("Light finds its own way through.").
- Giant display name "SEBAS" (IBM Plex Serif 600, hero scale above).
- Intro paragraph, max-width 420px: "I study the brain's own models of the world — through statistics, computational neuroscience, and a founder's patience for building community (CompNeuroSociety, FSU)."
- Meta tag row: "He/Him · Tallahassee, FL · FSU" (mono, blue accent in light / plum in dark).
- "Field Notes" ledger: label chip + 5 rows, each `title` (serif 16px) left, `Category · Month Year` (mono, muted) right, thin divider between rows. See Content mapping below for where these come from.

### Publications
Spine + h1 "Publications" + 2px accent rule. Currently empty — italic empty-state line: "Nothing published yet — the ideas are still fermenting."

### Talks
Spine + h1 "Talks" + rule, then a ledger list, most-recent first. Each row: title (serif 18px), venue + location (sans 12px, muted), one-line description (sans 13px), right-aligned month/year (mono). 3 real entries currently.

### Teaching
Same shell as Publications. Empty-state line: "Nothing to show yet."

### Portfolio
Spine + h1 "Portfolio" + rule, then a responsive image grid (`grid-template-columns: repeat(auto-fit, minmax(220px,1fr))`, gap 28px). Each card: photo (3:4 `aspect-ratio`, `object-fit: cover`), title (serif 16px), `Month Year · Location` (mono uppercase 10px), one-line description (sans 13px). 4 real entries currently.

### CV
Spine + h1 "Sebastian Ruiz" + contact/profile line + italic summary, then stacked sections — **Work Experience, Education, Presentations, Portfolio, Skills, References** — each with a mono-uppercase section label + top rule, and ledger-style rows (title/subtitle left, date right; Skills and References render as simple text blocks instead of rows). Sections with no data (Publications, Teaching, Languages, Interests are currently empty in `cv.json`) are omitted entirely, matching the existing `cv-template.html`'s conditional behavior.

## Background motifs (signature detail — subtle, not decorative filler)
- **Light theme, every page:** a fixed, full-viewport layer behind all content: the real water-caustics GIF (`water.gif`, `object-fit:cover`, `mix-blend-mode:multiply`, opacity 0.36) + three large soft blurred color blobs (two blue-toned, one plum) that slowly drift/scale (26–32s ease-in-out loops, `mix-blend-mode:multiply`/`screen`) + a translucent warm-tone wash on top (opacity 0.4) so text stays legible. `position:fixed; z-index:0; pointer-events:none`, with all real content in a `position:relative; z-index:1` wrapper.
- **Dark theme, every page:** a fixed full-viewport SVG starfield — ~60 small dots placed via a seeded RNG, split into 4 groups each twinkling (opacity keyframe) on a slightly different delay, all wrapped in one group with a very slow (90s) overall drift translate, plus a few larger hand-placed "feature stars." Same fixed/z-index treatment as the light theme's background.
- Both are meant to be felt more than seen — keep opacity low, never let them compete with text contrast.

## Interactions & behavior
- **Nav clicks** switch the visible page. The prototype does this with client-side state (single-page). **Recommended for this repo:** make these real distinct Jekyll pages/URLs (`/publications/`, `/talks/`, `/teaching/`, `/portfolio/`, `/cv/`, home at `/`) sharing one layout — simpler, bookmarkable/shareable, consistent with the rest of the site, no SPA needed.
- **Theme toggle** (pill switch, masthead right) flips light/dark instantly. The prototype does **not** persist the choice — add `localStorage` persistence (and honor `prefers-color-scheme` as the default) in the real build.
- **Home portrait** is a drag-and-drop placeholder in the prototype only; ship a real `<img>` pointing at an actual photo.
- No other interactive states beyond standard link hover (underline / color shift to the accent).

## Content → data mapping (read before implementing)
- **Author identity** (name, pronouns, bio, location, employer, email, ORCID/GitHub/LinkedIn) — already in this repo's `_config.yml` under `author:`. Use as-is, no changes needed.
- **CV page** — already-populated `_data/cv.json` (`basics`, `work`, `education`, `presentations`, `portfolio`, `skills`, `references`). Port the existing `_includes/cv-template.html` Liquid loops into the new visual style; keep its empty-section-hiding behavior.
- **Talks page** — iterate `site.talks` (existing `_talks/*.md` collection: front-matter `title`, `venue`, `date`, `location`; body = description). 3 real entries today.
- **Portfolio page** — iterate `site.portfolio` (existing `_portfolio/*.md`: `title`, `venue`, `date`, `location`, `excerpt` with an embedded `<img>` path). 4 real entries today, photos already in `/images/`.
- **Publications / Teaching pages** — iterate `site.publications` / `site.teaching` (both currently empty collections). Render the empty-state copy shown above when the collection has zero entries — don't fabricate placeholder content.
- **Home "Field Notes" list** — NOT from this repo. These 5 items are real posts pulled from the author's other blog repo (`sebastianruizsebas/website`, its `_posts/` folder — "Monty Progress Update / Research Updates," "Hole 2021 Paper (Monty)," "Project Development Through CompNeuroSociety Pt. 3," "Could this be a model for neurons in the neocortex?," "SoundCloud Beats"). Hardcode this curated list for now; if/when those posts move into this repo's own `_posts`, switch to iterating `site.posts` (limit 5).

## Assets
- `water.gif` — not currently in this repo. Comes from this design session; included at `reference/assets/images/water.gif`. Copy it into the repo's `/images/`.
- Poster photos — already exist in the repo at `/images/IMG_1315.jpg`, `/images/20251020_TransferPoster.jpg`, `/images/20250731_BrownPoster.jpg`, `/images/IMG_7663.jpg`. No action needed beyond referencing those existing paths.
- Google Fonts link (see Design tokens) — add to `_includes/head.html` or the new layout's `<head>`.
- The portrait "drag-and-drop" behavior is a prototype-only convenience; not needed in production.

## Not in scope for this handoff
Four small interactive "feature" concepts (a live predictive-coding/Kalman-filter demo, a cursor-evading fish animation, a click-to-grow generative branch sketchpad, and a prediction-error text highlighter) are being explored separately as possible future additions. They are early drafts, not finalized, and intentionally excluded from this handoff.

## Files in this bundle
- `reference/index.html` + `reference/support.js` + `reference/image-slot.js` + `reference/assets/images/*` — a working static reference build. Open `reference/index.html` in a browser to click through all 6 pages and toggle light/dark. Reminder: this is for **looking at**, not for copying its runtime — recreate the markup/CSS/behavior natively in Jekyll.
