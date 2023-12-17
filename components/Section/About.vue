<script setup lang="ts">
const avatarUrl = useCdn("/avatar.png");
</script>

<template>
    <section id="about" class="text-center py-16 flex flex-col justify-center items-center space-y-12">
        <h1 class="text-4xl font-bold">About Me</h1>
        <div class="w-8/12 h-96 grid grid-cols-3 grid-rows-1 justify-center items-center">
            <div class="space-y-4">
                <div class="avatar">
                    <div class="w-36 rounded-full">
                        <img :src="avatarUrl" />
                    </div>
                </div>
                <p class="text-4xl">
                    6gh
                </p>
                <p>
                    Black MIDI Dilettante, Developer, Self-Hosting Enthusiast
                </p>
            </div>
            <div class="col-span-2 chat chat-start flex flex-col justify-center items-center">
                <div class="chat-bubble text-xl">
                    Hey, I'm 6gh! Pronounced "six-gee-aitch", but you can call me "six" for short.<br><br>

                    You probably know me from my YouTube channel, where I upload videos of me playing Black MIDIs. I've been
                    involved in Black MIDI since mid-2018. I also recently led a team to get Black MIDI into r/place
                    2023! Although, recently I've not been active in creating Black MIDIs as I've lost a lot interest in
                    music production.<br><br>

                    I'm also a developer, and I've been programming since 2019. I've made a few projects, including this
                    website, some Discord bots, and a few other things. I'm also a self-hosting enthusiast, and I host a lot
                    of my own services, including this website, my own analytics, and a few other things<br><br>

                    Scroll below to see some of my projects!
                </div>
            </div>
        </div>
    </section>
</template>