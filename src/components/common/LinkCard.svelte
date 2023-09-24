<script lang="ts">
	import type { LangText, LangType } from '$lib/translations';
	import { locale } from '$lib/translations';
	import TextLink from './TextLink.svelte';

	$: lang = $locale as LangType;

	export let href: string;
	export let text: LangText | string;
	export let description: LangText | undefined;
</script>

<div class="card">
	<div class="header">
		<TextLink {href}>
			{#if typeof text === 'string'}
				{text}
			{:else}
				{text[lang]}
			{/if}
		</TextLink>
	</div>
	<div class="body">
		{#if description}
			<p>{description[lang]}</p>
		{/if}
	</div>
</div>

<style lang="scss">
	@use 'src/style/colors';
	@use 'src/style/shadow';

	.card {
		display: flex;
		flex-direction: column;
		border-radius: 0.5em;
		overflow: hidden;
		background-color: colors.get('white', 'bg-light');
		@include shadow.get();
	}

	.header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 0.5em;
	}

	.body {
		display: flex;
		flex-direction: column;
		padding: 0.5em 1em 1em;
	}
</style>
