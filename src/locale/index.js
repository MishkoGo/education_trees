import { createI18n } from 'vue-i18n'
import messageForm from './messageForm';

const locale_i18n = createI18n({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'ru',
  
  messages: {
    en: {
      navigation: {},
      buttons: {},
      breadcrumbs: {}
    },
    ru: {
      navigation: {
        hello: 'Привет'
      },
      buttons: {
        login: 'Войти',
        sign_up: 'Зарегистрироваться',
        logout: 'Выйти'
      },
      forms: {
        messageForm,
        labels: {
          login_title: 'Поле обязательное',
          login: 'Вход',
          registration: 'Регистрация',
          registration_title: 'Поле обязательное',
          forget_password_title: 'Форма смены пароля',
          email: 'Почта',
          password: 'Поле обязательное',
          password_title: 'Пароль',
          confirm_password_title: 'Пароль еще раз',
          confirm_password: 'Поле обязательное',
          name_surname: 'Поле обязательное',
          name_surname_title: 'Имя и Фамилия (необязательно)',
        },
        errors: {
          required_field: 'Поле обязательное',
          invalid_email: 'Введите корректный адрес электронной почты.',
          required_email: 'Поле обязательное',
          invalid_password: 'Пароль неправильный',
          password_mismatch: 'Пароли не совпадают',
          required_password: 'Поле обязательное',
        },
        placeholders: {
          email: 'Введите вашу почту',
          password: 'Введите ваш пароль',
          confirm_password: 'Введите пароль еще раз',
          name_surname: 'Введите имя и фамилию'
        },
        buttons: {
          submit: 'Сменить пароль',
          submit_login: 'Войти',
          submit_registration: 'Зарегистрироваться',
          forget_password: 'Забыли пароль?'
        }
      },
      breadcrumbs: {},
      ui_kit: {
        authorized: 'Авторизован',
        guest: 'Гость',
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

export default locale_i18n;
