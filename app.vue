<script setup lang="ts">
const appConfig = useAppConfig();

useSeoMeta({
  title: appConfig.title,
  ogTitle: appConfig.title,
  description: appConfig.description,
  ogDescription: appConfig.description,
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
