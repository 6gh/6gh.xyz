<script setup lang="ts">
const appConfig = useAppConfig();
const colorMode = useColorMode();
</script>

<template>
    <nav class="navbar max-w-full py-4 md:px-6 px-4 lg:px-10 xl:px-14 rounded-xl bg-base-100">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li class="h-8">
                        <NuxtLink to="/#about" v-umami="'header-nav-click-about'">About</NuxtLink>
                    </li>
                    <li class="h-8">
                        <NuxtLink to="/contact" v-umami="'header-nav-click-contact'">Contact</NuxtLink>
                    </li>
                    <li class="h-8">
                        <NuxtLink to="/midis" v-umami="'header-nav-click-midis'">MIDIs</NuxtLink>
                    </li>
                    <li class="h-8">
                        <NuxtLink to="/projects" v-umami="'header-nav-click-midis'">Projects</NuxtLink>
                    </li>
                </ul>
            </div>
            <NuxtLink to="/" v-umami="'header-link-click-home'">
                <button class="btn btn-ghost text-xl">
                    {{ appConfig.title }}
                </button>
            </NuxtLink>
        </div>

        <div class="navbar-center">
            <ul class="menu menu-horizontal hidden md:inline-flex">
                <li>
                    <NuxtLink to="/#about" v-umami="'header-nav-click-about'">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contact" v-umami="'header-nav-click-contact'">Contact</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/midis" v-umami="'header-nav-click-midis'">MIDIs</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/projects" v-umami="'header-nav-click-midis'">Projects</NuxtLink>
                </li>
            </ul>
        </div>

        <div class="navbar-end">
            <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn">
                    Theme
                </div>
                <ul tabindex="0" class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
                    <li><input v-umami="'theme-change-system'" v-model="colorMode.preference" type="radio"
                            name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                            aria-label="System" value="system" /></li>
                    <div class="divider divider-start">Dark</div>
                    <li><input v-umami="'theme-change-main'" v-model="colorMode.preference" type="radio"
                            name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                            aria-label="Main" value="main" /></li>
                    <li><input v-umami="'theme-change-night'" v-model="colorMode.preference" type="radio"
                            name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                            aria-label="Night" value="night" /></li>
                    <div class="divider divider-start">Light</div>
                    <li><input v-umami="'theme-change-corporate'" v-model="colorMode.preference" type="radio"
                            name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                            aria-label="Corporate" value="corporate" /></li>
                </ul>
            </div>
        </div>
    </nav>
</template>