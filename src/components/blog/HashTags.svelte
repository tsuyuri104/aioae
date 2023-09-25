<script lang="ts">
	export let tags: string[];
</script>

<div class="tag-wrapper">
	{#each tags as tag}
		<span class="tag">{tag}</span>
	{/each}
</div>

<style lang="scss">
	@use 'src/style/colors';

	.tag-wrapper {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		column-gap: 1em;
	}

	.tag {
		color: colors.get('blue', 'text');
		font-size: 0.8em;
		&::before {
			content: '#';
		}
	}
</style>
