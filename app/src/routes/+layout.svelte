<script lang="ts">
	import 'destyle.css/destyle.css';
	import Header from '../components/Header.svelte';
</script>

<div>
	<Header />
	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	@use '../style/fonts';
	@use '../style/mixins';
	div {
		display: flex;
		flex-direction: column;
		row-gap: 1.5em;
		font-family: 'Nanum Gothic Coding', 'M PLUS Rounded 1c', sans-serif;
	}
	main {
		margin: 0 auto;
		width: 95vw;

		@include mixins.ForPc() {
			width: 80vw;
		}
	}
</style>
