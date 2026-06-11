// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://a13i.org',
	integrations: [
		starlight({
			title: 'a13i',
			description:
				'Accessibility AI: the open guide and evidence corpus for interfaces that work for assistive technology and AI agents at once.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/a13i-org' },
				{ icon: 'blueSky', label: 'Bluesky', href: 'https://bsky.app/profile/a13i-org.bsky.social' },
			],
			editLink: {
				baseUrl: 'https://github.com/a13i-org/a13i.org/edit/main/',
			},
			sidebar: [
				{ label: 'The Manifesto', slug: 'manifesto' },
				{
					label: 'Foundations',
					items: [
						{ label: 'What is a13i?', slug: 'foundations/what-is-a13i' },
						{ label: 'The Convergence', slug: 'foundations/the-convergence' },
					],
				},
				{ label: 'The Corpus', slug: 'corpus' },
				{ label: 'Patterns', slug: 'patterns' },
				{ label: 'Tooling', slug: 'tooling' },
				{ label: 'The Consortium', slug: 'consortium' },
			],
		}),
	],
});
