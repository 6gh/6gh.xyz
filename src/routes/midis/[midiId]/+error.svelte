<script lang>
    import { page } from "$app/stores";
</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>{$page.status} - 6gh's Website</title>
</svelte:head>

<!-- hero banner -->
<div class="hero bg-hero-error-other" data-theme="night">
    <div class="hero-overlay bg-opacity-80" />
    <div class="hero-content">
        <div class="py-64 text-center text-white">
            <div class="bg-base-300 p-4 rounded-xl bg-opacity-60">
                {#if $page.status === 404}
                    <h1 class="text-5xl font-bold">Error 404</h1>
                    <p class="text-2xl py-4">
                        Couldn't find the MIDI you were looking for. It might have been renamed or
                        deleted.
                    </p>
                    <div class="btn-group">
                        <a href="/midis" class="btn btn-primary">Go To MIDI List</a>
                    </div>
                {:else}
                    <h1 class="text-5xl font-bold">Error {$page.status}</h1>
                    <p class="text-2xl py-4">
                        An error occurred: {$page.error?.message}
                    </p>
                    <div class="btn-group">
                        <a href="/midis" class="btn btn-primary">Go To MIDI List</a>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>
