<script lang="ts">
	import { page } from '$app/stores';
	import { locale, t } from '$lib/translations';
	import { IconFileDescription, IconLink, IconPencil, IconUser } from '@tabler/icons-svelte';
	import type { ComponentType } from 'svelte';

	const list: {
		href: string;
		text: string;
		icon: ComponentType;
	}[] = [
		{
			href: '/',
			text: 'Profile',
			icon: IconUser,
		},
		{
			href: '/experience',
			text: 'Experience',
			icon: IconFileDescription,
		},
		{
			href: '/blog',
			text: 'Blog',
			icon: IconPencil,
		},
		{
			href: '/links',
			text: 'Links',
			icon: IconLink,
		},
	];

	function switchLang() {
		if ($locale === 'ja') {
			locale.set('ko');
		} else {
			locale.set('ja');
		}
	}
</script>

<nav class="container">
	<ul class="ul">
		<li class="li">
			<button
				type="button"
				class="button"
				on:click={switchLang}
			>
				{$t('common.nav.langButton')}
			</button>
		</li>
		{#each list as item}
			{@const selected = item.href === $page.url.pathname}
			<li
				class="li"
				class:selected
			>
				<a
					href={item.href}
					class="link"
				>
					<svelte:component this={item.icon} />
					<span class="text en serif">{item.text}</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	@use 'src/style/colors';
	@use 'src/style/fonts';

	.container {
		container-type: inline-size;
	}

	.ul {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		column-gap: 1em;
		border-top: 1px solid colors.get('beige', 'border');
		background-color: colors.get('beige', 'bg-light');
	}

	.button {
		font-size: 1em;
		background-color: colors.get('green', 'bg-light');
		padding: 0.5em;
		border-radius: 0.5em;
	}

	.selected {
		color: colors.get('blue', 'text');
	}

	.link {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 1em;
		width: 100%;

		&:hover {
			background-color: colors.get('beige', 'hover');
			border-radius: 50%;
		}
	}

	.text {
		visibility: hidden;
		display: block;
		width: 0;
		height: 0;
	}

	@container (width <= 200px) {
		.ul {
			flex-direction: column;
			justify-content: start;
			align-items: start;
			row-gap: 1em;
			border-top: none;
		}

		.li {
			display: block;
			width: 100%;
		}

		.selected {
			border-right: 4px solid colors.get('blue', 'border');
		}

		.link {
			display: flex;
			flex-direction: row;
			justify-content: start;
			align-items: center;
			column-gap: 0.5em;
			padding: 0.5em;

			&:hover {
				border-radius: 15%;
			}
		}

		.text {
			visibility: visible;
			width: fit-content;
			height: fit-content;
		}
	}
</style>
