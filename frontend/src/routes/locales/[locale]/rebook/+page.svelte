<script lang="ts">
  import { Button, ErrorSummary, Fieldset, Hint, Label, Panel, RadioInput } from '@lilydesignsystem/svelte-headless';
  import { ALTERNATIVE_SLOTS, formatDate, formatTime } from '$lib/appointment';
  import { format } from '$lib/i18n';
  import { focusAfterUpdate } from '$lib/focus';
  import { localePath } from '$lib/paths';

  let { data } = $props();
  let t = $derived(data.ui.rebook);

  const CANCEL = 'cancel';
  let choice = $state('');
  let showError = $state(false);
  let outcome = $state<'' | 'booked' | 'cancelled'>('');

  let slot = $derived(ALTERNATIVE_SLOTS.find((s) => s.id === choice));
  let slotLabel = (start: string) => `${formatDate(start, data.locale)}, ${formatTime(start, data.locale)}`;

  function onsubmit(event: SubmitEvent) {
    event.preventDefault();
    showError = choice === '';
    if (showError) {
      focusAfterUpdate('.error-summary');
      return;
    }
    outcome = choice === CANCEL ? 'cancelled' : 'booked';
    focusAfterUpdate('#outcome-title');
  }
</script>

<svelte:head>
  <title>{t.title} – {data.ui.common.siteName}</title>
</svelte:head>

{#if outcome === 'booked' && slot}
  <Panel class="confirmation-panel" label={t.bookedTitle}>
    <h1 id="outcome-title" tabindex="-1">{t.bookedTitle}</h1>
    <p>
      {format(t.bookedBody, { date: formatDate(slot.start, data.locale), time: formatTime(slot.start, data.locale) })}
    </p>
  </Panel>
{:else if outcome === 'cancelled'}
  <Panel class="confirmation-panel" label={t.cancelledTitle}>
    <h1 id="outcome-title" tabindex="-1">{t.cancelledTitle}</h1>
    <p>{t.cancelledBody}</p>
  </Panel>
{:else}
  <p><a class="back-link" href={localePath(data.locale, 'appointment')}>{data.ui.common.backToAppointment}</a></p>

  {#if showError}
    <ErrorSummary title={data.ui.common.errorSummaryTitle}>
      <ul>
        <li><a href="#{ALTERNATIVE_SLOTS[0].id}">{t.errorNone}</a></li>
      </ul>
    </ErrorSummary>
  {/if}

  <h1>{t.title}</h1>

  <form {onsubmit} novalidate>
    <Fieldset legend={t.legend} aria-describedby="rebook-hint">
      <Hint id="rebook-hint">{t.hint}</Hint>
      <div class="radios">
        {#each ALTERNATIVE_SLOTS as s (s.id)}
          <div class="radio-item">
            <RadioInput
              id={s.id}
              name="slot"
              value={s.id}
              label={slotLabel(s.start)}
              checked={choice === s.id}
              onchange={() => (choice = s.id)}
            />
            <Label for={s.id}>{slotLabel(s.start)}</Label>
          </div>
        {/each}
        <div class="radio-divider"></div>
        <div class="radio-item">
          <RadioInput
            id="slot-cancel"
            name="slot"
            value={CANCEL}
            label={t.cancelOption}
            checked={choice === CANCEL}
            onchange={() => (choice = CANCEL)}
          />
          <Label for="slot-cancel">{t.cancelOption}</Label>
        </div>
      </div>
    </Fieldset>
    <Button type="submit">{t.submit}</Button>
  </form>
{/if}
