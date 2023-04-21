<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>{data.props.midi.name} - 6gh's Website</title>
    <meta name="title" content="{data.props.midi.name} - 6gh's Website" />
    <meta name="description" content="Download {data.props.midi.name}" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://6gh.xyz/midis/{data.props.midi.id}" />
    <meta property="og:title" content="{data.props.midi.name} - 6gh's Website" />
    <meta property="og:description" content="Download {data.props.midi.name}" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://6gh.xyz/midis/{data.props.midi.id}" />
    <meta property="twitter:title" content="{data.props.midi.name} - 6gh's Website" />
    <meta property="twitter:description" content="Download {data.props.midi.name}" />
</svelte:head>

<div
    class="hero"
    style="background-image:url('/images/midis/{data.props.midi.id}.jpg')"
    data-theme="night"
>
    <div class="hero-overlay bg-opacity-70" />
    <div class="hero-content text-center">
        <div>
            <h1 class="my-8 text-5xl font-bold">{data.props.midi.name}</h1>
            {#if data.props.midi.badges}
                {#each data.props.midi.badges as badge}
                    <div class="tooltip tooltip-bottom px-1" data-tip={badge.hoverText}>
                        <span class="badge {badge.color}">{badge.text}</span>
                    </div>
                {/each}
            {/if}
        </div>
    </div>
</div>

<div class="2xl:mx-32 xl:mx-16 lg:mx-14 md:mx-10 sm:mx-4 my-6">
    <div class="grid h-auto card bg-base-300 text-center place-items-center w-auto">
        <h1 class="text-4xl font-bold">Description:</h1>
        <p class="p-5">{data.props.midi.description}</p>

        <div class="overflow-x-auto w-full">
            <table class="table lg:table-normal md:table-compact table-zebra w-full mt-8">
                <thead>
                    <tr>
                        <th />
                        <th>Authors</th>
                        <th>Notes</th>
                        <th>Size</th>
                        <th>Download</th>
                    </tr>
                </thead>
                <tbody>
                    {#each Object.entries(data.props.midi.versions) as [versionName, version]}
                        <tr>
                            <td class="font-bold">{versionName.toUpperCase()}</td>
                            <td>
                                {#if version.authors_team}
                                    <div class="tooltip" data-tip={version.authors_team}>
                                        {version.authors}
                                    </div>
                                {:else}
                                    {version.authors}
                                {/if}
                            </td>
                            <td>{version.notes}</td>
                            <td>{version.size}</td>
                            <td>
                                {#if data.props.midi.missing}
                                    <div
                                        class="tooltip"
                                        data-tip="Please contact me if you have it"
                                    >
                                        MIDI is missing.
                                    </div>
                                {:else}
                                    <a href={version.download_link} class="btn btn-primary">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            class="bi bi-download"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                                            />
                                            <path
                                                d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                                            />
                                        </svg>
                                    </a>
                                    <span
                                        on:keydown={() =>
                                            navigator.clipboard.writeText(version.download_link)}
                                        on:click={() =>
                                            navigator.clipboard.writeText(version.download_link)}
                                        class="btn btn-secondary"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            class="bi bi-paperclip"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"
                                            />
                                        </svg>
                                    </span>
                                {/if}
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
</div>
