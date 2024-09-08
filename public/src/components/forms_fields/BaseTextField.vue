<script setup>
import { isRequired } from '@/utils/validation-rules'

defineProps({
  title: {
    type: String,
    required: true
  },
  isDisabled: {
    type: Boolean,
    required: false
  },
  value: {
    type: String,
    required: false
  },
  errorMessages: {
    type: Array,
    required: false
  }
})
</script>
<script>
export default {
  data() {
    return {
      rules: [isRequired]
    }
  },
  methods: {}
}
</script>

<template>
  <v-responsive class="mx-auto" min-width="300" max-width="350">
    <v-text-field
      :rules="rules"
      :label="title"
      :v-bind="value"
      @input="$emit('update_value', $event)"
      :error-messages="errorMessages"
      clearable
    ></v-text-field>
  </v-responsive>
</template>

