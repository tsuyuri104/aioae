import { browser } from '$app/environment';
import { getDefaultLanguage, loadTranslations } from '$lib/translations';

export const load = async ({ url }) => {
	const { pathname } = url;

	let brawserLang = '';
	if (browser) {
		brawserLang = window.navigator.language;
	}
	const initLocale = getDefaultLanguage(brawserLang);

	await loadTranslations(initLocale, pathname);

	return {};
};
