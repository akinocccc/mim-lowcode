<script setup lang="ts">
import ComponentPanel from './panel/component-panel.vue';
import PagePanel from './panel/page-panel.vue';
import SettingPanel from './panel/setting-panel.vue';

const getHeight = () => {
  scrollHeight.value = window.innerHeight - 50 + 'px';
};
let scrollHeight = ref('0px');
onMounted(() => {
  scrollHeight.value = window.innerHeight - 50 + 'px';
  window.addEventListener('resize', getHeight);
});
onUnmounted(() => {
  window.removeEventListener('resize', getHeight);
});
</script>

<template>
  <div class="pageEditor">
    <el-container>
      <el-aside width="260px">
        <component-panel></component-panel>
      </el-aside>
      <el-container>
        <el-main class="content">
          <el-scrollbar :style="{ height: scrollHeight }" class="scrollbar">
            <page-panel :height="scrollHeight"></page-panel>
          </el-scrollbar>
        </el-main>
        <el-aside width="290px">
          <setting-panel></setting-panel>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
.pageEditor {
  display: flex;
  height: 100%;
}
.content {
  padding: 0px;
}
</style>
