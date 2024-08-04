import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    mockIsAuthorized: false,
    apiToken: null
  }),
  actions: {
    changeMockIsAuthorized(new_value) {
      this.mockIsAuthorized = new_value
    },
    setApiToken(new_token) {
      this.apiToken = new_token
    }
  },
  getters: {
    getMockIsAuthorized: (state) => state.mockIsAuthorized,
    getIsAuthorized: (state) => Boolean(state.apiToken)
  }
})
