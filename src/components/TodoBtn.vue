<template>
  <button class="p-3 rounded-md text-white outline-none hover:opacity-80" :class="colour">
    <slot></slot>
  </button>
</template>

<script setup>

const props = defineProps({
    colour: String, // Define the prop and its type
})

</script>
