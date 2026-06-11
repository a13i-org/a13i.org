# Landscape: AI and accessibility, June 2026

A snapshot of the prior art and the field at founding time. The book cites from here; the corpus extends from here.

## The core finding already exists

- **"Is the Web Accessible for AI Agents?" (CHI 2026, UC Berkeley and University of Michigan, A11y-CUA dataset).** Tested agents on 60 desktop and web tasks under standard, keyboard-only, and magnified conditions, with study data from sighted, blind, and low vision users. Agents succeeded on roughly 78 percent of tasks against fully accessible pages, and success dropped by half or more when accessibility barriers were present. The headline framing, that the same barriers blocking disabled users also block AI agents, is published and citable. https://create.uw.edu/chi-2026-papers-and-presentations/
- **Related papers:** LLM-driven optimization of HTML structure for screen reader navigation (arXiv 2502.18701); LLM-generated code perpetuating UI accessibility barriers (W4A 2025); "Build the web for agents, not agents for the web" (arXiv 2506.10953); machine-readable ads (arXiv 2507.12844).

## Industry movements

- **Agent Experience (AX).** Coined by Mathias Biilmann of Netlify; Vercel, Sanity, and Mintlify publish in this space (agentexperience.ax). Developer-tooling framing, no disability dimension. a13i is the bridge between this crowd and the accessibility crowd.
- **llms.txt.** Proposed by Jeremy Howard (Answer.AI); serves clean markdown to agents; adopted by Netlify, Mintlify, and others.
- **Agent benchmarks.** WebArena, Mind2Web, WebVoyager. WebArena already feeds agents accessibility-tree text as a primary page representation, which makes the accessibility tree the de facto agent interface.

## Organizations in adjacent territory

- **W3C WAI, APA Working Group.** Maintains "Accessibility of Machine Learning and Generative AI" (w3c.github.io/ai-accessibility); ran the 2023 AI and Accessibility Research Symposium. The standards-body home for this topic.
- **Teach Access.** Industry and academia coalition on accessibility skills, now publishing on AI with Every Learner Everywhere. Closest existing consortium; education focused.
- **AIxDisability (aixdisability.org).** Community AI literacy for disabled people.
- Structural template: XR Access, the XR accessibility consortium. a13i can be the equivalent body for AI agents and the web, complementary to all of the above.

## The landmines

- **"The web is being made accessible for AI, not people" (TechPolicy.Press).** Names accessibility-washing directly, and documents resentment that decades of disabled advocacy were ignored until machines needed the same accommodations. Required reading before writing any a13i public copy. The manifesto's people-first section exists because this critique is correct about much of the field.
- **The accessiBe precedent.** In January 2025 the FTC fined accessiBe one million dollars for deceptive claims that an AI overlay made sites WCAG compliant, after years of campaigning by disabled advocates including Haben Girma and longtime critics like Adrian Roselli. Any project combining AI, accessibility, and commerce triggers an "is this another overlay?" reflex. a13i never claims AI makes a site accessible by itself, and bans overlay framing outright.
- **"Nothing about us without us."** Research (arXiv 2508.16607) documents AI organizations sidelining disability inclusion. The governance answer here: disabled contributors and leaders recruited as the project grows, and the code of conduct's rule that contributions about disabled people's experience must cite or involve disabled people.

## Naming check

The term a13i was checked on 2026-06-10. Verdict: minor collisions only, details in decision record 001. The Accessibility AI numeronym slot was empty at founding time.

## Standards and legal snapshot (verified 2026-06-11)

- **WCAG 2.2** remains the W3C Recommendation (Oct 2023, errata Dec 2024; ISO/IEC 40500:2025 as of Oct 2025). **WCAG 3** is an incomplete Working Draft (latest 2026-03-03): plain-language outcome statements replace success criteria, conformance moves toward Bronze/Silver/Gold, and W3C states it will not supersede WCAG 2 for years.
- **European Accessibility Act** applies since 28 June 2025 to e-commerce, banking, transport, telecom, e-books, and consumer digital services sold into the EU; baseline EN 301 549 (incorporating WCAG 2.1 AA); enforcement is active.
- **US DOJ ADA Title II web rule:** original deadlines (April 2026 and 2027) were EXTENDED one year by an Interim Final Rule effective 2026-04-20: now 26 April 2027 (population 50k+) and 26 April 2028. Do not cite the 2026 dates as current.
- **W3C APA Working Group** maintains the Editor's Draft "Accessibility of machine learning and generative AI" (updated 2026-03-28): the official register on AI is cautious optimism ("the potential for AI benefits within the web accessibility space could be profound") paired with explicit reliability and bias caveats and a warning against brute-force approaches that bypass inclusive design expertise. a13i's voice mirrors that calibration.
- **Language conventions:** W3C WAI house style is person-first ("people with disabilities"); many communities prefer identity-first ("blind people", "Deaf", "autistic"), and expressed preference of disabled people supersedes style rules. The official accessibility-benefit line is "essential for people with disabilities and useful for all" (the popular "essential for some, useful for all" is paraphrase).
