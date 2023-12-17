<script setup lang="ts">
const appConfig = useAppConfig();
const colorMode = useColorMode();
</script>

<template>
    <nav class="navbar max-w-full py-4 px-10 rounded-xl bg-base-100">
        <div class="navbar-start">
            <NuxtLink to="/" v-umami="'header-link-click-home'">
                <button class="btn btn-ghost text-xl">
                    {{ appConfig.title }}
                </button>
            </NuxtLink>
        </div>

        <div class="navbar-center">
            <ul class="menu menu-horizontal">
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
                    <li><input v-umami="'theme-change-main'" v-model="colorMode.preference" type="radio"
                            name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                            aria-label="Main" value="main" /></li>
                    <li><input v-umami="'theme-change-night'" v-model="colorMode.preference" type="radio"
                            name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                            aria-label="Night" value="night" /></li>
                    <li><input v-umami="'theme-change-corporate'" v-model="colorMode.preference" type="radio"
                            name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                            aria-label="Corporate" value="corporate" /></li>
                </ul>
            </div>
        </div>
    </nav>
</template>