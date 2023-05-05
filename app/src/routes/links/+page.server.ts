import type { Links } from '$cmstypes/links';
import { env } from '$env/dynamic/private';
import { createClient } from 'microcms-js-sdk';

export const load = async () => {
	const client = createClient({
		serviceDomain: env.API_DOMAIN,
		apiKey: env.API_KEY_LINKS
	});
	const links = await client.getList<Links>({
		endpoint: 'links',
		queries: { limit: 50 }
	});
	return {
		links
	};
};
