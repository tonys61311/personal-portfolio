<template>
  <div class="container">
    <title-heading :title="title" level="3" :showIcon=false v-if="title" class="m-3"></title-heading>
    <div class="resume-item">
      <h4>{{ subTitle }}</h4>
      <div class="tag" v-if="tag_content">{{ tag_content }}</div>
      <slot></slot>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import TitleHeading from '@/components/TitleHeading.vue';

defineProps({
  title: String,
  subTitle: {
    type: String,
    required: true
  },
  tag_content: String
});
</script>
  
<style scoped lang="scss">
.resume-item {
  padding: 0 0 10px 20px;
  margin-top: -2px;
  border-left: 2px solid #1f5297;
  position: relative;

  h4 {
    line-height: 15px;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
  }

  h4::before {
    content: '';
    position: absolute;
    left: -9px;
    /* Adjust to center the circle on the line */
    top: 0px;
    width: 15px;
    /* Circle size */
    height: 15px;
    /* Circle size */
    border: 2px solid #000;
    /* Circle border color */
    border-radius: 50%;
    background-color: #fff;
    /* Circle fill color */
  }
}

.tag {
  background-color: #d0caca93;
  /* 浅灰色背景 */
  border-radius: 10px;
  /* 圆角 */
  padding: 5px 10px;
  /* 内边距 */
  display: inline-block;
  /* 使其成为行内块级元素 */
  margin: 5px 0;
  /* 上下外边距 */
}

</style>
  