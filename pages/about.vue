<script setup lang="ts">
</script>
<template>
  <Head>
    <Title>About Me</Title>
    <Meta name="description" content="How I got into programming" />
  </Head>
  <NuxtLayout name="default">
    <Container>
      <SectionHead>
        <template #title>
          About
        </template>
        <template #desc>
          Where it all started
        </template>
      </SectionHead>

      <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16 lg:flex-row lg:items-start">
        <NuxtImg src="/images/contact.webp" class="lg:max-w-xs lg:mr-8 w-full h-auto lg:float-left" />
        <div>
          <h2 class="font-bold text-3xl text-gray-800">
            A Book About Java
          </h2>
          <p class="text-lg leading-relaxed text-slate-500">
            The library was a haven for curious minds, a place where worlds unfolded in the silence between bookshelves.
            It was here, at the age of 12, that my journey into the realm of programming began—a journey that would
            shape my future in ways I couldn't have imagined.
          </p>
          <p class="text-lg leading-relaxed text-slate-500">
            On one particularly languid summer afternoon, with the sun casting long shadows through the library windows,
            my eyes fell upon a spine that read simply, "Java: The Complete Reference." It was an encounter that seemed
            almost fated, as if the book had been waiting there for me to discover it. With a sense of intrigue, I
            checked it out, not fully understanding how this moment would mark the beginning of my lifelong passion.
          </p>
          <p class="text-lg leading-relaxed text-slate-500">
            At home, I poured over the pages of the book, marveling at the concepts and the language that promised to
            unlock the secrets of software development. However, there was a hurdle; I didn't own a computer.
            Undeterred, I took meticulous notes, sketching out algorithms and memorizing syntax, imagining the day when
            I could finally put theory into practice.
          </p>
          <p class="text-lg leading-relaxed text-slate-500">
            The following year, a pivotal moment arrived with the acquisition of our very first family computer. It was a modest
            machine, but to me, it was a gateway to infinite possibilities. Remembering the Java book, I was eager to
            dive into programming. However, I decided to start with something a bit more accessible to test the
            waters — QuickBASIC.
          </p>
          <p class="text-lg leading-relaxed text-slate-500">
            QuickBASIC was a simple, but it allowed myself to grasp fundamental programming concepts
            and see immediate results. I spent countless hours experimenting, writing small programs that gradually
            increased in complexity. Each success fueled my desire to learn more, and each challenge was met with
            unwavering determination.
          </p>
          <p class="text-lg leading-relaxed text-slate-500">
            My curiosity knew no bounds. As soon as I felt comfortable with one language, I sought out others,
            delving into C++, Python, and JavaScript. The more I learned, the more I realized how vast the field of
            programming was. Each language offered a new way of thinking, a new set of tools to express my creativity
            and solve problems.
          </p>
          <p class="text-lg leading-relaxed text-slate-500">
            The journey wasn't without its difficulties. There were moments of frustration, times when code refused to
            behave as expected, and debugging sessions that stretched into the early hours of the morning. Yet, these
            challenges only deepened my resolve and my love for programming.
          </p>
          <p class="text-lg leading-relaxed text-slate-500">
            Looking back, I often think about that day in the library and the book that started it all. It was more than
            just a book about Java; it was a doorway to a world I now thrive in. From those humble beginnings, writing
            notes in the margins of a library book, I've come a long way. I've mastered languages and technologies I
            once couldn't have imagined, and I've built projects that have the power to change the world.
          </p>

        </div>
        </div>
    </Container>
  </NuxtLayout>
</template>
<style scoped>
</style>
