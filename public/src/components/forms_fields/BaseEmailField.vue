<script>
export default {
  data() {
    return {
      email: '',
      errors: {
        email: '',
      },
      isSubmitting: false,
      rules: {
        email: value => {
          if (!value) {
            return this.$t('forms.errors.required_field');
          }
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || this.$t('forms.errors.invalid_email');
        }
      }
    }
  },
  watch: {
    email(value) {
      this.errors.email = this.rules.email(value) === true ? '' : this.rules.email(value);
    }
  },
  methods: {
    validateForm() {
      const emailError = this.rules.email(this.email);
      this.errors.email = emailError === true ? '' : emailError;
      return !this.errors.email;
    },
    async onSubmit() {
      if (this.validateForm()) {
        this.isSubmitting = true;
      }
    }
  }
};
</script>

<template>
  <v-container class="forget_password">
    <v-form @submit.prevent="onSubmit" ref="form">
      <v-text-field
        v-model="email"
        :label="$t('forms.labels.email')"
        type="email"
        :disabled="isSubmitting"
        required
      />
      <p v-if="errors.email && !isSubmitting" class="error-text">{{ errors.email }}</p>
    </v-form>
  </v-container>
</template>
