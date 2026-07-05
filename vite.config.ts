import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// See https://vite.dev/config/ for all available options.
export default defineConfig({
  // The site is served from https://stephen-sim.github.io/ (a GitHub
  // Pages "user site", served from the domain root), so assets are
  // referenced from "/" — no extra folder-name prefix needed.
  base: '/',
  plugins: [vue()],
});
