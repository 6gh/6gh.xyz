import { MIDIs } from "$lib/MIDIsInfo";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load = (({ params }) => {
    let midi = MIDIs.find((midi) => midi.id === params.midiId);
    if (midi) {
        return {
            props: {
                midi,
            },
        };
    }

    throw error(404, "MIDI not found");
}) satisfies PageLoad;
