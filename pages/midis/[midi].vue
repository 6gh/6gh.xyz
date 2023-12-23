<script setup lang="ts">
import { MIDIs } from "~/assets/midis";
import type { MIDI } from "~/assets/midis";

const midiId = useRoute().params.midi as string;
const midi = MIDIs.find(x => x.id === midiId) as MIDI;
const tooltipMsg = ref("Copy URL to clipboard");

async function copyURL(t: string) {
    try {
        await navigator.clipboard.writeText(t);
        tooltipMsg.value = "Copied!";
    } catch (error) {
        tooltipMsg.value = "Failed to copy!";
    }
}

const image = useCdn("/images/midis/" + midi.id + '.jpg');
</script>

<template>
    <PageHeader :title="midi.name" :image="image">
        <div v-if="midi.badges">
            <div v-for="badge in midi.badges" class="tooltip tooltip-bottom px-1" :data-tip="badge.hoverText">
                <span v-if="badge.color === 'primary'" class="badge badge-primary">{{ badge.text }}</span>
                <span v-else-if="badge.color === 'warning'" class="badge badge-warning">{{ badge.text }}</span>
                <span v-else-if="badge.color === 'error'" class="badge badge-error">{{ badge.text }}</span>
                <span v-else-if="badge.color === 'outline'" class="badge badge-outline">{{ badge.text }}</span>
            </div>
        </div>
    </PageHeader>

    <section class="xl:w-8/12 lg:w-10/12 md:11/12 mx-auto">
        <AlertNormal>
            <div>
                <h2 class="text-2xl font-bold">
                    Description:
                </h2>
                <p>
                    {{ midi.description }}
                </p>
            </div>
        </AlertNormal>
    </section>

    <section class="xl:w-8/12 lg:w-10/12 md:11/12 mx-auto bg-base-200 mb-16 overflow-hidden">
        <TableBase :column-names="['', 'Authors', 'Notes', 'Size', 'Links']">
            <TableRow v-for="[version, { authors, notes, size, download_link }] in Object.entries(midi.versions)">
                <TableCell :ends="true">
                    <span class="badge badge-primary">{{ version }}</span>
                </TableCell>
                <TableCell>
                    <ul>
                        {{ authors }}
                    </ul>
                </TableCell>
                <TableCell>
                    <ul>
                        {{ notes }}
                    </ul>
                </TableCell>
                <TableCell>
                    {{ size }}
                </TableCell>
                <TableCell :ends="true">
                    <div class="join">
                        <NuxtLink v-if="download_link" :to="download_link" class="btn btn-md join-item btn-primary">
                            <Icon name="pajamas:download" class="inline-block w-6 h-6" />
                        </NuxtLink>
                        <div class="tooltip" :data-tip="tooltipMsg" @mouseleave="tooltipMsg = 'Copy URL to clipboard'">
                            <button v-if="download_link" :to="download_link" class="btn btn-md join-item btn-secondary"
                                @click="copyURL(download_link)">
                                <Icon name="pajamas:copy-to-clipboard" class="inline-block w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </TableCell>
            </TableRow>
        </TableBase>
    </section>
</template>