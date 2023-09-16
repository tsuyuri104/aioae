<script lang="ts">
	import Tag from '$components/layout/Tag.svelte';
	import type { LangType } from '$lib/micro-cms/common';
	import { locale } from '$lib/translations';

	$: localeName = $locale as LangType;
</script>

<Tag title="Profile" />

<div class="" />
