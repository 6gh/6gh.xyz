<script lang="ts">
    import { MIDIs } from "$lib/MIDIsInfo";
</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>MIDIs - 6gh's Website</title>
    <meta name="title" content="MIDIs - 6gh's Website" />
    <meta name="description" content="Find download links to 6gh's MIDIs here" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://6gh.xyz/midis" />
    <meta property="og:title" content="MIDIs - 6gh's Website" />
    <meta property="og:description" content="Find download links to 6gh's MIDIs here" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://6gh.xyz/midis" />
    <meta property="twitter:title" content="MIDIs - 6gh's Website" />
    <meta property="twitter:description" content="Find download links to 6gh's MIDIs here" />
</svelte:head>

<!-- hero banner -->
<div class="hero bg-hero-secondary" data-theme="night">
    <div class="hero-overlay bg-opacity-70" />
    <div class="hero-content text-center">
        <div class="max-w-md">
            <h1 class="my-8 text-5xl font-bold">MIDI Downloads</h1>
        </div>
    </div>
</div>

<div class="md:mx-32 sm:mx-8 my-6 w-auto">
    <!-- disclaimer -->
    <div class="alert alert-info shadow-lg text-xl">
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="stroke-current flex-shrink-0 w-6 h-6"
                ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                /></svg
            >
            <p>
                By downloading my MIDIs, you agree to follow my <a
                    href="/midis/rules"
                    class="underline link">guidelines and rules</a
                >
            </p>
        </div>
    </div>
</div>

<div class="md:mx-32 sm:mx-8 my-6 w-auto">
    <!-- midis -->
    <div
        class="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1
                justify-items-center
                lg:mx-16 md:mx-8 sm:mx-1
                gap-x-8 gap-y-8
                py-10"
    >
        {#each MIDIs as midi}
            <div class="card w-auto bg-base-10 shadow-xl">
                <figure><img src={"/images/midis/" + midi.id + ".jpg"} alt={midi.name} /></figure>

                <div class="card-body">
                    <span class="italic text-secondary text-base">{midi.date}</span>
                    <h2 class="card-title">
                        {midi.name}
                    </h2>

                    <p>
                        {midi.description.length > 80
                            ? midi.description.substring(0, 77) + "..."
                            : midi.description}
                    </p>

                    {#if midi.badges}
                        <div class="card-actions justify-start">
                            {#each midi.badges as badge}
                                <div class="tooltip" data-tip={badge.hoverText}>
                                    <span class="badge {badge.color}">{badge.text}</span>
                                </div>
                            {/each}
                        </div>
                    {/if}

                    <div class="card-actions justify-stretch">
                        <div class="btn-group-horizontal">
                            {#if !midi.missing}
                                <a
                                    href={Object.values(midi.versions)[0].download_link}
                                    class="btn btn-primary"
                                >
                                    Download
                                </a>
                            {/if}
                            <a href={"/midis/" + midi.id} class="btn btn-secondary"> More Info </a>
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>
