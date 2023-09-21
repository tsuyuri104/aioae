<script lang="ts">
	import PublishDate from '$components/blog/PublishDate.svelte';
	import Tag from '$components/blog/Tag.svelte';
	import { setOgp } from '$lib/client/action/setOgp';
	import type { PageData } from './$types';

	export let data: PageData;
	let blog = data.contents[0];
</script>

<Tag
	title={blog.title}
	summary={blog.summary}
/>

<article class="article">
	<section
		class="section blog-article serif"
		class:ja={blog.lang[0] === 'ja'}
		class:ko={blog.lang[0] === 'ko'}
		use:setOgp
	>
		<PublishDate publishedAt={blog.publishedAt} />
		<h1>{blog.title}</h1>
		{@html blog.content}
	</section>
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
			font-weight: 300em;
			font-size: 1.2em;
			line-height: var(--line-height);
		}
		:global(h3) {
			font-weight: 300;
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
		:global(a) {
			color: colors.get('green', 'text');
		}
		:global(.ogp) {
			width: 100%;
			height: auto;
		}
	}
</style>
