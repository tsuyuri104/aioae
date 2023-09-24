import { _getMicroCmsData } from '$lib/micro-cms/+server';
import type { Blog } from '$lib/micro-cms/dao/blog';

export const load = async ({ url }) => {
	const limit: number = 10;
	const order: string = '-publishedAt';

	const data = await _getMicroCmsData<Blog>('blog', { limit, order });

	return {
		...data,
	};
};
