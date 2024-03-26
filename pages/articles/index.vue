<script setup lang="ts">
</script>
<template>
  <Head>
    <Title>Articles</Title>
    <Meta name="description" content="Development Tips and Tricks" />
  </Head>
  <NuxtLayout name="default">
    <Container>
      <SectionHead>
        <template #title>Articles</template>
        <template #desc>Guides And Rants Of Things That Interest Me</template>
      </SectionHead>
      <main class="mt-16">
        <ContentList path="/articles" v-slot="{ list }">
          <ul class="grid gap-16 max-w-4xl mx-auto">
            <li v-for="article in list" :key="article._path">
              <NuxtLink :to="article._path + '/'">
                <div class="grid md:grid-cols-2 gap-5 md:gap-10 items-center">
                  <div>
                    <NuxtImg :src="article.image" sizes="100vw sm:50vw md:400px" :alt="article.title" class="w-full rounded-md"/>
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
        </ContentList>
      </main>
    </Container>
  </NuxtLayout>
</template>
