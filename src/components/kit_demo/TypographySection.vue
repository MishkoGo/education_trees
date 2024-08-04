<script setup>
/* Компонент для демонстрации
раздела со шрифтками и размерами текста, используемыми в дизайне проекта
 */
import ContentTitle from '@/components/typography/ContentTitle.vue'
import ContentDescription from '@/components/typography/ContentDescription.vue'
import ElementShowCase from '@/components/kit_demo/ElementShowCase.vue'

import GroupShowCase from '../kit_demo/GroupShowCase.vue'

const description_text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
 minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
   esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
   cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
   id est laborum
`
</script>
<template>
  <GroupShowCase title="Типографика">
    <template v-slot:elements>
      <ElementShowCase title="Заголовок контента">
        <template v-slot:element>
          <ContentTitle title="Название статьи или видео"></ContentTitle>
        </template>
      </ElementShowCase>

      <ElementShowCase title="Описание контента">
        <template v-slot:element>
          <ContentDescription :text="description_text"></ContentDescription>
        </template>
      </ElementShowCase>
    </template>
  </GroupShowCase>
</template>
