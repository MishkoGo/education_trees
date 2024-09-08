<script setup>
/* Компонент для демонстрации элемента типографики
По сути просто квадрат с цветом и подпись, для чего он
 используется - "Фон формы", "Кнопка удаления" и так далее */

defineProps({
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
  <fieldset class="ui-kit-element-case">
    <legend>
      <b>{{ title }}</b>
    </legend>
    <slot name="element"> </slot>
  </fieldset>
</template>
