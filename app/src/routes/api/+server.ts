import { env } from '$env/dynamic/private';
import { createClient, type MicroCMSListResponse } from 'microcms-js-sdk';

export type EndpointTypes = 'links' | 'about' | 'blog';

export const _getData = async <T>(
  endpoint: EndpointTypes,
  queries:{
  limit?: number,
  filters?: string[],
}): Promise<MicroCMSListResponse<T>> => {
	const client = createClient({
		serviceDomain: env.API_DOMAIN,
		apiKey: env.API_KEY_LINKS,
	});

	return await client.getList<T>({
		endpoint,
		queries: {
			filters: queries.filters ? queries.filters.join(',') : '',
			limit: queries.limit,
		}
	});
};