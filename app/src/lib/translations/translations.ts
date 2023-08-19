import i18n, { type Config } from 'sveltekit-i18n';

const config: Config = {
	loaders: [
		{
			locale: 'ko',
			key: 'common',
			loader: async () => (await import('./ko/common.json')).default,
		},
		{
			locale: 'ja',
			key: 'common',
			loader: async () => (await import('./ja/common.json')).default,
		},
	],
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
