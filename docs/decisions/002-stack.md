# 002: Site stack

- **Status:** accepted 2026-06-10
- **Date:** 2026-06-10

## Context

The book needs a GitBook-style site at a13i.org. Per the manifesto's We Practice What We Publish rule, the site itself is the project's first exhibit: it must be exemplary for screen readers and for agents, and measurably so.

## Decision

**Astro Starlight**, deployed to Cloudflare Pages (same pipeline as theblindcomputer.com).

Reasons:

- GitBook-style docs UI out of the box: sidebar ToC, search, prev/next.
- Strong accessibility baseline and a community that treats a11y regressions as bugs.
- Content stays plain markdown in `src/content/docs/`, which keeps the contribution bar low and keeps the corpus diffable.
- Static output is fast, cheap, and trivially mirrorable as raw markdown for agents.
- Founder already operates an Astro Starlight template (the lore-wiki template family), so operational knowledge exists.

Self-application requirements for the site, all release blockers:

1. WCAG 2.2 AA, verified before each deploy.
2. `llms.txt` at the root, and every page available as raw markdown at a predictable URL.
3. Semantic HTML throughout; the site must score perfectly on the project's own audit tooling once that exists.
4. Zero overlay widgets, ever.

## Alternatives considered

- **mdBook:** simple and fast but weaker component ecosystem for the corpus browsing UI.
- **VitePress:** good, but default theme has known accessibility rough edges that would have to be fixed before launch, which is backwards for this project.
- **GitBook (hosted):** closed platform conflicts with the open-by-default rule and prevents the site from practicing what the book publishes.

## Consequences

- Repo gains an Astro app at the root with chapters in `src/content/docs/`; a devcontainer ships with the scaffold per house engineering rules.
- CI gets an accessibility audit gate before deploy.
