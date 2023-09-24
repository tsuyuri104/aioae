import i18n, { type Config } from 'sveltekit-i18n';

const config: Config = {
	loaders: [
		{
			locale: 'ko',
			key: 'common',
			loader: async () => (await import('./ko/common.json')).default,
		},
		{
			locale: 'ko',
			key: 'profile',
			loader: async () => (await import('./ko/profile.json')).default,
		},
		{
			locale: 'ko',
			key: 'blog',
			loader: async () => (await import('./ko/blog.json')).default,
		},
		{
			locale: 'ja',
			key: 'common',
			loader: async () => (await import('./ja/common.json')).default,
		},
		{
			locale: 'ja',
			key: 'profile',
			loader: async () => (await import('./ja/profile.json')).default,
		},
		{
			locale: 'ja',
			key: 'blog',
			loader: async () => (await import('./ja/blog.json')).default,
		},
	],
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);

export const getDefaultLanguage = (brawserLang: string | undefined) => {
	const selectedLang = locale.get();
	if (selectedLang) {
		return selectedLang;
	}

	if (!brawserLang) {
		return 'ja';
	}

	if (brawserLang.includes('ko')) {
		return 'ko';
	}

	return 'ja';
};

export type LangText = {
	ja: string;
	ko: string;
};
export type LangType = keyof LangText;
