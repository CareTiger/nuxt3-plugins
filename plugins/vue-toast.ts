import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((NuxtApp) => {
    console.log("Toast plugin loaded");
    NuxtApp.vueApp.use(Toast);
});
