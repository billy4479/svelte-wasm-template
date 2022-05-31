import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import { createHtmlPlugin } from 'vite-plugin-html';
import { ViteRsw } from 'vite-plugin-rsw';

export default defineConfig({
  plugins: [
    svelte({
      preprocess: [sveltePreprocess({ typescript: true })],
    }),
    createHtmlPlugin(),
    ViteRsw(),
  ],
  build: {
    outDir: 'build',
  },
});
