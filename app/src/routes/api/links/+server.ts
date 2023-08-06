import { _getData } from '$api/+server';
import { json } from '@sveltejs/kit';
import type { Links } from './dto/links';

export async function GET() {

	const data = await _getData<Links>('links', {limit: 50});

	return json(data);
};

