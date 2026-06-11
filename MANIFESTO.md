# The a13i Manifesto

## 1. The web has a second kind of reader now

For thirty years we built interfaces for human eyes and hands, and we treated every other consumer of the page as an afterthought. Screen reader users lived in that afterthought. Today AI agents read the same pages, fill the same forms, and navigate the same menus, and they stumble in many of the same places a screen reader does. The afterthought is now everyone's problem.

## 2. We have been here before

The accessibility community spent decades learning how to make interfaces legible to software that mediates between a person and a page. Semantic structure, accessible names, predictable focus order, honest labels. That body of knowledge is the closest thing the industry has to a manual for machine-readable interfaces, and most AI teams have never read it.

## 3. The double dividend

A correct heading outline, a labeled control, a real button element, a sensible reading order: each of these serves a blind human using a screen reader and an LLM consuming the DOM. When the same hour of engineering pays out twice, the economics of accessibility change. a13i exists to document, measure, and publicize that double dividend.

## 4. People first, always

Accessibility exists for disabled people. a13i borrows its discipline and pays it back. Every practice this project recommends must be, at worst, neutral for human accessibility, and at best a direct improvement to it. A technique that helps machines while degrading the experience of disabled humans fails a13i review by definition. We are allies of the a11y community, never a replacement for it, and never a justification for skipping it.

We also name the failure modes we are determined to avoid, because the community has seen them before. Accessibility-washing: dressing machine readability up as disability progress. The overlay era: vendors selling AI widgets as instant compliance, which earned years of justified distrust and, in one prominent case, a one million dollar FTC penalty. The critique that "the web is being made accessible for AI, not people" is fair, and this project is structured so it never applies here: people come first, disabled leadership is recruited as the project grows, and no one may claim that AI makes a site accessible by itself.

## 5. Claims require experiments

The intersection of AI and accessibility is full of plausible folklore. This project publishes corpus experiments with pinned models, published prompts, and reproducible methods. A claim without an experiment is labeled a hypothesis. A vendor pitch without evidence is labeled a vendor pitch.

## 6. Open by default

The book is open source. The corpus is open data. The governance is public. Anyone may replicate, contest, or extend any result, and contested results stay visible with their challenges attached. The goal is a shared foundation the entire ecosystem can build on, owned by no single vendor.

## 7. Dogfood or it didn't happen

Everything a13i publishes must itself be exemplary: accessible to screen readers, legible to agents, available as plain markdown, and measurable by the same tools we recommend. If our own site fails our own audits, that is a release blocker.
