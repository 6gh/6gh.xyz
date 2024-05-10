<script setup lang="ts">
const appConfig = useAppConfig();

const bgtemp1 = useCdn("/images/temp1.jpg");
const bgtemp2 = useCdn("/images/temp2.jpg");
const bgtemp3 = useCdn("/images/temp3.jpg");
const bgMidis = useCdn("/images/bg-primary.jpg");
const bgtemp4 = useCdn("/images/temp4.jpg");

const currentPage = ref("0");

const homeLinkText = ref("Home");
const aboutLinkText = ref("About");
const contactLinkText = ref("Contact");
const midisLinkText = ref("MIDIs");
const projectsLinkText = ref("Portfolio");

const cardTitle = ref("Welcome");
const cardTitleInterval = ref<NodeJS.Timeout>();
const cardText = ref("Welcome to 6gh's Website! Here you can find downloads to my MIDIs, contact information, what I'm working on, and more!");
const cardTextInterval = ref<NodeJS.Timeout>();
const cardTexts: {
    [key: string]: {
        title: string,
        text: string
    }
} = {
    "Home": {
        title: "Welcome",
        text: "Welcome to 6gh's Website! Here you can find downloads to my MIDIs, contact information, what I'm working on, and more!"
    },
    "About": {
        title: "About",
        text: "I'm a 16 year old developer who loves to make things. I'm currently working on a few projects, including a Discord bot and a website for a friend."
    },
    "Contact": {
        title: "Contact",
        text: "Find out how to contact me here! You can reach me through email, Discord, or through my social medias."
    },
    "MIDIs": {
        title: "MIDIs",
        text: "Download my MIDIs here! I've made a few MIDIs and you can find them all here available for download for free."
    },
    "Portfolio": {
        title: "Portfolio",
        text: "Check out what I'm working on! I'm currently working on a few projects"
    },
}

function getRandomLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 52) + 65);
}

function onLinkHovered(pageNumber: string, event: MouseEvent) {
    currentPage.value = pageNumber;

    if (!event.target) {
        return;
    }

    const text = (() => {
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

    if (cardTitleInterval.value) {
        clearInterval(cardTitleInterval.value);
    }

    let titleIt = 0;

    cardTitleInterval.value = setInterval(() => {
        const { title } = cardTexts[originalText];
        cardTitle.value = title.split('')
            .map((_, i) => {
                if (i < titleIt) {
                    return title[i];
                } else {
                    return getRandomLetter();
                }
            })
            .join('');

        if (titleIt >= title.length) {
            clearInterval(cardTitleInterval.value);
            cardTitle.value = title;
        }

        titleIt = titleIt + 1 / 4;
    }, 30);

    if (cardTextInterval.value) {
        clearInterval(cardTextInterval.value);
    }

    let textIt = 0;

    cardTextInterval.value = setInterval(() => {
        const { text } = cardTexts[originalText];
        cardText.value = text.split('')
            .map((char, i) => {
                if (i < textIt) {
                    return text[i];
                } else {
                    return getRandomLetter();
                }
            })
            .join('');

        if (textIt >= text.length) {
            clearInterval(cardTextInterval.value);
            cardText.value = text;
        }

        textIt = textIt + 5;
    }, 30);
}

function getBackgroundPosition() {
    switch (currentPage.value) {
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
}

definePageMeta({
    layout: 'footer-only'
})

// <link rel="preload" :href="src" as="image"/>
useHead({
    link: [
        {
            rel: "preload",
            as: "image",
            href: bgtemp1,
        },
        {
            rel: "preload",
            as: "image",
            href: bgtemp2,
        },
        {
            rel: "preload",
            as: "image",
            href: bgtemp3,
        },
        {
            rel: "preload",
            as: "image",
            href: bgMidis,
        },
        {
            rel: "preload",
            as: "image",
            href: bgtemp4,
        },
    ],
});
</script>

<template>
    <div class="w-screen h-screen grid grid-cols-2 overflow-hidden">
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
                <div class="-z-20 opacity-20 group-hover:opacity-15">
                    <Transition>
                        <div v-show="currentPage === '0'" :style="`background-image: url(${bgtemp1})`" :class="[`absolute top-0 left-0 w-screen h-screen transition-all duration-700 ease-in-out
                        bg-[size:120vmax] group-hover:bg-[size:110vmax]`, getBackgroundPosition()]" />
                    </Transition>
                    <Transition>
                        <div v-show="currentPage === '1'" :style="`background-image: url(${bgtemp2})`" :class="[`absolute top-0 left-0 w-screen h-screen transition-all duration-700 ease-in-out
                        bg-[size:120vmax] group-hover:bg-[size:110vmax]`, getBackgroundPosition()]" />
                    </Transition>
                    <Transition>
                        <div v-show="currentPage === '2'" :style="`background-image: url(${bgtemp3})`" :class="[`absolute top-0 left-0 w-screen h-screen transition-all duration-700 ease-in-out
                        bg-[size:120vmax] group-hover:bg-[size:110vmax]`, getBackgroundPosition()]" />
                    </Transition>
                    <Transition>
                        <div v-show="currentPage === '3'" :style="`background-image: url(${bgMidis})`" :class="[`absolute top-0 left-0 w-screen h-screen transition-all duration-700 ease-in-out
                        bg-[size:120vmax] group-hover:bg-[size:110vmax]`, getBackgroundPosition()]" />
                    </Transition>
                    <Transition>
                        <div v-show="currentPage === '4'" :style="`background-image: url(${bgtemp4})`" :class="[`absolute top-0 left-0 w-screen h-screen transition-all duration-700 ease-in-out
                        bg-[size:120vmax] group-hover:bg-[size:110vmax]`, getBackgroundPosition()]" />
                    </Transition>
                </div>
            </ul>
        </div>

        <div class="w-10/12 bg-base-300 my-auto flex px-6 py-8 text-primary-content">
            <div class="flex flex-col gap-4 w-full">
                <h1 class="text-4xl">
                    {{ cardTitle }}
                </h1>
                <p class="break-words inline">
                    {{ cardText }}
                </p>
            </div>
        </div>
    </div>
</template>

<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition: all 0.7s ease;
    opacity: 1;
}


.v-enter-from {
    transition: all 0.7s ease;
    opacity: 0;
}

.v-leave-to {
    transition: all 0.7s ease;
    opacity: 0;
}
</style>
