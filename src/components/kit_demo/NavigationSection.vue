<script setup>
/* Компонент для демонстрации элементов 
навигации - отдельные кнопки, меню целиком, стрелки, лого и т.п.
 */
import GroupShowCase from '../kit_demo/GroupShowCase.vue'
import ElementShowCase from '@/components/kit_demo/ElementShowCase.vue'

import Logo from '@/components/navigation/NavLogo.vue'
import LoginButton from '@/components/navigation/LoginButton.vue'
import SignupButton from '@/components/navigation/SignupButton.vue'
import LogoutButton from '@/components/navigation/LogoutButton.vue'
import AuthorizationButtons from '@/components/navigation/AuthorizationButtons.vue'
import TopMenu from '@/components/navigation/TopMenu.vue'

import BigSignUpButton from '@/components/navigation/BigSignUpButton.vue'
import { useAuthStore } from '@/stores/auth.js'
import { mapState } from 'pinia'
import { mock_external_request } from '@/utils/request-mocks'
</script>

<script>
export default {
  methods: {
    async processButton(button_data) {
      button_data.isLoading = true
      await mock_external_request()
      button_data.isLoading = false
    }
  },
  data() {
    return {
      loginButton: { isLoading: false },
      signupButton: { isLoading: false },
      logoutButton: { isLoading: false },
      bigSignupButton: { isLoading: false }
    }
  },
  computed: {
    ...mapState(useAuthStore, ['getMockIsAuthorized'])
  }
}
</script>

<template>
  <GroupShowCase :title="$t('ui_kit.navigation')">
    <template v-slot:elements>
      <ElementShowCase :title="$t('ui_kit.logo')">
        <template v-slot:element>
          <Logo></Logo>
        </template>
      </ElementShowCase>
      <ElementShowCase :title="$t('buttons.login')">
        <template v-slot:element>
          <LoginButton
            :isLoading="loginButton.isLoading"
            @click="processButton(loginButton)"
          ></LoginButton>
        </template>
      </ElementShowCase>

      <ElementShowCase :title="$t('buttons.sign_up')">
        <template v-slot:element>
          <SignupButton
            :isLoading="signupButton.isLoading"
            @click="processButton(signupButton)"
          ></SignupButton>
        </template>
      </ElementShowCase>
      <ElementShowCase :title="$t('buttons.sign_up')">
        <template v-slot:element>
          <BigSignUpButton
            :isLoading="bigSignupButton.isLoading"
            :title="$t('buttons.sign_up')"
            @click="processButton(bigSignupButton)"
          ></BigSignUpButton>
        </template>
      </ElementShowCase>
      <ElementShowCase :title="$t('buttons.logout')">
        <template v-slot:element>
          <LogoutButton
            :isLoading="logoutButton.isLoading"
            @click="processButton(logoutButton)"
          ></LogoutButton>
        </template>
      </ElementShowCase>
      <ElementShowCase :title="$t('ui_kit.auth_buttons')">
        <template v-slot:element>
          <AuthorizationButtons
            :isAuthorized="getMockIsAuthorized"
            :login_button_loading="loginButton.isLoading"
            :logout_button_loading="logoutButton.isLoading"
            :signup_button_loading="signupButton.isLoading"
            @login_button_click="processButton(logoutButton)"
            @logout_button_click="processButton(logoutButton)"
            @signup_button_click="processButton(signupButton)"
          ></AuthorizationButtons>
        </template>
      </ElementShowCase>
    </template>
  </GroupShowCase>
</template>
