<script lang="ts">
	export let list: string[];
</script>

<ul class="ul">
	{#each list as item (item)}
		<li class="li">
			<span class="list-item">{`${item}`}</span>
		</li>
	{/each}
</ul>

<style lang="scss">
	@use 'src/style/colors';

	.ul {
		display: flex;
		flex-direction: column;
		row-gap: 0.5em;
	}

	.li {
		display: list-item;
		list-style-position: inside;
		list-style-type: disc;
		&::marker {
			color: colors.get('blue', 'text');
		}
	}

	.list-item {
		position: relative;
		left: -0.5em;
	}
</style>
