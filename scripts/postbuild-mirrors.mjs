// Dogfood rule (manifesto section 7, decision 002): every guide page is
// served as raw markdown at a predictable URL, indexed by /llms.txt.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';

const SRC = 'src/content/docs';
const DIST = 'dist';
const SITE = 'https://a13i.org';

const pages = [];
function walk(dir) {
	for (const name of readdirSync(dir)) {
		const p = join(dir, name);
		if (statSync(p).isDirectory()) walk(p);
		else if (name.endsWith('.md')) pages.push(p);
	}
}
walk(SRC);

const entries = [];
for (const file of pages) {
	const raw = readFileSync(file, 'utf8');
	const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
	const fm = m ? m[1] : '';
	const title = (fm.match(/^title:\s*"?(.*?)"?\s*$/m) || [])[1] ?? '';
	const desc = (fm.match(/^description:\s*"?(.*?)"?\s*$/m) || [])[1] ?? '';
	const body = m ? raw.slice(m[0].length) : raw;
	let slug = relative(SRC, file).replace(/\.md$/, '');
	if (slug.endsWith('/index')) slug = slug.slice(0, -'/index'.length);
	if (slug === 'index') continue;
	const out = join(DIST, slug + '.md');
	mkdirSync(dirname(out), { recursive: true });
	writeFileSync(out, `# ${title}\n\n${body.trimStart()}`);
	entries.push({ title, desc, slug });
}

const llms = [
	'# a13i',
	'',
	'> Accessibility AI: the open guide and evidence corpus for interfaces that work for assistive technology and AI agents at once. People first, always.',
	'',
	'Every page of the guide is available as raw markdown at the URLs below.',
	'',
	'## Guide',
	...entries.map((e) => `- [${e.title}](${SITE}/${e.slug}.md)${e.desc ? ': ' + e.desc : ''}`),
	'',
	'## Project',
	'- [Source repository](https://github.com/a13i-org/a13i.org): book, corpus, and governance',
	'',
].join('\n');
writeFileSync(join(DIST, 'llms.txt'), llms);
console.log(`mirrors: ${entries.length} pages + llms.txt`);
