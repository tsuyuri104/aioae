<script lang="ts">
	import { page } from '$app/stores';
	import { locale, t } from '$lib/translations';
	import { createPageFullTitle } from '$lib/utilities/creater';
</script>

<svelte:head>
	<title>{createPageFullTitle('Error')}</title>
</svelte:head>

<div
	class="wrapper serif"
	class:ja={$locale === 'ja'}
	class:ko={$locale === 'ko'}
>
	<h1 class="h1">{$page.status}</h1>
	<p>{$t(`common.error.${$page.status}`)}</p>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.h1 {
		font-size: 2.5em;
	}
</style>
