<template>
  <button class="p-3 rounded-md" :class="color">
    <slot></slot>
  </button>
</template>

<script setup>

const props = defineProps(['color'])

</script>
