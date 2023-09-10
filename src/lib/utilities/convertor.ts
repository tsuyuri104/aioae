export const toUpperFirst = (value: string): string => {
	const upper = value.substring(0, 1).toUpperCase();
	const lower = value.slice(1).toLowerCase();
	return upper + lower;
};
