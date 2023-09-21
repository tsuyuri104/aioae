import type { OgpInfo } from '$api/ogp/dto/ogpInfo';
import { fetchApi } from '..';

export function setOgp(element: HTMLElement) {
	const links = element.querySelectorAll('a');
	for (const link of links) {
		if (link.href === link.innerText) {
			fetchApi<OgpInfo>(`ogp?url=${link.href}`).then((info) => {
				setImage(link, info);
			});
		}
	}
}

function setImage(dom: HTMLAnchorElement, ogp: OgpInfo): HTMLAnchorElement {
	dom.innerText = ogp.title ?? '';
	if (ogp.image) {
		const img = document.createElement('img');
		img.src = ogp.image ?? '';
		img.alt = ogp.image_alt ?? '';
		img.width = ogp.image_width ?? 0;
		img.height = ogp.image_height ?? 0;
		img.classList.add('ogp');
		dom.appendChild(img);
	}
	return dom;
}
