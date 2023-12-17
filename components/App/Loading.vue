<template>
    <div v-if="loading"
        class="h-screen w-screen flex justify-center items-center fixed bg-base-300 z-50 transition-all duration-300">
        <span class="loading loading-infinity w-32"></span>
    </div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(false);
nuxtApp.hook("page:start", () => {
    loading.value = true;
});
nuxtApp.hook("page:finish", () => {
    loading.value = false;
});
nuxtApp.hook("vue:error", () => {
    loading.value = false;
});
</script>