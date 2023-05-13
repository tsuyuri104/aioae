<script lang="ts">
	import Footer from '$components/Footer.svelte';
	import Header from '$components/Header.svelte';
	import 'destyle.css/destyle.css';
</script>

<div>
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style lang="scss">
	@use '../style/fonts';
	@use '../style/mixins';
	@use '../style/colors';
	div {
		display: flex;
		flex-direction: column;
		row-gap: 1.5em;
		font-family: 'Nanum Gothic Coding', 'M PLUS Rounded 1c', sans-serif;
		background-color: colors.$purple_base;
		min-height: 100svh;
		color: colors.$navy_dark;
	}
	main {
		margin: 0 auto;
		width: 95vw;

		@include mixins.ForPc() {
			width: 80vw;
		}
	}
</style>
