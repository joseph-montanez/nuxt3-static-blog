<script setup lang="ts">
import {onMounted} from "vue";
import {useNuxtApp} from "#app/nuxt.js";

let resolvedImageWithDomain = '';

// const meta = useMeta();
// const pageTitle = computed(() => meta.value.title || 'Default Title');

onMounted(() => {
  const { $config } = useNuxtApp()
  // resolvedImageWithDomain = new URL('/opengraph.jpg', $config.baseURL).toString()
  // console.log(resolvedImageWithDomain)
})
</script>
<template>
  <Navbar />
<!--  <NavbarInteractive />-->
  <slot />
  <Footer />
</template>
<style>
  /* Improve Page speed */
  /* https://css-tricks.com/almanac/properties/c/content-visibility/ */
  img {
    content-visibility: auto;
  }
  /* Avoid Alpine.js Hidden Element Flash */
  [x-cloak] {
    display: none;
  }
</style>