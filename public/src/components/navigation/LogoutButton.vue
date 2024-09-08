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
  <div>
    <BaseGrayButton
      hover_color="var(--logout-hovered-color)"
      :title="$t('buttons.logout')"
      :isLoading="isLoading"
    />
  </div>
</template>
