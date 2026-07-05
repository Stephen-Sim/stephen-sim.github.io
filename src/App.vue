<!-- Root component: the shared shell every page sits inside. NavBar and
     SiteFooter are the same on every route; RouterView swaps out the
     <main> content in between as the user navigates. -->
<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import SiteFooter from './components/SiteFooter.vue';
</script>

<template>
  <NavBar />
  <RouterView />
  <SiteFooter />
</template>
