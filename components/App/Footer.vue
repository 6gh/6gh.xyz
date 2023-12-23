<script setup lang="ts">
const discordModal = ref<HTMLDialogElement | null>(null);
</script>

<template>
    <footer class="w-screen h-40 flex flex-col justify-evenly items-center bg-base-300">
        <div class="flex space-x-4">
            <NuxtLink to="/privacy" class="link link-hover" v-umami="'footer-link-click-contact'">
                Privacy
            </NuxtLink>
            <NuxtLink to="/contact" class="link link-hover" v-umami="'footer-link-click-contact'">
                Contact
            </NuxtLink>
            <NuxtLink to="/credits" class="link link-hover" v-umami="'footer-link-click-credits'">
                Credits
            </NuxtLink>
            <NuxtLink to="https://github.com/6gh/6gh.xyz" class="link link-hover" target="_blank"
                v-umami="'footer-link-click-source'">
                Source Code
                <Icon name="pajamas:external-link" class="inline-block w-4 h-4" />
            </NuxtLink>
        </div>

        <div class="flex space-x-8">
            <NuxtLink to="https://x.com/6ghmid" v-umami="'footer-link-click-x'">
                <Icon name="pajamas:x" class="inline-block w-6 h-6" />
            </NuxtLink>
            <NuxtLink to="https://youtube.com/@6gh" v-umami="'footer-link-click-yt'">
                <Icon name="mdi:youtube" class="inline-block w-7 h-7" />
            </NuxtLink>
            <Icon name="pajamas:discord" class="inline-block w-6 h-6 mt-[2px] cursor-pointer"
                @click="discordModal?.showModal()" />
            <dialog class="modal modal-bottom sm:modal-middle" ref="discordModal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Discord Contact</h3>
                    <p class="py-4">My Discord is <span class="font-bold underline">@6gh</span> (or 6gh#7369 for legacy
                        usernames)<br>You are free to DM me and send a friend request at any time.</p>
                    <div class="modal-action">
                        <form method="dialog">
                            <button class="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    </footer>
</template>