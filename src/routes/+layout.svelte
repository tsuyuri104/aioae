<script lang="ts">
	import Footer from '$components/layout/Footer.svelte';
	import Nav from '$components/layout/Nav.svelte';
	import { env } from '$env/dynamic/public';
	import { Firebase } from '$lib/firebase';
	import { locale } from '$lib/translations';
	import 'destyle.css/destyle.css';
	import { onMount } from 'svelte';

	onMount(async () => {
		if (env.PUBLIC_ENV === 'PROD') {
			// Initialize Firebase
			Firebase.initAnalytics();
		}
	});
</script>

<div class="container">
	<div class="outer">
		<aside class="side">
			<Nav />
		</aside>
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
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr auto;
		row-gap: 2em;
		width: 100svw;
		max-width: 400px;
		min-height: 100svh;
		padding: 1em;
	}

	.side {
		width: 100%;
		position: sticky;
		top: 0;
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
			height: fit-content;
			order: 1;
			padding: 1em;
			row-gap: 1em;
			position: sticky;
			top: 0;
		}
	}
</style>
