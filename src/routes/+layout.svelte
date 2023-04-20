<script>
    import { onMount } from 'svelte';
    import '../app.css';
    import { themeChange } from 'theme-change';
    
    import Navbar from '$lib/Navbar.svelte';
    import Footer from '$lib/Footer.svelte';

    onMount(() => {
        themeChange(false);
    });
</script>

<Navbar />

<slot />

<Footer />