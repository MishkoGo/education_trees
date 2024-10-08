<script setup>
import { useRoute } from 'vue-router';
import TopMenu from './components/navigation/TopMenu.vue';
import AppFooter from './components/navigation/AppFooter.vue';
import Breadcrumbs from './components/navigation/Breadcrumbs.vue'; 
import './assets/main.css';

const route = useRoute(); 
</script>

<template>
  <div>
    <TopMenu />
    <RouterLink to="/home">Перейти на главную</RouterLink>

    <v-container v-if="route.meta.breadcrumbs && route.meta.breadcrumbs.length">
      <Breadcrumbs :breadcrumbs="route.meta.breadcrumbs" :current="route.name" />
    </v-container>

    <v-container class="library_block" >
      <RouterView />
    </v-container>

    <AppFooter />
  </div>
</template>

<style scoped></style>
