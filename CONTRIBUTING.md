# Contributing to a13i

There are three ways in: chapters, experiments, and corrections. All three arrive as pull requests.

## Chapters and edits (the book)

The book lives in `src/content/docs/`, one markdown file per chapter. The site sidebar (the table of contents) is configured in `astro.config.mjs`. Propose a new chapter by opening an issue first; fix or improve an existing one by sending the PR directly.

### House style

- Plain language. Short sentences. Explain jargon on first use.
- No em dashes and no en dashes anywhere in prose. Use commas, colons, or full stops.
- Claims about AI behavior must cite a corpus experiment or be explicitly labeled as a hypothesis.
- Write about disabled people with respect and without claiming their experience as your own. Cite first-person sources from disabled authors wherever possible.
- Accessibility guidance must align with WCAG 2.2 AA or explain precisely why it departs from it.

## Experiments (the corpus)

The corpus lives in `corpus/experiments/`, one file per experiment, following `corpus/TEMPLATE.md`.

Lifecycle:

1. **proposed**: hypothesis and method written, no results yet. PRs welcome at this stage; review focuses on method.
2. **in-progress**: someone is running it. Say so in the file to avoid duplicate work.
3. **reported**: results published with materials, prompts, model versions, and raw data linked.
4. **replicated**: an independent party reproduced the result. This is the only status the book may cite as established.
5. **contested**: a replication failed or the method was challenged. The experiment stays public with the dispute attached.

Hard rules:

- Pin everything: model IDs, versions, dates, temperature, prompts.
- Publish raw outputs, not only summaries.
- Negative and null results are first-class contributions.
- Never publish fabricated, extrapolated, or "directionally true" results. This is the fastest way to be banned from the project.

## Corrections

Factual errors, broken reproductions, accessibility failures in our own site: open an issue with the label `correction`. These get priority review.

## Licensing of contributions

By contributing you license code under MIT and content under CC BY 4.0, and you confirm you have the right to do so.
