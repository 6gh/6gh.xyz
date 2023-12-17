<script setup lang="ts">
const { image } = defineProps({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false,
        default: "/images/bg-secondary.jpg"
    }
});
const imageUrl = image ?? useCdn("/images/bg-secondary.jpg");
</script>

<template>
    <header class="hero" :style="'background-image: url(' + imageUrl + ');'">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-5xl font-bold my-8 flex-col">
            {{ title }}
            <slot />
        </div>
    </header>
</template>