<script setup>
/* Компонент для демонстрации элементов 
навигации - отдельные кнопки, меню целиком, стрелки, лого и т.п.
 */
import GroupShowCase from '../kit_demo/GroupShowCase.vue'
import ElementShowCase from '@/components/kit_demo/ElementShowCase.vue'

import BaseSwitchField from '@/components/forms_fields/BaseSwitchField.vue'
</script>

<script>
export default {
  methods: {
    async mock_external_request(loading_mark_name) {
      this[loading_mark_name] = true
      const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
      // Имитация ожидания внутренних компонентов или ответа внешних систем
      await sleep(2000)
      this[loading_mark_name] = false
    },
    async boolean_mark_processing(target) {
      await this.mock_external_request('boolean_switch_loading')
      this.boolean_switch_value = target
    }
  },
  data() {
    return {
      boolean_switch_loading: false,
      boolean_switch_value: false
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
            :isLoading="boolean_switch_loading"
            v-model="boolean_switch_value"
            @change="boolean_mark_processing"
          ></BaseSwitchField>
        </template>
      </ElementShowCase>
    </template>
  </GroupShowCase>
</template>
