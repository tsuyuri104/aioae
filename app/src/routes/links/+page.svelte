<script lang="ts">
	import { IconComponents, type Links } from '$api/links/dto/links';
	import ProfileMini from '$components/ProfileMini.svelte';
	import type { LangType } from '$lib/micro-cms/common';
	import { locale } from '$lib/translations/translations';
	import { createPageFullTitle } from '$lib/utilities/creater';
	import { fetchCms } from '$lib/micro-cms/fetchCms';

	$: localeName = $locale as LangType;

	async function getLinks(): Promise<Links> {
		return await fetchCms<Links>('links');
	}

	let promise = Promise.all([getLinks()])
		.then(([data]) => data);
</script>

<svelte:head>
	<title>{createPageFullTitle('Links')}</title>
</svelte:head>

<ProfileMini />

<div class="wrapper">
	{#await promise then data}
		{#each data.contents as item (item.id)}
			<div class={['card', item.category].join(' ')}>
				<a href={item.url} target="_blank" rel="noopener noreferrer" class="link">
					<div class="center">
						<div class="icon">
							{#if item.icon}
								<svelte:component this={IconComponents.get(item.icon)} size="2.5x" />
							{:else}
								<svelte:component this={IconComponents.get('Heart')} size="2.5x" />
							{/if}
						</div>
						<span>{item.title[localeName]}</span>
					</div>
					{#if item.description}
						<p class="description">{item.description[localeName]}</p>
					{/if}
				</a>
			</div>
		{/each}
	{/await}
</div>

<style lang="scss">
	@use '../../style/colors';
	.link {
		display: block;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		row-gap: 0.5rem;
	}
	.description {
		font-size: 0.8rem;
	}
	.wrapper {
		padding: 1em 0;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		row-gap: 1rem;
		column-gap: 1rem;
	}
	.card {
		padding: 0.8rem;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
		background-color: #ffffff;
		border: 1px;
		border-style: solid;
		border-color: rgba(0, 0, 0, 0.1);

		&:hover {
			transition: 0.5s;
			transform: scale(1.05);

			.icon {
				transition: 0.2s;
				transform: scale(1.05);
				color: colors.$pink-dark;
			}
		}

		.center {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
</style>
