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
            confirmPassword: ''
        }, 
        isSubmitting: false, 
        rules: {
            email: value => !! value || this.$t('forms.errors.required_email'),
            password: value => !! value || this.$t('forms.errors.required_password'),
            confirmPassword: value => {
                if (!value) {
                    return this.$t('forms.errors.required_password');
                }
                else if(value !== this.password) {
                    return this.$t('forms.errors.password_mismatch');
                }
                return true;
            },
            fullName: value => {
                if (!value) {
                    return this.$t('forms.errors.required_field');
                }
                return true;
            }
        }
    }
 },
 computed: {
    isFormValid() {
        return this.email !== '' && 
               this.password !== '' && 
               this.confirmPassword !== '' && 
               this.password === this.confirmPassword;
    }
 },
 methods: {
    validateForm() {
        this.errors.email = this.rules.email(this.email) ? '' : this.rules.email(this.email);
        this.errors.password = this.rules.password(this.password) ? '' : this.rules.password(this.password);
        this.errors.confirmPassword = this.rules.confirmPassword(this.confirmPassword) ? '' : this.rules.confirmPassword(this.confirmPassword);
        this.errors.fullName = this.rules.fullName(this.fullName) ? '' : this.rules.fullName(this.fullName);

        return !this.errors.email && !this.errors.password && !this.errors.confirmPassword && !this.errors.fullName;
    },
    async onSubmit() {
        if(this.validateForm()) {
            this.isSubmitting = true;
            try {
                await new Promise(resolve => setTimeout(resolve, 4000));

                console.log('Форма отправлена:', {
                    email: this.email,
                    fullName: this.fullName
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
    <v-container class="form_registration">
        <h3>{{ $t('forms.labels.registration') }}</h3>
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
            <p>{{ $t('forms.labels.confirm_password_title') }}</p>
            <v-text-field
                v-model="confirmPassword"
                :label="$t('forms.labels.confirm_password_title')"
                type="password"
                :rules="[rules.required, rules.confirmPassword]"
                :disabled="isSubmitting" 
                required>
            </v-text-field>
            <v-alert
                v-if="errors.confirmPassword"
                type="error"
                class="mt-4"
            >
            {{ errors.confirmPassword }}
            </v-alert>
            <p>{{ $t('forms.labels.name_surname_title') }}</p>
            <v-text-field
                v-model="fullName"
                :label="$t('forms.labels.name_surname_title')"
                type="text"
                :disabled="isSubmitting"  
                >
            </v-text-field>

            <v-btn
                :loading="isSubmitting"
                variant="outlined"
                class="button-style"
                :disabled="!isFormValid || isSubmitting"
                :type="buttonType"
            >
            {{ $t('forms.buttons.submit_registration') }}
            </v-btn>
        </v-form>
    </v-container>
</template>