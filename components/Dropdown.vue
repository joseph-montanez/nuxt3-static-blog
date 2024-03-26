<script setup lang="ts">
import {type PropType, ref} from 'vue';

interface MenuItem {
  title: string;
  path: string;
}

// Props are defined with `defineProps` in Vue 3 setup script
const props = defineProps({
  title: String,
  lastItem: Boolean,
  children: Array as PropType<MenuItem[]>,
});

const { title, lastItem, children } = props;

const open = ref(false);

const closeDropdown = () => {
  open.value = false;
};
const toggleDropdown = () => {
  open.value = !open.value;
};
</script>
<template>
  <button @click="toggleDropdown" class="flex items-center gap-1 w-full lg:w-auto lg:px-3 py-2 text-gray-600 hover:text-gray-900">
    <span>{{ title }}</span>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="3"
        stroke="currentColor"
        class="w-3 h-3 mt-0.5"
        :class="{'rotate-180': open, 'rotate-0': !open}">
      <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
    </svg>
  </button>
  <div
      v-if="open"
      :class="[
      'lg:absolute w-full lg:w-48 z-20',
      lastItem ? 'lg:right-0 origin-top-right' : 'lg:left-0 origin-top-left',
    ]">
    <div class="px-3 lg:py-2 lg:bg-white lg:rounded-md lg:shadow lg:border flex flex-col">
      <a v-for="(item, index) in children" :key="index.toString() + '_' + item.path" :href="item.path" class="py-1 text-gray-600 hover:text-gray-900">
        {{ item.title }}
      </a>
    </div>
  </div>
</template>