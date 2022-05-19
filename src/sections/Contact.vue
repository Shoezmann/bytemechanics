<script lang="ts">
    import { defineComponent } from "vue";
    
    import emailIcon from  '../assets/img/contact/icons/email-icon.png'
    import telIcon from  '../assets/img/contact/icons/phone-icon.png'
    import contactImage from  '../assets/img/contact/contact-dec.png'

    export default defineComponent({
       data(){
           return{}
       },
       setup(){
           const tel = telIcon
           const email = emailIcon
           const contact = contactImage
           return{
               tel,
               email,
               contact
           }
       }
    });
</script>

<template>
    <div id="contact" class="contact-us section">
        <div class="container">
        <div class="row">
            <div class="col-lg-6 offset-lg-3">
            <div class="section-heading wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                <h6>Contact Us</h6>
                <h4>Get In Touch With Us <em>Now</em></h4>
                <div class="line-dec"></div>
            </div>
            </div>
            <div class="col-lg-12 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.25s">
            <form id="contact" action="" method="post">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="contact-dec">
                        <img :src="contact" alt="">
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="fill-form">
                        <div class="row">
                            <div class="col">
                            <div class="info-post">
                                <div class="icon">
                                <img :src="email" alt="">
                                <a href="mailto:support@bytemechanics.co.za">support@bytemechanics.co.za</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </form>
            </div>
        </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
    .info-post
        width: 100%
        word-break: break-all
</style>