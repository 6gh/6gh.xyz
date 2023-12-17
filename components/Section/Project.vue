<script setup lang="ts">
defineProps({
    title: String,
    description: String,
    "imageUrl": String,
    "linkText": String,
    "linkUrl": String,
    "reversed": {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <div class="hero w-full mx-auto">
        <div class="hero-content w-full flex-col justify-start"
            :class="[reversed ? 'lg:flex-row-reverse lg:text-end' : 'lg:flex-row']">
            <img :src="imageUrl" class=" max-w-xs rounded-lg shadow-2xl" />
            <div>
                <h1 class="text-5xl font-bold">{{ title }}</h1>
                <p class="py-6">{{ description }}</p>
                <NuxtLink :to="linkUrl" class="btn btn-primary">{{ linkText }}</NuxtLink>
            </div>
        </div>
    </div>
</template>