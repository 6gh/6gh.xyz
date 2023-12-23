<script setup lang="ts">
const bgSecondary = useCdn("/images/bg-secondary.jpg"),
    bgDiscordBot = useCdn("/images/discord-bot.png"),
    bgCoding = useCdn("/images/coding.png");
</script>

<template>
    <section class="2xl:w-8/12 w-auto mx-auto">
        <SectionProject description="Get a list of all of my publicly available MIDIs and downloads to all of them!"
            title="Black MIDIs" link-text="Check it out!" link-url="/midis" :image-url="bgSecondary" :reversed="false" />
        <div class="divider" />
        <SectionProject description="See my recent Discord Bot projects!" title="Discord Bots" link-text="See bots"
            link-url="/projects/bots" :image-url="bgDiscordBot" :reversed="true" />
        <div class="divider" />
        <SectionProject description="Check out other coding projects I've been working on!" title="Coding Projects"
            link-text="Go to projects" link-url="/projects/" :image-url="bgCoding" :reversed="false" />
    </section>
</template>