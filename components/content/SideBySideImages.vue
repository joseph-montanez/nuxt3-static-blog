<template>
  <div class="flex flex-wrap justify-center gap-4 md:flex-nowrap">
    <ContentSlot name="image1" />
    <ContentSlot name="image2" />
  </div>
</template>

<script setup>
const { image1, image2 } = useSlots();
</script>
