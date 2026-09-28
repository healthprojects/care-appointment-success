import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    fs: {
      // Allow importing ../locales/<code>/messages.json from src/lib/i18n.ts.
      allow: ['locales']
    }
  }
});
