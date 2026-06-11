---
title: "The a13i Manifesto"
description: "Why a13i exists: AI is becoming the universal interface, and Accessibility AI is the discipline that makes it real for everyone."
---

## The internet was built for eyes

The graphical web made a bet: that every user has eyes, a pointer, and the patience to scan. Everyone else got a translation layer. A screen reader walks a page built for sight and reads it aloud one element at a time, and when the page lies (unlabeled buttons, divs pretending to be controls, meaning trapped in visual layout) the translation breaks. For thirty years the deal offered to blind users was: the internet first, access second, equality never quite. Decades of advocacy narrowed the gap. It could not close it, because the foundation never changed. The interface assumed sight, and everything else was retrofit.

## Why a13i exists

The Blind Computer was invented as a refusal of that deal. It is a voice computer. A blind person calls it, speaks, and the computer does the internet for them: reads, remembers, looks up, fills in, gets it done. There is no screen and no retrofit of one. Conversation is the native interface, and an AI does the seeing.

Building it exposed a truth much bigger than one product. When an AI genuinely understands a digital surface, the barriers of that surface stop mattering. The bottleneck moves. The user is ready, the AI is willing, and the question becomes whether the world's interfaces are legible to the machine acting on a person's behalf. Most are not. That is a solvable engineering problem, and solving it is this project.

The core mission lives here, in a13i. The Blind Computer is its foundational tool: it opens the Accessibility AI driven internet to blind users, and it scratches the surface of what becomes possible once interfaces speak machine.

## AI is the universal interface

For a person using a voice computer, the AI is the browser, the keyboard, and the screen. Intent goes in, results come out. This is the deepest accessibility primitive ever built, because it adapts to the person instead of demanding that the person adapt to it.

The same substrate that gives a blind user the internet by phone can give a low vision user a page that explains itself, give someone with a motor disability a hands-free web, lighten a page for someone carrying cognitive overload, and walk an aging parent through a form that defeated them yesterday. Each of those is a different tool. Underneath all of them sits one requirement: the machine must be able to understand the surface.

## The discipline

a13i, Accessibility AI, is the engineering practice of making every digital surface legible to machines, so that machines can make every digital surface usable by every person.

It is concrete. A site that implements a13i modalities ships things like:

- Machine manifests, in the spirit of ai.txt and llms.txt, that tell an AI what the site is, what it offers, and how to use it.
- Every page available as clean markdown at a predictable URL.
- Semantic HTML with honest roles and accessible names, so the DOM means what it says.
- Forms an agent can complete, because every label is a contract the machine can rely on.
- Structure that survives being read without being seen.

None of this is new wisdom. It is the accessibility community's wisdom, applied to a second reader. The corpus in this repository exists to measure exactly how much it pays.

## One hour of engineering, paid twice

A real button, a labeled field, an honest heading outline: each serves a blind person's screen reader and an AI agent in the same stroke. Accessibility has fought a budget war for decades against the claim that its beneficiaries are a small market. Agents end that argument. The day every customer has an AI assistant that shops, books, files, and reads on their behalf, every customer depends on the same interface honesty blind users have been requesting all along. The economics finally point the right way. Our job is to document that with numbers until building accessibly is simply how the web is built.

## People first, always

Accessibility exists for disabled people. a13i inherits its methods from their decades of advocacy and pays that debt forward. The machines are a means. The people are the point.

Every practice we recommend must be at worst neutral and at best a direct win for human accessibility. A technique that helps machines while degrading the experience of disabled humans fails a13i review by definition.

We also name what we refuse to become. Accessibility-washing: dressing machine readability up as disability progress. The overlay era: vendors selling AI widgets as instant compliance, earning years of justified distrust and, in one prominent case, a one million dollar federal penalty. The critique that the web is being made accessible for AI instead of for people is fair criticism of much of this field, and this project is structured so it never applies here. Disabled people lead as the project grows. Human accessibility is the senior requirement in every trade-off. And no one, ever, may claim that AI makes a site accessible by itself.

## Claims require experiments

The intersection of AI and accessibility is full of plausible folklore. This project publishes corpus experiments with pinned models, published prompts, and reproducible methods. A claim without an experiment is a hypothesis and gets labeled as one. A null result is a publication. A vendor pitch is neither.

## Open by default

The book is open source. The corpus is open data. The governance is public. Anyone may replicate, contest, or extend any result, and contested results stay visible with their challenges attached. The goal is a shared foundation the entire ecosystem can build on, owned by no single vendor.

## We practice what we publish

Everything a13i ships must pass its own bar: legible to screen readers, legible to agents, available as plain markdown, measurable by the tools we recommend. This site serves llms.txt and a markdown mirror of every page. When our own work fails our own audit, that is a release blocker, and you are invited to file the issue.

## An invitation

If you build for the web: one hour of honest markup now serves two readers, and this guide shows you where it pays. If you build AI tools: the modalities in this book are your substrate, and what can be built on it reaches far past anything we have named. If you are a disabled advocate: this project's governance has a seat reserved for you before it has one for a second vendor.

The internet's next interface is being decided right now. Help us make it the first one that includes everyone.
