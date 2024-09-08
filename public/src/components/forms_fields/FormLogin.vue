<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      errors: {
        email: '',
        password: '',
      },
      isSubmitting: false, 
      rules: {
        required: value => !!value || this.$t('forms.errors.required_field'),
        email: value => {
          if (!value) {
            return this.$t('forms.errors.required_field');
          }
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailPattern.test(value) || this.$t('forms.errors.invalid_email');
        },
        password: value => !!value || this.$t('forms.errors.required_password'),
      }
    }
  },
  watch: {
    email(value) {
      const emailError = this.rules.email(value);
      this.errors.email = emailError === true ? '' : emailError;
    },
    password(value) {
      const passwordError = this.rules.password(value);
      this.errors.password = passwordError === true ? '' : passwordError;
    }
  },
  methods: {
    validateForm() {
      let isValid = true;

      const emailError = this.rules.email(this.email);
      if (emailError !== true) {
        this.errors.email = emailError;
        isValid = false;
      } else {
        this.errors.email = '';
      }

      const passwordError = this.rules.password(this.password);
      if (passwordError !== true) {
        this.errors.password = passwordError;
        isValid = false;
      } else {
        this.errors.password = '';
      }

      return isValid;
    },
    async onSubmit() {
      if (this.validateForm()) {
        this.isSubmitting = true;
        try {
          await new Promise(resolve => setTimeout(resolve, 2000));
          console.log('Форма отправлена:', {
            email: this.email,
            password: this.password
          });

          this.$refs.form.$el.querySelectorAll('input').forEach(input => input.disabled = true);
          this.$refs.submitBtn.disabled = true;

        } catch (error) {
          console.error('Отправка формы не удалась:', error);
        } finally {
          this.isSubmitting = false; 
        }
      }
    }
  }
};
</script>


<template>
  <v-container class="form_login">
    <h3>{{ $t('forms.labels.login') }}</h3>
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

      <p>{{ $t('forms.labels.password_title') }}</p>
      <v-text-field
        v-model="password"
        :label="$t('forms.labels.password_title')"
        type="password"
        :disabled="isSubmitting"
        required
      />
      <p v-if="errors.password && !isSubmitting" class="error-text">{{ errors.password }}</p>

      <v-row justify="space-between">
        <v-col class="button-log">
          <v-btn
            ref="submitBtn"
            :loading="isSubmitting"
            variant="outlined"
            class="button-style"
            @click="onSubmit"
            :disabled="isSubmitting"
          >
            {{ $t('forms.buttons.submit_login') }}
          </v-btn>
        </v-col>
        <v-col class="forget-password">
          <a href="#">{{ $t('forms.buttons.forget_password') }}</a>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>
