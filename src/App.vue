<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopMenu from './components/navigation/TopMenu.vue'
import Footer from './components/navigation/Footer.vue'
</script>

<template>
  <TopMenu />
  <v-container class="mb-12"></v-container>
  <v-container style="border: 1px solid">
    <RouterView />
  </v-container>
  <v-container class="mt-0"></v-container>

  <Footer />
</template>

<style scoped></style>
