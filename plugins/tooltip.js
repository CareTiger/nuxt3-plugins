import FloatingVue from "floating-vue";
import "floating-vue/dist/style.css";

export default defineNuxtPlugin((NuxtApp) => {
    console.log("tooltip plugin loaded");
    NuxtApp.vueApp.use(FloatingVue);
});
