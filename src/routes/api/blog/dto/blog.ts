import type { Common, LangType } from '$lib/micro-cms/dao/common';

export type Blog = Common & {
	title: string;
	content: string;
	lang: LangType;
	tag: string;
};
