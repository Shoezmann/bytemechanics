<script lang="ts">
    import { defineComponent } from "vue";

    import headerImg from '../assets/img/header/header.png'

    export default defineComponent({
       data(){
           return{}
       },
       setup(){
           const header = headerImg;
           return{
               header,
           }
       }
    });
</script>

<template>
    <div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
        <div class="container">
        <div class="row">
            <div class="col-lg-12">
            <div class="row">
                <div class="col-lg-6 align-self-center">
                <div class="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                    <div class="row">
                    <div class="col-lg-12">
                        <h6>BYTE MECHANICS</h6>
                        <h2>Software Development Team Augmentation</h2>
                        <p>
                            Many businesses prefer to outsource their software development projects for a variety of reasons. Without the necessary expertise, support, and monitoring, software development is a complicated trade that may quickly accrue excessive costs. For the majority of businesses, demand for genuine software development fluctuates as projects ramp up, go live, and then migrate to maintenance. We are here to help you!
                        </p>
                    </div>
                    <div class="col-lg-12">
                        <div class="border-first-button scroll-to-section">
                        <a href="#contact">Contact Us</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div class="col-lg-6">
                <div class="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                    <img :src="header" alt="">
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
    .main-banner:before 
        width: 50%
</style>