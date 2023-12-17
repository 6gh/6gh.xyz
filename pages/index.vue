<script setup lang="ts">
const bgPrimary = useCdn("/images/bg-primary.jpg");
</script>

<template>
    <div>
        <HeroBanner :image="bgPrimary" />
        <SectionAbout />
        <div class="divider w-11/12 mx-auto" />
        <SectionProjects />
        <div class="divider w-11/12 mx-auto" />
        <SectionOpenSource />
    </div>
</template>
