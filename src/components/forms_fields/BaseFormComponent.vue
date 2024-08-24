<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  isLoading: {
    type: Boolean,
    required: false
  }
})
</script>
<script>
export default {
  emits: ['submit'],
  data() {
    return { form_data: {} }
  }
}
</script>

<template>
  <v-container xs class="form-container">
    <v-sheet class="mx-auto form-sheet">
      <v-form :disabled="isLoading">
        <v-row class="form-title">
          <h2>{{ title }}</h2>
        </v-row>

        <v-row>
          <slot name="form"></slot>
        </v-row>
        <v-row>
          <v-col align="center">
            <slot name="button"> </slot>
          </v-col>
        </v-row>
      </v-form>
    </v-sheet>
  </v-container>
</template>

