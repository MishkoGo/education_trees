<script>
import AppButton from './AppButton.vue';
import AppTextOne from './AppTextOne.vue'
import AppTextTwo from './AppTextTwo.vue'
import AppTextFour from './AddLibrary.vue';

export default {
    data () {
        return {
            active: 'one',
            showComponent: false
        }
    },
    methods: {
        AdLibrary() {
            this.$router.push({name: 'AddLibrary'})
        }
    },
    
    computed: {
        componentName: {
            get () {
                return 'app-text-' + this.active
            },
            set (value) {
                console.log('componentName', value)
            }
        },
        oneColor () {
            return this.active === 'one' ? 'primary' : ''
        },
        twoColor () {
            return this.active === 'two' ? 'primary' : ''
        },
        threeColor () {
            return this.active === 'three' ? 'primary' : ''
        }
    },
    components: { AppButton, AppTextOne, AppTextTwo,  AppTextFour }
}

</script>

<template>
    <div>
        <div class="title" >
            <h3>Мои библиотеки  <h4 v-if="active === 'four'">-> Добавить библиотеку</h4>
                <img src="/src/assets/question.png">
            </h3>
        </div>
        <br/>
        <div :class="active === 'four' ? 'no' : 'global'">
        <div class="card_1">
        <app-button
            ref="myBtn"
            :color="oneColor"
            @action="active = 'one'">
        Личные
        </app-button>
       
        <app-button
            :color="twoColor"
            @action="active = 'two'"
            class="button-two">
        Сторонние
        </app-button>

        <app-button
            :color="threeColor"
            @action="active = 'three'">
        Избранное
        </app-button>
        </div>
        <v-btn 
            class="add" 
            RouterLink to="/add"
            > 
                <img src="/src/assets/plus.png"> 
                Добавить
        </v-btn>
        <OtherComponent v-if="showComponent" />
        </div>
        <br/>

        <keep-alive>
            <component :is="componentName"></component>
        </keep-alive>
    </div>
</template>