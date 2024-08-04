<script setup>
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
        @click="mock_external_request('signup_landing_button_loading')"
      />
    </v-container>
  </v-container>
</template>

<style scoped>
h1 {
  font-size: 50px;
  text-align: center;
}
p {
  font-size: 25px;
}
</style>
