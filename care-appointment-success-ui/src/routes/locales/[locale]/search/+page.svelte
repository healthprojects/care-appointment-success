<script lang="ts">
  import { page } from '$app/state';
  import { format } from '#lib/i18n.js';
  import { localePath } from '#lib/paths.js';
  import { search } from '#lib/search.js';

  let { data } = $props();
  let t = $derived(data.ui.search);

  // The search picker navigates to `<this page>?<query>`. Read it in the
  // browser only, because the page is prerendered without a query.
  let query = $derived(typeof window !== 'undefined' ? decodeURIComponent(page.url.search.slice(1).replace(/\+/g, ' ')).trim() : '');
  let results = $derived(search(data.ui, query));
</script>

<svelte:head>
  <title>{t.title} – {data.ui.common.siteName}</title>
</svelte:head>

<h1>{t.title}</h1>

{#if !query}
  <p class="lead">{t.prompt}</p>
{:else}
  <h2>{format(t.resultsFor, { query })}</h2>
  <p role="status">
    {results.length ? format(t.count, { count: String(results.length) }) : format(t.none, { query })}
  </p>
  <ul>
    {#each results as result (result.page)}
      <li>
        <a href={localePath(data.locale, result.page)}>{result.title}</a>
        {#if result.snippet}<br /><span>{result.snippet}</span>{/if}
      </li>
    {/each}
  </ul>
{/if}
