<template>
    <div class="background-image">
        <!-- <div class="container">
            <div class="row text-start">
                <div >
                    <h1>{{ name }}</h1>
                    <p>{{ title }}</p>
                </div>
            </div>
        </div> -->
        <div class="overlay">
            <h1>{{ name }}</h1>
            <p>
                {{ displayedTitle }}
                <span class="cursor">|</span>
            </p>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue';

const name = 'Hsing-Chen (Tony) Lin';
const title = 'I am a Front-End developer and App developer.';
const displayedTitle = ref('');

onMounted(() => {
    typeEffect(title, 0);
});

// typeEffect function
const typeEffect = (text: string, index: number) => {
    if (index < text.length) {
        const nextChar = text.charAt(index)

        // if there are 5 spaces, then wait for 3 seconds
        const space_count = displayedTitle.value.match(/\s/g) || [];
        const wait = space_count.length === 4 && nextChar === ' ' ? 3000 : 100;
        setTimeout(() => {
            displayedTitle.value += nextChar;
            typeEffect(text, index + 1)
        }, wait);

    } else {
        setTimeout(() => {
            displayedTitle.value = '';
            typeEffect(title, 0);
        }, 5000);
    }
}
</script>
  
<style lang="scss">
.background-image {
    background-image: url('@/assets/img/lifestyle.JPG');
    background-size: cover;
    background-position: 100% 55%;
    height: 100vh;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    position: relative;
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}

.overlay {
    color: white;
    text-align: center;
    position: absolute;
    top: 100px;
    left: 100px;
    text-align: left;

    h1 {
        font-size: 3rem;
    }

    p {
        font-size: 30px;
        color: rgba(255, 255, 255, 0.834);
    }

    /* p::after {
        content: '|';
        margin-left: 2px;
        animation: blink 1s step-end infinite;
    } */

    .cursor {
        animation: blink 1s step-end infinite;
    }
}
</style>
  