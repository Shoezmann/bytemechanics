

<script lang="ts">

    import { defineComponent } from "vue";

    const date: Date = new Date();

    export default defineComponent({
       data(){
           return{
               year: date.getFullYear()
           }
       },
       setup(){
           return{}
       }
    });
</script>

<template>
    <footer>
        <div class="container">
        <div class="row">
            <div class="col-lg-12">
            <p>Copyright © {{year}} <a href="">Byte Mechanics</a>, Ltd. All Rights Reserved. </p>
            </div>
        </div>
        </div>
    </footer>
</template>

<style lang="sass" scoped>
    footer
        background-color: #212121
        p
            text-align: left
</style>