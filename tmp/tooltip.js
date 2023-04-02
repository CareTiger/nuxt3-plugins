import FloatingVue from "floating-vue";

export default defineNuxtPlugin((NuxtApp) => {
    console.log("tooltip plugin loaded");
    NuxtApp.vueApp.use(FloatingVue);
});
