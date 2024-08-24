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
            email: value => !!value || this.$t('forms.errors.required_email'),
            password: value => !!value || this.$t('forms.errors.required_password'),
        }
    }
 },
 computed: {
    isFormValid() {
        return this.email !== '' && this.password !== '';
    }
 },
 methods: {
    validateForm() {
        this.errors.email = !this.rules.required(this.email) ? this.rules.required(this.email) : '';
        this.errors.password = !this.rules.required(this.password) ? this.rules.required(this.password) : '';

        return !this.errors.email && !this.errors.password;
    },
    async onSubmit() {
        if (this.validateForm()) {
            this.isSubmitting = true; 

            try {
                await new Promise(resolve => setTimeout(resolve, 2000));

                console.log('Форма отправлена:', {
                    email: this.email
                });

            } catch (error) {
                console.error('Отправка формы не удалась:', error);
            } finally {
                this.isSubmitting = false; 
            }
        } else {
            console.log('Проверка формы не удалась. Пожалуйста, заполните все обязательные поля.');
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
            <p>{{ $t('forms.labels.password_title') }}</p>
            <v-text-field
                v-model="password"
                :label="$t('forms.labels.password_title')"
                type="password"
                :rules="[rules.required, rules.password]"
                :disabled="isSubmitting"  
                required>
            </v-text-field>
            <v-alert
                v-if="errors.password"
                type="error"
                class="mt-3"
            >
            {{ errors.password }}
            </v-alert>

            <v-row justify="space-between">
                <v-col class="button-log">
                    <v-btn
                        :loading="isSubmitting"
                        variant="outlined"
                        class="button-style"
                        :disabled="!isFormValid || isSubmitting" 
                        :type="buttonType"
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
