<script setup>
/* Компонент для группировки элементов UI-кита в единую область с подписью*/

defineProps({
  title: {
    type: String,
    required: true
  }
  // Список компонентов, которые должны отображаться на странице
})
</script>
<template>
  <fieldset class="group-case">
    <legend>
      <b>{{ title }}</b>
    </legend>

    <div class="wrap">
      <slot name="elements"> </slot>
    </div>
  </fieldset>
</template>
