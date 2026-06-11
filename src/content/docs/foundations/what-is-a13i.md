---
title: "What is a13i?"
description: "a13i is Accessibility AI: engineering, measuring, and advocating for assistive technology and AI agents at once."
---

a13i is a numeronym for Accessibility AI: the letter a, thirteen letters, the letter i. It names the discipline at the intersection of two questions that used to be asked separately:

1. Can a person using assistive technology operate this interface?
2. Can an AI system understand and operate this interface?

a13i is the practice of engineering, measuring, and advocating for both at once, on the grounds that they are mostly the same problem.

## The same problem, twice

A screen reader does not see pixels. It consumes the accessibility tree: the structured, named, role-annotated representation of the page that the browser derives from your markup. When markup is honest (real buttons, real headings, labeled inputs), the tree is rich and a blind user can move through the page quickly. When markup is a pile of styled divs, the tree is mud.

An LLM agent does not see pixels either, or sees them expensively and lossily. It consumes the DOM, the accessibility tree, or a text rendering of the page. Honest markup gives it the same gifts it gives a screen reader: names, roles, structure, and a reading order that matches meaning. Div soup costs it the same way too, and adds a second tax measured in tokens and dollars.

This overlap is the founding observation of a13i. It is also a testable claim, which is why this project ships a corpus and not just a manifesto. Where the overlap holds, we document it. Where it breaks (and it does break in places; some things that help agents do nothing for humans, and the reverse), we document that too.

## What a13i is not

- It is not a replacement for a11y. Human accessibility is the senior discipline here and the source of most of our methods. See the manifesto, People First, Always.
- It is not an overlay product or a compliance widget. a13i is knowledge and evidence, free to use.
- It is not vendor advocacy. Experiments pin their models and publish their methods so that results outlive any one provider.

## Who this guide is for

Web developers who want one effort to pay out twice. Accessibility specialists who want leverage with teams that suddenly care about agents. AI engineers whose browsing agents keep failing on real-world pages. Product owners deciding what "machine readable" should mean for their roadmap.
