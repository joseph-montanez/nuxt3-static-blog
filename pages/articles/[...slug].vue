<script setup lang="ts">
</script>
<template>
  <ContentDoc v-slot="{ doc }">
    <NuxtLayout name="blog"
                :title="doc.title"
                :description="doc.description"
                :publishDate="doc.publishDate"
                :category="doc.category"
                :categories="doc.categories"
                :author="doc.author"
                :tag="doc.tag"
                :tags="doc.tags"
    >
      <main>
        <article class="markdown-content">
          <PageToc :toc="doc.body?.toc" />
          <ContentRenderer :value="doc"/>
        </article>
      </main>
    </NuxtLayout>
  </ContentDoc>
</template>
<style>
.markdown-content h1 {
  @apply text-4xl mt-5 font-bold text-gray-900;
}

.markdown-content h2 {
  @apply text-3xl mt-5 font-semibold text-gray-800;
}

.markdown-content h3 {
  @apply text-2xl mt-5 font-semibold text-gray-700;
}

.markdown-content h4 {
  @apply text-xl mt-5 font-medium text-gray-600;
}

.markdown-content h5 {
  @apply text-lg mt-5 font-medium text-gray-500;
}

.markdown-content h6 {
  @apply text-base mt-5 font-normal text-gray-400;
}

.markdown-content p {
  @apply text-base text-gray-700 my-4;
}

.markdown-content hr {
  @apply my-4 border-t border-gray-200
}

.markdown-content blockquote {
  @apply bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4
}

.markdown-content code {
  @apply bg-gray-100 text-blue-800 font-mono text-sm px-2 py-1 rounded
}

.markdown-content pre code {
  @apply block
}

.markdown-content ul {
  @apply list-inside list-disc space-y-2 text-gray-700
}

.markdown-content ol {
  @apply list-decimal pl-5 space-y-2
}

.markdown-content a {
  @apply text-blue-600 hover:text-blue-800 visited:text-purple-600
}

.markdown-content [class^="language-"]::before,
.markdown-content [class*=" language-"]::before {
  @apply block font-bold text-xs text-gray-700 font-sans;
}

.markdown-content .language-typescript::before {
  content: "<Typescript>";
}

.markdown-content .language-javascript::before {
  content: "<Javascript>";
}

.markdown-content .language-kotlin::before {
  content: "<Kotlin>";
}

.markdown-content .language-xml::before {
  content: "<Xml>";
}

.markdown-content .language-bash::before {
  content: "<Bash>";
}

.markdown-content .language-toml::before {
  content: "<Toml>";
}

.markdown-content .language-json::before {
  content: "<Json>";
}

.markdown-content .language-dockerfile::before {
  content: "<Dockerfile>";
}

.markdown-content .language-yaml::before {
  content: "<Yaml>";
}

.markdown-content .language-php::before {
  content: "<Php>";
}
</style>