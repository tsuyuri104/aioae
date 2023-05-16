//REF: https://github.com/sveltekit-i18n/lib
import { browser } from '$app/environment';
import type { LangType } from '$cmstypes/common';
import { loadTranslations, locale } from '$lib/translations/translations';
import type { PageLoad } from './$types';

export const prerender = true;
export const trailingSlash = 'always';

export const load: PageLoad = async ({ url }) => {
	const { pathname } = url;

	const defaultLocale = (browser ? window.navigator.language : 'ko') as LangType; // get from cookie, user session, ...

	const initLocale = locale.get() || defaultLocale; // set default if no locale already set

	await loadTranslations(initLocale, pathname); // keep this just before the `return`

	return {};
};
