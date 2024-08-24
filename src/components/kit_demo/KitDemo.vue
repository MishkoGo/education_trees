<script setup>
/* Главная страница с демонстрацией UI-кита. Цветы, шрифты, кнопки и
 прочее - все в одном месте, одно единое место
  для быстрой проверки стилей, размеров 
  (и в том числе реакции на изменение размера экрана)
  */

import ColorsSection from '../kit_demo/ColorsSection.vue'
import TypographySection from '../kit_demo/TypographySection.vue'
import NavigationSection from '@/components/kit_demo/NavigationSection.vue'
import FormsFieldsSection from '@/components/kit_demo/FormsFieldsSection.vue'
import BaseSwitchField from '@/components/forms_fields/BaseSwitchField.vue'
import { useAuthStore } from '@/stores/auth.js'
import { mapState, mapActions } from 'pinia'
import { mock_external_request } from '@/utils/request-mocks'
</script>

<script>
export default {
  methods: {
    async mock_external_request(loading_mark_name) {
      console.log('Имитация внешнего запроса', loading_mark_name)
      this[loading_mark_name] = true
      await mock_external_request()
      this[loading_mark_name] = false
    },
    async boolean_mark_processing(loading_mark_name) {
      await this.mock_external_request(loading_mark_name)
    },
    async switchAuthMark() {
      this.changeMockIsAuthorized(!this.getMockIsAuthorized)
    },
    ...mapActions(useAuthStore, ['changeMockIsAuthorized'])
  },
  computed: {
    ...mapState(useAuthStore, ['getMockIsAuthorized'])
  }
}
</script>

<template>
  <div class="ui-kit">
    <h1>{{ $t('ui_kit.ui_kit_title') }}</h1>
    <BaseSwitchField
      :title="$t('ui_kit.authorized')"
      :title_off="$t('ui_kit.quest')"
      :isLoading="false"
      :model-value="getMockIsAuthorized"
      value="getMockIsAuthorized"
      @click="switchAuthMark"
    ></BaseSwitchField>
    <h2>{{ $t('ui_kit.atoms') }}</h2>
    <ColorsSection />
    <TypographySection />
    <NavigationSection />
    <FormsFieldsSection />
  </div>
</template>
