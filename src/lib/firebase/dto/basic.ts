import type { LangText } from '$lib/translations';
import type { Common } from './common';

export type Basic = Common & {
	birth: number;
	name: LangText & { en: string };
	real_name: string;
	summary: LangText;
	title: string;
};
