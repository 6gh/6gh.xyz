<script setup lang="ts">
defineProps({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    link: {
        type: String,
        required: true,
    },
    linkText: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: false,
    },
})
</script>

<template>
    <div class="card bg-base-100 shadow-xl image-full">
        <figure>
            <img v-if="image" class="max-w-xs" :src="image" :alt="name" />
            <Icon v-else-if="icon" :name="icon" class="inline-block w-full h-full" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">{{ name }}</h2>
            <p>{{ description }}</p>
            <div class="card-actions justify-end">
                <NuxtLink :to="link" class="btn btn-primary">{{ linkText }}</NuxtLink>
            </div>
        </div>
    </div>
</template>