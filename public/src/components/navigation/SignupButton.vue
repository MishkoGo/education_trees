<script setup>
import BaseGrayButton from '@/components/navigation/BaseGrayButton.vue'

defineProps({
  isLoading: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <BaseGrayButton :title="$t('buttons.sign_up')" :isLoading="isLoading" />
</template>
