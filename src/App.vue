<script lang="ts">

  
  import { defineComponent } from 'vue';

  import NavBar from './components/NavBar.vue';
  import Footer from './components/Footer.vue';


  export default defineComponent({
    name: 'App',
    components: {
      NavBar,
      Footer
    },
    data(){
        return{}
    },
    setup(){
        return{}
    }
  });
</script>

<template>
  <NavBar></NavBar>
  <router-view></router-view>
  <Footer></Footer>
</template>

<style lang="sass" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap')

  h1, h2, h3, h4, h5, h6
    font-family: 'Staatliches', cursive!important
</style>
