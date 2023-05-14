<script lang="ts">
	import { dev } from '$app/environment';
	import Footer from '$components/Footer.svelte';
	import Header from '$components/Header.svelte';
	import { firebaseConfig } from '$lib/firebase/config';
	import 'destyle.css/destyle.css';
	import { getAnalytics } from 'firebase/analytics';
	import { initializeApp } from 'firebase/app';
	import { getAuth } from 'firebase/auth';
	import { onMount } from 'svelte';

	onMount(() => {
		// Initialize Firebase
		if (!dev) {
			const app = initializeApp(firebaseConfig);
			getAnalytics(app);
			getAuth(app);
		}
	});
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
