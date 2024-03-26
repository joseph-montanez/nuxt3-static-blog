import {defineNuxtPlugin} from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('click-away', {
        beforeMount(el, binding) {
            el.clickAwayEvent = function(event) {
                // Check that the click was outside the el and its children
                if (!(el === event.target || el.contains(event.target))) {
                    // If it was outside, invoke the provided method
                    binding.value();
                }
            };
            document.addEventListener('click', el.clickAwayEvent);
        },
        unmounted(el) {
            document.removeEventListener('click', el.clickAwayEvent);
        },
    });
});
