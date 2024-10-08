<template>
    <div class="card">
    <div class="photo">
        <img src="/src/assets/photo_avatar.png">
    </div>
    <div class="info">
        <div class = "info-block">
            <button
            @click="toogle"
            :class = buttons[id].class
            > <img src="/src/assets/bookmark.png">
            {{ buttons[id].text }}</button>
            <RouterLink to="/details">Название каталога</RouterLink>
        </div>
        <p>Краткое описание каталога, которое владелец оставил для объяснения назначения каталога, тут может быть длинный текст, который при этом вполне может не вл...</p>
        <div class="info-owner">
            <p>Владелец:</p>
            <img src="/src/assets/person.png">
            <a href="#">Образовательное учреждение “СШУМГОСИ № 1337”</a>
        </div>
    </div>
    </div>
  </template>
  
  <script>
   export default {
    data() {
      return {
        id: 0,
        class_style: "green",
        buttons: [
            {id: 1, text: "В закладки"},
            {id: 2, text: "В закладках", class: "green"},
            {id: 3, text: "Убрать", class: "red"}
        ]
      }
    },
    
    methods: {
      toogle() {
        this.id = this.id === 0 ? 1 : 0;
        
      }
    }
  };
  </script>
  
  <style scoped>
  
  </style>
  