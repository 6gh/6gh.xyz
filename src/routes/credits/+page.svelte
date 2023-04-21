<svelte:head>
    <!-- Primary Meta Tags -->
    <title>Website Credits - 6gh's Website</title>
    <meta name="title" content="Website Credits - 6gh's Website" />
    <meta name="description" content="Find out what makes up 6gh.xyz, and how it was made" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://6gh.xyz/credits" />
    <meta property="og:title" content="Website Credits - 6gh's Website" />
    <meta property="og:description" content="Find out what makes up 6gh.xyz, and how it was made" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://6gh.xyz/credits" />
    <meta property="twitter:title" content="Website Credits - 6gh's Website" />
    <meta
        property="twitter:description"
        content="Find out what makes up 6gh.xyz, and how it was made"
    />
</svelte:head>

<!-- hero banner -->
<div class="hero bg-hero-secondary" data-theme="night">
    <div class="hero-overlay bg-opacity-70" />
    <div class="hero-content text-center">
        <div class="max-w-md">
            <h1 class="my-8 text-5xl font-bold">Website Credits</h1>
        </div>
    </div>
</div>

<div class="my-8 mx-2 text-center lg:mx-64 md:mx-24 sm:mx-8 md:text-start">
    <h1 class="text-2xl">This website was built using the following technologies:</h1>
    <ul class="text-2xl list-disc list-inside space-y-8 p-4">
        <li>
            <a class="link link-info" target="_blank" href="https://kit.svelte.dev/">SvelteKit</a>
            <span class="text-xl">
                - Was used to build the website. Combined with the static adapter, made it so much
                easier to build pages and create a page for every MIDI fast and easy. I love
                SvelteKit
            </span>
        </li>
        <li>
            <a class="link link-info" target="_blank" href="https://tailwindcss.com/">TailwindCSS</a
            >
            <span class="text-xl">
                - Was used to style the website. I used TailwindCSS for their quick utility classes
                and the fact it reduces the css to a minimal level.
            </span>
        </li>
        <li>
            <a class="link link-info" target="_blank" href="https://daisyui.com/">DaisyUI</a>
            <span class="text-xl">
                - Was used to quickly create beautiful UI elements such as the buttons, badges,
                navbar, footer, and more. The light and dark themes were also created by DaisyUI.
            </span>
        </li>
        <li>
            <a
                class="link link-info"
                target="_blank"
                href="https://github.com/saadeghi/theme-change">change-theme</a
            >
            <span class="text-xl">
                - Was used to change the theme using the button on the top right, and saves your
                current theme to local storage allowing you to keep your theme when you revisit the
                website.
            </span>
        </li>
        <li>
            <a class="link link-info" target="_blank" href="https://pages.github.com/"
                >Github Pages</a
            >
            <span class="text-xl">
                - Was used to host the website. Github pages is a free service that allows you to
                host static websites for free. I used the static adapter for SvelteKit to build the
                website and then used Github pages to host it. Github is awesome
            </span>
        </li>
    </ul>
    <a class="link link-info text-2xl" href="https://github.com/6gh/6gh.xyz"
        >Check out the source code for this website on Github!</a
    >
</div>
