<template>
    <div class="m-4 p-4 border border-slate-400 rounded-lg">
        <h1>Tooltip</h1>
        <div>
            <ClientOnly>
                <button v-tooltip="'You have ' + count + ' new messages.'">
                    Messages
                </button>
            </ClientOnly>
        </div>
    </div>
</template>
<script setup>
// https://floating-vue.starpad.dev/
// https://github.com/Akryum/floating-vue
const count = ref(5);
</script>
