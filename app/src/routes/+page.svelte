<script lang="ts">
	import type { About } from '$api/links/dto/about';
	import type { Blog } from '$api/links/dto/blog';
	import { IconComponents, type Links } from '$api/links/dto/links';
	import { page } from '$app/stores';
	import type { LangType } from '$lib/micro-cms/common';
	import { fetchCms } from '$lib/micro-cms/fetchCms';
	import { EYECATCH_COLOR, EYECATCH_URL, PROFILE_URL } from '$lib/micro-cms/ogp';
	import { locale } from '$lib/translations';
	import { createPageFullTitle } from '$lib/utilities/creater';

	$: localeName = $locale as LangType;

	async function getAbout(): Promise<About | Error> {
		return await fetchCms<About>(`about`);
	}

	async function getLinks(): Promise<Links | Error> {
		return await fetchCms<Links>(`links?filters=inTop[equals]true`);
	}

	async function getBlog(): Promise<Blog | Error> {
		return await fetchCms<Blog>(`blog`);
	}

	let promiseAbout = getAbout();
	let promiseLinks = getLinks();
	let promiseBlog = getBlog();
</script>

<svelte:head>
	<title>{createPageFullTitle('Top')}</title>
	<meta property="og:url" content={$page.url} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={createPageFullTitle('Top')} />
	<meta property="og:description" content="Tsuyuri's web page" />
	<meta property="og:site_name" content="by Tsuyuri" />
	<meta property="og:image" content={`${PROFILE_URL}`} />
</svelte:head>

<div class="wrapper">
	<img src="/images/profile.jpg" alt="profile" class="photo" />
	{#await promiseAbout then data}
		<span class="nickname">{data.name[localeName]}</span>
	{/await}
	<div class="links-wrapepr">
		{#await promiseLinks then data}
			{#each data.contents as item}
				<a href={item.url} target="_blank" rel="noopener noreferrer" class="link">
					<svelte:component this={IconComponents.get(item.icon)} size="1.5x" />
				</a>
			{/each}
		{/await}
	</div>
	{#await promiseAbout then data}
		<div class="product-wrapper">
			<h2 class="h2">Prodcution</h2>
			<dl class="product-list">
				{#each data.product as prod}
					<div class="item">
						<dt class="item-head">
							<a href={prod.url} target="_blank" rel="noopener noreferrer" class="link">
								{prod.title[0][localeName]}
							</a>
						</dt>
						<dd class="item-body">{prod.text[0][localeName]}</dd>
					</div>
				{/each}
			</dl>
		</div>
	{/await}
	{#await promiseBlog then data}
		{#if data.totalCount > 0}
			<div class="blog-wrapper">
				<h2 class="h2">Blog</h2>
				{#each data.contents as item}
					<div class="blog-item">
						<div class="item-head">
							<img
								src={`${EYECATCH_URL}?txt=${item.title}&txt-size=84&txt-align=middle,center&txt-color=${EYECATCH_COLOR}`}
								alt={item.title}
								class="eyecatch"
							/>
						</div>
						<div class="item-body">
							{item.title}
						</div>
					</div>
				{/each}
			</div>
		{/if}
	{/await}
</div>

<style lang="scss">
	@use '../style/colors';

	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 1.8em;
	}
	.photo {
		width: 150px;
		border-radius: 25%;
	}
	.nickname {
		font-size: 1.25rem;
	}
	.link {
		&:hover {
			color: colors.$pink-dark;
		}
	}
	.product-wrapper,
	.blog-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 1em;
	}
	.h2 {
		font-size: 1.5rem;
	}
	.product-list {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		row-gap: 0.5em;
	}
	.item {
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 0.5em;
		width: 300px;
		background-color: #ffffff;
		padding: 1em;
		border-radius: 1em;
	}
	.blog-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 0.5em;
		width: 300px;
		background-color: #ffffff;
		padding: 0 1em 1em 1em;
		border-radius: 1em;
	}
	.eyecatch {
		width: 300px;
		border-radius: 1em 1em 0 0;
	}
</style>
