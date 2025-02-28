<template>
    <div class="container-fluid box resume">
        <div class="box">
            <title-heading title="Resume"></title-heading>
            <p>{{ introduction }}</p>
            <div class="row">
                <div v-for="(val, key, index) in resumeData" :key="index" class="col-6"
                    :data-aos="key == 'leftSide' ? 'fade-right' : 'fade-left'">
                    <resume-item v-for="(item, index) in val" :key="index" :title="item.title" :subTitle="item.subTitle"
                        :tag_content="item.tagContent">
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

const introduction = "I am a Front-End Developer and App Developer with four years of experience, currently pursuing a Master's degree in Computer Science. I will be graduating in May 2025 and am actively seeking Front-End Engineer positions.";

const resumeData: ResumeData = {
    leftSide: [
        {
            title: "Summary",
            subTitle: "Tony Lin",
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
            subTitle: "Software Engineer",
            tagContent: "Dec 2018 - Mar 2022",
            description: "INTELLIGENT INFORMATION SERVICE LTD, Taipei City, Taiwan",
            points: [
                "Spearheaded the development of responsive and adaptive UI for insurance company websites and apps from scratch using JavaScript and Dart, ensuring optimal user experience across various devices.",
                "Implemented modularity in projects to enhance code extensibility, and reusability, making it easier to test and maintain, effectively boosting productivity and code readability.",
                "Employed Flutter to simultaneously build apps for iOS and Android, leading to a 50% reduction in development costs.",
                "Led the frontend development team, providing technical guidance and conducting code reviews to enhance code quality, reusability, and development efficiency.",
                "Implemented SQLite for temporary app data access, ensuring data retention during internet outages.",
                "Designed the frontend architecture using Vue.js, establishing a scalable and maintainable structure by configuring Vue settings, environment files, and centralized API management to ensure consistency and efficiency across the project.",
                "Leveraged Vue.js for frontend development, systematically organizing screen components and business logic to minimize the dependency between functions.",
                "Utilized Git and SourceTree for version control, facilitating streamlined team development and maintenance."
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

  