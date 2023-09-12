<script lang="ts">
	import { page } from '$app/stores';
	import { IconFileDescription, IconMail, IconPencil, IconUser } from '@tabler/icons-svelte';
	import type { ComponentType } from 'svelte';

	const list: {
		selected: boolean;
		href: string;
		text: string;
		icon: ComponentType;
	}[] = [
		{
			selected: $page.url.pathname === '/',
			href: '/',
			text: 'Profile',
			icon: IconUser,
		},
		{
			selected: $page.url.pathname === '/career',
			href: '/career',
			text: 'Career',
			icon: IconFileDescription,
		},
		{
			selected: $page.url.pathname === '/blog',
			href: '/blog',
			text: 'Blog',
			icon: IconPencil,
		},
		{
			selected: $page.url.pathname === '/contact',
			href: '/contact',
			text: 'Contact',
			icon: IconMail,
		},
	];
</script>

<nav class="container">
	<ul class="ul">
		{#each list as item}
			<li
				class="li"
				class:selected={item.selected}
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
