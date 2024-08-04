<script setup></script>

<template>
  <div class="logo">
    <a href="/">
      <img src="@/assets/logo.png" alt="На главную" title="На главную" />
    </a>
  </div>
</template>

<style scoped>
.logo {
  transition: box-shadow 0.07s;
  float: left;
}
.logo:hover {
  box-shadow: 0px 5px 25px 1px black;
}

@media (max-width: 750px) {
  .logo-img {
    display: none;
  }
}

@media (min-width: 750px) {
  .logo-text {
    display: none;
  }
}
</style>
