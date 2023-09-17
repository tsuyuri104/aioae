import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param) => {
	return /^[a-z]{8}$/.test(param);
}) satisfies ParamMatcher;
