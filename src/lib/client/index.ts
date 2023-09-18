export const fetchApi = async <T>(path: string): Promise<T> => {
	let res = await fetch(`/api/${path}`);

	if (res.status !== 200) {
		// retry
		res = await fetch(`/api/${path}`);
	}

	if (res.status !== 200) {
		throw new Error('failed to fetch data');
	}

	return await res.json();
};
