<script setup lang="ts">
import {ref} from "vue";

const year = ref(new Date().getFullYear());
</script>
<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <footer class="py-3 my-4">
      <ul class="flex justify-center border-b border-gray-200 pb-3 mb-3">
        <li class="nav-item">
          <NuxtLink to="/contact/" class="nav-link px-2 text-gray-500 hover:text-gray-700">Contact</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/privacy/" class="nav-link px-2 text-gray-500 hover:text-gray-700">Privacy Policy</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/terms/" class="nav-link px-2 text-gray-500 hover:text-gray-700">Terms</NuxtLink>
        </li>
      </ul>
      <p class="text-center text-gray-500">© {{ year }} Joseph Montañez</p>
    </footer>
  </div>
</template>