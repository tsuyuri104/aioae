import { loadTranslations, locale } from '$lib/translations';
import type { PageLoad } from './$types';

export const prerender = true;
export const trailingSlash = 'always';

export const load: PageLoad = async ({ url }) => {
	const { pathname } = url;

	const defaultLocale: string = 'ko'; // get from cookie, user session, ...

	const initLocale = locale.get() || defaultLocale; // set default if no locale already set

	await loadTranslations(initLocale, pathname); // keep this just before the `return`

	return {};
};
