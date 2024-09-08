<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopMenu from './components/navigation/TopMenu.vue'
import AppFooter from './components/navigation/AppFooter.vue'
import './assets/main.css';
</script>

<template>
  <div>
    <TopMenu />
    <RouterLink to="/home">Перейти на главную</RouterLink>
    <v-container class="mb-12"></v-container>
    <v-container style="border: 1px solid">
      <RouterView />
    </v-container>
    <v-container class="mt-0"></v-container>

    <AppFooter />
  </div>
</template>

<style scoped></style>
