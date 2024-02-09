<template>
  <div class="container-grid">
    <div class="d-none d-md-block">
      <SidebarNav />
    </div>

    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import SidebarNav from './components/SidebarNav.vue'

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

  @include media-breakpoint-down(md) {
    grid-template-columns: auto; // 调整为只有一列，或其他适当的值
  }
}

.main-content {
  background-color: #ead8b372;
  // height: 100vh; // Full viewport height
  overflow-y: auto; // If content overflows, allow scrolling
  min-height: 100vh;
}

</style>
