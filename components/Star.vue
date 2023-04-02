<template>
    <div class="m-4 p-4 border border-slate-400 rounded-lg">
        <h1>Star rating</h1>
        <p class="flex flex-row justify-start items-center">
            <client-only>
                <!-- <StarRating
                    :inline="true"
                    :star-size="15"
                    :round-start-rating="false"
                    :show-rating="false"
                    @update:rating="setRating"
                /> -->
            </client-only>
        </p>
    </div>
</template>
<script setup>
// https://github.com/craigh411/vue-star-rating
const rating = ref(0);
function setRating(payload) {
    rating.value = payload;
    console.log(rating.value);
}
</script>
