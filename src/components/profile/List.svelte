<script lang="ts">
	export let list: string[];
</script>

<ul class="ul">
	{#each list as item (item)}
		<li class="li">
			{`${item}`}
		</li>
	{/each}
</ul>

<style lang="scss">
	@use 'src/style/colors';

	.ul {
		display: flex;
		flex-direction: column;
		row-gap: 0.5em;
		padding-left: 1em;
	}

	.li {
		display: list-item;
		list-style-type: disc;
		&::marker {
			color: colors.get('blue', 'text');
		}
	}
</style>
