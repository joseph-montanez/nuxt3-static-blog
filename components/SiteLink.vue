<template>
  <NuxtLink
      :href="href"
      v-bind="rest"
      :class="[
      'rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200',
      computedClasses,
      className
    ]"
  >
    <slot/>
  </NuxtLink>
</template>

<script setup lang="ts">
import {computed, toRefs, useAttrs} from 'vue';

enum Size {
  Large = 'lg',
  Medium = 'md',
}

enum Style {
  Primary = 'primary',
  Outline = 'outline',
  Inverted = 'inverted',
  Muted = 'muted',
}

// Define the component's props
const props = withDefaults(defineProps<{
  href: string,
  size?: Size,
  block?: boolean,
  style?: Style,
}>(), {
  size: Size.Large,
  style: Style.Primary,
  block: false,
});

const {href, block, size, style, className} = toRefs(props);
const rest = useAttrs();

const sizes = {
  [Size.Large]: 'px-5 py-2.5',
  [Size.Medium]: 'px-4 py-2',
};

const styles = {
  [Style.Primary]: 'bg-black text-white hover:bg-gray-800 border-2 border-transparent',
  [Style.Outline]: 'bg-white border-2 border-black hover:bg-gray-100 text-black',
  [Style.Inverted]: 'bg-white text-black border-2 border-transparent',
  [Style.Muted]: 'bg-gray-100 hover:bg-gray-200 border-2 border-transparent',
};


const computedClasses = computed(() => {
  const sizeClass = sizes[size.value as keyof typeof sizes];
  const styleClass = styles[style.value as keyof typeof styles];

  return ([
    block.value ? 'w-full' : '', sizeClass, styleClass,
  ]);
});
</script>
