<script setup lang="ts">
const appConfig = useAppConfig();
const title = "Contact Me"

useSeoMeta({
    title: `${title} - ${appConfig.title}`,
    ogTitle: `${title} - ${appConfig.title}`,
    description: "A list of ways to contact me, and links to my social media accounts",
    ogDescription: "A list of ways to contact me, and links to my social media accounts",
})
</script>

<template>
    <PageHeader :title="title" />
    <PerferredContacts />
    <SocialLinks />
</template>