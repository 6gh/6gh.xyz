<template>
    <section class="w-8/12 mx-auto flex flex-col justify-center items-center py-8 space-y-4">
        <h1 class="text-5xl font-bold">
            Technologies Used
        </h1>
        <p class="text-xl pb-12 text-center">
            This website was built using the following technologies. All of which are open source and free to use. I thank
            the creators of these technologies for making my life easier.
        </p>

        <div class="grid grid-cols-4 grid-rows-1 w-full space-x-4 columns-8">
            <TechnologyCredit name="Vue.js"
                description="Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web."
                image="https://vuejs.org/images/logo.png" link="https://vuejs.org/" linkText="Learn More" />
            <TechnologyCredit name="Nuxt"
                description="Nuxt is an open source framework that makes web development intuitive and powerful. Create performant and production-grade full-stack web apps and websites with confidence."
                image="https://nuxt.com/assets/design-kit/icon-green.svg" link="https://nuxt.com/" linkText="Learn More" />
            <TechnologyCredit name="Tailwind CSS"
                description="A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup."
                image="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
                link="https://tailwindcss.com/" linkText="Learn More" />
            <TechnologyCredit name="Daisy UI" description="Daisy UI is a component library for Tailwind CSS."
                image="https://daisyui.com/images/daisyui-logo/daisyui-logomark.svg" link="https://daisyui.com/"
                linkText="Learn More" />
        </div>
        <div class="grid grid-cols-4 grid-rows-1 w-full space-x-4">
            <TechnologyCredit name="Storybook"
                description="Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. It's open source and free."
                icon="logos:storybook-icon" link="https://storybook.js.org/" linkText="Learn More" />
            <TechnologyCredit name="Nuxt Devtools"
                description="Nuxt DevTools is a set of visual tools that help you to know your app better. "
                image="https://nuxt.com/assets/design-kit/icon-green.svg" link="https://github.com/nuxt/devtools"
                linkText="Learn More" />
            <TechnologyCredit name="Nuxt Color Mode"
                description="🌑 Dark and 🌕 Light mode with auto detection made easy with Nuxt. Change themes easily, with lifecycle support."
                image="/icons/nuxt-color-mode.png" link="https://github.com/nuxt-modules/color-mode"
                linkText="Learn More" />
            <TechnologyCredit name="Nuxt Icon"
                description="Add 200,000+ ready to use icons to your Nuxt application, based on Iconify."
                image="https://nuxt.com/assets/design-kit/icon-green.svg" link="https://github.com/nuxt-modules/icon"
                linkText="Learn More" />
        </div>
        <div class="grid grid-cols-4 grid-rows-1 w-full space-x-4">
            <div />
            <TechnologyCredit name="Cloudflare Pages"
                description="Cloudflare Pages is a JAMstack platform for frontend developers to collaborate and deploy websites."
                image="https://pages.cloudflare.com/resources/logo/logo.svg" link="https://pages.cloudflare.com/"
                linkText="Learn More" />
            <TechnologyCredit name="GitHub"
                description="GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere."
                image="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" link="https://github.com/"
                linkText="Learn More" />
            <div />
        </div>
    </section>
</template>