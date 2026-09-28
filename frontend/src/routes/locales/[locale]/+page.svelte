<script lang="ts">
  import { ActionLink, InsetText } from '@lilydesignsystem/svelte-headless';
  import { localePath } from '$lib/paths';

  let { data } = $props();
  let t = $derived(data.ui.home);
</script>

<svelte:head>
  <title>{t.title} – {data.ui.common.siteName}</title>
</svelte:head>

<h1>{t.title}</h1>
<p class="lead">{t.intro}</p>

<h2>{t.youCanHeading}</h2>
<ul>
  {#each t.youCan as item (item)}
    <li>{item}</li>
  {/each}
</ul>

<p>
  <ActionLink href={localePath(data.locale, 'appointment')}>{t.start}</ActionLink>
</p>

<InsetText>
  <h2>{t.privacyHeading}</h2>
  <p>{t.privacy}</p>
</InsetText>
