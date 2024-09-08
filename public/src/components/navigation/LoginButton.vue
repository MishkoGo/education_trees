<script setup>
import BaseGrayButton from '@/components/navigation/BaseGrayButton.vue'

defineProps({
  isLoading: {
    type: Boolean,
    required: true
  },
  buttonType: {
    type: String,
    required: false
  }
})
</script>

<template>
  <BaseGrayButton :title="$t('buttons.login')" :isLoading="isLoading" :buttonType="buttonType" />
</template>
