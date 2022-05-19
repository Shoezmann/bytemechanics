<script lang="ts">
    
    import { defineComponent } from 'vue';
    
    
    import logo from '../assets/img/logo.png';
    
    
    
    export default defineComponent({
    
       data(){
           return{}
       },
       setup(){
           const logoUrl = logo;
           return{
               logoUrl
           }
       }
    });
</script>

<template>
    <!-- ***** Header Area Start ***** -->
    <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
        <div class="container">
        <div class="row">
            <div class="col-12">
            <nav class="main-nav">
                <!-- ***** Logo Start ***** -->
                <a href="index.html" class="logo" >
                <img :src='logoUrl' alt="">
                </a>
                <!-- ***** Logo End ***** -->
                <!-- ***** Menu Start ***** -->
                <ul class="nav">
                <li ><router-link :to="{name: 'home', hash: '#top' }">Home</router-link></li>
                <li ><router-link :to="{name: 'home', hash: '#about' }">About</router-link></li>
                <li ><router-link :to="{name: 'home', hash: '#services' }">Services</router-link></li>
                <li ><router-link :to="{name: 'home', hash: '#contact' }">Contact</router-link></li>
                </ul>        
                <a class='menu-trigger'>
                    <span>Menu</span>
                </a>
                <!-- ***** Menu End ***** -->
            </nav>
            </div>
        </div>
        </div>
    </header>
    <!-- ***** Header Area End ***** -->
</template>

<style lang="sass" scoped>
    .logo
        width: 220px
</style>