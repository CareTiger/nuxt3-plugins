import { createDynamicForm } from "@asigloo/vue-dynamic-forms";
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
    console.log("Hello from my dynamic forms plugin!");
    //nuxtApp.provide("dynamicForm", createDynamicForm());
});
