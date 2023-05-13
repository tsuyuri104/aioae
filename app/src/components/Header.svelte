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
		padding: 0.5em 0;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: 1;
		margin: 0 auto;
		width: 95vw;

		@include mixins.ForPc() {
			width: 60vw;
		}
	}
	.langs {
		grid-column-start: 5;
		grid-column-end: 6;
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
