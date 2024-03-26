<script setup lang="ts">
import {getFormattedDate} from "~/libs/date.js";
const props = useAttrs()
</script>
<template>
  <Navbar />
<!--  <NavbarInteractive />-->
  <Container>
    <div class="mx-auto max-w-4xl mt-14">
      <span class="text-blue-400 uppercase tracking-wider text-sm font-medium">
        {{props.category}}
      </span>
      <h1
          class="text-4xl lg:text-5xl font-bold lg:tracking-tight mt-1 lg:leading-tight">
        {{props.title}}
      </h1>
      <div class="flex gap-2 mt-3 items-center">
        <span class="text-gray-400">
          {{props.author}}
        </span>
        <span class="text-gray-400">•</span>
        <time class="text-gray-400" datetime={publishDate}>
          {{ props.publishDate != null ? getFormattedDate(props.publishDate as string) : ''}}
        </time>
        <span class="text-gray-400">•</span>
        <div class="flex gap-3">
          <span v-for="tag in props.tags" :key="tag" class="text-sm text-gray-500">
            #{{ tag }}
          </span>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-4xl prose prose-lg mt-6">
      <slot/>
    </div>

    <div class="text-center mt-8">
      <NuxtLink
          href="/articles/"
          class="bg-gray-100 px-5 py-3 rounded-md hover:bg-gray-200 transition"
      >← Back to Articles</NuxtLink
      >
    </div>
  </Container>
  <Footer/>
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