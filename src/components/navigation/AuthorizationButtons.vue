<script setup>
import LoginButton from '@/components/navigation/LoginButton.vue'
import SignupButton from '@/components/navigation/SignupButton.vue'
import LogoutButton from '@/components/navigation/LogoutButton.vue'

defineProps({
  isAuthorized: {
    type: Boolean,
    required: true
  }
})
</script>
<script>
export default {
  methods: {
    async process_button_click(event_name) {
      await this.mock_external_request(event_name)
    },
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
      logout_button_loading: false
    }
  }
}
</script>

<template>
  <div>
    <v-container class="ma-0 pa-0" style="max-width: 350px">
      <v-row v-if="isAuthorized" no-gutters>
        <v-col style="margin-right: 10px">
          <LogoutButton
            :isLoading="logout_button_loading"
            @click="process_button_click('logout_button_loading')"
          ></LogoutButton>
        </v-col>
      </v-row>
      <v-row v-else no-gutters>
        <v-col style="margin-right: 10px">
          <LoginButton
            :isLoading="login_button_loading"
            @click="process_button_click('login_button_loading')"
          ></LoginButton>
        </v-col>
        <v-col>
          <SignupButton
            :isLoading="signup_button_loading"
            @click="process_button_click('signup_button_loading')"
          ></SignupButton>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
