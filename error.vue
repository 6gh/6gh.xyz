<script setup>
const error = useError();
const image404 = useCdn("/images/404.png");
const imageGeneric = useCdn("/images/error.png");
</script>

<template>
    <NuxtLayout>
        <template v-if="error.statusCode === 404">
            <HeroBanner :image="image404" title="404"
                subtitle="That page was not found! It either has been deleted, has been renamed, or never existed!"
                :default-buttons="false">
                <NuxtLink to="/" class="btn btn-primary join-item">Home</NuxtLink>
            </HeroBanner>
        </template>
        <template v-else>
            <HeroBanner :image="imageGeneric" :title="error.statusCode" subtitle="" :default-buttons="false">
                <p class="mb-5 text-xl">
                    <span class="italic">
                        &quot;It's not a bug, it's a feature!&quot;
                    </span>
                    <br>
                    An error has occurred. Please try again later.
                </p>
                <NuxtLink to="/" class="btn btn-primary join-item">Home</NuxtLink>
            </HeroBanner>
        </template>
    </NuxtLayout>
</template>
  