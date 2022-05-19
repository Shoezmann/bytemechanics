<script lang="ts">
    import { defineComponent } from "vue";

    import aboutImg from '../assets/img/about/about-dec.png'

    
    
    export default defineComponent({
       data(){
           return{}
       },
       setup(){
           const about = aboutImg;
           return{
               about
           }
       }
    });
</script>

<template>
    <div id="about" class="about section">
        <div class="container">
        <div class="row">
            <div class="col-lg-12">
            <div class="row">
                <div class="col-lg-6">
                <div class="about-left-image  wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">
                    <img :src="about" alt="">
                </div>
                </div>
                <div class="col-lg-6 align-self-center  wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                <div class="about-right-content">
                    <div class="section-heading">
                    <h6>About Us</h6>
                    <h4>Who is <em>BYTE MECHANICS</em></h4>
                    <div class="line-dec"></div>
                    </div>
                    <p>
                        We provide businesses with on-demand managed software and product development. Software development may be a high-risk and time-consuming endeavor. We assist you throughout the product development process, including product strategy, requirements analysis, partner selection, and delivery management and assurance. We will be with you from conception to completion, ensuring your success at every stage of the process.
                    </p>
                    <div class="row">
                    <div class="col-lg-4 col-sm-4">
                        <div class="skill-item first-skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                        <div class="progress" data-percentage="100">
                            <span class="progress-left">
                            <span class="progress-bar"></span>
                            </span>
                            <span class="progress-right">
                            <span class="progress-bar"></span>
                            </span>
                            <div class="progress-value">
                            <div>
                                100%<br>
                                <span>Integrations</span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-4">
                        <div class="skill-item second-skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                        <div class="progress" data-percentage="100">
                            <span class="progress-left">
                            <span class="progress-bar"></span>
                            </span>
                            <span class="progress-right">
                            <span class="progress-bar"></span>
                            </span>
                            <div class="progress-value">
                            <div>
                                100%<br>
                                <span>Development</span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-4">
                        <div class="skill-item third-skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                        <div class="progress" data-percentage="100">
                            <span class="progress-left">
                            <span class="progress-bar"></span>
                            </span>
                            <span class="progress-right">
                            <span class="progress-bar"></span>
                            </span>
                            <div class="progress-value">
                            <div>
                                100%<br>
                                <span>Consultancy</span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div> 
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
    
</style>