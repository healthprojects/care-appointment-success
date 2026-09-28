import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// GitHub Pages serves a project site from a sub-path, for example
// https://healthprojects.github.io/healthprojects/care-appointment-success/.
// The deploy workflow sets BASE_PATH; local dev leaves it empty.
const base = process.env.BASE_PATH ?? '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      strict: true
    }),
    paths: {
      base,
      relative: true
    },
    prerender: {
      handleHttpError: 'fail'
    }
  }
};

export default config;
