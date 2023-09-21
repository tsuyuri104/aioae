import { json } from '@sveltejs/kit';
import { JSDOM } from 'jsdom';
import type { OgpInfo } from './dto/ogpInfo.js';

export async function GET({ url }) {
	const targetUrl = url.searchParams.get('url');

	if (!targetUrl) {
		return json(undefined);
	}

	const res = await fetch(targetUrl);
	const text = await res.text();

	const dom = new JSDOM(text);

	const meta = dom.window.document.querySelectorAll('meta[property^="og:"]');

	let ogInfo: OgpInfo = {};

	for (const m of meta) {
		const propName = m.getAttribute('property')?.replace('og:', '').replace(':', '_') ?? '';
		const content = m.getAttribute('content') ?? '';
		switch (propName) {
			case 'image':
				ogInfo.image = content;
				break;
			case 'image_alt':
				ogInfo.image_alt = content;
				break;
			case 'image_width':
				ogInfo.image_width = Number(content);
				break;
			case 'image_height':
				ogInfo.image_height = Number(content);
				break;
			case 'site_name':
				ogInfo.site_name = content;
				break;
			case 'title':
				ogInfo.title = content;
				break;
			case 'url':
				ogInfo.url = content;
				break;
			case 'description':
				ogInfo.description = content;
				break;
			default:
				break;
		}
	}

	return json(ogInfo);
}
