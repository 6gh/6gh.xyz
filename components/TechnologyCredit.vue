<script setup lang="ts">
defineProps({
    name: String,
    description: String,
    image: String,
    link: String,
    linkText: String,
    icon: String,
})
</script>

<template>
    <div class="card bg-base-100 shadow-xl image-full">
        <figure>
            <img v-if="image" class="max-w-xs" :src="image" :alt="name" />
            <Icon v-if="icon" :name="icon" class="inline-block w-full h-full" />
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