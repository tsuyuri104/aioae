<script lang="ts">
</script>

<div class="card">
	<div class="header">
		<slot name="header" />
	</div>
	<div class="body">
		<slot name="body" />
	</div>
</div>

<style lang="scss">
	@use 'src/style/colors';
	@use 'src/style/shadow';

	.card {
		display: flex;
		flex-direction: column;
		border-radius: 0.5em;
		overflow: hidden;
		background-color: colors.get('white', 'bg-light');
		@include shadow.get();
	}

	.header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 0.5em;
	}

	.body {
		display: flex;
		flex-direction: column;
		padding: 0.5em 1em 1em;
	}
</style>
