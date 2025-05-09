<template>
    <div class="container-fluid box resume">
        <div class="box">
            <title-heading title="Projects"></title-heading>
            <b-card v-for="(project, index) in projects" :key="index" class="custom-card mx-auto my-3" bg-variant="Light" data-aos="zoom-out">
                <b-row align-v="center">
                    <b-col md="6" :order-md="index % 2">
                        <b-card-body :title="project.title">
                            <BCardSubtitle class="mb-2">{{ project.technologies.join(', ') }}</BCardSubtitle>
                            <b-card-text class="fs-5">
                                {{ project.description }}
                            </b-card-text>
                            <a v-if="project.websiteLink" :href="project.websiteLink" class="card-link d-block my-2 custom-link-color" target="_blank">{{ project.websiteLink }}</a>
                            <a :href="project.githubLink" class="link-dark link-opacity-50-hover d-block my-2" target="_blank" rel="noopener noreferrer">
                                <font-awesome-icon :icon="githubIcon.getIconName()" size="2x" />
                            </a>
                        </b-card-body>
                    </b-col>
                    <b-col md="6">
                        <b-card-img :src="project.imagePath" alt="Image" class="rounded-0"></b-card-img>
                    </b-col>
                </b-row>
            </b-card>
        </div>
    </div>
</template>

<script setup lang="ts">
import TitleHeading from '@/components/TitleHeading.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { GithubLink } from '@/models/social-link/SocialLinkItem';

const githubIcon = new GithubLink();

interface Project {
    title: string;
    description: string;
    technologies: string[];
    imagePath: string;
    githubLink: string;
    websiteLink?: string;
}


const projects: Project[] = [
    {
        title: "Inventory System",
        description: "Independently led client talks to understand needs and delivered the project from concept to completion. Built an order check system using Vue.js and TypeScript, speeding client workflows by 70% and boosting efficiency. Designed an intuitive UI with barcode functionality, reducing shipping errors by 80% and enhancing order accuracy.",
        technologies: ["Vue.js", "TS", "HTML", "CSS"],
        imagePath: require('@/assets/img/InventorySystem.png'),
        githubLink: "https://github.com/tonys61311/inventory-system.git",
    },
    {
        title: "MineSweeper, Mobile App and Website",
        description: "I utilized Flutter to develop a cross-platform version of the classic MineSweeper game. This project showcases my ability in modular programming and reusing components for efficient development, allowing for seamless updates and feature enhancements without compromising the user experience.",
        technologies: ["Dart", "Flutter"],
        imagePath: require('@/assets/img/minesweeper.png'),
        githubLink: "https://github.com/tonys61311/AppGames.git",
        websiteLink: "https://tonys61311.github.io/AppGames",
    },
    {
        title: "MahJong Guessing Game, Mobile App and Website",
        description: "I developed a unique MahJong guessing game where players deduce the hidden tile among 16 revealed ones, adhering to traditional Chinese MahJong rules. Built with Flutter, the project illustrates my skill in crafting intuitive user interfaces and leveraging the Flutter framework's capabilities for animations and responsive design. Furthermore, the application employs state management techniques, ensuring a clear separation of logic, view, and data. This approach enhances the app's maintainability and facilitates efficient debugging.",
        technologies: ["Dart", "Flutter"],
        imagePath: require('@/assets/img/mahjong.png'),
        githubLink: "https://github.com/tonys61311/AppGames.git",
        websiteLink: "https://tonys61311.github.io/AppGames",
    },
    {
        title: "Portfolio Website",
        description: "My portfolio website is a Vue.js project crafted with HTML, CSS, JavaScript, and TypeScript to create a responsive website. The project is a showcase of my dedication to clean, modular design principles, ensuring scalability and maintainability.",
        technologies: ["Vue.js", "TS", "HTML", "CSS"],
        imagePath: require('@/assets/img/portfolio.png'),
        githubLink: "https://github.com/tonys61311/personal-portfolio.git",
        websiteLink: "https://tonys61311.github.io/personal-portfolio",
    },
    {
        title: "Cloud Drive Application",
        description: "Developed a cloud-based document storage application using Django, integrating AWS S3 for file storage and AWS RDS (MySQL) for storing user profile information. Implemented user authentication, file upload, viewing, and deletion. Deployed on AWS EC2 with Elastic Load Balancer (ELB) for scalability and high availability.",
        technologies: ["Python", "Django", "HTML", "CSS"],
        imagePath: require('@/assets/img/cloudApp.png'),
        githubLink: "https://github.com/tonys61311/cloudapplication.git",
    },
]

</script>

<style scoped lang="scss">
.custom-card {
    max-width: 960px;
    background-color: #EEEAF3;
}

.custom-link-color {
    color: #646266
}
</style>