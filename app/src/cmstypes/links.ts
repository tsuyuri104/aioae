import type { Common } from './common';

export type Links = Common & {
	url: string;
	titleKo: string;
	titleJa: string;
	descriptionKo: string;
	descriptionJa: string;
	category: string[];
};
