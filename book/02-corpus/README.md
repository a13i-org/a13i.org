# How the corpus works

The corpus is the evidence layer of a13i. The book makes claims; the corpus is where claims earn the right to be made.

## What an experiment is

An experiment is a reproducible study of how AI systems perform against interfaces, where accessibility-relevant properties of the interface are the variable. Examples of the genre:

- The same content rendered as semantic HTML and as div soup, with agents performing identical tasks against both.
- Forms with and without programmatic labels, measured for agent completion accuracy.
- Pages with correct, missing, and abusive ARIA, measured for both screen reader output quality and agent comprehension.
- Token cost of equivalent pages at different levels of markup hygiene.

## Standards

Every experiment follows `corpus/TEMPLATE.md` and the lifecycle in `CONTRIBUTING.md` (proposed, in-progress, reported, replicated, contested). The non-negotiables:

- Pinned model IDs, dates, parameters, and full prompts.
- Published materials: the actual HTML variants, tasks, and scoring rubrics.
- Raw outputs alongside summaries.
- Threats to validity stated by the authors, not just by critics.
- Null and negative results published with the same prominence as positive ones.

## Why this rigor

Two failure modes would kill this project. The first is folklore: plausible claims repeated until they harden into best practice without ever being tested. The second is marketing: vendors citing a13i to sell overlays and miracle widgets. Method discipline is the defense against both.
