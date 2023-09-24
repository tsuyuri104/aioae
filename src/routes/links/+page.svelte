<script lang="ts">
	import H1 from '$components/common/H1EnHanddraw.svelte';
	import LinkCard from '$components/common/LinkCard.svelte';
	import Tag from '$components/layout/Tag.svelte';
	import { Firebase } from '$lib/firebase';
	import type { Link } from '$lib/firebase/dao/link';
	import type { LangType } from '$lib/translations';
	import { locale, t } from '$lib/translations';
	import { collection, getDocs, query, where } from 'firebase/firestore';

	$: lang = <LangType>$locale;

	const db = Firebase.initFirestore();

	async function getLinkData(): Promise<Link[]> {
		const q = query(collection(db, 'links'), where('visible', '==', true));
		const snap = await getDocs(q);
		const data: Link[] = [];
		snap.forEach((doc) => data.push(doc.data() as Link));

		return data;
	}

	function byPg(x: Link): boolean {
		return byCategory(x, 'PG');
	}

	function bySns(x: Link): boolean {
		return byCategory(x, 'SNS');
	}

	function byOther(x: Link): boolean {
		return byCategory(x, 'Other');
	}

	function byCategory(x: Link, category: string): boolean {
		return x.category === category;
	}

	function byOnTop(a: Link, b: Link): number {
		if (a.on_top && b.on_top) return 0;
		if (a.on_top) return -1;
		if (b.on_top) return 1;
		return 0;
	}

	let promiseLink = getLinkData();
</script>

<Tag title="Profile" />

<article
	class="article sans"
	class:ja={lang === 'ja'}
	class:ko={lang === 'ko'}
>
	<section class="section">
		<H1>Links</H1>
		<h2 class="h2">{$t('links.heading.pg')}</h2>
		<div class="card-wrapper">
			{#await promiseLink then data}
				{#each data.filter(byPg).sort(byOnTop) as datum}
					<LinkCard
						href={datum.url}
						text={datum.title}
						description={datum.description}
					/>
				{/each}
			{/await}
		</div>
		<h2 class="h2">{$t('links.heading.sns')}</h2>
		<div class="card-wrapper">
			{#await promiseLink then data}
				{#each data.filter(bySns).sort(byOnTop) as datum}
					<LinkCard
						href={datum.url}
						text={datum.title}
						description={datum.description}
					/>
				{/each}
			{/await}
		</div>
		<h2 class="h2">{$t('links.heading.other')}</h2>
		<div class="card-wrapper">
			{#await promiseLink then data}
				{#each data.filter(byOther).sort(byOnTop) as datum}
					<LinkCard
						href={datum.url}
						text={datum.title}
						description={datum.description}
					/>
				{/each}
			{/await}
		</div>
	</section>
</article>

<style lang="scss">
	@use 'src/style/fonts';
	@use 'src/style/colors';

	.article {
		display: flex;
		flex-direction: column;
		row-gap: 2.5em;
		font-weight: 200;
	}

	.section {
		display: flex;
		flex-direction: column;
		row-gap: 1em;
	}

	.card-wrapper {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 1em;
	}

	.h2 {
		font-size: 1.1em;
		font-weight: 400;
	}
</style>
