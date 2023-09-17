import type { LangText } from '$lib/translations';
import type { Common } from './common';

export type Publications = Common & {
	category: string;
	description: LangText;
	name: string;
	published: number;
	url: string;
};
