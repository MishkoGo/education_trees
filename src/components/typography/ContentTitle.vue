<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>
    <h1 class="content-title">{{ title }}</h1>
  </div>
</template>

<style scoped>
.content-title {
  font-family: var(--base-font-family);
  font-size: 30px;
}
</style>
