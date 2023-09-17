<script lang="ts">
	import LastUpdate from '$components/common/LastUpdate.svelte';
	import List from '$components/common/List.svelte';
	import TextLink from '$components/common/TextLink.svelte';
	import Tag from '$components/layout/Tag.svelte';
	import { Firebase } from '$lib/firebase';
	import type { Basic } from '$lib/firebase/dao/basic';
	import type { Link } from '$lib/firebase/dao/link';
	import type { Certification, Pg, Position, Skill } from '$lib/firebase/dao/skill';
	import { PROFILE_URL } from '$lib/micro-cms/const';
	import type { LangType } from '$lib/translations';
	import { locale, t } from '$lib/translations';
	import {
		collection,
		collectionGroup,
		doc,
		getDoc,
		getDocs,
		orderBy,
		query,
		where,
	} from 'firebase/firestore';

	$: lang = <LangType>$locale;

	const db = Firebase.initFirestore();
	async function getProfileData(): Promise<Basic> {
		const ref = doc(db, 'profile', 'basic');
		const snap = await getDoc(ref);
		return <Basic>snap.data();
	}

	async function getLinkData(): Promise<Link[]> {
		const q = query(collection(db, 'links'), where('on_top', '==', true));
		const snap = await getDocs(q);
		const data = <Link[]>[];
		snap.forEach((doc) => data.push(<Link>doc.data()));
		return data;
	}

	async function getSkillData(): Promise<Skill> {
		const refSkill = doc(db, 'profile', 'skill');
		const qCertification = query(collectionGroup(db, 'certification'), orderBy('year', 'desc'));
		const qPg = query(collectionGroup(db, 'pg'));
		const qposition = query(collectionGroup(db, 'position'));

		const [snapSkill, snapCertification, snapPg, snapPosition] = await Promise.all([
			getDoc(refSkill),
			getDocs(qCertification),
			getDocs(qPg),
			getDocs(qposition),
		]);

		const dataCertification = <Certification[]>[];
		snapCertification.forEach((doc) => dataCertification.push(<Certification>doc.data()));

		const dataPg = <Pg[]>[];
		snapPg.forEach((doc) => dataPg.push(<Pg>doc.data()));

		const dataPosition = <Position[]>[];
		snapPosition.forEach((doc) => dataPosition.push(<Position>doc.data()));

		return {
			certification: dataCertification,
			pg: dataPg,
			position: dataPosition,
			updated: snapSkill.data()?.updated,
		};
	}

	const profileIcon = `${PROFILE_URL}?w=150`;
	let promiseProfile = getProfileData();
	let promiseLink = getLinkData();
	let promiseSkill = getSkillData();
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
					<TextLink href={datum.url}>{datum.title[lang]}</TextLink>
				{/each}
			{/await}
		</div>
	</section>
	<section class="section">
		<h1 class="h1">Skills</h1>

		<h2 class="h2">{$t('profile.skills.title.pg')}</h2>
		<h3 class="h3">{$t('profile.skills.subTitle.using')}</h3>
		{#await promiseSkill then data}
			<List
				list={data.pg
					.filter((x) => x.last_used === 0)
					.sort((a, b) => b.last_used - a.last_used)
					.map((x) => `${x.name}`)}
			/>
		{/await}
		<h3 class="h3">{$t('profile.skills.subTitle.used')}</h3>
		{#await promiseSkill then data}
			<List
				list={data.pg
					.filter((x) => x.last_used > 0)
					.sort((a, b) => b.last_used - a.last_used)
					.map(
						(x) =>
							`${x.name} (` +
							$t('profile.skills.subTitle.experienceYear') +
							` ${x.experience_year}` +
							$t('profile.skills.unit.year') +
							`)`
					)}
			/>
		{/await}

		<h2 class="h2">{$t('profile.skills.title.position')}</h2>
		{#await promiseSkill then data}
			<List
				list={data.position.map(
					(x) =>
						`${x.name[lang]} (` +
						$t('profile.skills.subTitle.experienceYear') +
						` ${x.experience_year}` +
						$t('profile.skills.unit.year') +
						`)`
				)}
			/>
		{/await}

		<h2 class="h2">{$t('profile.skills.title.certification')}</h2>
		{#await promiseSkill then data}
			<List list={data.certification.map((x) => `${x.name} (${x.year})`)} />
		{/await}

		<LastUpdate promise={promiseSkill} />
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

	.h1 {
		@extend .en;
		@extend .handdraw;
		font-size: 2em;
	}

	.h2 {
		font-size: 1.1em;
		font-weight: 400;
	}

	.h3 {
		font-size: 1em;
		font-weight: 400;
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
