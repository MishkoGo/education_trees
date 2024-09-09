<script>
</script>

<template>
   <div>
      <div class="title" >
            <h3>Мои библиотеки -> Добавить библиотеку
                
            </h3>
        </div>
        <br/>
      <h3>Заголовок</h3>
      <v-text-field
        v-model="confirmPassword"
        :label="Пример"
        type="text"
        :disabled="isSubmitting" 
        required>
      </v-text-field>
      <br/>
      <h3>Описание</h3>
      <v-text-field
        v-model="confirmPassword"
        :label="Описание"
        type="text"
        :disabled="isSubmitting" 
        required>
      </v-text-field>
      <h3>Превью<strong> (необязательно)</strong></h3>
      <img src="/src/assets/photo_avatar.png" width="150px">
      <v-btn
        ref="submitBtn"
        :loading="isSubmitting"
        variant="outlined"
        class="button-style"
        :disabled="isSubmitting"
        @click="onSubmit"
      >
        Загрузить
      </v-btn>
      <h3>Публичный каталог<strong> (доступен всем пользователям по ссылке)</strong></h3>
      <v-switch
        color="primary"
        label="John"
      ></v-switch>
      <v-btn>Сохранить</v-btn>
    </div>
  </template>
  