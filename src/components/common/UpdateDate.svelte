<script lang="ts">
	import type { Common } from '$lib/firebase/dto/common';
	import { t } from '$lib/translations';
	import { calcDiffDays, toDateTypeFromTimestamp } from '$lib/utilities/dateTimestamp';

	export let promise: Promise<Common>;
	const today = new Date();
</script>

<div class="wrapper">
	<p class="p">
		<span class="span">
			{$t('common.lastUpdate.title')}
		</span>
		<span class="span">
			{#await promise}
				...
			{:then data}
				{@const date = toDateTypeFromTimestamp(data.updated)}
				{@const diffDays = calcDiffDays(today, data.updated.toDate())}
				{date.year}{$t('common.lastUpdate.year')}
				{#if diffDays < 700}
					{date.month}{$t('common.lastUpdate.month')}
				{/if}
				{#if diffDays < 100}
					{date.day}{$t('common.lastUpdate.day')}
				{/if}
			{/await}
		</span>
	</p>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		justify-content: flex-end;
	}
	.p {
		display: flex;
		flex-direction: row;
		column-gap: 0.5em;
		font-size: 0.8em;
	}
</style>
