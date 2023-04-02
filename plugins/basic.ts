export default defineNuxtPlugin((/* nuxtApp */) => {
    console.log("basic plugin!");
    return {
        provide: {
            myPlugin: "String generated from my auto-imported plugin!",
        },
    };
});
