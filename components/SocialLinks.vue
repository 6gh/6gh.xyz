<template>
    <!-- social media -->
    <div class="p-8 mx-auto bg-base-200 rounded-xl text-center w-11/12 my-8">
        <h1 class="text-4xl">Social Links</h1>
        <p class="text-xl pt-2 pb-8">Here are links to some of my social media</p>

        <div class="grid grid-cols-1 text-start gap-8 px-16 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2">
            <SocialLink title="YouTube" subtitle="/c/6ghmidi (@6gh)" link="https://youtube.com/@6gh" icon="mdi:youtube" />
            <SocialLink title="Discord" subtitle="6gh#7369" link="https://discord.com/users/6gh#7369" icon="mdi:discord" />
            <SocialLink title="Twitter" subtitle="@6ghmid" link="https://twitter.com/6ghmid" icon="mdi:twitter" />
            <SocialLink title="Reddit" subtitle="/u/6ghmidi" link="https://reddit.com/u/6ghmidi" icon="mdi:reddit" />
            <SocialLink title="GitHub" subtitle="@6gh" link="https://github.com/6gh" icon="mdi:github" />
            <SocialLink title="osu!" subtitle="6gh" link="https://osu.ppy.sh/users/6gh" icon="OsuIcon" />
        </div>
    </div>
</template>