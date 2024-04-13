<script setup lang="ts">
import type {Toc} from "@nuxt/content/types";

const props = defineProps<{
  toc?: Toc;
}>();
</script>
<template>
  <div class="bg-gray-100 p-4 rounded-lg shadow">
    <p>Table of Contents</p>
    <ul class="list-none space-y-2" v-if="props.toc && props.toc.links">
      <li v-for="link in toc?.links" :key="link.text">
        <a :href="`#${link.id}`" class="text-blue-600 hover:text-blue-800 transition-colors">
          {{ link.text }}
        </a>
      </li>
    </ul>
  </div>
</template>