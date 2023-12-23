<script setup lang="ts">
defineProps({
  columnNames: {
    type: Array<string>,
    required: true
  },
})
</script>

<template>
  <div class="overflow-y-scroll">
    <table class="table">
      <thead>
        <tr>
          <th v-for="columnName in columnNames">{{ columnName }}</th>
        </tr>
      </thead>
      <tbody>
        <slot />
      </tbody>
    </table>
  </div>
</template>