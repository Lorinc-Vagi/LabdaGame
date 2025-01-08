import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: '/2024-12-12labdagame/',
  build: {
      outDir: 'docs',
      emptyOutDir: true
  }
})
