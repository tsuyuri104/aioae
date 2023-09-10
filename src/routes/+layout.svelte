<script lang="ts">
	import { dev } from '$app/environment';
	import Footer from '$components/layout/Footer.svelte';
	import Header from '$components/layout/Header.svelte';
	import Switcher from '$components/layout/Switcher.svelte';
	import { firebaseConfig } from '$lib/firebase/config';
	import { locale } from '$lib/translations';
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

<div class="outer">
	<div class="inner" class:ja={$locale === 'ja'} class:ko={$locale === 'ko'}>
		<Header />

		<main>
			<slot />
		</main>

		<Footer />
		<Switcher />
	</div>
</div>

<style lang="scss">
	@use 'src/style/fonts';
	@use 'src/style/colors';

	.outer {
		background-color: colors.get('beige', 'bg-light');
		color: colors.get('beige', 'text');
		font-size: 16px;
	}

	.inner {
		margin-inline: auto;
		min-height: 100svh;
		width: 100svw;
		max-width: 400px;
		padding: 1em;
	}

	@container (400px <= width) {
		.main {
			width: 80vw;
		}
	}

	}

	}

		}
	}
</style>
