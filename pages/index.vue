<template>
  <Head>
    <Title>Alex Mercer</Title>
    <Meta name="description" content="Hello, I am Alex a full-stack developer." />
  </Head>
  <NuxtLayout>
    <div class="hero">
      <h1>// TODO</h1>
      <picture>
        <NuxtImg
            sizes="100vw sm:50vw md:400px lg:1400px xl:1400px"
            src="/images/home.webp"
            alt="Fullstack Developer" />
      </picture>
    </div>
  </NuxtLayout>
</template>

<style>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}


.hero h1 {
  color: white;
  background-color: #ffaf38;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  padding: 0.5rem;
}

.hero img {
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
}


</style>
<script setup lang="ts">
</script>