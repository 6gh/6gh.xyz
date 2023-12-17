<script setup lang="ts">
import { MIDIs as midis } from "~/assets/midis";
</script>

<template>
    <PageHeader title="MIDI Downloads" />

    <section>
        <AlertInfo>
            <p>
                This page is still under construction. MIDI downloads will be available soon!
            </p>
        </AlertInfo>
    </section>

    <section class="w-8/12 mx-auto grid grid-cols-3">
        <CardMIDI v-for="midi in midis" :midi="midi" />
    </section>
</template>
