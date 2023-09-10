<script lang="ts">
	import { dev } from '$app/environment';
	import Footer from '$components/layout/Footer.svelte';
	import Header from '$components/layout/Header.svelte';
	import { firebaseConfig } from '$lib/firebase/config';
	import 'destyle.css/destyle.css';
	import { getAnalytics } from 'firebase/analytics';
	import { initializeApp } from 'firebase/app';
	import { onMount } from 'svelte';

	onMount(() => {
		// Initialize Firebase
		if (!dev) {
			const app = initializeApp(firebaseConfig);
			getAnalytics(app);
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
		background-color: colors.get('beige', 'bg-light');
		min-height: 100svh;
		color: colors.get('beige', 'text');
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

	:global(.ja) {
		&.serif {
			font-family: fonts.getSerif('ja');
		}
	}

	:global(.ko) {
		&.serif {
			font-family: fonts.getSerif('ko');
		}
	}

	:global(.en) {
		&.serif {
			font-family: fonts.getSerif('en');
		}
	}
</style>
