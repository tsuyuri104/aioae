import type { LangText } from '$lib/translations';

export type Link = {
	category: string;
	description: LangText;
	title: LangText;
	url: string;
};
