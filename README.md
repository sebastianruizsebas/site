# sebasruiz.site

Personal academic website for Sebastian Ruiz — [www.sebasruiz.site](https://www.sebasruiz.site).

A Jekyll site with a custom "zen" theme (warm-paper light mode + night-sky dark mode).
It started from the [Academic Pages](https://github.com/academicpages/academicpages.github.io)
template but no longer depends on it — the Minimal Mistakes layouts, includes, Sass, and
JS have been removed in favor of a small self-contained theme.

## Structure

- `_layouts/`
  - `zen.html` — the shared shell: nav, side rail, light/dark backgrounds, footer, theme toggle
  - `zen-article.html` — detail pages (posts, talks, portfolio items); chains `zen`
  - `zen-page.html` — simple prose pages (terms, sunposium); chains `zen`
  - `compress.html` — HTML minifier the shell renders through
- `_includes/` — only `base_path`, `seo.html`, `analytics.html` (everything the theme still needs)
- `assets/css/zen.css` — the entire design system (palettes, type, animations) in one file
- `_pages/` — home (`about.html`), publications, talks, teaching, portfolio, CV, Field Notes, 404, terms
- `_talks/`, `_portfolio/`, `_posts/` — content collections
- `images/`, `CNAME`, `_config.yml`

## Adding content

- **Talk / portfolio item:** add a markdown file to `_talks/` or `_portfolio/` with front matter
  (`title`, `date`, `venue`, `location`, `excerpt`, and for portfolio an `image:` path). It renders
  automatically via the `zen-article` layout.
- **Blog post ("Field Notes"):** add `_posts/YYYY-MM-DD-title.md`. Future-dated posts are hidden
  (`future: false`).
- **CV:** edit `_pages/cv.html` directly.

## Running locally

The repo ships a Docker/devcontainer setup:

```bash
docker compose up   # serves at http://localhost:4000
```

Or with a local Ruby toolchain:

```bash
bundle install
bundle exec jekyll serve
```

Note: `_config.yml` enables HTML compression outside the `development` environment, so the Docker
build (which sets `JEKYLL_ENV=docker`) minifies output just like production.
