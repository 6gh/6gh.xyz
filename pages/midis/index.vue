<script setup lang="ts">
import { MIDIs as midis } from "~/assets/midis";
const appConfig = useAppConfig();
const title = "MIDI Downloads"

useSeoMeta({
    title: `${title} - ${appConfig.title}`,
    ogTitle: `${title} - ${appConfig.title}`,
    description: "A list of my MIDI files available for download",
    ogDescription: "A list of my MIDI files available for download",
})
</script>

<template>
    <PageHeader :title="title" />

    <section class="xl:w-8/12 lg:w-10/12 md:11/12 lg:mx-auto mx-4">
        <AlertInfo>
            <p>
                This page is still under construction. MIDI downloads will be available soon!
            </p>
        </AlertInfo>
    </section>

    <section
        class="xl:w-8/12 lg:w-10/12 md:11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:gap-4 lg:mx-auto mx-4 justify-items-center">
        <CardMIDI v-for="midi in midis" :midi="midi" />
    </section>
</template>
