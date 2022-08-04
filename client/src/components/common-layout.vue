<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header" height="50px">
        <text>MiM低代码平台</text>
        <!-- <user-info /> -->
      </el-header>
      <el-container>
        <el-aside class="aside" width="64px">
          <el-menu
            v-for="item in menuItems"
            :key="item.name"
            :default-active="$route.path"
            :collapse="true"
            :unique-opened="true"
            :router="true"
            background-color="#1c2538"
            text-color="#ffffff"
            :route="item.path"
            :index="item.name"
          >
            <el-menu-item :index="item.path">
              <el-icon><component :is="item.meta.icon" /></el-icon>
              <template #title>{{ item.meta.title }}</template>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main class="main">
          <router-view v-slot="{ Component }">
            <transition name="el-zoom-in-center" :duration="{ enter: 300, leave: 150 }">
              <component :is="Component" />
            </transition>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import router from '../routers/index';
export default {
  setup() {
    const routes: Array<any> = router.getRoutes();
    const menuItems = routes.filter((item) => item.name && !item.meta.hiddenInMenu);
    return {
      menuItems,
    };
  },
};
</script>

<style lang="less">
.common-layout {
  background-color: #1c2538;
  color: #ffffff;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #121d33;
  }
  .main {
    padding: 0;
    box-sizing: border-box;
  }
  .aside {
    overflow: hidden !important;
    height: 100%;
    border-right: 1px solid #ccc;
    background-color: #1c2538;
  }
}
</style>
