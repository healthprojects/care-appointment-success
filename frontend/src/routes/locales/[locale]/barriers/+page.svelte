<script lang="ts">
  import {
    Button,
    CheckboxInput,
    ErrorSummary,
    Fieldset,
    Hint,
    Label
  } from '@lilydesignsystem/svelte-headless';
  import { focusAfterUpdate } from '$lib/focus';
  import { localePath } from '$lib/paths';

  let { data } = $props();
  let t = $derived(data.ui.barriers);

  const KEYS = ['travel', 'cost', 'caring', 'work', 'health', 'anxiety', 'communication', 'other'] as const;
  type Key = (typeof KEYS)[number];

  // Answers stay in this component's state only; nothing is sent or stored.
  let selected = $state<Record<Key, boolean>>(
    Object.fromEntries(KEYS.map((k) => [k, false])) as Record<Key, boolean>
  );
  let showError = $state(false);
  let chosen = $state<Key[]>([]);

  function onsubmit(event: SubmitEvent) {
    event.preventDefault();
    const picked = KEYS.filter((k) => selected[k]);
    showError = picked.length === 0;
    chosen = picked;
    focusAfterUpdate(showError ? '.error-summary' : '#results-title');
  }
</script>

<svelte:head>
  <title>{t.title} – {data.ui.common.siteName}</title>
</svelte:head>

<p><a class="back-link" href={localePath(data.locale, 'appointment')}>{data.ui.common.backToAppointment}</a></p>

{#if showError}
  <ErrorSummary title={data.ui.common.errorSummaryTitle}>
    <ul>
      <li><a href="#barrier-travel">{t.errorNone}</a></li>
    </ul>
  </ErrorSummary>
{/if}

<h1>{t.title}</h1>

<form {onsubmit} novalidate>
  <Fieldset legend={t.legend} aria-describedby="barriers-hint">
    <Hint id="barriers-hint">{t.hint}</Hint>
    <div class="checkboxes">
      {#each KEYS as key (key)}
        <div class="checkbox-item">
          <CheckboxInput id="barrier-{key}" name="barrier" value={key} label={t.options[key]} bind:checked={selected[key]} />
          <Label for="barrier-{key}">{t.options[key]}</Label>
        </div>
      {/each}
    </div>
  </Fieldset>
  <Button type="submit">{t.submit}</Button>
</form>

{#if chosen.length > 0}
  <section class="results" aria-labelledby="results-title">
    <h2 id="results-title" tabindex="-1">{t.resultsTitle}</h2>
    <dl class="support-list">
      {#each chosen as key (key)}
        <dt>{t.options[key]}</dt>
        <dd>{t.support[key]}</dd>
      {/each}
    </dl>

    <h2>{t.nextHeading}</h2>
    <ul class="choice-list">
      <li><a class="button" href={localePath(data.locale, 'navigator')}>{t.callMe}</a></li>
      <li><a class="button" data-variant="secondary" href={localePath(data.locale, 'rebook')}>{t.change}</a></li>
      <li><a class="button" data-variant="secondary" href={localePath(data.locale, 'confirmed')}>{t.canCome}</a></li>
    </ul>
  </section>
{/if}
