<template>
    <div class="m-4 p-4 border border-slate-400 rounded-lg">
        <h1>Tooltip</h1>
        <div>
            <ClientOnly>
                <button v-tooltip="'You have ' + count + ' new messages.'">
                    Hover over me
                </button>
            </ClientOnly>
        </div>
    </div>
</template>
<script setup>
// https://floating-vue.starpad.dev/
// https://github.com/Akryum/floating-vue
// https://github.com/Akryum/floating-vue/issues/820
// https://github.com/Akryum/floating-vue/issues/807
const count = ref(5);
</script>
