import { _getData } from '$api/+server';
import { json } from '@sveltejs/kit';
import type { About } from './dto/about';

export async function GET() {

	const data = await _getData<About>('about', {});

	return json(data);
};

