<header>
	<div class="title">
		<a href="./">by Tsuyuri</a>
	</div>
	<div class="lang">
		<label for="rdoLangKo">
			한<input type="radio" name="lang" id="rdoLangKo" checked />
		</label>
		<label for="rdoLangJa" class="commingsoon">
			あ<input type="radio" name="lang" id="rdoLangJa" />
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
	.title {
		grid-column-start: 2;
		grid-column-end: 5;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		a {
			font-family: 'Alegreya Sans', sans-serif;
			font-size: 1.5em;
			font-weight: 400;
		}
	}
	.lang {
		grid-column-start: 5;
		grid-column-end: 6;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
		column-gap: 0.5em;

		label:has(input[type='radio']:checked) {
			display: inline-block;
			padding: 0.5em;
			border-radius: 25%;
			box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
		}
	}
	.commingsoon {
		text-decoration: line-through;
	}
</style>
