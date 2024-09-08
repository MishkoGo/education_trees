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
        try {
          await new Promise(resolve => setTimeout(resolve, 4000));

          console.log('Форма отправлена:', {
            email: this.email
          });

          this.$refs.form.$el.querySelectorAll('input').forEach(input => input.disabled = true);
          this.$refs.submitBtn.disabled = true;

        } catch (error) {
          console.error('Форма не отправлена:', error);
        } finally {
          this.isSubmitting = false;
        }
      } else {
        console.error('Валидация не пройдена');
      }
    }
  }
};
</script>

<template>
  <v-container class="forget_password">
    <h3>{{ $t('forms.labels.forget_password_title') }}</h3>
    <v-form @submit.prevent="onSubmit" ref="form">
      <p>{{ $t('forms.labels.email') }}</p>
      <v-text-field
        v-model="email"
        :label="$t('forms.labels.email')"
        type="email"
        :disabled="isSubmitting"
        required
      />
      <p v-if="errors.email && !isSubmitting" class="error-text">{{ errors.email }}</p>
      
      <v-btn
        ref="submitBtn"
        :loading="isSubmitting"
        variant="outlined"
        class="button-style"
        :disabled="isSubmitting"
        @click="onSubmit"
      >
        {{ $t('forms.buttons.submit') }}
      </v-btn>
    </v-form>
  </v-container>
</template>
