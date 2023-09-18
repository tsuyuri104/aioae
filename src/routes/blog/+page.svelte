<script lang="ts">
	import { page } from '$app/stores';
	import H1 from '$components/common/H1EnHanddraw.svelte';
	import Tag from '$components/layout/Tag.svelte';
	import { fetchApi } from '$lib/client/index';
	import type { Blog } from '$lib/micro-cms/dao/blog';
	import { t } from '$lib/translations';
	import { toDateType } from '$lib/utilities/dateTimestamp';
	import type { MicroCMSListResponse } from 'microcms-js-sdk';

	async function getBlogList() {
		const pageOffset = $page.url.searchParams.get('page') ?? 0;
		return await fetchApi<MicroCMSListResponse<Blog>>(`blog/byOffset?page=${pageOffset}`);
	}

	let promise = getBlogList();
</script>

<Tag title="Blog" />

<article class="article">
	<section class="section">
		<H1>Blog</H1>
		<div class="card-wrapper">
			{#await promise then data}
				{#each data.contents as blog}
					{@const date = toDateType(new Date(blog.publishedAt))}
					<a href={`/blog/${blog.id}`}>
						<div
							class="card serif"
							class:ja={blog.lang[0] === 'ja'}
							class:ko={blog.lang[0] === 'ko'}
						>
							<div class="header">
								<span class="category">{blog.category[0]}</span>
								<h2 class="title">{blog.title}</h2>
							</div>
							<div class="body">
								<p class="summary">{blog.summary}</p>
							</div>
							<div class="footer">
								<div class="tag-wrapper">
									{#each blog.tags as tag}
										<span class="tag">{tag}</span>
									{/each}
								</div>
								<p class="date">
									{date.year}{$t('common.unit.year')}{date.month}{$t(
										'common.unit.month'
									)}{date.day}{$t('common.unit.day')}
								</p>
							</div>
						</div>
					</a>
				{/each}
			{/await}
		</div>
	</section>
</article>

<style lang="scss">
	@use 'src/style/colors';
	@use 'src/style/fonts';
	@use 'src/style/shadow';

	.article,
	.section {
		display: flex;
		flex-direction: column;
		row-gap: 1em;
	}

	.card-wrapper {
		display: flex;
		flex-direction: column;
		row-gap: 1em;
	}

	.card {
		display: flex;
		flex-direction: column;
		row-gap: 1.2em;
		padding: 1em;
		border-radius: 0.5em;
		background-color: colors.get('white', 'bg-light');
		@include shadow.get();
		position: relative;
	}

	.footer {
		display: flex;
		flex-direction: column;
		row-gap: 0.5em;
	}

	.category {
		position: absolute;
		top: 0;
		left: 0;
		background-color: colors.get('green', 'bg-light');
		padding: 0.5em;
		font-size: 0.8em;
		border-radius: 0.5em 0 0.5em 0;
	}

	.title {
		font-weight: 400;
		font-size: 1.2em;
		margin-top: 1em;
	}

	.summary {
		font-weight: 300;
	}

	.tag-wrapper {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		column-gap: 1em;
	}

	.tag {
		color: colors.get('blue', 'text');
		font-size: 0.8em;
		&::before {
			content: '#';
		}
	}

	.date {
		font-size: 0.8em;
		text-align: right;
		color: colors.get('beige', 'text-light');
	}
</style>
