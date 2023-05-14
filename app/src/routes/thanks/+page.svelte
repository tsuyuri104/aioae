<script lang="ts">
	import { createPageFullTitle } from '$lib/utilities/creater';
</script>

<svelte:head>
	<title>{createPageFullTitle('Thanks')}</title>
</svelte:head>

<section>
	<h1 class="h1">Thanks</h1>
	<ul>
		<li class="item">
			<a href="https://getcssscan.com/css-box-shadow-examples">Beautiful CSS box-shadow examples</a>
		</li>
		<li class="item">
			<a href="https://akveo.github.io/eva-icons/#/">Eva icons</a>
		</li>
	</ul>
</section>

<style lang="scss">
	.h1 {
		font-size: 1.6rem;
	}
	.item {
		margin: 0.5rem;
		padding: 0.5rem;
	}
</style>
