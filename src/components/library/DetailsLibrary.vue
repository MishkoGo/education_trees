<template>
    <div>
       <div class="title" >
             <h3>Мои библиотеки -> Название библиотеки
                 
             </h3>
         </div>
         <br/>
       <h2>Название библиотеки</h2>
       <v-btn>
        Изменить
        </v-btn>
        <v-btn>
            Удалить
            </v-btn>
            <div class="info-vladelech">
            
            <img src="/src/assets/person.png">
            <a href="#">Образовательное учреждение “СШУМГОСИ № 1337”</a>
        </div>
        <br/>
        <p class="details_text"><strong>Описание:</strong> описание материала в деталке. Может быть заполнено длинным текстом или короткой справкой. 
            Если описание не указано, блок отсутствует.</p>
        <br/>
            <v-card>
    

    <div class="d-flex flex-row">
      <v-tabs
        v-model="tab"
        color="primary"
        direction="vertical"
      >
        <v-tab prepend-icon="mdi-account" text="Главная" value="option-1"></v-tab>
        <v-tab prepend-icon="mdi-lock" text="Области" value="option-2"></v-tab>
        <v-tab prepend-icon="mdi-access-point" text="Темы" value="option-3"></v-tab>
        <v-tab prepend-icon="mdi-account" text="Навыки" value="option-4"></v-tab>
        <v-tab prepend-icon="mdi-lock" text="Упражнения" value="option-5"></v-tab>
        <v-tab prepend-icon="mdi-access-point" text="Участники" value="option-6"></v-tab>
        <v-tab prepend-icon="mdi-access-point" text="Настройки" value="option-7"></v-tab>
      </v-tabs>

      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="option-1">
          <v-card flat>
            <DiagramGraph></DiagramGraph>
          </v-card>
        </v-tabs-window-item>

        <v-tabs-window-item value="option-3">
          <v-card flat>
            <v-card-text>
                <v-col cols="12" class="inputs">
                    <v-autocomplete
                        :items="items"
                        append-inner-icon="mdi-microphone"
                        class="mx-auto"
                        density="comfortable"
                        menu-icon=""
                        placeholder="Поиск по названию"
                        prepend-inner-icon="mdi-magnify"
                        style="max-width: 350px;"
                        theme="light"
                        variant="solo"
                        auto-select-first
                        item-props
                        rounded
                    ></v-autocomplete>
                    <v-autocomplete
                        :items="items"
                        append-inner-icon="mdi-microphone"
                        class="mx-auto"
                        density="comfortable"
                        menu-icon=""
                        placeholder="Выберите домен"
                        prepend-inner-icon="mdi-magnify"
                        style="max-width: 350px;"
                        theme="light"
                        variant="solo"
                        auto-select-first
                        item-props
                        rounded
                    ></v-autocomplete>
                    <v-btn 
                        class="add" 
                        RouterLink to="/add"
                        > 
                            <img src="/src/assets/plus.png"> 
                            Добавить
                    </v-btn>
                </v-col>
                <v-table>
                    <thead>
                        <tr>
                            <th class="text-left">
                            Название
                            </th>
                            <th class="text-left">
                            Область
                            </th>
                            <th class="text-left">
                            Языковые версии
                            </th>
                            <th class="text-left">
                            Автор
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="item in desserts"
                            :key="item.name"
                        >
                            <td>{{ item.name }}</td>
                            <td>{{ item.region }}</td>
                            <td>{{ item.language }}</td>
                            <td>{{ item.author }}</td>
                        </tr>
                    </tbody>
                </v-table>

             
             
            </v-card-text>
          </v-card>
        </v-tabs-window-item>


      </v-tabs-window>
    </div>
  </v-card>

       
      
     </div>
   </template>
   

   <script>
    import DiagramGraph from './DiagramGraph.vue';

   export default {
     data() {
       return {
         tab: 'home',
         desserts: [
          {
            name: 'Название материала на любом языке, лиш...',
            region: 'Название области знаний',
            language: 'en, ru',
            author: 'Вы',
          },
          {
            name: 'Название материала на любом языке, лиш...',
            region: 'Название области знаний',
            language: 'en, ru',
            author: 'Вы',
          },
          {
            name: 'Название материала на любом языке, лиш...',
            region: 'Название области знаний',
            language: 'en, ru',
            author: 'Вы',
          },
          {
            name: 'Название материала на любом языке, лиш...',
            region: 'Название области знаний',
            language: 'en, ru',
            author: 'Вы',
          },
          {
            name: 'Название материала на любом языке, лиш...',
            region: 'Название области знаний',
            language: 'en, ru',
            author: 'Вы',
          },
          {
            name: 'Название материала на любом языке, лиш...',
            region: 'Название области знаний',
            language: 'en, ru',
            author: 'Вы',
          },
          {
            name: 'Название материала на любом языке, лиш...',
            region: 'Название области знаний',
            language: 'en, ru',
            author: 'Вы',
          },
        ],
       };
     },
     components: {
        DiagramGraph,
     },
   };
   </script>

<style lang="scss" scoped>

</style>