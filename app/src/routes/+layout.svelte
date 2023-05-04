<script lang="ts">
	import 'destyle.css/destyle.css';
</script>

<main>
	<slot />
</main>

<style lang="scss">
	@use '../style/fonts';
	@use '../style/mixins';
	main {
		margin: 0 auto;
		max-width: 95vw;

		@include mixins.ForPc() {
			max-width: 80vw;
		}
	}
</style>
