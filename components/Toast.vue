<template>
    <div class="m-4 p-4 border border-slate-400 rounded-lg">
        <h1>Vue Toastification</h1>
        <button
            type="button"
            class="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            @click="sendToast()"
        >
            Send Toast
        </button>
    </div>
</template>
<script setup>
// https://vue-toastification.maronato.dev/
// https://github.com/Maronato/vue-toastification
import { useToast } from "vue-toastification";
const toast = useToast();
function sendToast() {
    toast.success("Toast sent!");
}
</script>
