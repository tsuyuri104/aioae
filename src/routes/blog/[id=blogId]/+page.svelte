<script lang="ts">
	import { page } from '$app/stores';
	import PublishDate from '$components/blog/PublishDate.svelte';
	import Tag from '$components/blog/Tag.svelte';
	import Error from '$components/layout/Error.svelte';
	import { fetchApi } from '$lib/client/index';
	import type { Blog } from '$lib/micro-cms/dao/blog';
	import { error } from '@sveltejs/kit';
	import type { MicroCMSListResponse } from 'microcms-js-sdk';

	async function getBlogData() {
		const id = $page.params.id;
		const data = await fetchApi<MicroCMSListResponse<Blog>>(`blog/byId/${id}`);
		if (data.totalCount === 0) {
			throw error(404);
		}
		return data;
	}

	let promise = getBlogData();
</script>

{#await promise then data}
	{@const blog = data.contents[0]}
	<Tag
		title={blog.title}
		summary={blog.summary}
	/>
{/await}

<article class="article">
	{#await promise then data}
		{@const blog = data.contents[0]}

		<section
			class="section blog-article serif"
			class:ja={blog.lang[0] === 'ja'}
			class:ko={blog.lang[0] === 'ko'}
		>
			<PublishDate publishedAt={blog.publishedAt} />
			<h1>{blog.title}</h1>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html blog.content}
		</section>
	{:catch}
		<Error status={404} />
	{/await}
</article>

<style lang="scss">
	@use 'src/style/colors';
	@use 'src/style/fonts';
	@use 'src/style/shadow';

	.blog-article {
		display: flex;
		flex-direction: column;
		row-gap: 1em;
		--line-height: 1.8em;

		:global(h1) {
			font-weight: 400;
			font-size: 1.2em;
			line-height: var(--line-height);
		}
		:global(h2) {
			font-weight: 400em;
			font-size: 1.2em;
			line-height: var(--line-height);
		}
		:global(h3) {
			font-weight: 400;
			font-size: 1em;
			line-height: var(--line-height);
		}
		:global(p:not(.date)) {
			font-weight: 200;
			line-height: var(--line-height);
		}
		:global(ul) {
			display: flex;
			flex-direction: column;
			row-gap: 0.2em;
			padding-left: 1em;
		}
		:global(li) {
			font-weight: 200;
			line-height: var(--line-height);
			display: list-item;
			list-style-type: disc;
			&::marker {
				color: colors.get('blue', 'text');
			}
		}
	}
</style>
