import './assets/main.css'
import 'vuetify/styles'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'
import locale_i18n from './locale'
import { mainStore } from './stores'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(locale_i18n)

app.mount('#app')
