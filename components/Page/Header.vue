<script setup lang="ts">
const { image } = defineProps({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false,
    }
});
const imageUrl = image ?? useCdn("/images/bg-secondary.jpg");
</script>

<template>
    <header class="hero" :style="'background-image: url(' + imageUrl + ');'">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center my-8 flex-col">
            <span data-theme="main" class="bg-transparent text-5xl font-bold">
                {{ title }}
            </span>
            <slot />
        </div>
    </header>
</template>