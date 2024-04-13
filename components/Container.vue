<script setup lang="ts">
const props = withDefaults(defineProps<{
  className?: string;
}>(), {
  className: ''
});
</script>
<template>
  <div :class="['max-w-screen-xl mx-auto px-5', className]">
    <slot />
  </div>
</template>

