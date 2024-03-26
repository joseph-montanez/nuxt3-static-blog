<template>
  <Head>
    <Title>Contact</Title>
    <Meta name="description" content="How to reach me" />
  </Head>
  <NuxtLayout name="default">
    <Container>
      <SectionHead>
        <template #title>
          Contact
        </template>
        <template #desc>
          How to get hold of me
        </template>
      </SectionHead>

      <!-- Two-column layout -->
      <div class="flex flex-col md:flex-row md:min-h-[500px] mt-5"> <!-- Adjust the min-height as needed -->
        <!-- Left column for contact details -->
        <div class="w-full md:w-1/2 p-4">
          <h2 class="text-primary font-bold text-2xl mb-4">Alex Mercer</h2>
          <div class="space-y-4">
            <div>
              <dt class="font-semibold">Address:</dt>
              <dd>
                <div class="flex items-center justify-center md:justify-start space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-6 w-6 text-gray-700"
                       fill="currentColor">
                    <!-- SVG Path -->
                  </svg>
                  <a href="#" class="text-blue-600 hover:text-blue-800">
                    452 Springvale Road<br>Apt. 304<br>Everwood, CA 90321
                  </a>
                </div>
              </dd>
            </div>
            <div>
              <dt class="font-semibold">E-mail:</dt>
              <dd>
                <div class="flex items-center justify-center md:justify-start space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-6 w-6 text-gray-700"
                       fill="currentColor">
                    <!-- SVG Path -->
                  </svg>
                  <a href="mailto:alex.mercer.dev@example.com" class="text-blue-600 hover:text-blue-800">alex.mercer.dev@example.com</a>
                </div>
              </dd>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 bg-blue-600 flex-grow">
          <div class="h-full bg-cover bg-center" style="background-image: url('/images/about.webp')">
          </div>
        </div>
      </div>
    </Container>
  </NuxtLayout>
</template>

<script setup lang="ts">
const team = [
  {
    name: "Janette Lynch",
    title: "Senior Director",
    avatar: {
      src: "https://source.unsplash.com/IF9TK5Uy-KI",
      width: 480,
      height: 560,
    },
  },
  {
    name: "Marcell Ziemann",
    title: "Principal Strategist",
    avatar: {
      src: "https://source.unsplash.com/iEEBWgY_6lA",
      width: 580,
      height: 580,
    },
  },
  {
    name: "Robert Palmer",
    title: "Marketing Engineer",
    avatar: {
      src: "https://source.unsplash.com/ZHvM3XIOHoE",
      width: 580,
      height: 580,
    },
  },
];
</script>

<style scoped>
/* Add any additional styles here */
</style>
