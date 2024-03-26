<template>
  <div :class="['max-w-screen-xl mx-auto px-5', className]">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  className: String,
});
</script>
