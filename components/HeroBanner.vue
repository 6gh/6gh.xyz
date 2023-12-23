<script setup lang="ts">
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: false,
    default: "6gh.xyz",
  },
  subtitle: {
    type: String,
    required: false,
    default: "Welcome to 6gh's Main Website! Here you can find downloads to my MIDIs, contact information, and more!",
  },
  defaultButtons: {
    type: Boolean,
    required: false,
    default: true,
  },
});
</script>

<template>
  <div class="hero" :style="'background-image: url(' + image + ');'">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="py-64">
        <h1 class="mb-5 text-5xl font-bold">{{ title }}</h1>
        <p v-if="subtitle.length > 1" class="mb-5 text-xl">{{ subtitle }}</p>
        <div v-if="defaultButtons" class="join">
          <NuxtLink to="/midis" class="btn btn-primary join-item">MIDIs</NuxtLink>
          <NuxtLink to="/contact" class="btn btn-secondary join-item">Contact
          </NuxtLink>
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>