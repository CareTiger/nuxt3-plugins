import StarRating from "vue-star-rating";

export default defineNuxtPlugin((NuxtApp) => {
    console.log("Star plugin loaded");
    NuxtApp.vueApp.component("StarRating", StarRating);
});
