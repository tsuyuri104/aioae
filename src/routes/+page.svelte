<script lang="ts">
	import Tag from '$components/layout/Tag.svelte';
	import type { LangType } from '$lib/micro-cms/common';
	import { PROFILE_URL } from '$lib/micro-cms/ogp';
	import { locale } from '$lib/translations';

	$: localeName = $locale as LangType;
</script>

<Tag
	title="Profile"
	thambnail={PROFILE_URL}
/>
