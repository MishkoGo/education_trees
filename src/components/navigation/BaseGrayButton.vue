<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  isLoading: {
    type: Boolean,
    required: true
  },
  hover_border_color: {
    type: String,
    required: false
  },
  isDisabled: {
    type: Boolean,
    required: false
  }
})
</script>
<script>
export default {
  computed: {
    hover_border_color_actual() {
      return this.hover_border_color || 'var(--grey-button-hovered-color)'
    },
    isDisabledComputed() {
      return this.isDisabled || this.isLoading
    },
    hovered_color() {
      return 'var(--grey-button-hovered-color)'
    }
  },
  methods: {
    click_handler(event) {
      this.$emit('click', event)
    }
  }
}
</script>

<template>
  <v-btn
    :loading="isLoading"
    variant="outlined"
    class="button-style"
    :disabled="isDisabledComputed"
  >
    {{ title }}
  </v-btn>
</template>

<style scoped>
@media (max-width: 750px) {
  .button-style {
    margin-bottom: 5px;
  }
}

.button-style:hover {
  background-color: v-bind(hovered_color);
}
</style>
