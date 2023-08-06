<script lang="ts">
	import { createPageFullTitle } from '$lib/utilities/creater';
	import type { About } from '$api/links/dto/about';
	import { locale } from '$lib/translations/translations';
	import type { LangType } from '$lib/micro-cms/common';
	import { IconComponents, type Links } from '$api/links/dto/links';
	import type { Blog } from '$api/links/dto/blog';
	import { EYECATCH_URL, EYECATCH_COLOR, PROFILE_URL } from '$lib/micro-cms/ogp'
	import { page } from '$app/stores';

	$: localeName = $locale as LangType;
	
	async function getAbout(): Promise<About | Error> {
		const res = await fetch(`/api/about`);
		return await res.json();
	}

	async function getLinks(): Promise<Links | Error> {
		const res = await fetch(`/api/links?filters=inTop[equals]true`);
		return await res.json();
	}

	async function getBlog(): Promise<Blog | Error> {
		const res = await fetch(`/api/blog`);
		return await res.json();
	}

	let promise = Promise.all([getAbout(), getLinks(), getBlog()])
		.then(([about, links, blog]) =>  {
			return {
				about,
				links,
				blog,
			};
		})
		.catch((error) => error);
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
	{#await promise then data}
		<img src="/images/profile.jpg" alt="profile" class="photo" />
		<span class="nickname">{data.about.name[localeName]}</span>
		<div class="links-wrapepr">
			{#each data.links.contents as item}
				<a href={item.url} target="_blank" rel="noopener noreferrer" class="link">
					<svelte:component this={IconComponents.get(item.icon)} size="1.5x" />
				</a>
			{/each}
		</div>
		{#if data.about.product.length > 0}
			<div class="product-wrapper">
				<h2 class="h2">Prodcution</h2>
				<dl>
					{#each data.about.product as prod}
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
		{/if}
		{#if data.blog.totalCount > 0}
			<div class="blog-wrapper">
				<h2 class="h2">Blog</h2>
				{#each data.blog.contents as item}
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
	.h2{
		font-size: 1.5rem;
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
