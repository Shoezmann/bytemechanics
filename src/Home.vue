<script lang="ts">

  
  import { defineComponent } from 'vue';

  import Header from './sections/Header.vue';
  import About from './sections/About.vue';
  import Services from './sections/Services.vue';
  import Contact from './sections/Contact.vue';


  export default defineComponent({
    name: 'Home',
    components: {
      Header,
      About,
      Services,
      Contact,
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
  <Header></Header>
  <About></About>
  <Services></Services>
  <Contact></Contact>
</template>