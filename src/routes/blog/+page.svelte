<script lang="ts">
	import HashTags from '$components/blog/HashTags.svelte';
	import PublishDate from '$components/blog/PublishDate.svelte';
	import H1 from '$components/common/H1EnHanddraw.svelte';
	import Tag from '$components/layout/Tag.svelte';
	import { t } from '$lib/translations';
	import type { PageData } from './$types';

	export let data: PageData;
	let blogs = data.contents;
</script>

<Tag title="Blog" />

<article class="article">
	<section class="section">
		<H1>Blog</H1>
		<div class="card-wrapper">
			{#each blogs as blog}
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
							<HashTags tags={blog.tags} />
							<PublishDate publishedAt={blog.publishedAt} />
						</div>
					</div>
				</a>
			{:else}
				<p>{$t('blog.error.not_found')}</p>
			{/each}
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
</style>
