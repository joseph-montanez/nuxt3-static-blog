<script setup lang="ts">
const props = defineProps<{
  videoUrl: string;
  isVisible: boolean;
}>();

const emit = defineEmits<{
  (event: 'update:isVisible', value: boolean): void;
}>();

const closeModal = () => {
  emit('update:isVisible', false);
};
</script>
<template>
  <div v-if="props.isVisible" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
    <div class="bg-white p-4 rounded-lg max-w-4xl w-full mx-4">
      <iframe :src="props.videoUrl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="w-full" style="height: 60vh;"></iframe>
      <div class="flex justify-center mt-4">
        <button @click="closeModal" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">Close Player</button>
      </div>
    </div>
  </div>
</template>