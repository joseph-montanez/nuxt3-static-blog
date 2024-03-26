<template>
  <Container>
    <header
        class="flex flex-col lg:flex-row justify-between items-center my-5"
        v-click-away="closeNav">
      <div class="flex w-full lg:w-auto items-center justify-between">
        <NuxtLink to="/" class="flex items-center text-lg">
          <NuxtImg src="/images/logo-new.svg" width="28" class="mr-2" />
          <span class="font-bold text-slate-800 hidden lg:inline-block">Fullstack</span>
          <span class="text-slate-500 hidden lg:inline-block">Development</span>
        </NuxtLink>
        <div class="block lg:hidden">
          <button @click="toggleNav" class="text-gray-800">
            <svg
                fill="currentColor"
                class="w-4 h-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path
                  v-cloak
                  v-show="open"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
              ></path>
              <path
                  v-show="!open"
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <nav
          class="w-full lg:w-auto mt-2 lg:flex lg:mt-0"
          :class="{ 'block': open, 'hidden': !open }">
        <ul class="flex flex-col lg:flex-row lg:gap-3">
          <li v-for="(item, index) in menuItems" :key="index.toString() + '_' + item.title" class="relative">
            <Dropdown
                v-if="item.children.length > 0"
                :title="item.title"
                :children="item.children"
                :last-item="index === menuItems.length - 1" />
            <a
                v-else
                :href="item.path"
                class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900">
              {{ item.title }}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  </Container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Container from "~/components/Container.vue";
import Dropdown from "~/components/Dropdown.vue";
import SiteLink from "~/components/SiteLink.vue";

// Menu items structure
const menuItems = ref([
  {
    title: "Features",
    path: "#",
    children: [
      { title: "Action", path: "#" },
      { title: "Another action", path: "#" },
      { title: "Dropdown Submenu", path: "#" },
    ],
  },
  { title: "Home", path: "/", children: [] },
  { title: "Portfolio", path: "/portfolio/", children: [] },
  { title: "Articles", path: "/articles/", children: [] },
  { title: "About", path: "/about/", children: [] },
  { title: "Contact", path: "/contact/", children: [] },
]);

const open = ref(false);

const closeNav = () => {
  open.value = false;
};

const toggleNav = () => {
  open.value = !open.value;
};
</script>
