import type { LangType } from '$lib/translations';
import type { Common } from './common';

export type Blog = Common & {
	title: string;
	content: string;
	summary: string;
	lang: LangType;
	category: string;
	tags: string[];
};
