import { createI18n } from 'vue-i18n'

const locale_i18n = createI18n({
  locale: 'ru',
  fallbackLocale: 'ru',
  messages: {
    en: {
      nagivation: {},
      buttons: {},
      breadcrumbs: {}
    },
    ru: {
      nagivation: {
        hello: 'Привет'
      },
      buttons: {
        login: 'Войти',
        sign_up: 'Зарегистрироваться',
        logout: 'Выйти'
      },
      breadcrumbs: {},
      ui_kit: {
        authorized: 'Авторизован',
        quest: 'Гость',
        ui_kit_title: 'UI KIT проекта',
        atoms: 'Атомы',
        navigation: 'Навигация',
        logo: 'Лого',
        auth_buttons: 'Кнопки авторизации',
        top_menu: 'Верхнее меню'
      }
    }
  }
})

export default locale_i18n
