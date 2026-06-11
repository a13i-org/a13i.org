---
id: EXP-001
title: Semantic HTML vs div soup, agent task performance and token cost
status: proposed
authors:
  - Acea Spades (Sundragon Tech / The Blind Computer)
created: 2026-06-10
updated: 2026-06-10
models:
  - TBD at run time. Plan: one frontier model and one small model from at least two providers, pinned by exact ID and date.
tags: [semantic-html, token-cost, agents]
---

# EXP-001: Semantic HTML vs div soup, agent task performance and token cost

## Hypothesis

Holding content and visual design constant, LLM agents complete information-finding and form-completion tasks more accurately and at lower token cost against semantic HTML than against div-only markup. Falsified if accuracy and cost are statistically indistinguishable across variants.

## Method

- **Materials:** three variants of the same small e-commerce page set (product list, product detail, checkout form), pixel-identical in a browser:
  1. `semantic`: native elements, correct headings, labeled controls, landmarks.
  2. `soup`: divs and spans only, click handlers, visual-only labels, no landmarks.
  3. `soup+aria`: variant 2 retrofitted with ARIA roles and names.
- **Tasks:** (a) answer five factual questions about the catalog, (b) locate the price and shipping policy, (c) complete the checkout form with supplied test data, (d) state which form fields are required.
- **Procedure:** each model runs each task against each variant 10 times, fresh context per trial. Inputs tested in two modes: raw HTML in context, and accessibility-tree text in context. Temperature 0 where the provider allows it.
- **Metrics:** task accuracy against an answer key; input token count per trial; for form tasks, field-level correctness. Scoring rubric published with materials.

## Results

None yet.

## Threats to validity

- Synthetic pages may understate real-world soup, which is usually worse.
- Two modes of page input do not cover screenshot-based agents; a follow-up experiment should.
- Model training data may contain accessibility advice that biases behavior on obviously labeled variants.

## Replications

| Date | Replicator | Models | Outcome | Link |
|---|---|---|---|---|

## Discussion

This is the corpus's foundation experiment because it tests the founding observation of a13i directly. Until it reaches replicated status, the book must describe the semantic-markup advantage as a hypothesis. Anecdotal motivation, for the record and clearly labeled as anecdote: in building The Blind Computer, pages that worked well for screen reader users were consistently the pages its agents handled well, and the failures shared root causes. That experience motivates the hypothesis and proves nothing.
