<script lang="ts">
  import { Panel } from '@lilydesignsystem/svelte-headless';
  import { localePath } from '$lib/paths';

  let { data } = $props();
  let t = $derived(data.ui.confirmed);
</script>

<svelte:head>
  <title>{t.title} – {data.ui.common.siteName}</title>
</svelte:head>

<Panel class="confirmation-panel" label={t.title}>
  <h1>{t.title}</h1>
  <p>{t.body}</p>
</Panel>

<h2>{t.bringHeading}</h2>
<ul>
  {#each t.bring as item (item)}
    <li>{item}</li>
  {/each}
</ul>

<p>{t.changeHint}</p>
<p><a href={localePath(data.locale, 'rebook')}>{t.changeLink}</a></p>
