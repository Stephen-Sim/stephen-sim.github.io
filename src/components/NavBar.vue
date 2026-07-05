<!-- Shared site navbar. Markup matches the old static navbar exactly;
     RouterLink replaces plain <a href> so navigation doesn't reload the
     page, and a couple of small behaviors (scroll blur, closing the
     mobile menu after navigating) are added back in as Vue code below. -->
<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

// Bootstrap's JS is loaded globally via a CDN <script> tag in index.html
// (we don't npm-install Bootstrap), so it attaches itself to `window`.
// This lets TypeScript know `window.bootstrap` may exist.
declare global {
  interface Window {
    bootstrap?: {
      Collapse: {
        getInstance: (el: Element) => { hide: () => void } | null;
      };
    };
  }
}

const navEl = ref<HTMLElement | null>(null);
const route = useRoute();

// ---- 1) Scroll blur: add a translucent background once scrolled down ----
// Same threshold (24px) and 'scrolled' class the old js/script.js used —
// the CSS rule for it already lives in src/assets/main.css.
function updateNavScrollState() {
  if (!navEl.value) return;
  if (window.scrollY > 24) navEl.value.classList.add('scrolled');
  else navEl.value.classList.remove('scrolled');
}

onMounted(() => {
  window.addEventListener('scroll', updateNavScrollState, { passive: true });
  updateNavScrollState(); // handle the case where the page loads mid-scroll
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateNavScrollState);
});

// ---- 2) Close the mobile (collapsed) menu whenever the route changes ----
// Without this, tapping a link on mobile would navigate but leave the
// dropdown menu open on top of the new page.
watch(
  () => route.path,
  () => {
    const collapseEl = document.getElementById('navMenu');
    if (collapseEl && collapseEl.classList.contains('show') && window.bootstrap) {
      window.bootstrap.Collapse.getInstance(collapseEl)?.hide();
    }
  }
);
</script>

<template>
  <nav class="navbar navbar-expand-lg fixed-top site-nav" id="siteNav" ref="navEl">
    <div class="container">
      <RouterLink class="navbar-brand brand" to="/">stephen<span class="brand-accent">.sim</span></RouterLink>
      <button
        class="navbar-toggler nav-toggle"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
        aria-controls="navMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa-solid fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav ms-auto align-items-lg-center">
          <li class="nav-item">
            <!-- exact-active-class means "/" is only highlighted when the
                 route really is "/", not on every other page too. -->
            <RouterLink class="nav-link" to="/" exact-active-class="active">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about" active-class="active">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/projects" active-class="active">Projects</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/worldskills" active-class="active">WorldSkills</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/contact" active-class="active">Contact</RouterLink>
          </li>
          <li class="nav-item ms-lg-3 mt-2 mt-lg-0">
            <a class="btn-accent btn-sm-nav" href="/assets/resume.pdf" download>
              <i class="fa-solid fa-download me-2"></i>Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
