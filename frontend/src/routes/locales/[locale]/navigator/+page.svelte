<script lang="ts">
  import { Button, ErrorSummary, Fieldset, Hint, Label, Panel, RadioInput } from '@lilydesignsystem/svelte-headless';
  import { focusAfterUpdate } from '$lib/focus';
  import { localePath } from '$lib/paths';

  let { data } = $props();
  let t = $derived(data.ui.navigator);

  let language = $state('');
  let time = $state('');
  let showError = $state(false);
  let done = $state(false);

  let languages = $derived([
    { id: 'lang-cy', value: 'cy', label: t.languageWelsh },
    { id: 'lang-en', value: 'en', label: t.languageEnglish }
  ]);
  let times = $derived([
    { id: 'time-morning', value: 'morning', label: t.timeMorning },
    { id: 'time-afternoon', value: 'afternoon', label: t.timeAfternoon },
    { id: 'time-evening', value: 'evening', label: t.timeEvening }
  ]);

  function onsubmit(event: SubmitEvent) {
    event.preventDefault();
    showError = language === '' || time === '';
    if (showError) {
      focusAfterUpdate('.error-summary');
      return;
    }
    done = true;
    focusAfterUpdate('#done-title');
  }
</script>

<svelte:head>
  <title>{t.title} – {data.ui.common.siteName}</title>
</svelte:head>

{#if done}
  <Panel class="confirmation-panel" label={t.doneTitle}>
    <h1 id="done-title" tabindex="-1">{t.doneTitle}</h1>
    <p>{t.doneBody}</p>
  </Panel>
  <p><a href={localePath(data.locale, 'appointment')}>{data.ui.common.backToAppointment}</a></p>
{:else}
  <p><a class="back-link" href={localePath(data.locale, 'barriers')}>{data.ui.common.back}</a></p>

  {#if showError}
    <ErrorSummary title={data.ui.common.errorSummaryTitle}>
      <ul>
        <li><a href={language === '' ? '#lang-cy' : '#time-morning'}>{t.errorNone}</a></li>
      </ul>
    </ErrorSummary>
  {/if}

  <h1>{t.title}</h1>
  <p>{t.intro}</p>

  <form {onsubmit} novalidate>
    <Fieldset legend={t.languageLegend}>
      <div class="radios">
        {#each languages as l (l.id)}
          <div class="radio-item">
            <RadioInput
              id={l.id}
              name="language"
              value={l.value}
              label={l.label}
              checked={language === l.value}
              onchange={() => (language = l.value)}
            />
            <Label for={l.id}>{l.label}</Label>
          </div>
        {/each}
      </div>
    </Fieldset>

    <Fieldset legend={t.timeLegend} aria-describedby="phone-hint">
      <Hint id="phone-hint">{t.phoneHint}</Hint>
      <div class="radios">
        {#each times as o (o.id)}
          <div class="radio-item">
            <RadioInput
              id={o.id}
              name="time"
              value={o.value}
              label={o.label}
              checked={time === o.value}
              onchange={() => (time = o.value)}
            />
            <Label for={o.id}>{o.label}</Label>
          </div>
        {/each}
      </div>
    </Fieldset>

    <Button type="submit">{t.submit}</Button>
  </form>
{/if}
