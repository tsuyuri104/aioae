import { _getData } from '$api/+server';
import { json } from '@sveltejs/kit';
import type { Blog } from './dto/blog';

export async function GET({ url }) {

  const limit: number = 3;
	let filters: string[] = [];
	const order: string = '-publishedAt';
	
	if(url.searchParams.get('filters')) {
		url.searchParams.get('filters')!.split(',').forEach((filter) => {
			filters.push(filter);
		});
	}

	const data = await _getData<Blog>('blog', {limit, filters, order});

	return json(data);
};

