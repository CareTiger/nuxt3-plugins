import vue3StarRatings from "vue3-star-ratings";

export default defineNuxtPlugin((NuxtApp) => {
    console.log("Star 3 plugin loaded");
    NuxtApp.vueApp.component("vue3StarRatings", vue3StarRatings);
});
