import { env } from '$env/dynamic/private';
import { createClient, type MicroCMSListResponse } from 'microcms-js-sdk';

export type EndpointTypes = 'links' | 'about' | 'blog';

export const _getData = async <T>(
	endpoint: EndpointTypes,
	queries: {
		limit?: number;
		filters?: string[];
		order?: string;
		offset?: number;
	}
): Promise<MicroCMSListResponse<T>> => {
	const client = createClient({
		serviceDomain: env.MICROCMS_API_DOMAIN,
		apiKey: env.MICROCMS_API_KEY,
	});

	return await client.getList<T>({
		endpoint,
		queries: {
			filters: queries.filters ? queries.filters.join(',') : '',
			limit: queries.limit,
			orders: queries.order ? queries.order : '',
			offset: queries.offset ?? 0,
		},
	});
};
