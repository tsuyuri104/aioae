<script lang="ts">
	import { page } from '$app/stores';
	import { BASE_URL, OGP_BLOG } from '$lib/micro-cms/const';
	import { createPageFullTitle } from '$lib/utilities/creater';

	export let title = '';
	export let summary = '';

	const params: { key: string; value: string }[] = [
		{ key: 'w', value: '1200' },
		{
			key: 'txt',
			value: title,
		},
		{
			key: 'txt-color',
			value: '63564D',
		},
		{
			key: 'txt-align',
			value: 'middle,center',
		},
		{
			key: 'txt-size',
			value: '48',
		},
		{
			key: 'txt-width',
			value: '1000',
		},
		{
			key: 'txt-font',
			value: 'NotoSansJP-Medium',
		},

		{
			key: 'txt-fit',
			value: 'max',
		},
	];

	const thambnail = new URL(`${BASE_URL}${OGP_BLOG}`);
	params.forEach((param) => {
		thambnail.searchParams.append(param.key, param.value);
	});
</script>

<svelte:head>
	<title>{createPageFullTitle(title)}</title>
	<meta
		property="og:url"
		content={`${$page.url}`}
	/>
	<meta
		property="og:type"
		content="article"
	/>
	<meta
		property="og:title"
		content={createPageFullTitle(title)}
	/>
	<meta
		property="og:description"
		content={summary}
	/>
	<meta
		property="og:site_name"
		content="by Tsuyuri"
	/>
	<meta
		property="og:image"
		content={thambnail.href + thambnail.search}
	/>
</svelte:head>
