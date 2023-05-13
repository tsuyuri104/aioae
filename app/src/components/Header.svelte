<script lang="ts">
	import { locale } from '$lib/translations/translations';
	import { CloseOutlineIcon, Menu2OutlineIcon } from '@robakk08/svelte-evaicons';

	let showMenu = false;
</script>

<header>
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
			<label for="rdoLangKo">
				가<input type="radio" name="lang" bind:group={$locale} id="rdoLangKo" value="ko" />
			</label>
			<label for="rdoLangJa">
				あ<input type="radio" name="lang" bind:group={$locale} id="rdoLangJa" value="ja" />
			</label>
		</div>
	</div>
	<menu class="menu" class:showMenu>
		<ul>
			<li>
				<a
					href="/links"
					on:click={() => {
						showMenu = false;
					}}
				>
					Links
				</a>
			</li>
			<li>
				<a
					href="/thanks"
					on:click={() => {
						showMenu = false;
					}}
				>
					Thanks
				</a>
			</li>
		</ul>
	</menu>
</header>

<style lang="scss">
	@use '../style/mixins';
	@use '../style/colors';
	.header {
		backdrop-filter: blur(3px);
		min-height: 2em;
		padding: 0.5em 1rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
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

		&.showMenu {
			visibility: visible;
		}

		&:not(.showMenu) {
			visibility: hidden;
		}

		@include mixins.ForPc() {
			width: 20svw;
		}

		li {
			padding: 0.5rem;
		}
		a {
			display: block;
		}
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

		label {
			padding: 0.5em;

			&:has(input[type='radio']:checked) {
				display: inline-block;
				border-radius: 25%;
				box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
				background-color: #ffffff;
			}
		}
	}
</style>
