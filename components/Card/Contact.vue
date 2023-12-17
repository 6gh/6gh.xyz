<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    buttonText: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="card w-96 bg-base-200 border border-transparent hover:border-primary transition-all shadow-xl">
        <div class="card-body text-center justify-center items-center space-y-2">
            <slot />
            <h2 class="card-title">{{ title }}</h2>
            <p>{{ subtitle }}</p>
            <div class="card-actions justify-end">
                <NuxtLink :to="link">
                    <button class="btn btn-primary">{{ buttonText }}</button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>