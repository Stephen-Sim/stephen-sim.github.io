<!-- Shared site footer. Markup matches the old static footer exactly;
     the copyright year used to be set by js/script.js on page load — now
     it's just a computed value, which is simpler and always up to date. -->
<script setup lang="ts">
import { computed } from 'vue';

const year = computed(() => new Date().getFullYear());
</script>

<template>
  <footer class="site-footer">
    <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
      <p class="footer-copy mb-0">© <span id="year">{{ year }}</span> Stephen Sim.</p>
      <div class="footer-links">
        <a href="https://github.com/Stephen-Sim" target="_blank" rel="noopener" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/stephen-sim-343775212" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
      </div>
    </div>
  </footer>
</template>
