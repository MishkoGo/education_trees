<script setup>
import BaseFormComponent from '@/components/forms_fields/BaseFormComponent.vue'
import LoginButton from '@/components/navigation/LoginButton.vue'
import BaseTextField from '@/components/forms_fields/BaseTextField.vue'
import { mock_external_request, processButton } from '@/utils/request-mocks'
</script>
<script>
export default {
  emits: ['submit'],
  data() {
    return { form_data: { value_1: null, value_2: null, button: { isLoading: false } } }
  },
  computed: {}
}
</script>

<template>
  {{ form_data }}
  <BaseFormComponent :title="$t('forms.login_title')" :isLoading="form_data.button.isLoading">
    <template v-slot:form>
      <BaseTextField
        :isDisabled="false"
        v-model:value="form_data.value_1"
        @update_value="form_data.value_1 = $event.target.value"
        title="Ввод краткого текста"
      ></BaseTextField>
      <BaseTextField
        :isDisabled="false"
        v-model:value="form_data.value_2"
        @update_value="form_data.value_2 = $event.target.value"
        title="Ввод краткого текста"
      ></BaseTextField>
    </template>
    <template v-slot:button>
      <LoginButton
        :isLoading="form_data.button.isLoading"
        @click="processButton(form_data.button)"
      ></LoginButton>
    </template>
  </BaseFormComponent>
</template>

