<script lang="ts">
	import { page } from '$app/stores';
	import Footer from '$components/layout/Footer.svelte';
	import Nav from '$components/layout/Nav.svelte';
	import Switcher from '$components/layout/Switcher.svelte';
	import { PUBLIC_ENV } from '$env/static/public';
	import { Firebase } from '$lib/firebase';
	import { getDefaultLanguage, loadTranslations, locale } from '$lib/translations';
	import 'destyle.css/destyle.css';
	import { onMount } from 'svelte';

	onMount(async () => {
		if (PUBLIC_ENV === 'PROD') {
			// Initialize Firebase
			Firebase.initAnalytics();
		}

		// Initialize Language
		await setLanguage();
	});

	const setLanguage = async () => {
		const pathname = $page.url.pathname;
		const brawserLang = window.navigator.language;

		const initLocale = getDefaultLanguage(brawserLang);

		await loadTranslations(initLocale, pathname);
	};
</script>

<div class="container">
	<div class="outer">
		<div
			class="inner serif"
			class:ja={$locale === 'ja'}
			class:ko={$locale === 'ko'}
		>
			<main class="main">
				<slot />
			</main>

			<div class="footer">
				<Footer />
			</div>
		</div>

		<aside class="side">
			<div class="nav">
				<Nav />
			</div>
			<div class="switcher">
				<Switcher />
			</div>
		</aside>
	</div>
</div>

<style lang="scss">
	@use 'src/style/fonts';
	@use 'src/style/colors';

	.container {
		container-type: inline-size;
	}

	.outer {
		background-color: colors.get('beige', 'bg-light');
		display: flex;
		flex-direction: column;
		color: colors.get('beige', 'text');
	}

	.inner {
		display: flex;
		flex-direction: column;
		row-gap: 2em;
		width: 100svw;
		max-width: 400px;
		min-height: 100svh;
		padding: 1em;
	}

	.side {
		width: 100%;
		position: sticky;
		bottom: 0;
		left: 0;
		display: flex;
		flex-direction: column;
	}

	.nav {
		order: 2;
	}

	.switcher {
		order: 1;
		width: fit-content;
		position: relative;
		left: 0.5em;
		bottom: 0.5em;
	}

	@container (width > 400px) {
		.outer {
			display: flex;
			flex-direction: row;
			justify-content: center;
			column-gap: 1em;
		}
		.inner {
			order: 2;
		}
		.side {
			display: flex;
			flex-direction: column;
			max-width: 180px;
			position: sticky;
			order: 1;
			padding: 1em;
			row-gap: 1em;
		}

		.nav {
			order: 1;
		}

		.switcher {
			order: 2;
			display: flex;
			flex-direction: row;
			justify-content: end;
			width: 100%;
		}
	}
</style>
