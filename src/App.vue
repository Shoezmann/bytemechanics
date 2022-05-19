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
    },
    methods:{
      externalScripts(url: string){
        const node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(node);
        console.log('Script loaded.');
      }
    },
    mounted(){
      this.externalScripts('/src/assets/js/jquery.min.js');
      this.externalScripts('/src/assets/js/bootstrap.bundle.min.js');
      this.externalScripts('/src/assets/js/owl-carousel.js');
      this.externalScripts('/src/assets/js/custom.js');
      this.externalScripts('/src/assets/js/animation.js');  
      this.externalScripts('/src/assets/js/imagesloaded.js');
      this.externalScripts('/src/assets/js/isotope.js');
      this.externalScripts('/src/assets/js/tabs.js');
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
