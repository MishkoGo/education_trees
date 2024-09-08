<script setup>
defineProps({
  text: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div>
    <p class="content-description">{{ text }}</p>
  </div>
</template>