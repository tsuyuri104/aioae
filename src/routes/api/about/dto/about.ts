import type { Common, Lang } from '$lib/micro-cms/dao/common';

export type About = Common & {
	name: Lang;
	realName: Lang;
	title: Lang;
	prod: {
		url: string;
		title: Lang[];
		text: Lang[];
	}[];
};
