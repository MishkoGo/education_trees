<script setup>
import AuthorizationButtons from '@/components/navigation/AuthorizationButtons.vue'
import Logo from '@/components/navigation/Logo.vue'
import { useAuthStore } from '@/stores/auth.js'
import { mapState } from 'pinia'

defineProps({
  isMock: {
    type: Boolean,
    required: false
  }
})
</script>

<script>
export default {
  data() {
    return {
      login_button_loading: false,
      signup_button_loading: false,
      logout_button_loading: false
    }
  },

  computed: {
    ...mapState(useAuthStore, ['getMockIsAuthorized', 'getIsAuthorized']),
    isAuthorized() {
      if (this.isMock) {
        return this.getMockIsAuthorized
      }
      return this.getIsAuthorized
    }
  }
}
</script>
<template>
  <v-container fluid class="container-fluid ma-0 pa-0 top-menu">
    <v-row align="center">
      <v-col class="ma-5" cols="5">
        <Logo />
      </v-col>

      <v-col align="right" class="mr-5">
        <AuthorizationButtons
          :isAuthorized="isAuthorized"
          :login_button_loading="login_button_loading"
          :logout_button_loading="logout_button_loading"
          :signup_button_loading="signup_button_loading"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

