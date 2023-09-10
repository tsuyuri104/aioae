<script lang="ts">
	import { page } from '$app/stores';
	import { createPageFullTitle } from '$lib/utilities/creater';

	export let title = '';
	export let thambnail = '';
</script>

<svelte:head>
	<title>{createPageFullTitle(title)}</title>
	<meta property="og:url" content={`${$page.url}`} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={createPageFullTitle(title)} />
	<meta property="og:description" content="Tsuyuri's web page" />
	<meta property="og:site_name" content="by Tsuyuri" />
	<meta property="og:image" content={thambnail} />
</svelte:head>
