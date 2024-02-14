<template>
  <nav class="d-flex flex-column bg-dark text-white sidebar-nav">
    <BContainer class="profile">
      <div>
        <img src="@/assets/img/avatar.jpg" alt="" class="rounded-circle">
      </div>
      <div class="row">
        <span class="name">
          Tony Lin
        </span>
      </div>
      <div class="row icons">
        <div class="col"></div>
        <div class="col">
          <font-awesome-icon icon="fa-brands fa-linkedin" size="2x" />
        </div>
        <div class="col">
          <font-awesome-icon icon="fa-brands fa-github" size="2x" />
        </div>
        <div class="col"></div>
      </div>
      <div class="row">
        <router-link v-for="SideBarType in SideBarTypes" :key="SideBarType.getPath()" :to="SideBarType.getPath()" class="nav-link" active-class="active">
          <div class="container">
            <div class="row">
              <div class="col-2" />
              <div class="col">
                <font-awesome-icon :icon="SideBarType.getIconName()" class="link-icon"/>
                <span>
                  {{ SideBarType.getTitle() }}
                </span>
              </div>
            </div>
          </div>
          <!-- <font-awesome-icon icon="fa-regular fa-user" class="link-icon"/>
          <span>
            {{ link.name }}
          </span> -->
        </router-link>
      </div>
    </BContainer>
    <!-- 使用 router-link 并应用自定义类名 -->

  </nav>
</template>
  
<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { SideBarType } from '@/ts/enum/SideBarType'

const SideBarTypes = SideBarType.getAllSideBarTypes();
</script>
  
<style lang="scss">
nav {
  padding: 15px;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 5px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.sidebar-nav {
  position: fixed;
  /* 固定位置 */
  left: 0;
  /* 距离左边界0 */
  top: 0;
  /* 距离顶部0 */
  width: 250px;
  /* 宽度，根据需要调整 */
  height: 100vh;
  /* 视口高度，使其填满高度 */
  overflow-y: auto;
  /* 如果内容超出高度，允许滚动 */
}

.nav-link {
  display: block;
  padding: 10px !important;
  color: white;
  text-decoration: none;
  text-align: left;
  border-radius: 5px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    /* 鼠标悬停样式 */
  }

  &.active {
    color: rgba(131, 205, 224, 0.803) !important;
    background-color: rgba(255, 255, 255, 0.2);
    /* 选中样式 */
  }

  .link-icon {
    margin-inline: 10px;
    width: 20px;
  }
}

.profile {
  .name {
    font-size: 24px;
    margin: 0;
    padding: 0;
    font-weight: 600;
    -moz-text-align-last: center;
    text-align-last: center;
    font-family: "Poppins", sans-serif;
  }

  img {
    margin: 15px auto;
    display: block;
    width: 150px; // 确保宽度和高度相等
    // height: 120px; // 添加高度以使图片成为正圆形
    border: 8px solid #2c2f3f;
    max-width: 100%;
    overflow: hidden; // 保持图片内容在圆形内
  }

  .icons {
    margin-block: 15px !important;
  }
}
</style>
  