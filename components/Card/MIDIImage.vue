<script setup lang="ts">
defineProps({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
})

const hovering = ref(false);
</script>

<template>
    <div class="relative" @mouseenter="hovering = true" @mouseleave="hovering = false">
        <figure><img :src="'/images/midis/' + id + '.jpg'" :alt="name" /></figure>
        <div class="absolute left-0 top-0 z-10 bg-opacity-60 bg-black w-full h-full flex justify-center items-center"
            v-if="hovering">
            <span class="loading loading-infinity w-32"></span>
        </div>
        <figure v-if="hovering" class="absolute left-0 top-0 z-20"><img :src="'/images/midis/' + id + '.webp'" :alt="id" />
        </figure>
    </div>
</template>