<script setup lang="ts">
const appConfig = useAppConfig();
const title = "Credits"

useSeoMeta({
    title: `${title} - ${appConfig.title}`,
    ogTitle: `${title} - ${appConfig.title}`,
    description: "A list of technologies used in the creation of " + appConfig.title,
    ogDescription: "A list of technologies used in the creation of " + appConfig.title,
})
</script>

<template>
    <PageHeader :title="title" />
    <TechnologyCredits />
</template>