<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  title_off: {
    type: String,
    required: false
  },
  isLoading: {
    type: Boolean,
    required: false
  },
  modelValue: {
    type: Boolean,
    required: true
  }
})
</script>
<script>
export default {
  emits: ['change'],
  computed: {
    switchLoading() {
      if (this.isLoading) {
        return 'success'
      }
      return null
    },
    switchColor() {
      if (this.modelValue && !this.isLoading) {
        return 'success'
      } else {
        return null
      }
    },

    button_title() {
      if (this.modelValue) {
        return this.title
      }
      return this.title_off || this.title
    }
  },
  methods: {
    checkValue(event) {
      var value = event.target.value
      let boolValue = value === 'true'
      let new_value = !boolValue
      this.$emit('change', new_value)
    }
  }
}
</script>

<template>
  <v-switch
    :label="button_title"
    :loading="switchLoading"
    :disabled="isLoading"
    :color="switchColor"
    :model-value="modelValue"
    :value="modelValue"
    @click="checkValue"
  ></v-switch>
</template>

<style scoped></style>
