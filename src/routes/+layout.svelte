<script>
    export const prerender = true;

    import { onMount } from "svelte";
    import "../app.css";
    import { themeChange } from "theme-change";

    import Navbar from "$lib/Navbar.svelte";
    import Footer from "$lib/Footer.svelte";

    onMount(() => {
        themeChange(false);
    });
</script>

<div class="flex min-h-screen flex-col justify-start">
    <Navbar />

    <slot />

    <Footer />
</div>
