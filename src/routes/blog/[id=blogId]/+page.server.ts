import { _getMicroCmsData } from '$lib/micro-cms/+server';
import type { Blog } from '$lib/micro-cms/dao/blog';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const id: string = params.id;
	const filters: string[] = [`id[equals]${id}`];
	const data = await _getMicroCmsData<Blog>('blog', { filters });

	if (data.totalCount === 0) {
		throw error(404);
	}

	return {
		...data,
	};
};
