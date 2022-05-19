import { createApp } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';


import App from './App.vue';
import Home from './Home.vue'

import './assets/css/bootstrap.min.css';

import './assets/css/fontawesome.css';
import './assets/css/style.css';

import './assets/css/animated.css';
import './assets/css/owl.css';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home', name: 'home', component: Home
        },
        {
            path: '/:catchAll(.*)', redirect: '/home'
        }
    ],
    linkExactActiveClass: 'active',
    scrollBehavior: function(to, from, savedPosition){
        if(to.hash){
            return{
                el: to.hash,
                behavior: 'smooth'
            }
        }
    }
})


createApp(App)
.use(router)
.mount('#app')

