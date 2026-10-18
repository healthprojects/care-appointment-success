import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// A user/organization site (care-appointment-success.github.io) is served from
// the root, so BASE_PATH is normally empty.
// Set BASE_PATH only when serving from a sub-path.
const base = process.env.BASE_PATH ?? '';

export default defineConfig({
  plugins: [
    sveltekit({
      preprocess: vitePreprocess(),
      adapter: adapter({
        pages: 'build',
        assets: 'build',
        fallback: '404.html',
        strict: true
      }),
      paths: { base, relative: true },
      prerender: { handleHttpError: 'fail' }
    })
  ],
  server: {
    fs: {
      // Allow importing ../locales/<code>/messages.json from src/lib/i18n.ts.
      allow: ['locales']
    }
  }
});
