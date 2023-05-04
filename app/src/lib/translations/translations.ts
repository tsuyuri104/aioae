import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = {
	loaders: [
		{
			locale: 'ko',
			key: 'common',
			loader: async () => (await import('./ko/common.json')).default
		},
		{
			locale: 'ko',
			key: 'home',
			routes: ['/'], // you can use regexes as well!
			loader: async () => (await import('./ko/home.json')).default
		},
		{
			locale: 'ja',
			key: 'common',
			loader: async () => (await import('./ja/common.json')).default
		},
		{
			locale: 'ja',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./ja/home.json')).default
		}
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
