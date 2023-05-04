<script lang="ts">
	import { page } from '$app/stores';
	import { t } from '$lib/translations/translations';
</script>

<div>
	<h1>{$page.status}</h1>
	<p>{$t(`common.error.${$page.status}`)}</p>
</div>

<style lang="scss">
	h1 {
		font-size: 2.5em;
	}
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
