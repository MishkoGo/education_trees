<script setup>
/* Компонент для демонстрации элементов 
навигации - отдельные кнопки, меню целиком, стрелки, лого и т.п.
 */
import GroupShowCase from '../kit_demo/GroupShowCase.vue'
import ElementShowCase from '@/components/kit_demo/ElementShowCase.vue'

import Logo from '@/components/navigation/Logo.vue'
import LoginButton from '@/components/navigation/LoginButton.vue'
import SignupButton from '@/components/navigation/SignupButton.vue'
import LogoutButton from '@/components/navigation/LogoutButton.vue'
import AuthorizationButtons from '@/components/navigation/AuthorizationButtons.vue'
import TopMenu from '@/components/navigation/TopMenu.vue'

import BigSignUpButton from '@/components/navigation/BigSignUpButton.vue'
import { useAuthStore } from '@/stores/auth.js'
import { mapState } from 'pinia'
</script>

<script>
export default {
  methods: {
    async mock_external_request(loading_mark_name) {
      console.log('Имитация внешнего запроса', loading_mark_name)
      this[loading_mark_name] = true
      const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
      // Имитация ожидания внутренних компонентов или ответа внешних систем
      await sleep(2000)
      this[loading_mark_name] = false
      console.log('Запрос отработан')
    }
  },
  data() {
    return {
      login_button_loading: false,
      signup_button_loading: false,
      signup_landing_button_loading: false,
      logout_button_loading: false
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
            :isLoading="login_button_loading"
            @click="mock_external_request('login_button_loading')"
          ></LoginButton>
        </template>
      </ElementShowCase>

      <ElementShowCase :title="$t('buttons.sign_up')">
        <template v-slot:element>
          <SignupButton
            :isLoading="signup_button_loading"
            @click="mock_external_request('signup_button_loading')"
          ></SignupButton>
        </template>
      </ElementShowCase>
      <ElementShowCase :title="$t('buttons.sign_up')">
        <template v-slot:element>
          <BigSignUpButton
            :isLoading="signup_landing_button_loading"
            :title="$t('buttons.sign_up')"
            @click="mock_external_request('signup_landing_button_loading')"
          ></BigSignUpButton>
        </template>
      </ElementShowCase>
      <ElementShowCase :title="$t('buttons.logout')">
        <template v-slot:element>
          <LogoutButton
            :isLoading="logout_button_loading"
            @click="mock_external_request('logout_button_loading')"
          ></LogoutButton>
        </template>
      </ElementShowCase>
      <ElementShowCase :title="$t('ui_kit.auth_buttons')">
        <template v-slot:element>
          <AuthorizationButtons
            :isAuthorized="getMockIsAuthorized"
            :login_button_loading="login_button_loading"
            :logout_button_loading="logout_button_loading"
            :signup_button_loading="signup_button_loading"
            @login_button_click="mock_external_request('login_button_loading')"
            @logout_button_click="mock_external_request('logout_button_loading')"
            @signup_button_click="mock_external_request('signup_button_loading')"
          ></AuthorizationButtons>
        </template>
      </ElementShowCase>
      <ElementShowCase :title="$t('ui_kit.top_menu')">
        <template v-slot:element>
          <TopMenu></TopMenu>
        </template>
      </ElementShowCase>
    </template>
  </GroupShowCase>
</template>
