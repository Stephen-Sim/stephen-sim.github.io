// App entry point: wires up Vue, the router, per-page <head> tags, and
// the AOS scroll-in animation library, then mounts everything to #app.
import { createApp, nextTick } from 'vue';
import { createHead } from '@unhead/vue/client';
import AOS from 'aos';

import App from './App.vue';
import router from './router';

// Design-system CSS (colors, spacing, components) — this is the old
// css/style.css, moved here unchanged (plus one small selector tweak).
import './assets/main.css';
// AOS's own CSS, now loaded from node_modules instead of a CDN link.
import 'aos/dist/aos.css';

const app = createApp(App);

app.use(router);
app.use(createHead());

app.mount('#app');

// Start AOS once, the same way the old js/script.js did: fast, subtle
// animations that play once, and are skipped entirely for visitors who
// have "reduce motion" turned on at the OS level.
AOS.init({
  duration: 600,
  once: true,
  offset: 60,
  disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
});

// AOS scans the page once on load, but it doesn't know when vue-router
// swaps in a new view's content. After every navigation, wait for Vue to
// finish updating the DOM (nextTick), then give the browser a moment to
// paint (setTimeout) before asking AOS to re-scan for [data-aos] elements
// via refreshHard — otherwise elements on newly-loaded pages would never
// animate in.
router.afterEach(() => {
  nextTick(() => {
    setTimeout(() => {
      AOS.refreshHard();
    }, 50);
  });
});
