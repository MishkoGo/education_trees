<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      fullName: '',
      errors: {
        email: '',
        password: '',
        confirmPassword: '',
        fullName: '',
      },
      isSubmitting: false,
      rules: {
        email: value => {
          if (!value) {
            return this.$t('forms.errors.required_email');
          }
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(value)) {
            return this.$t('forms.errors.invalid_email');
          }
          return true;
        },
        password: value => !!value || this.$t('forms.errors.required_password'),
        confirmPassword: value => {
          if (!value) {
            return this.$t('forms.errors.required_password');
          } else if (value !== this.password) {
            return this.$t('forms.errors.password_mismatch');
          }
          return true;
        },
        fullName: value => {
          if (value.length > 50) {
            return this.$t('forms.errors.fullname_too_long');
          }
          return true;
        }
      }
    };
  },
  computed: {
    isFormValid() {
      return this.email !== '' &&
             this.password !== '' &&
             this.confirmPassword !== '' &&
             this.password === this.confirmPassword &&
             this.errors.fullName === ''; 
    }
  },
  watch: {
    email(value) {
      this.errors.email = this.rules.email(value) === true ? '' : this.rules.email(value);
    },
    password(value) {
      this.errors.password = this.rules.password(value) === true ? '' : this.rules.password(value);
      this.errors.confirmPassword = this.rules.confirmPassword(this.confirmPassword) === true ? '' : this.rules.confirmPassword(this.confirmPassword);
    },
    confirmPassword(value) {
      this.errors.confirmPassword = this.rules.confirmPassword(value) === true ? '' : this.rules.confirmPassword(value);
    },
    fullName(value) {
      this.errors.fullName = this.rules.fullName(value) === true ? '' : this.rules.fullName(value);
    }
  },
  methods: {
    validateForm() {
      const emailError = this.rules.email(this.email);
      this.errors.email = emailError === true ? '' : emailError;

      const passwordError = this.rules.password(this.password);
      this.errors.password = passwordError === true ? '' : passwordError;

      const confirmPasswordError = this.rules.confirmPassword(this.confirmPassword);
      this.errors.confirmPassword = confirmPasswordError === true ? '' : confirmPasswordError;

      const fullNameError = this.rules.fullName(this.fullName);
      this.errors.fullName = fullNameError === true ? '' : fullNameError;

      return !this.errors.email && !this.errors.password && !this.errors.confirmPassword && !this.errors.fullName;
    },
    async onSubmit() {
      if (this.validateForm()) {
        this.isSubmitting = true;
        try {
          await new Promise(resolve => setTimeout(resolve, 4000));

          console.log('Форма отправлена:', {
            email: this.email,
            fullName: this.fullName
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
  <v-container class="form_registration">
    <h3>{{ $t('forms.labels.registration') }}</h3>
    <v-form @submit.prevent="onSubmit" ref="form">
      <p>{{ $t('forms.labels.email') }}</p>
      <v-text-field
        v-model="email"
        :label="$t('forms.labels.email')"
        type="email"
        :disabled="isSubmitting" 
        required>
      </v-text-field>
      <p v-if="errors.email" class="error-text">{{ errors.email }}</p>

      <p>{{ $t('forms.labels.password_title') }}</p>
      <v-text-field
        v-model="password"
        :label="$t('forms.labels.password_title')"
        type="password"
        :disabled="isSubmitting"  
        required>
      </v-text-field>
      <p v-if="errors.password" class="error-text">{{ errors.password }}</p>

      <p>{{ $t('forms.labels.confirm_password_title') }}</p>
      <v-text-field
        v-model="confirmPassword"
        :label="$t('forms.labels.confirm_password_title')"
        type="password"
        :disabled="isSubmitting" 
        required>
      </v-text-field>
      <p v-if="errors.confirmPassword" class="error-text">{{ errors.confirmPassword }}</p>

      <p>{{ $t('forms.labels.name_surname_title') }}</p>
      <v-text-field
        v-model="fullName"
        :label="$t('forms.labels.name_surname_title')"
        type="text"
        :disabled="isSubmitting"  
      >
      </v-text-field>
      <p v-if="errors.fullName" class="error-text">{{ errors.fullName }}</p>
      
      <v-btn
        ref="submitBtn"
        :loading="isSubmitting"
        variant="outlined"
        class="button-style"
        :disabled="isSubmitting"
        @click="onSubmit"
      >
        {{ $t('forms.buttons.submit_registration') }}
      </v-btn>
    </v-form>
  </v-container>
</template>
