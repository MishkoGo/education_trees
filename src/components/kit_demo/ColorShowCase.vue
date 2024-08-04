<script setup>
/* Компонент-кейсик для демонстрации UI KIT'а, чтобы показать цветовой оттенок
По сути просто квадрат с цветом и подпись, для чего он
 используется - "Фон формы", "Кнопка удаления" и так далее */

defineProps({
  hex_color_code: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<script>
export default {
  computed: {
    reprepsentedColor() {
      if (this.hex_color_code.startsWith('--')) {
        return 'var(' + this.hex_color_code + ')'
      } else {
        return this.hex_color_code
      }
    }
  }
}
</script>

<template>
  <fieldset class="ui-kit-element-case color-element-case">
    <legend>
      <b>{{ title }}</b>
    </legend>
    <div class="color-square" :style="{ 'background-color': reprepsentedColor }"></div>
  </fieldset>
</template>

<style scoped>
.color-square {
  width: 75px;
  height: 75px;
  text-align: center;
  margin: auto;
  border: 2px solid black;
}
.color-element-case {
  text-align: center;
  padding: 10px;
}
</style>
