<template>
  <div class="container-fluid box">
    <div class="box">
      <title-heading title="About"></title-heading>
      <pre class="pre-wrap">
        Web Developer & Software Engineer with over 4 years in the tech sector. During my previous employment, I not only developed insurance websites and apps using Dart and Flutter for efficient cross-platform deployment on iOS and Android, but also employed JavaScript and Vue.js for website development. 
      </pre>
      <div class="row align-items-center justify-content-evenly">
        <div class="col-4 d-flex justify-content-center" data-aos="fade-right">
          <img src="@/assets/img/avatar_3.jpg" class="img-fluid img-thumbnail">
        </div>
        <div class="col-6" data-aos="fade-left">
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
      <div class="row" data-aos="zoom-in">
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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const personalInfo = {
  "Degree:": "CS Master",
  "Work Experience:": "4 years",
  "City:": "Philadelphia, USA",
  "Email:": "tonys61311@gmail.com"
};

const technicalSkills = {
  "Front-End": ["JavaScript", "TypeScript", "Vue.js", "HTML", "CSS"],
  "App": ["Dart(Flutter)", "SwiftUI"],
  "Back-End": ["Java", "Python", "Django"],
  "Database": ["MySQL", "SQLite", "SQL Server"],
  "Version Control": ["Git", "Github"]
};
</script>

<style lang="scss">
.box {
  padding: 20px;
  text-align: start;

  .img-fluid {
    border-radius: 20%;
    max-height:400px;
    height: auto;
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