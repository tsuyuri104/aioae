<script lang="ts">
	import { locale } from '$lib/translations';
</script>

<div class="outer">
	<div class="inner">
		<input
			type="radio"
			name="lang"
			id="rdoJa"
			value="ja"
			bind:group={$locale}
			aria-label="日本語"
			class="radio"
		/>
		<label for="rdoJa" class="label label-ja ja">
			<span>あ</span>
		</label>
		<input
			type="radio"
			name="lang"
			id="rdoKo"
			value="ko"
			bind:group={$locale}
			aria-label="한국어"
			class="radio"
		/>
		<label for="rdoKo" class="label label-ko ko">
			<span>가</span>
		</label>
		<div class="selected" />
	</div>
</div>

<style lang="scss">
	@use 'src/style/colors';
	@use 'src/style/shadow';
	@use 'src/style/forms';

	.outer {
		position: sticky;
		bottom: 1em;
		left: 0;
	}

	.inner {
		display: flex;
		flex-direction: column;
		width: fit-content;
		background-color: colors.get('green', 'bg-light');
		border-radius: 1em;
		@include shadow.get();
	}

	.label {
		--size: 2em;
		width: var(--size);
		height: var(--size);
		color: colors.get('white', 'text');
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		z-index: 2;
		cursor: pointer;
	}

	.selected {
		--size: 2em;
		width: var(--size);
		height: var(--size);
		background-color: colors.get('green', 'bg-dark');
		color: colors.get('white', 'text');
		border-radius: 50%;
		position: absolute;
		z-index: 1;
		transition: transform 0.2s ease-in-out;
	}

	#rdoJa {
		&:checked ~ .selected {
			transform: translateY(0);
		}
		&:focus ~ .label-ja {
			@include forms.outline;
		}
	}

	#rdoKo {
		&:checked ~ .selected {
			transform: translateY(var(--size));
		}
		&:focus ~ .label-ko {
			@include forms.outline;
		}
	}
</style>
