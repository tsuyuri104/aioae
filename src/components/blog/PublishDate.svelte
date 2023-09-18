<script lang="ts">
	import { t } from '$lib/translations';
	import { toDateType } from '$lib/utilities/dateTimestamp';

	export let publishedAt: string;
	$: date = toDateType(new Date(publishedAt));
</script>

<p class="date">
	{date.year}{$t('common.unit.year')}
	{date.month}{$t('common.unit.month')}
	{date.day}{$t('common.unit.day')}
</p>

<style lang="scss">
	@use 'src/style/colors';

	.date {
		font-size: 0.8em;
		text-align: right;
		color: colors.get('beige', 'text-light');
	}
</style>
