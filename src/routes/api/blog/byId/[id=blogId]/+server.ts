import { _getData } from '$api/+server';
import type { Blog } from '$lib/micro-cms/dao/blog';
import { json } from '@sveltejs/kit';

export async function GET({ params }) {
	const id: string = params.id;
	const filters: string[] = [`id[equals]${id}`];
	const data = await _getData<Blog>('blog', { filters });
	return json(data);
}
