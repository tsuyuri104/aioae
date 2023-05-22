export type Common = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
};

export type Lang = {
	ja: string;
	ko: string;
};
export type LangType = keyof Lang;
