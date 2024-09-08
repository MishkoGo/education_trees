<script setup>
import LoginButton from '@/components/navigation/LoginButton.vue'
import SignupButton from '@/components/navigation/SignupButton.vue'
import LogoutButton from '@/components/navigation/LogoutButton.vue'
import { mock_external_request, processButton } from '@/utils/request-mocks'

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
      this[event_name] = true
      await mock_external_request()

      this[event_name] = false
    }
  },
  data() {
    return {
      loginButtonState: { isLoading: false },
      logoutButtonState: { isLoading: false },
      signUpButtonState: { isLoading: false }
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
            :isLoading="logoutButtonState.isLoading"
            @click="processButton(logoutButtonState)"
          ></LogoutButton>
        </v-col>
      </v-row>
      <v-row v-else no-gutters>
        <v-col style="margin-right: 10px">
          <LoginButton
            :isLoading="loginButtonState.isLoading"
            @click="processButton(loginButtonState)"
          ></LoginButton>
        </v-col>
        <v-col>
          <SignupButton
            :isLoading="signUpButtonState.isLoading"
            @click="processButton(signUpButtonState)"
          ></SignupButton>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
