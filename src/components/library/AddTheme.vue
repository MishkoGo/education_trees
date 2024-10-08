<script>
</script>

<template>
   <div>
      
        <br/>
      <h3 class="title_add_library">Заголовок</h3>
      <v-text-field
        v-model="confirmPassword"
        :label="Пример"
        type="text"
        :disabled="isSubmitting" 
        required>
      </v-text-field>
      <br/>
      <h3 class="title_add_library">Описание</h3>
      <v-text-field
        v-model="confirmPassword"
        :label="Описание"
        type="text"
        :disabled="isSubmitting" 
        required>
      </v-text-field>
      <h3 class="title_add_library">Превью<span class="small_title"> (необязательно)</span></h3>
      <div class="preview">
      <img src="/src/assets/photo_avatar.png" width="150px">
      <v-btn
        ref="submitBtn"
        :loading="isSubmitting"
        variant="outlined"
        class="button-style"
        :disabled="isSubmitting"
        @click="onSubmit"
      >
      <img src="/src/assets/camera.png"> 
        Загрузить
      </v-btn>
      </div>
      <br/>
      <h3 class="title_add_library">Публичный каталог<span class="small_title"> (доступен всем пользователям по ссылке)</span></h3>
      <v-switch
        color="primary"
        label="Да"
      ></v-switch>
      <v-btn
      class="add"
      >
      <img src="/src/assets/save.png"> 
      Сохранить</v-btn>
    </div>
  </template>
  
  