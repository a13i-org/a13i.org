---
title: "The a13i Manifesto"
description: "Accessibility, reborn in AI. We are using AI to transform web and technology accessibility into a first-class experience for everyone who needs it."
---

## The internet belongs to everyone

The internet was not built for eyes. It was built as a democratic space where information could flow freely to anyone who sought it. The web's inventor said it plainly: "The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect." That sentence is not decoration on the web's history. It is the founding bargain.

Pages, screens, pointers, menus: these are interfaces. They are choices about how to present information, made by people, changeable by people. No interface is sacred, and none of them is the information itself. We hold the right to develop interfaces to the world's information however we wish. We also inherit the obligation that came with the web's founding bargain: whatever interface we build must let everyone in.

## Access is the point. The interface is a choice.

When a person cannot use a website, the information did not fail them. The interface did. Inclusive design has taught the industry where disability actually lives: in the mismatch between a person and a designed thing, never in the person. For decades, the industry treated one interface, the visual page, as the real product, and treated every other way of reaching the information as a translation problem. The accessibility community spent those decades doing the hardest work on the web: bending a sight-first interface toward everyone else, one standard, one audit, and one lawsuit at a time. Their discipline produced the deepest knowledge we have about making interfaces honest. And it produced a lesson the whole industry keeps relearning because it keeps being true: accessibility is essential for people with disabilities and useful for all.

## a11y, reborn in AI

a13i is Accessibility AI: the accessibility tradition, enhanced and reborn in AI. We, all who develop a13i technology, are using AI to transform web and technology accessibility into a first-class experience. Not a bolt-on. The main door.

AI is the first interface technology that adapts to the person instead of demanding that the person adapt to it. An AI that genuinely understands a digital surface can present that surface as fluent conversation for a person who cannot see it, as clear visible text for a person who cannot hear it, as voice control and patient pacing for a person who cannot use a pointer, as a calmer and simpler rendering for a person carrying cognitive load, and as steady guidance for anyone defeated by a form at the end of a long day. One substrate, every modality. a13i is for all who require accessibility, and for the temporary and situational needs that reach every person eventually.

This guide's opening volume goes deep on visual impairment, where our evidence base is strongest today. The other volumes are coming, and the discipline below belongs to all of them.

## The discipline

a13i is the engineering practice of making every digital surface legible to machines, so that machines can make every digital surface usable by every person.

It is concrete. A site that implements a13i modalities ships things like:

- Machine manifests, in the spirit of ai.txt and llms.txt, that tell an AI what the site is, what it offers, and how to use it.
- Every page available as clean markdown at a predictable URL.
- Semantic HTML with honest roles and accessible names, so the DOM means what it says.
- Forms an agent can complete, because every label is a contract the machine can rely on.
- Structure that survives being read without being seen.

None of this is new wisdom. It is the accessibility community's wisdom, applied to a second reader. The corpus in this repository exists to measure exactly how much it pays.

## One hour of engineering, paid twice

A real button, a labeled field, an honest heading outline: each serves a person's screen reader and an AI agent in the same stroke. Accessibility has fought a budget war for decades against the claim that its beneficiaries are a small market. Agents end that argument. The day every customer has an AI assistant that shops, books, files, and reads on their behalf, every customer depends on the same interface honesty disabled users have been requesting all along. The economics finally point the right way. Our job is to document that with numbers until building accessibly is simply how the web is built.

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

If you build for the web: one hour of honest markup now serves two readers, and this guide shows you where it pays. If you build AI tools: the modalities in this book are your substrate, and what can be built on it reaches far past anything we have named. If you live the need for accessibility, or advocate for those who do: this project's governance has a seat reserved for you before it has one for a second vendor.

The internet was founded on the promise that information belongs to everyone. We are building the interface that finally keeps it.
