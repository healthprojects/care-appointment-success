<script lang="ts">
  import { SummaryList, SummaryListItem, InsetText } from '@lilydesignsystem/svelte-headless';
  import { APPOINTMENT, formatDate, formatTime } from '$lib/appointment';
  import { localePath } from '$lib/paths';

  let { data } = $props();
  let t = $derived(data.ui.appointment);
</script>

<svelte:head>
  <title>{t.title} – {data.ui.common.siteName}</title>
</svelte:head>

<h1>{t.title}</h1>

<SummaryList label={t.detailsLabel}>
  <SummaryListItem term={t.clinicLabel}>{t.clinic}</SummaryListItem>
  <SummaryListItem term={t.dateLabel}>{formatDate(APPOINTMENT.start, data.locale)}</SummaryListItem>
  <SummaryListItem term={t.timeLabel}>{formatTime(APPOINTMENT.start, data.locale)}</SummaryListItem>
  <SummaryListItem term={t.placeLabel}>{t.place}</SummaryListItem>
  <SummaryListItem term={t.referenceLabel}>{APPOINTMENT.reference}</SummaryListItem>
</SummaryList>

<h2>{t.question}</h2>
<ul class="choice-list">
  <li><a class="button" href={localePath(data.locale, 'confirmed')}>{t.confirm}</a></li>
  <li><a class="button" data-variant="secondary" href={localePath(data.locale, 'barriers')}>{t.barriers}</a></li>
  <li><a class="button" data-variant="secondary" href={localePath(data.locale, 'rebook')}>{t.change}</a></li>
</ul>

<InsetText>
  <h2>{t.helpHeading}</h2>
  <p>{t.help}</p>
</InsetText>
