<template>
    <v-breadcrumbs>
      <!-- Используем только v-for без v-if -->
      <v-breadcrumbs-item v-for="(crumb, index) in filteredBreadcrumbs" :key="index" :to="crumb.to">
        {{ crumb.text }}
      </v-breadcrumbs-item>
      <v-breadcrumbs-divider></v-breadcrumbs-divider>
      <v-breadcrumbs-item>{{ current }}</v-breadcrumbs-item>
      <img src="/src/assets/question.png">
    </v-breadcrumbs>
  </template>
  
  <script>
  export default {
    props: {
      breadcrumbs: {
        type: Array,
        required: true
      },
      current: {
        type: String,
        required: true
      }
    },
    computed: {
      // Фильтруем хлебные крошки и оставляем только те, у которых есть путь (to)
      filteredBreadcrumbs() {
        return this.breadcrumbs.filter(crumb => crumb.to);
      }
    }
  };
  </script>
  