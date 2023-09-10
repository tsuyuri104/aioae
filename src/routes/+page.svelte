<script lang="ts">
	import { page } from '$app/stores';
	import type { LangType } from '$lib/micro-cms/common';
	import { PROFILE_URL } from '$lib/micro-cms/ogp';
	import { locale } from '$lib/translations';
	import { createPageFullTitle } from '$lib/utilities/creater';

	$: localeName = $locale as LangType;
</script>

<svelte:head>
	<title>{createPageFullTitle('Top')}</title>
	<meta property="og:url" content={`${$page.url}`} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={createPageFullTitle('Top')} />
	<meta property="og:description" content="Tsuyuri's web page" />
	<meta property="og:site_name" content="by Tsuyuri" />
	<meta property="og:image" content={`${PROFILE_URL}`} />
</svelte:head>
