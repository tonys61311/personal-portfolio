<template>
  <div class="container-grid">
    <div class="d-none d-md-block">
      <SidebarNav />
    </div>

    <div class="main-content">
      <div class="custom-overlay">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SidebarNav from './components/SidebarNav.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { onMounted } from 'vue';

onMounted(() => {
  AOS.init({
    duration: 1200, // Global animation duration in milliseconds
    // easing: 'fade-in', // Global animation easing
    once: true,
    delay: 300,
  });
  // AOS.refresh();
});
</script>

<style scoped lang="scss">
// @import "@/assets/styles/layout.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  height: 100vh; // Full viewport height
}

.no-margin {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.container-grid {
  display: grid;
  grid-template-columns: 250px auto; /* 第一列固定宽度，第二列占据剩余空间 */
  min-height: 100vh;

  @include media-breakpoint-down(md) {
    grid-template-columns: auto; // 调整为只有一列，或其他适当的值
  }
}

.main-content {
  position: relative;
  background-image: url('@/assets/img/background.jpg'); // 设置背景图片
  background-size: cover; // 覆盖整个容器
  background-repeat: no-repeat; // 不重复背景图片
  overflow-y: auto; // 如果内容溢出，允许滚动
  // background-color: #ead8b372;
}

.custom-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5); /* 半透明遮罩 */
  z-index: 1; /* 确保遮罩层位于内容之上 */
}

/* 确保 router-view 和其他内容能够正确显示在遮罩层之上 */
.main-content > *:not(.overlay) {
  position: relative;
  z-index: 2;
}

</style>
