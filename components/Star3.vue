<template>
    <div class="m-4 p-4 border border-slate-400 rounded-lg">
        <h1>Star rating 3</h1>
        <p class="flex flex-row justify-start items-center">
            <client-only>
                <vue3-star-ratings
                    :showControl="false"
                    v-model="rating"
                    @click="showRating()"
                />
            </client-only>
        </p>
    </div>
</template>
<script setup>
// https://www.npmjs.com/package/vue3-star-ratings
const rating = ref();

function showRating() {
    console.log(rating.value);
}
</script>
