<script setup lang="ts">
defineProps({
    ends: {
        type: Boolean,
        required: false,
        default: false
    },
})
</script>

<template>
    <td v-if="!ends">
        <slot />
    </td>
    <th v-else>
        <slot />
    </th>
</template>
