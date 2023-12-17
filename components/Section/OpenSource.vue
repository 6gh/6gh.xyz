<template>
    <section class="w-8/12 pt-4 pb-24 flex flex-col justify-center items-center mx-auto space-y-8">
        <h1 class="text-4xl font-bold">
            Open Source
            <Icon name="logos:opensource" class="inline-block w-12 h-12"></Icon>
        </h1>
        <p class="text-xl text-center">
            I'm a big fan of open source software, and as such this website is open source! You can find the source code
            <NuxtLink to="https://github.com/6gh/6gh.xyz" class="link link-hover link-primary">on Github
                <Icon name="pajamas:external-link" class="inline-block w-4 h-4" />
            </NuxtLink>!<br><br>

            The entire website is written in Vue.js, and uses other open source projects as well. Check out the
            <NuxtLink to="/credits" class="link link-hover link-primary">credits page</NuxtLink>
            to see all of the open source projects used in this website!<br><br>

            This project is under the MIT license so feel free to use any of the code in this website for your own
            projects!
        </p>
        <div class="space-x-16">
            <NuxtLink to="https://github.com/6gh/6gh.xyz">
                <Icon name="pajamas:github" class="inline-block w-12 h-12"></Icon>
            </NuxtLink>
            <NuxtLink to="https://github.com/6gh/6gh.xyz/blob/main/LICENSE">
                <Icon name="pajamas:license" class="inline-block w-12 h-12"></Icon>
            </NuxtLink>
        </div>
    </section>
</template>