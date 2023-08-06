<script lang="ts">
	import { locale } from '$lib/translations/translations';
	import { CloseOutlineIcon, Menu2OutlineIcon } from '@robakk08/svelte-evaicons';

	let showMenu = false;
</script>

<header class="wrapper">
	<div class="header">
		<div class="menubutton">
			<button
				type="button"
				on:click={() => {
					showMenu = !showMenu;
				}}
			>
				{#if showMenu}
					<CloseOutlineIcon size="2x" />
				{:else}
					<Menu2OutlineIcon size="2x" />
				{/if}
			</button>
		</div>
		<div class="langs">
			<label for="rdoLangKo" class="label">
				가<input type="radio" name="lang" bind:group={$locale} id="rdoLangKo" value="ko" />
			</label>
			<label for="rdoLangJa" class="label">
				あ<input type="radio" name="lang" bind:group={$locale} id="rdoLangJa" value="ja" />
			</label>
		</div>
	</div>
	<menu class="menu" class:showMenu>
		<ul>
			<li class="item">
				<a
					href="/links"
					on:click={() => {
						showMenu = false;
					}}
					class="link"
				>
					Links
				</a>
			</li>
			<li class="item">
				<a
					href="/thanks"
					on:click={() => {
						showMenu = false;
					}}
					class="link"
				>
					Thanks
				</a>
			</li>
		</ul>
	</menu>
</header>

<style lang="scss">
	@use '../style/colors';

	.header {
		backdrop-filter: blur(3px);
		min-height: 2em;
		padding: 0.5em 1rem;
		display: grid;
		grid-template: 'menu empty langs' auto / 1fr auto 1fr;
		width: 100vw;
		box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
		position: sticky;
		top: 0;
	}

	.menu {
		z-index: 1;
		backdrop-filter: blur(6px);
		background-color: rgba(255, 255, 255, 0.3);
		position: absolute;
		margin: 0;
		padding: 2rem;
		box-shadow: rgba(17, 17, 26, 0.1) 1px 1px 0px;
		grid-area: menu;

		&.showMenu {
			visibility: visible;
		}

		&:not(.showMenu) {
			visibility: hidden;
		}
	}

	.item {
		padding: 0.5rem;
	}

	.link {
		display: block;
	}

	.menubutton {
		color: colors.$navy_light;
		cursor: pointer;
	}

	.langs {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
		column-gap: 0.25em;
		grid-area: langs;
	}
	.label {
		padding: 0.5em;

		&:has(input[type='radio']:checked) {
			display: inline-block;
			border-radius: 25%;
			box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
			background-color: #ffffff;
		}
	}
</style>
