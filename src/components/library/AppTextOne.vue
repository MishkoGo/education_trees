<template>
    <div class="card" >
      <div class="photo">
          <img src="/src/assets/photo_avatar.png">
      </div>
      <div class="info">
          <div class = "info-block">
              <button
              @click="toogle"
              @mouseover = "hoverChange"
              @mouseleave = "hoverReset"
              :class = "buttons[id].class"
              >
                  <img :src="currentImgSrc">
                  {{ buttons[id].text }}
              </button>
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
        currentImgSrc: "/src/assets/bookmark.png",
        buttons: [
            {id: 1, text: "В закладки", class: "default", imgSrc: "/src/assets/bookmark.png"},
            {id: 2, text: "В закладках", class: "green", imgSrc: "/src/assets/bookmark-active.png"}
        ]
      }
    },
    
    methods: {
      toogle() {
        this.id = (this.id + 1) % this.buttons.length;
        this.currentImgSrc = this.buttons[this.id].imgSrc;
      },
      hoverChange() {
        if (this.buttons[this.id].class === "green") {
          this.currentImgSrc = "/src/assets/delete-bookmark.png";
          this.buttons[this.id].class = "red";
          this.buttons[this.id].text = "Убрать"
        }
      },
      hoverReset() {
        this.currentImgSrc = this.buttons[this.id].imgSrc;
      }
    }
  };
  </script>
  
  