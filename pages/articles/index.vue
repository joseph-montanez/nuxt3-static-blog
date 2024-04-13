<script setup lang="ts">
import {ref, reactive, type Ref} from 'vue';
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';

// Pagination only works with  nitro: { preset: 'node-server', }, and not 'static'
// If you want pagination on a static version you need to copy this file, for each paged content.
const currentPage: Ref<number> = ref<number>(1);
const perPage: number = 10;
const { data: totalArticlesData } = useAsyncData('totalArticles', () =>
    queryContent('articles').only(['slug']).find()
);
const totalArticles = computed(() => totalArticlesData?.value?.length ?? 0);
const totalPages = computed(() => Math.ceil(totalArticles.value / perPage));

const query = reactive<QueryBuilderParams>({
  path: '/articles',
  limit: perPage,
  skip: (currentPage.value - 1) * perPage,
  sort: [{ publishDate: -1 }]
});


function updatePage(page: number): void {
  if (page < 1 || page > totalPages.value) return;
  currentPage.value = page;
  query.skip = (currentPage.value - 1) * perPage;
}
</script>

<template>
  <Head>
    <Title>Articles</Title>
    <Meta name="description" content="Development Tips and Tricks"/>
  </Head>
  <NuxtLayout name="default">
    <Container>
      <SectionHead>
        <template #title>Articles</template>
        <template #desc>Guides And Rants Of Things That Interest Me</template>
      </SectionHead>
      <main class="mt-16">
        <ContentList :query="query">
          <template #default="{ list }">
            <ul class="grid gap-16 max-w-4xl mx-auto">
              <li v-for="article in list" :key="article._path">
                <NuxtLink :to="article._path + '/'">
                  <div class="grid md:grid-cols-2 gap-5 md:gap-10 items-center">
                    <div>
                      <NuxtImg :src="article.image" sizes="100vw sm:50vw md:400px" :alt="article.title"
                               class="w-full rounded-md"/>
                    </div>
                    <div>
                        <span class="text-blue-400 uppercase tracking-wider text-sm font-medium">
                          {{ article.category }}
                        </span>

                      <h2 class="text-3xl font-semibold leading-snug tracking-tight mt-1">
                        {{ article.title }}
                      </h2>

                      <div class="flex gap-2 mt-3">
                          <span class="text-gray-400">
                            {{ article.author }}
                          </span>
                        <span class="text-gray-400">•</span>
                        <time class="text-gray-400" :datetime="article.publishDate">
                          {{ new Date(article.publishDate).toLocaleDateString() }}
                        </time>
                      </div>
                    </div>
                  </div>
                </NuxtLink>
              </li>
            </ul>
          </template>
          <template #not-found>
            <p>No articles found.</p>
          </template>
        </ContentList>

        <!-- Pagination only works with  nitro: { preset: 'node-server', }, and not 'static' -->
        <div class="flex items-center justify-center space-x-4 mt-8">
          <button
              @click="updatePage(currentPage - 1)"
              :disabled="currentPage <= 1"
              class="px-4 py-2 text-sm font-medium text-gray-800 bg-white rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
            Previous
          </button>
          <span class="text-sm font-medium text-gray-700">
            Page {{ currentPage }}
          </span>
          <button
              v-on:click="updatePage(currentPage + 1)"
              :disabled="currentPage >= totalPages"
              class="px-4 py-2 text-sm font-medium text-gray-800 bg-white rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
            Next
          </button>
        </div>
      </main>
    </Container>
  </NuxtLayout>
</template>