<template>
    <div class="container-fluid box">
        <div class="box">
            <title-heading title="Resume"></title-heading>
            <p>I am a Front-End developer and App developer. I have 4 years of work experience and I am currently pursuing a
                CS
                Master's degree.</p>
            <div class="row">
                <div class="col-6" aos-init data-aos="fade-right">
                    <resume-item title="Summary" subTitle="Tony Lin">
                        <p>I am a Front-End developer and App developer. I have 4 years of work experience and I am currently
                            pursuing a CS Master's degree.</p>
                    </resume-item>
                    <resume-item subTitle="Alex Smith"></resume-item>
                </div>
                <div class="col" data-aos="fade-left">
                    <resume-item title="Professional Experience" subTitle="Tony Lin"></resume-item>
                    <resume-item subTitle="Alex Smith"></resume-item>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import TitleHeading from '@/components/TitleHeading.vue';
import ResumeItem from '@/components/ResumeItem.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { onMounted } from 'vue';

onMounted(() => {
  AOS.init({
      duration: 1200, // Global animation duration in milliseconds
      // easing: 'fade-in', // Global animation easing
    });
});
</script>

<style lang="scss"></style>

  