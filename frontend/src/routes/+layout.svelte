<script lang="ts">
  import '$lib/css/app.css';
  import { page } from '$app/state';
  import { goto } from '$app/navigation';
  import { asset } from '$app/paths';
  import { SkipLink, Header, Footer } from '@lilydesignsystem/svelte-headless';
  import PickerBar from '@lilydesignsystem/svelte-picker-bar';
  import { ui } from '$lib/i18n';
  import { LOCALES, LOCALE_LABELS, isLocale } from '$lib/locales';
  import { localePath, pageOf } from '$lib/paths';

  let { children } = $props();

  // Locale-scoped pages supply their own strings through page.data (see
  // routes/locales/[locale]/+layout.ts). The landing page has no locale, so
  // its chrome is bilingual, Welsh first, per the Welsh Language Active Offer.
  const cy = ui('cy-001').common;
  const en = ui('en-001').common;
  const bilingual = Object.fromEntries(
    Object.keys(en).map((key) => {
      const k = key as keyof typeof en;
      return [k, cy[k] === en[k] ? en[k] : `${cy[k]} / ${en[k]}`];
    })
  ) as typeof en;

  let locale = $derived(page.data.locale);
  let t = $derived(page.data.ui?.common ?? bilingual);
  let home = $derived(locale ? localePath(locale) : asset('/'));

  // Curated theme list: NHS Wales for patients is the default visual
  // reference; the rest demonstrate runtime theme swapping.
  const themes = [
    'united-kingdom-national-health-service-wales-for-patients',
    'united-kingdom-national-health-service-wales-for-practitioners',
    'united-kingdom-national-health-service-england-for-patients',
    'united-kingdom-government-digital-service',
    'light',
    'dark'
  ];
  const themeLabels = {
    'united-kingdom-national-health-service-wales-for-patients': 'GIG Cymru / NHS Wales',
    'united-kingdom-national-health-service-wales-for-practitioners': 'GIG Cymru / NHS Wales (staff)',
    'united-kingdom-national-health-service-england-for-patients': 'NHS England',
    'united-kingdom-government-digital-service': 'GOV.UK',
    light: 'Light / Golau',
    dark: 'Dark / Tywyll'
  };

  // LocalePicker only manages the picker; moving to the same page in the
  // newly chosen locale is this app's job. The picker's first onChange call
  // is it applying its initial value, not a visitor's choice. On the landing
  // page (no locale in the URL) acting on it would redirect straight to the
  // first locale, so ignore it. On locale pages it equals the current locale
  // and is ignored anyway. The layout, and so the picker, persists across
  // client-side navigation, so there is exactly one initial call.
  let initialApplied = false;

  function onLocaleChange(code: string) {
    const initial = !initialApplied;
    initialApplied = true;
    if (initial || !isLocale(code) || code === locale) return;
    goto(localePath(code, pageOf(page.url.pathname)));
  }
</script>

<SkipLink href="#content" label={t.skipToContent} />

<Header class="site-header" label={t.siteName}>
  <div class="site-header-inner">
    <a class="site-brand" href={home}>
      <span class="site-brand-name">{t.siteName}</span>
      <span class="site-brand-tagline">{t.tagline}</span>
    </a>
    {#if locale}
      <nav class="site-nav" aria-label={t.mainNavLabel}>
        <a href={localePath(locale)} aria-current={pageOf(page.url.pathname) === '' ? 'page' : undefined}
          >{t.navHome}</a
        >
        <a
          href={localePath(locale, 'appointment')}
          aria-current={pageOf(page.url.pathname) === 'appointment' ? 'page' : undefined}>{t.navAppointment}</a
        >
      </nav>
    {/if}
    <PickerBar
      class="site-picker-bar"
      labels={{
        theme: t.pickerTheme,
        locale: t.pickerLocale,
        textSize: t.pickerTextSize,
        share: t.pickerShare
      }}
      themesUrl={asset('/themes/')}
      {themes}
      themeProps={{
        themeLabels,
        defaultValue: 'united-kingdom-national-health-service-wales-for-patients',
        storageKey: 'barod-theme'
      }}
      locales={[...LOCALES]}
      localeProps={{
        value: locale,
        localeLabels: LOCALE_LABELS,
        onChange: onLocaleChange
      }}
      textSizeProps={{ storageKey: 'barod-text-size' }}
      shareTargets={[
        {
          id: 'email',
          label: t.shareEmail,
          href: (url: string, title: string) =>
            `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`
        }
      ]}
      shareProps={{ copyLabel: t.shareCopyLink, copiedLabel: t.shareCopied }}
    />
  </div>
</Header>

<p class="prototype-banner" role="note">{t.prototypeBanner}</p>

<main id="content" class="site-main" tabindex="-1">
  {@render children()}
</main>

<Footer class="site-footer" label={t.siteName}>
  <div class="site-footer-inner">
    <p>{t.footerText}</p>
    <p>
      <a href="https://github.com/healthprojects/healthprojects/tree/main/care-appointment-success"
        >{t.footerSource}</a
      >
    </p>
  </div>
</Footer>
