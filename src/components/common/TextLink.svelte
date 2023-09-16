<script lang="ts">
	export let text: string;
	export let href: string;
</script>

<a
	{href}
	class="link">{text}</a
>

<style lang="scss">
	@use 'src/style/fonts';
	@use 'src/style/colors';

	.link {
		color: colors.get('blue', 'text');
		font-weight: 300;
		padding: 0.5em;
		border-radius: 0.5em;
		&:hover {
			background-color: colors.get('blue', 'hover');
		}
	}
</style>
