<script setup lang="ts">
const appConfig = useAppConfig();
const title = "Privacy Policy";

useSeoMeta({
    title: `${title} - ${appConfig.title}`,
    ogTitle: `${title} - ${appConfig.title}`,
    description: "Privacy policy for " + appConfig.title + ".",
    ogDescription: "Privacy policy for " + appConfig.title + ".",
})
</script>

<template>
    <PageHeader :title="title" />

    <section class="flex justify-center items-center w-full">
        <AlertNormal id="updated" class="xl:w-8/12 lg:w-10/12 md:11/12">
            <div>
                Updated:
                <div class="inline-block tooltip" data-tip="MM/DD/YYYY">12/17/2023</div>
            </div>
        </AlertNormal>
    </section>

    <section class="xl:w-8/12 lg:w-10/12 md:11/12 px-6 flex flex-col justify-center text-start mx-auto space-y-4 mb-16">
        <h2 class="text-2xl font-bold">
            Introduction
        </h2>
        <p>
            6gh operates the website "6gh's Website" at <NuxtLink class="link link-hover link-accent" to="https://6gh.xyz">
                https://6gh.xyz</NuxtLink>.
            I take your privacy seriously. To better protect your privacy, I provide this privacy policy notice explaining
            the way your information is collected and used.
        </p>

        <h2 class="text-2xl font-bold">
            Non identifiable information
        </h2>
        <p>
            This website track basic information about its visitors. This information includes, but is not limited to, IP
            addresses, browser details, timestamps and referring pages. None of this information can personally identify
            specific visitors to this website. The information is tracked for routine administration, maintenance
            purposes, and genuine interest in visitor analytics.<br><br>

            For this I use a self-hosted instance of <NuxtLink class="link link-hover link-accent" to="https://umami.is/"
                target="_blank" rel="noopener noreferrer">Umami</NuxtLink>.
        </p>

        <h2 class="text-2xl font-bold">
            Cookies
        </h2>
        <p>
            All features of this website use localstorage, and as such all features of this
            website are available without cookies. I do not knowingly use cookies on this website.
        </p>

        <h2 class="text-2xl font-bold">
            Third Parties
        </h2>
        <p>
            Third parties this website uses may use cookies, scripts and/or web beacons to track visitor activities on this
            website for a variety of reasons such as analytics. Such tracking is done directly by the third parties through
            their servers and is subject to their privacy policies. This website has no access or control
            over these cookies, scripts and/or web beacons that may be used by third parties.

            Some of the third parties this website uses include, but are not limited to:
        <ul class="list-disc list-inside">
            <li>
                <NuxtLink to="https://cloudflare.com" class="link link-hover link-accent">Cloudflare</NuxtLink>
            </li>
            <li>
                <NuxtLink to="https://pages.cloudflare.com/" class="link link-hover link-accent">Cloudflare Pages</NuxtLink>
            </li>
        </ul>
        </p>

        <h2 class="text-2xl font-bold">
            Security
        </h2>
        <p>
            The security of your personal information is important to me, but remember that no
            method of transmission over the Internet, or method of electronic storage, is 100% secure.
            While I strive to use commercially acceptable means to protect your personal information,
            I cannot guarantee its absolute security.
        </p>

        <h2 class="text-2xl font-bold">
            Changes To This Privacy Policy
        </h2>
        <p>
            This Privacy Policy is effective as of <NuxtLink to="#updated" class="link link-hover link-accent">the date
                stamped above</NuxtLink> and will remain in effect except concerning any changes in its
            provisions in the future, which will be in effect immediately after being posted on this page. I reserve the
            right to update or change my Privacy Policy at any time and you should check this Privacy Policy periodically.
            If I make any material changes to this Privacy Policy, I will notify visitors by placing a prominent notice on
            my website.
        </p>

        <h2 class="text-2xl font-bold">
            Contact Information
        </h2>
        <p>
            For any questions or concerns regarding the privacy policy,
            please send me an email at <NuxtLink class="link link-hover link-accent" to="mailto:contact@6gh.xyz">
                contact@6gh.xyz</NuxtLink>.
        </p>
    </section>
</template>