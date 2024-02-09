<template>
  <div class="container-fluid box">
    <div class="box">
      <title-heading title="About"></title-heading>
      <pre class="pre-wrap">
        Web Developer & Software Engineer with over 4 years in the tech sector. I am currently a Master's student in Computer Science at Temple University, and I am actively seeking summer internship opportunities.
        
        During my previous employment, I not only developed insurance websites and apps using Dart and Flutter for efficient cross-platform deployment on iOS and Android, but also employed JavaScript and Vue.js for website development. 
        
        My familiarity with tools like GitHub and SourceTree has been instrumental in ensuring smooth team collaboration and version control. Always eager to learn and collaborate, I'm committed to using technology to enhance user experience and meet business needs.
      </pre>
      <div class="row align-items-center">
        <div class="col-4 aos-init" data-aos="fade-right">
          <img src="@/assets/img/avatar.jpg" class="img-fluid">
        </div>
        <div class="col aos-init" data-aos="fade-left">
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
      <div class="row aos-init" data-aos="fade-up">
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
    once: true,
  });
  // AOS.refresh();
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

.pre-wrap {
  white-space: pre-wrap;
  overflow-wrap: break-word;
}
</style>