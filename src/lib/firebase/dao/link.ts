import type { LangText } from '$lib/translations';

export type Link = {
	category: 'PG' | 'SNS' | 'Other';
	description: LangText;
	title: LangText;
	url: string;
	on_top: boolean;
	visible: boolean;
};
