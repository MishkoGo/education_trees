<script setup>
/* Компонент для демонстрации элементов 
навигации - отдельные кнопки, меню целиком, стрелки, лого и т.п.
 */
import GroupShowCase from '../kit_demo/GroupShowCase.vue'
import ElementShowCase from '@/components/kit_demo/ElementShowCase.vue'

import BaseSwitchField from '@/components/forms_fields/BaseSwitchField.vue'
// import BaseFormComponent from '@/components/forms_fields/BaseFormComponent.vue'
// import LoginButton from '@/components/navigation/LoginButton.vue'
// import BaseTextField from '@/components/forms_fields/BaseTextField.vue'
// import LoginForm from '@/components/forms_fields/LoginForm.vue'
import { mock_external_request } from '@/utils/request-mocks'

import FormRegistration from '@/components/forms_fields/FormRegistration.vue'
import WindowSuccessRegistration from '../forms_fields/WindowSuccessRegistration.vue'
import WindowPasswordLogin from '../forms_fields/WindowPasswordLogin.vue'
import FormLogin from '../forms_fields/FormLogin.vue'
import FormForgetPassword from '../forms_fields/FormForgetPassword.vue'
import BaseEmailField from '../forms_fields/BaseEmailField.vue'
</script>

<script>
export default {
  methods: {
    async boolean_mark_processing(target) {
      this.form_data.boolean_switch_atom.isLoading = true
      await mock_external_request()
      this.form_data.boolean_switch_atom.isLoading = false
      this.form_data.boolean_switch_atom.value = target
    },
    async processButton(button_data) {
      button_data.isLoading = true
      await mock_external_request()
      button_data.isLoading = false
    }
  },
  data() {
    return {
      boolean_switch_loading: false,
      boolean_switch_value: false,
      login_button_loading: false,
      form_data: {
        boolean_switch_atom: { value: false, isLoading: false },
        email_atom: { value: null },
        base_text_atom: { value: null },
        form_example: { value_1: null, value_2: null, button: { isLoading: false } }
      }
    }
  }
}
</script>

<template>
  <GroupShowCase title="Элементы формы">
    <template v-slot:elements>
      <ElementShowCase title="Свитч">
        <template v-slot:element>
          <BaseSwitchField
            title="Текст поля"
            title_off="Текст поля OFF"
            :isLoading="form_data.boolean_switch_atom.isLoading"
            v-model="form_data.boolean_switch_atom.value"
            @change="boolean_mark_processing"
          ></BaseSwitchField>
          {{ form_data.boolean_switch_atom }}
        </template>
      </ElementShowCase>
      <ElementShowCase title="Поля формы">
        <template v-slot:element>
          <BaseEmailField></BaseEmailField>
          
        </template>
        
      </ElementShowCase>
      <ElementShowCase title="Регистрация">
        <template v-slot:element>
          <FormRegistration></FormRegistration>
          
        </template>
        
      </ElementShowCase>
      <ElementShowCase title="Регистрация успех">
        <template v-slot:element>
          <WindowSuccessRegistration></WindowSuccessRegistration>
        </template>
      </ElementShowCase>
      <ElementShowCase title="Вход">
        <template v-slot:element>
          <FormLogin></FormLogin>
        </template>
      </ElementShowCase>
      <ElementShowCase title="Забыли пароль">
        <template v-slot:element>
          <FormForgetPassword></FormForgetPassword>
        </template>
      </ElementShowCase>
      <ElementShowCase title="Забыли пароль - успех">
        <template v-slot:element>
          <WindowPasswordLogin></WindowPasswordLogin>
        </template>
      </ElementShowCase>
      <!-- <ElementShowCase title="Ввод краткого текста">
        <template v-slot:element>
          <BaseTextField
            :isDisabled="false"
            v-model:value="form_data.base_text_atom.value"
            @update_value="form_data.base_text_atom.value = $event.target.value"
            title="Ввод краткого текста"
          ></BaseTextField>
          {{ form_data.base_text_atom }}
        </template>
      </ElementShowCase>
      <ElementShowCase title="Слоты под форму">
        <template v-slot:element>
          <BaseFormComponent
            title="Заголовок формы"
            :isLoading="form_data.form_example.button.isLoading"
          >
            <template v-slot:form>
              <BaseTextField
                :isDisabled="false"
                v-model:value="form_data.form_example.value_1"
                @update_value="form_data.form_example.value_1 = $event.target.value"
                title="Ввод краткого текста"
              ></BaseTextField>
              <BaseTextField
                :isDisabled="false"
                v-model:value="form_data.form_example.value_2"
                @update_value="form_data.form_example.value_2 = $event.target.value"
                title="Ввод краткого текста"
              ></BaseTextField>
            </template>
            <template v-slot:button>
              <LoginButton
                :isLoading="form_data.form_example.button.isLoading"
                @click="processButton(form_data.form_example.button)"
              ></LoginButton
            ></template>
          </BaseFormComponent>
          {{ form_data.form_example }}
        </template>
      </ElementShowCase>
      <ElementShowCase title="Слоты под форму">
        <template v-slot:element>
          <LoginForm />
        </template>
      </ElementShowCase> -->
    </template>
  </GroupShowCase>
</template>
