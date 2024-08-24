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
            email: value => !!value || this.$t('forms.errors.required_email'),
        }
    }
 },
 computed: {
    isFormValid() {
        return this.email.includes('@');
    }
 },
 methods: {
    checkForm() {
        this.errors.email = '';
    },
    validateForm() {
        this.errors.email = this.rules.email(this.email) ? '' : this.rules.email(this.email);

        return !this.errors.email;
    },
    async onSubmit() {
        if(this.validateForm()) {
            this.isSubmitting = true;
            try {
                await new Promise(resolve => setTimeout(resolve, 4000));

                console.log('Форма отправлена:', {
                    email: this.email
                });

            } catch (error) {
                console.error('Форма не отправлена:', error);
            } finally {
                this.isSubmitting = false; 
            }
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
                :rules="[rules.required, rules.email]"
                :disabled="isSubmitting" 
                required>
            </v-text-field>
            <v-alert
                v-if="errors.email"
                type="error"
                class="mt-2"
            >
            {{ errors.email }}
            </v-alert>
            <v-btn
                :loading="isSubmitting"
                variant="outlined"
                class="button-style"
                :disabled="!isFormValid || isSubmitting"
                :type="buttonType"
            >
            {{ $t('forms.buttons.submit') }}
            </v-btn>
        </v-form>
    </v-container>
</template>
