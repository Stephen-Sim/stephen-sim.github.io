<!-- Shared site footer. Markup matches the old static footer exactly;
     the copyright year used to be set by js/script.js on page load — now
     it's just a computed value, which is simpler and always up to date. -->
<script setup lang="ts">
import { computed } from 'vue';

const year = computed(() => new Date().getFullYear());
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-main">
        <div>
          <p class="footer-kicker mono">STEPHEN SIM / PORTFOLIO</p>
          <p class="footer-statement">Building reliable systems<br>from Kuala Lumpur.</p>
        </div>
        <a class="footer-email" href="mailto:simshansiong2002@gmail.com">simshansiong2002@gmail.com <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
      </div>
      <div class="footer-bottom">
        <p class="footer-copy mb-0">© {{ year }} Stephen Sim. Built with curiosity.</p>
        <div class="footer-links">
          <a href="https://github.com/Stephen-Sim" target="_blank" rel="noopener">GitHub <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          <a href="https://www.linkedin.com/in/stephen-sim-343775212" target="_blank" rel="noopener">LinkedIn <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
      </div>
    </div>
  </footer>
</template>
