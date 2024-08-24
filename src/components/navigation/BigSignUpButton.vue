<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  isLoading: {
    type: Boolean,
    required: true
  }
})
</script>
<script>
export default {
  emits: ['click'],
  computed: {
    base_color() {
      return 'green-darken-1'
    }
  },
  methods: {
    click_handler() {
      this.$emit('click')
    }
  }
}
</script>

<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-btn
      v-bind="props"
      :base-color="base_color"
      :variant="isHovering ? 'elevated' : 'outlined'"
      :loading="isLoading"
      size="x-large"
      @click="click_handler"
      ><b>{{ title }}</b>
    </v-btn>
  </v-hover>
</template>
