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