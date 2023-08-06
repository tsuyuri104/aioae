import { _getData } from '$api/+server';
import { json } from '@sveltejs/kit';
import type { Links } from './dto/links';

export async function GET({ url }) {

	const limit = 50;
	let filters: string[] = [];
	
	if(url.searchParams.get('filters')) {
		url.searchParams.get('filters')!.split(',').forEach((filter) => {
			filters.push(filter);
		});
	}

	const data = await _getData<Links>('links', {limit, filters});

	return json(data);
};

