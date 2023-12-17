<template>
    <section class="w-8/12 mx-auto">
        <SectionProject description="Get a list of all of my publicly available MIDIs and downloads to all of them!"
            title="Black MIDIs" link-text="Check it out!" link-url="/midis" image-url="/images/bg-secondary.jpg"
            :reversed="false" />
        <div class="divider" />
        <SectionProject description="See my recent Discord Bot projects!" title="Discord Bots" link-text="See bots"
            link-url="/projects/bots" image-url="/images/discord-bot.png" :reversed="true" />
        <div class="divider" />
        <SectionProject description="Check out other coding projects I've been working on!" title="Coding Projects"
            link-text="Go to projects" link-url="/projects/" image-url="/images/coding.png" :reversed="false" />
    </section>
</template>