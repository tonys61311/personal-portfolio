<template>
    <div class="container-fluid box resume">
        <div class="box">
            <title-heading title="Resume"></title-heading>
            <p>I am a Front-End developer and App developer. I have 4 years of work experience and I am currently pursuing a
                CS Master's degree.</p>
            <div class="row">
                <div v-for="(val, key, index) in resumeData" :key="index" class="col-6 aos-init"
                    :data-aos="key == 'leftSide' ? 'fade-right' : 'fade-left'">
                    <resume-item v-for="(item, index) in val" :key="index" :title="item.title" :subTitle="item.subTitle"
                        :tagContent="item.tagContent">
                        <p>{{ item.description }}</p>
                        <ul v-if="item.points">
                            <li v-for="(point, index) in item.points" :key="index" class="my-2">{{ point }}</li>
                        </ul>
                    </resume-item>
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

interface ResumeItemWithoutPoints {
    title?: string;
    subTitle: string;
    tagContent?: string;
    description: string;
    points?: string[];
}

interface ResumeData {
    leftSide: ResumeItemWithoutPoints[];
    rightSide: ResumeItemWithoutPoints[];
}

const resumeData: ResumeData = {
    leftSide: [
        {
            title: "Summary",
            subTitle: "Tony Lin",
            tagContent: "20000",
            description: "I am currently a Master's student in Computer Science at Temple University."
        },
        {
            title: "Education",
            subTitle: "Master Of Science - MS, Computer Science",
            tagContent: "Aug 2023 - Present",
            description: "Temple University, Philadelphia, PA"
        },
        {
            subTitle: "Bachelor Of Science - BS, Mathematics",
            tagContent: "Sep 2013 - June 2017",
            description: "Fu Jen Catholic University, New Taipei City, Taiwan"
        },
        {
            title: "Certificate Course",
            subTitle: "Full-Stack Professional Practicum Course",
            tagContent: "Jun 2018 – Nov 2018",
            description: "Institute for Information Industry, Taipei City, Taiwan",
            points: [
                "Spearheaded the design of a travel website utilizing HTML, JavaScript, and Java, collaborating with travel companies to manage and retrieve data via MS SQL.",
                "Served as technical leader on JavaScript for the project, found JavaScript information, solved problems, and provided optimization suggestions to the team.",
                "Championed the Scrum development model: outlined project direction, set benchmarks, coordinated task allocation, and led daily progress discussions."
            ]
        }
    ],
    rightSide: [
        {
            title: "Professional Experience",
            subTitle: "Web Developer",
            tagContent: "Aug 2022 - June 2023",
            description: "YU-GIN ENTERPRISE CO LTD, New Taipei City, Taiwan",
            points: [
                "Crafted a unique, responsive company website using JavaScript, effectively spotlighting the products of my company.",
                "Adopted Vue.js as a framework for front-end development, ensuring systematic organization and clear demarcation of business functionalities.",
                "Employed GitHub as a collaborative tool, ensuring code tracking and updates for the website."
            ]
        },
        {
            subTitle: "Software Engineer",
            tagContent: "Dec 2018 - Mar 2022",
            description: "INTELLIGENT INFORMATION SERVICE LTD, Taipei City, Taiwan",
            points: [
                "Spearheaded the development of insurance company websites and apps from scratch using JavaScript and Dart.",
                "Employed Flutter to simultaneously build apps for iOS and Android, leading to a 50% reduction in development costs.",
                "Implemented SQLite for temporary app data access, ensuring data retention during internet outages.",
                "Leveraged Vue.js for frontend development, systematically organizing screen components and business logic.",
                "Utilized Git and SourceTree for version control, facilitating streamlined team development and maintenance.",
                "Collaborated closely with fellow engineers to identify optimal collaboration strategies and resolve technical challenges."
            ]
        }
    ]
};


</script>

<style scoped lang="scss">
.resume {
    p {
        margin-bottom: 0;
    }
}
</style>

  