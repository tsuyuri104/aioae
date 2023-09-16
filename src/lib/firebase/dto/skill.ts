import type { LangText } from '$lib/translations';
import type { Common } from './common';

export type Skill = Common & {
	certification: Certification[];
	pg: Pg[];
	position: Position[];
};
export type Certification = {
	name: string;
	year: number;
};

export type Pg = {
	category: 'language' | 'framework';
	name: string;
	experience_year: number;
	last_used: number;
};

export type Position = {
	name: LangText;
	experience_year: number;
};
