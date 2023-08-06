<script lang="ts">
	import { dev } from '$app/environment';
	import Footer from '$components/layout/Footer.svelte';
	import Header from '$components/layout/Header.svelte';
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

<div class="wrapper">
	<Header />
	<main class="main">
		<slot />
	</main>
	<Footer />
</div>

<style lang="scss">
	@use '../style/fonts';
	@use '../style/colors';

	.wrapper {
		display: flex;
		flex-direction: column;
		row-gap: 1.5em;
		font-family: 'Nanum Gothic Coding', 'M PLUS Rounded 1c', sans-serif;
		background-color: colors.$purple_base;
		min-height: 100svh;
		color: colors.$navy_dark;
		container-type: inline-size;
	}
	.main {
		margin-inline: auto;
		width: 95vw;
	}

	@container (400px <= width) {
		.main {
			width: 80vw;
		}
	}
</style>
