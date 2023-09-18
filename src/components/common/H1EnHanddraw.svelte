<h1 class="h1">
	<slot />
</h1>

<style lang="scss">
	@use 'src/style/fonts';

	.h1 {
		@extend .en;
		@extend .handdraw;
		font-size: 2em;
	}
</style>
