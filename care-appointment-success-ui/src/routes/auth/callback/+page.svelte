<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { completeSignIn } from '#lib/auth.svelte.js';
  import { ui } from '#lib/i18n.js';

  const cy = ui('cy-001').common;
  const en = ui('en-001').common;
  let failed = $state(false);

  onMount(async () => {
    try {
      await goto(await completeSignIn(), { replaceState: true });
    } catch {
      failed = true;
    }
  });
</script>

<svelte:head>
  <title>{cy.signIn} / {en.signIn}</title>
</svelte:head>

<p role="status">{failed ? `${cy.authError} / ${en.authError}` : `${cy.authWorking} / ${en.authWorking}`}</p>
