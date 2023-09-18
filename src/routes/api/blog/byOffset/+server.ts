import { _getData } from '$api/+server';
import type { Blog } from '$lib/micro-cms/dao/blog';
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
	const limit: number = 10;
	const order: string = '-publishedAt';
	const offset: number = (Number(url.searchParams.get('page')) ?? 0) * limit;

	// NEXT : タグ検索、カテゴリ検索、ワード検索ができるようにする

	const data = await _getData<Blog>('blog', { limit, order, offset });

	return json(data);
}
