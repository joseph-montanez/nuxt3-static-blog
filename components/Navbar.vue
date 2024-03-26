<template>
  <Container>
    <header
        class="flex flex-col lg:flex-row justify-between items-center my-5">
      <div class="flex w-full lg:w-auto items-center justify-between">
        <NuxtLink to="/" class="flex items-center text-lg">
          <NuxtImg src="/images/logo-new.svg" width="28" class="mr-2" />
          <span class="font-bold text-slate-800 hidden lg:inline-block">Fullstack</span>
          &nbsp;
          <span class="text-slate-500 hidden lg:inline-block">Development</span>
        </NuxtLink>
        <div class="block lg:hidden">
          <a href="#menu" class="text-gray-800">
            <svg
                fill="currentColor"
                class="w-4 h-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
              <title>Show Menu</title>
              <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              ></path>
            </svg>
          </a>
        </div>
      </div>

      <nav id="menu" class="w-full lg:w-auto mt-2 lg:flex lg:mt-0">
        <ul class="flex flex-col lg:flex-row lg:gap-3">
          <li v-for="(item, index) in menuItems" :key="index.toString() + '_' + item.title" class="relative">
            <Dropdown
                v-if="item.children.length > 0"
                :title="item.title"
                :children="item.children"
                :last-item="index === menuItems.length - 1" />
            <NuxtLink
                v-else
                :href="item.path"
                class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900">
              {{ item.title }}
            </NuxtLink>
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

// Menu items structure
const menuItems = ref([
  { title: "Home", path: "/", children: [] },
  { title: "Portfolio", path: "/portfolio/", children: [] },
  { title: "Articles", path: "/articles/", children: [] },
  { title: "About", path: "/about/", children: [] },
  { title: "Contact", path: "/contact/", children: [] },
]);
</script>
<style scoped>
.menu-close, nav#menu {
  display: none;
}

@media (min-width: 1024px) {
  .menu-close {
    display: none !important;
  }

  nav#menu,
  nav#menu:target {
    display: block !important;
  }

  div > a[href="#menu"] {
    display: none !important;
  }
}

#menu:target {
  display: block;
}

#menu:target + .block a[href="#menu"] {
  display: none;
}

#menu:target + .block a.menu-close {
  display: block;
}
</style>