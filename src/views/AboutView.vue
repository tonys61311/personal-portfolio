<template>
  <div class="container box">
    <div class="box">
      <title-heading title="About"></title-heading>
      <p>I am a Front-End developer and App developer. I have 4 years of work experience and I am currently pursuing a CS
        Master's degree.</p>
      <div class="row align-items-center">
        <div class="col-4" aos-init data-aos="fade-right">
          <img src="@/assets/img/avatar.jpg" class="img-fluid">
        </div>
        <div class="col" data-aos="fade-left">
          <title-heading title="Front-End & App Developer." :level="3"></title-heading>
          <div class="row content">
            <ul>
              <li v-for="(detail, label) in personalInfo" :key="label">
                <font-awesome-icon icon="fa-solid fa-arrow-right" class="icon" /> <strong>{{ label }}</strong>
                <span>{{ detail }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="box skill">
      <title-heading title="Technical Skills"></title-heading>
      <div class="row" data-aos="fade-up">
        <div class="col" v-for="(skills, category) in technicalSkills" :key="category">
          <title-heading :title="category" level="4" :showIcon=false></title-heading>
          <ul>
            <li v-for="skill in skills" :key="skill">
              <font-awesome-icon icon="fa-regular fa-hand-pointer" class="fa-icon" /> <strong>{{ skill }}</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>



  </div>
</template>

<script setup lang="ts">
import TitleHeading from '@/components/TitleHeading.vue';
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

const personalInfo = {
  "Email:": "tonys61311@gmail.com",
  "City:": "Philadelphia, USA",
  "Degree:": "CS Master (in progress)",
  "Work Experience:": "4 years"
};

const technicalSkills = {
  "Front-End": ["JavaScript (Vue.js)", "HTML", "CSS"],
  "App": ["Dart(Flutter)", "SwiftUI"],
  "Back-End & Database": ["Java", "SQLite", "SQL Server"],
  "Version Control": ["Git", "Github", "SourceTree"]
};
</script>

<style lang="scss">
.box {
  padding: 20px;
  text-align: start;

  .img-fluid {
    border-radius: 20%;
  }
}

.content ul {
  list-style-type: none;
  margin-left: 30px;

  li {
    margin-bottom: 20px;
    // display: flex;
    align-items: center;

    .icon {
      margin-right: 10px;
      color: #149ddd;
    }

    span {
      margin-left: 10px;
    }
  }
}

.skill {
  ul {
    list-style-type: none;
    padding-left: 10px;
    margin-left: 0;
  }

  .fa-icon {
    margin-right: 10px;
  }
}
</style>