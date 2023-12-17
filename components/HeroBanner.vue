<template>
  <div class="hero" style="background-image: url(/images/bg-primary.jpg);">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="py-64">
        <h1 class="mb-5 text-5xl font-bold">6gh.xyz</h1>
        <p class="mb-5 text-xl">Welcome to 6gh's Main Website! Here you can find downloads to my MIDIs, contact
          information, and more!</p>
        <!-- for some reason the umami props arent showing on my instance -->
        <button class="btn btn-primary" v-umami="'hero-btn-click-midis'">MIDIs</button>
        <button class="btn btn-primary" v-umami="'hero-btn-click-contact'">Contact</button>
      </div>
    </div>
  </div>
</template>