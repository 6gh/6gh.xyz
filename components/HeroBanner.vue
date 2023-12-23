<script setup lang="ts">
defineProps({
  image: {
    type: String,
    required: false,
  }
})
</script>

<template>
  <div class="hero" :style="'background-image: url(' + image + ');'">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="py-64">
        <h1 class="mb-5 text-5xl font-bold">6gh.xyz</h1>
        <p class="mb-5 text-xl">Welcome to 6gh's Main Website! Here you can find downloads to my MIDIs, contact
          information, and more!</p>
        <div class="join">
          <NuxtLink to="/midis" class="btn btn-primary join-item">MIDIs</NuxtLink>
          <NuxtLink to="/contact" class="btn btn-secondary join-item">Contact
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>