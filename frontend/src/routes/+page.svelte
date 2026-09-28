<script lang="ts">
  import { Card } from '@lilydesignsystem/svelte-headless';
  import { ui } from '$lib/i18n';
  import { LOCALES, LOCALE_LABELS, langAttr } from '$lib/locales';
  import { localePath } from '$lib/paths';

  // Bilingual landing page, Welsh first (Welsh Language Active Offer).
  // Each card is marked with its own language for screen readers.
</script>

<svelte:head>
  <title>Care Appointment Success</title>
</svelte:head>

<h1>Care Appointment Success</h1>
<p>
  <span lang="cy">{ui('cy-001').landing.intro}</span> /
  <span lang="en">{ui('en-001').landing.intro}</span>
</p>

<div class="card-grid">
  {#each LOCALES as code (code)}
    <Card
      class="locale-card"
      heading={LOCALE_LABELS[code]}
      headingLevel={2}
      href={localePath(code)}
      lang={langAttr(code)}
    >
      <p>{ui(code).landing.cardBody}</p>
    </Card>
  {/each}
</div>
