<script lang="ts">
	import { t } from '$lib/translations/translations';
</script>

<div class="wrapper">
	<img src="/images/profile.jpg" alt="profile" class="photo" />
	<span>{$t('common.nickName')}</span>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 1em;
	}
	.photo {
		width: 150px;
		border-radius: 25%;
	}
</style>
