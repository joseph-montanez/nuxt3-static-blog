<template>
  <Head>
  <Title>Portfolio</Title>
  <Meta name="description" content="A selection of my work" />
</Head>
  <NuxtLayout>
    <Container>
      <SectionHead>
        <template #title>
          Portfolio
        </template>
        <template #desc>
          The work I've done
        </template>
      </SectionHead>
      {{ currentVideoUrl }}

      <div class="flex flex-wrap -mx-4 mt-5">
        <!-- Loop over portfolio items -->
        <div class="w-full lg:w-1/2 px-4 mb-8" v-for="item in portfolioItems" :key="item.title">
          <div class="relative bg-cover bg-center group" :style="`padding-top: 85.614%; background-image: url('${item.imageUrl}');`" @click="openModal(item.videoUrl)">
            <div class="absolute inset-0 flex justify-center items-center">
              <!-- SVG Icon -->
              <svg class="w-16 h-16 text-white filter drop-shadow-lg group-hover:scale-150 transition-transform duration-300 svg-icon"
                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
              </svg>
            </div>
          </div>
          <h3 class="mt-9 text-3xl">{{ item.title }}</h3>
          <p class="mt-4 text-base text-gray-700">
            {{ item.description }}
          </p>
          <ul class="mt-5 space-y-2">
            <li v-for="tech in item.technologies" :key="item.title + '_' + item.technologies">
              <strong>{{ tech.name }}:</strong> {{ tech.description }}
            </li>
          </ul>
        </div>
      </div>
      <VideoModal :videoUrl="currentVideoUrl" :isVisible="isModalVisible" @update:isVisible="isModalVisible = $event" />
    </Container>
  </NuxtLayout>
</template>

<style scoped>
/* Custom CSS for SVG color change on hover */
.group:hover .svg-icon path {
  fill: #ff0001;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, .5));
}
</style>

<script setup lang="ts">
import { ref } from 'vue';

// Define portfolio items
const portfolioItems = ref([
  {
    title: 'The Daily Insight',
    imageUrl: '/images/portfolio/newspaper.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'The Daily Insight" serves as a premier source for breaking news, in-depth analysis, and thought-provoking commentary. Our mission is to keep our readers informed, engaged, and inspired with a mix of current events, lifestyle features, and investigative journalism. With a global perspective, we cover everything from politics and business to technology and culture, providing insights that matter to an informed citizenry. Our dedicated team of journalists and contributors work around the clock to bring you accurate, impactful stories and a unique angle on the world\'s happenings.',
    technologies: [
      { name: 'React.js', description: 'For building a dynamic and responsive user interface.' },
      { name: 'Tailwind CSS', description: 'For rapid UI development without sacrificing design flexibility.' },
      { name: 'Redux', description: 'To manage the application state across the entire project.' }
    ]
  },
  {
    title: 'Realm of Guardians',
    imageUrl: '/images/portfolio/webgame.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: '"Realm of Guardians" is an enchanting 2D web-based MMORPG that invites players into a vast, mystical world teeming with magic, monsters, and mysteries. As guardians of this realm, players will embark on epic quests, explore hidden dungeons, battle formidable foes, and forge alliances with other players to defend the land from dark forces. With its captivating storyline, retro-inspired graphics, and a dynamic combat system, "Realm of Guardians" offers an immersive and engaging experience that harkens back to the golden age of role-playing games. Customize your hero, master powerful spells, and claim your place in the legends of the realm!',
    technologies: [
      {name: 'Phaser.js', description: 'A fast, free, and fun open source framework for Canvas and WebGL powered browser games. Perfect for creating 2D games like MMORPGs.'},
      {name: 'Vue.js', description: 'For managing the game\'s UI elements, such as inventories, chat windows, and menus, that need to be dynamic and responsive.'},
      {name: 'Socket.IO', description: 'To manage real-time, bi-directional communication between web clients and servers, essential for multiplayer online gameplay.'},
    ]
  },
]);

const currentVideoUrl = ref('');
const isModalVisible = ref(false);


const openModal = (videoUrl: string) => {
  currentVideoUrl.value = videoUrl;
  isModalVisible.value = true;
};
</script>