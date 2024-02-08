<template>
    <div class="resume-item">
        <title-heading :title="title" level="3" :showIcon=false></title-heading>
      <h4>{{ subTitle }}</h4>
      <slot></slot>
    </div>
  </template>
  
  <script setup lang="ts">
  import TitleHeading from '@/components/TitleHeading.vue';
  
  defineProps({
    title: String,
    subTitle: {
        type: String,
        required: true
      }
  }); 
  </script>
  
  <style scoped lang="scss">
//   .resume-item {
//     /* 你的样式 */
//   }
  </style>
  