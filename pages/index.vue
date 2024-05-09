<script setup lang="ts">
const bgPrimary = useCdn("/images/bg-primary.jpg");
const currentPage = ref("0");

const homeLinkText = ref("Home");
const aboutLinkText = ref("About");
const contactLinkText = ref("Contact");
const midisLinkText = ref("MIDIs");
const projectsLinkText = ref("Portfolio");

function getRandomLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 52) + 65);
}

function onLinkHovered(pageNumber: string, event: MouseEvent) {
    currentPage.value = pageNumber;

    if (!event.target) {
        return;
    }

    let text = (() => {
        switch (pageNumber) {
            case '0':
                return homeLinkText;
            case '1':
                return aboutLinkText;
            case '2':
                return contactLinkText;
            case '3':
                return midisLinkText;
            case '4':
                return projectsLinkText;
            default:
                return homeLinkText;
        }
    })()

    let elem = (event.target as HTMLElement);
    let originalText = elem.dataset.text || (() => {
        switch (pageNumber) {
            case '0':
                return homeLinkText.value;
            case '1':
                return aboutLinkText.value;
            case '2':
                return contactLinkText.value;
            case '3':
                return midisLinkText.value;
            case '4':
                return projectsLinkText.value;
            default:
                return homeLinkText.value;
        }
    })();

    let it = 0;

    const interval = setInterval(() => {
        text.value = text.value.split('')
            .map((_, i) => {
                if (i < it) {
                    return originalText[i];
                } else {
                    return getRandomLetter();
                }
            })
            .join('');

        if (it >= 10) {
            clearInterval(interval);
            text.value = originalText;
        }

        it = it + 1 / 2;
    }, 30)
}

definePageMeta({
    layout: 'footer-only'
})
</script>

<template>
    <div class="w-screen h-screen grid grid-cols-2">
        <div class="w-full h-full flex flex-col justify-center px-52">
            <ul class="w-fit h-fit text-6xl flex flex-col group nav-links" :group-hover:data-index="currentPage">
                <li data-text="Home" @mouseenter="onLinkHovered('0', $event)" class="py-4">
                    <NuxtLink
                        class="w-full h-full transition-all group-hover:opacity-60 group-hover:scale-90 group-hover:hover:opacity-100 group-hover:hover:scale-100"
                        to="/">
                        {{ homeLinkText }}
                    </NuxtLink>
                </li>
                <li data-text="About" @mouseenter="onLinkHovered('1', $event)" class="py-4">
                    <NuxtLink
                        class="w-full h-full transition-all group-hover:opacity-60 group-hover:scale-90 group-hover:hover:opacity-100 group-hover:hover:scale-100"
                        to="/about">
                        {{ aboutLinkText }}
                    </NuxtLink>
                </li>
                <li data-text="Contact" @mouseenter="onLinkHovered('2', $event)" class="py-4">
                    <NuxtLink
                        class="w-full h-full transition-all group-hover:opacity-60 group-hover:scale-90 group-hover:hover:opacity-100 group-hover:hover:scale-100"
                        to="/contact">
                        {{ contactLinkText }}
                    </NuxtLink>
                </li>
                <li data-text="MIDIs" @mouseenter="onLinkHovered('3', $event)" class="py-4">
                    <NuxtLink
                        class="w-full h-full transition-all group-hover:opacity-60 group-hover:scale-90 group-hover:hover:opacity-100 group-hover:hover:scale-100"
                        to="/midis">
                        {{ midisLinkText }}
                    </NuxtLink>
                </li>
                <li data-text="Portfolio" @mouseenter="onLinkHovered('4', $event)" class="py-4">
                    <NuxtLink
                        class="w-full h-full transition-all group-hover:opacity-60 group-hover:scale-90 group-hover:hover:opacity-100 group-hover:hover:scale-100"
                        to="/projects">
                        {{ projectsLinkText }}
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
