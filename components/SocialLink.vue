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
    icon: {
        type: String,
        required: true
    },
});
</script>

<template>
    <div class="flex flex-row space-x-4 justify-center text-center md:justify-start md:text-start group">
        <Icon :name="icon" class="w-8 h-8 hidden md:block group-hover:text-primary transition-all" />
        <div class="flex flex-col text-xl">
            <div class="flex flex-row justify-center items-center space-x-2 md:justify-start md:space-x-0">
                <Icon :name="icon"
                    class="w-8 h-8 block md:hidden md:text-red-500 group-hover:text-primary transition-all" />
                <p>{{ title }}</p>
            </div>
            <NuxtLink :to="link" class="link link-primary link-hover">
                {{ subtitle }}
            </NuxtLink>
        </div>
    </div>
</template>