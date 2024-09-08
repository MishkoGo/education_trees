<script setup>
import BigSignUpButton from '@/components/navigation/BigSignUpButton.vue'
import { useAuthStore } from '@/stores/auth.js'
import { mapState } from 'pinia'
import { mock_external_request } from '@/utils/request-mocks'
</script>
<script>
export default {
  methods: {
    async processButton(loading_mark_name) {
      this[loading_mark_name] = true
      await mock_external_request()
      this[loading_mark_name] = false
    }
  },
  data() {
    return {
      signup_landing_button_loading: false
    }
  },
  computed: {
    ...mapState(useAuthStore, ['getMockIsAuthorized'])
  }
}
</script>

<template>
  <v-container>
    <v-container>
      <h1>ПЛАТФОРМА ДЛЯ ПРЕПОДАВАТЕЛЕЙ И СТУДЕНТОВ</h1>
    </v-container>
    <v-container align="center">
      <p>EducationTrees - инструмент для планирования обучения и обмена опытом с коллегами</p>
    </v-container>
    <v-container align="center">
      <BigSignUpButton
        title="Зарегистрироваться"
        :isLoading="signup_landing_button_loading"
        @click="processButton('signup_landing_button_loading')"
      />
    </v-container>
  </v-container>
</template>