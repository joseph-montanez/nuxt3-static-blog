import { defineNuxtPlugin } from "nuxt/app";
import { type DirectiveBinding } from 'vue';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('click-away', {
        beforeMount(el: HTMLElement & { clickAwayEvent?: EventListener }, binding: DirectiveBinding<() => void>) {
            // Define the event handler on the element with type safety
            el.clickAwayEvent = function(event: Event): void {
                // Ensure the event is treated as a MouseEvent
                const mouseEvent = event as MouseEvent;

                // Check that the click was outside the element and its children
                if (!(el === mouseEvent.target || el.contains(mouseEvent.target as Node))) {
                    // If it was outside, invoke the provided method
                    binding.value();
                }
            };

            // Add the event listener to the document
            document.addEventListener('click', el.clickAwayEvent);
        },
        unmounted(el: HTMLElement & { clickAwayEvent?: EventListener }) {
            // Remove the event listener when the element is unmounted
            if (el.clickAwayEvent) {
                document.removeEventListener('click', el.clickAwayEvent);
            }
        },
    });
});
