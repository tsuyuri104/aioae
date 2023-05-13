<script lang="ts">
	import type { LangType } from '$cmstypes/common';
	import { IconComponents } from '$cmstypes/links';
	import ProfileMini from '$components/ProfileMini.svelte';
	import { locale } from '$lib/translations/translations.js';
	import { createPageFullTitle } from '$lib/utilities/creater';

	export let data;
	$: localeName = $locale as LangType;
</script>

<svelte:head>
	<title>{createPageFullTitle('Links')}</title>
</svelte:head>

<ProfileMini />

<div class="wrapper">
	{#each data.links.contents as item (item.id)}
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
</div>

<style lang="scss">
	@use '../../style/mixins';
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

		@include mixins.ForPc() {
			grid-template-columns: repeat(4, 1fr);
		}
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
