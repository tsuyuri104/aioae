//REF: https://github.com/sveltekit-i18n/lib
import { loadTranslations, locale } from '$lib/translations/translations';

export const prerender = true;
export const trailingSlash = 'always';

export const load = async ({ url }) => {
	const { pathname } = url;

	const defaultLocale = 'ko'; // get from cookie, user session, ...

	const initLocale = locale.get() || defaultLocale; // set default if no locale already set

	await loadTranslations(initLocale, pathname); // keep this just before the `return`

	return {};
};
