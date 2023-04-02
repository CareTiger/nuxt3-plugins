export default defineNuxtPlugin((/* nuxtApp */) => {
    console.log("Hello from my basic plugin!");
    return {
        provide: {
            myPlugin: "String generated from my auto-imported plugin!",
        },
    };
});
