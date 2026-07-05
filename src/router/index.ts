// Sets up client-side routing so the site behaves like the old 5-page
// static site, but without full page reloads between pages.
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

// Each view is lazy-loaded (the `() => import(...)` form) so the browser
// only downloads the code for a page when the visitor actually goes there.
const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },
  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
  { path: '/projects', name: 'projects', component: () => import('../views/ProjectsView.vue') },
  { path: '/worldskills', name: 'worldskills', component: () => import('../views/WorldSkillsView.vue') },
  { path: '/contact', name: 'contact', component: () => import('../views/ContactView.vue') },
];

const router = createRouter({
  // createWebHistory gives us clean URLs like /about instead of /#/about.
  // The site is a GitHub Pages "user site" hosted at the domain root, so
  // the history base is just "/".
  history: createWebHistory('/'),
  routes,
  // Restore scroll position when using browser back/forward; otherwise
  // always start new pages at the top (matches normal page-load behavior).
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

export default router;
