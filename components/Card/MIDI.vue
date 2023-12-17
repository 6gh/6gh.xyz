<script setup lang="ts">
import type { MIDI } from '~/assets/midis';

const props = defineProps<{
    midi: MIDI;
}>();
</script>

<template>
    <div class="card max-w-sm bg-base-300 border border-transparent hover:border-primary transition-all shadow-xl mb-4">
        <CardMIDIImage :id="midi.id" :name="midi.name" />

        <div class="card-body">
            <span class="italic text-secondary text-base">{{ midi.date }}</span>
            <h1 class="card-title">{{ midi.name }}</h1>
            <p class="card-text">{{ midi.description.length > 80
                ? midi.description.substring(0, 77) + "..."
                : midi.description }}</p>
            <div v-if="midi.badges" class="badge-actions justify-start">
                <div v-for="badge in midi.badges" class="tooltip" :data-tip="badge.hoverText">
                    <span v-if="badge.color === 'primary'" class="badge badge-primary">{{ badge.text }}</span>
                    <span v-else-if="badge.color === 'warning'" class="badge badge-warning">{{ badge.text }}</span>
                    <span v-else-if="badge.color === 'error'" class="badge badge-error">{{ badge.text }}</span>
                    <span v-else-if="badge.color === 'outline'" class="badge badge-outline">{{ badge.text }}</span>
                </div>
            </div>

            <div class="card-actions justify-stretch">
                <div class="join">
                    <NuxtLink v-if="!midi.missing" :to="Object.values(props.midi.versions)[0].download_link"
                        class="btn btn-md join-item btn-primary">
                        Download
                    </NuxtLink>
                    <NuxtLink :to="'/midis/' + midi.id" class="btn btn-md join-item btn-secondary">More Info</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>