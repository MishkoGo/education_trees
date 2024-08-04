<script setup>
/* Компонент-кейсик для демонстрации
раздела с цветами, используемыми в дизайне проекта
 */

import ColorShowCase from '../kit_demo/ColorShowCase.vue'
import GroupShowCase from '../kit_demo/GroupShowCase.vue'
</script>
<template>
  <GroupShowCase title="Цвета">
    <template v-slot:elements>
      <ColorShowCase title="Главный фон" hex_color_code="--background-color" />
      <ColorShowCase title="Фон рабочей области" hex_color_code="--content-body-color" />
      <ColorShowCase title="Заголовок" hex_color_code="--content-title-color" />
      <ColorShowCase title="Позитивное действие" hex_color_code="--green-button-background-color" />

      <ColorShowCase title="Серая кнопка" hex_color_code="--grey-button-color" />
      <ColorShowCase
        title="Отключенная серая кнопка"
        hex_color_code="--grey-button-disabled-color"
      />
      <ColorShowCase title="Выделенная серая кнопка" hex_color_code="--grey-button-hovered-color" />
      <ColorShowCase title="Серая граница" hex_color_code="--grey-stroke-hovered-color" />
      <ColorShowCase title="Фон для формы" hex_color_code="--form-background-color" />
      <ColorShowCase
        title="Фон для формы при наведении"
        hex_color_code="--form-background-hovered-color"
      />
      <ColorShowCase title="Отключенное поле" hex_color_code="--disabled-form-field-color" />
      <ColorShowCase title="Отключенная форма" hex_color_code="--disabled-form-color" />
      <ColorShowCase
        title="Рекомендация при наведении"
        hex_color_code="--recommendation-hovered-color"
      />
      <ColorShowCase title="Ссылка смены пароля" hex_color_code="--forget-password-link-color" />
      <ColorShowCase title="Молоко" hex_color_code="--milk-background-color" />
      <ColorShowCase title="Граница формы" hex_color_code="--form-stroke-color" />
      <ColorShowCase title="Ячейка таблицы" hex_color_code="--table-cell-background-color" />
      <ColorShowCase title="Меню заблокировано" hex_color_code="--menu-item-blocked-color" />

      <ColorShowCase title="Кнопка удаления" hex_color_code="--error-action-color" />
      <ColorShowCase
        title="Начать учиться"
        hex_color_code="--start-learn-button-background-color"
      />
      <ColorShowCase title="Учеба завершена" hex_color_code="--learn-completed-background-color" />
      <ColorShowCase title="Область знаний" hex_color_code="--category-badge-background-color" />
      <ColorShowCase title="Ошибка" hex_color_code="--error-action-color" />
    </template>
  </GroupShowCase>
</template>
