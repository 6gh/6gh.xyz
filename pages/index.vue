<script setup lang="ts">
const bgPrimary = useCdn("/images/bg-primary.jpg");
const currentPage = ref("0");

definePageMeta({
    layout: 'footer-only'
})
</script>

<template>
    <div class="w-screen h-screen grid grid-cols-2">
        <div class="w-full h-full flex flex-col justify-center px-52">
            <ul class="w-fit h-fit text-6xl flex flex-col group nav-links" :group-hover:data-index="currentPage">
                <li @mouseenter="currentPage = '0'" class="py-4">
                    <NuxtLink
                        class="w-full h-full transition-all group-hover:opacity-60 group-hover:scale-90 group-hover:hover:opacity-100 group-hover:hover:scale-100"
                        to="/">
                        Home
                    </NuxtLink>
                </li>
                <li @mouseenter="currentPage = '1'" class="py-4">
                    <NuxtLink
                        class="w-full h-full transition-all group-hover:opacity-60 group-hover:scale-90 group-hover:hover:opacity-100 group-hover:hover:scale-100"
                        to="/about">
                        About
                    </NuxtLink>
                </li>
                <li @mouseenter="currentPage = '2'" class="py-4">
                    <NuxtLink
                        class="w-full h-full transition-all group-hover:opacity-60 group-hover:scale-90 group-hover:hover:opacity-100 group-hover:hover:scale-100"
                        to="/contact">
                        MIDIs
                    </NuxtLink>
                </li>
                <li @mouseenter="currentPage = '3'" class="py-4">
                    <NuxtLink
                        class="w-full h-full transition-all group-hover:opacity-60 group-hover:scale-90 group-hover:hover:opacity-100 group-hover:hover:scale-100"
                        to="/midis">
                        Portfolio
                    </NuxtLink>
                </li>
                <li @mouseenter="currentPage = '4'" class="py-4">
                    <NuxtLink
                        class="w-full h-full transition-all group-hover:opacity-60 group-hover:scale-90 group-hover:hover:opacity-100 group-hover:hover:scale-100"
                        to="/blog">
                        Blog
                    </NuxtLink>
                </li>
                <div :class="[`absolute top-0 left-0 w-screen h-screen -z-10 transition-all duration-700 ease-in-out
                    bg-[image:radial-gradient(rgba(255,255,255,0.1)_9%,transparent_9%)] bg-[size:12vmin_12vmin]
                    group-hover:bg-[size:11vmin_11vmin] group-hover:opacity-50`, (() => {
                        switch (currentPage) {
                            case '0':
                                return 'bg-[position:0%_20%]';
                            case '1':
                                return 'bg-[position:0%_40%]';
                            case '2':
                                return 'bg-[position:0%_60%]';
                            case '3':
                                return 'bg-[position:0%_80%]';
                            case '4':
                                return 'bg-[position:0%_100%]';
                            default:
                                return 'bg-[position:0%_0%]';
                        }
                    })()]" />
                <div :style="`background-image: url(${bgPrimary})`" :class="[`absolute top-0 left-0 w-screen h-screen -z-20 transition-all duration-700 ease-in-out
                    bg-[size:120vmax]
                    opacity-20 group-hover:opacity-15 group-hover:bg-[size:110vmax]`, (() => {
                        switch (currentPage) {
                            case '0':
                                return 'bg-[position:center_40%]';
                            case '1':
                                return 'bg-[position:center_50%]';
                            case '2':
                                return 'bg-[position:center_60%]';
                            case '3':
                                return 'bg-[position:center_70%]';
                            case '4':
                                return 'bg-[position:center_80%]';
                            default:
                                return 'bg-[position:center_90%]';
                        }
                    })()]" />
            </ul>
        </div>

        <div class="">
            <TransitionGroup>
                <div class="absolute" v-if="currentPage === '0'">home</div>
                <div class="absolute" v-else-if="currentPage === '1'">About</div>
                <div class="absolute" v-else-if="currentPage === '2'">MIDIs</div>
                <div class="absolute" v-else-if="currentPage === '3'">Portfolio</div>
                <div class="absolute" v-else-if="currentPage === '4'">Blog</div>
            </TransitionGroup>
        </div>
    </div>
</template>

<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
