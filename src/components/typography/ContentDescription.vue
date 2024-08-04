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

<style scoped>
.content-description {
  font-family: var(--base-font-family);
  font-size: 20px;
}
</style>
