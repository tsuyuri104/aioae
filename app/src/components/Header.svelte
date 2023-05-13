<script lang="ts">
	import { locale } from '$lib/translations/translations';
</script>

<header>
	<div class="langs">
		<label for="rdoLangKo">
			가<input type="radio" name="lang" bind:group={$locale} id="rdoLangKo" value="ko" />
		</label>
		<label for="rdoLangJa">
			あ<input type="radio" name="lang" bind:group={$locale} id="rdoLangJa" value="ja" />
		</label>
	</div>
</header>

<style lang="scss">
	@use '../style/mixins';
	header {
		backdrop-filter: blur(3px);
		min-height: 2em;
		padding: 0.5em 1rem;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		width: 100vw;
		box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
		position: sticky;
		top: 0;
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
