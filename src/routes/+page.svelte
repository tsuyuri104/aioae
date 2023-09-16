<script lang="ts">
	import TextLink from '$components/common/TextLink.svelte';
	import Tag from '$components/layout/Tag.svelte';
	import { Firebase } from '$lib/firebase';
	import type { Basic } from '$lib/firebase/dto/basic';
	import type { Link } from '$lib/firebase/dto/link';
	import { PROFILE_URL } from '$lib/micro-cms/const';
	import type { LangType } from '$lib/translations';
	import { locale, t } from '$lib/translations';
	import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';

	$: lang = <LangType>$locale;

	const db = Firebase.initFirestore();
	async function getProfileData() {
		const ref = doc(db, 'profile', 'basic');
		const snap = await getDoc(ref);
		return <Basic>snap.data();
	}

	async function getLinkData() {
		const q = query(collection(db, 'links'), where('on_top', '==', true));
		const snap = await getDocs(q);
		const data = <Link[]>[];
		snap.forEach((doc) => data.push(<Link>doc.data()));
		return data;
	}

	const profileIcon = `${PROFILE_URL}?w=150`;
	let promiseProfile = getProfileData();
	let promiseLink = getLinkData();
</script>

<Tag title="Profile" />

<article
	class="article sans"
	class:ja={lang === 'ja'}
	class:ko={lang === 'ko'}
>
	<section class="section">
		<h1 class="h1">Profile</h1>
		<img
			src={profileIcon}
			alt={$t('profile.icon.alt')}
			width="150px"
			class="icon"
		/>
		{#await promiseProfile then data}
			<h2 class="h2 name">
				<span>{data.name[lang]}</span><span class="en sans">({data.name.en})</span>
			</h2>
			<p>
				{data.title}
			</p>
			<p>
				{data.summary[lang]}
			</p>
		{/await}
		<div class="links">
			{#await promiseLink then data}
				{#each data as datum}
					<TextLink
						href={datum.url}
						text={datum.title[lang]}
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
		row-gap: 2em;
		font-weight: 200;
	}

	.section {
		display: flex;
		flex-direction: column;
		row-gap: 1em;
	}

	.h1 {
		@extend .en;
		@extend .handdraw;
		font-size: 1.8em;
	}

	.h2 {
		font-size: 1.5em;
	}

	.icon {
		border-radius: 10%;
	}

	.name {
		display: flex;
		flex-direction: row;
		column-gap: 0.5em;
		font-weight: 300;
	}

	.links {
		display: flex;
		flex-direction: row;
		column-gap: 1em;
	}
</style>
