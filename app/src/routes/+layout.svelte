<script lang="ts">
	import 'ress/ress.css';
</script>

<main>
	<slot />
</main>

<style lang="scss">
	@use '../style/mixins';
	main {
		margin: 0 auto;
		max-width: 95vw;

		@include mixins.ForPc() {
			max-width: 80vw;
		}
	}
</style>
