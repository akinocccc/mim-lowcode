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
    <div class="component">
      <component-panel></component-panel>
    </div>
    <div class="content">
      <el-scrollbar :style="{ height: scrollHeight }" class="scrollbar">
        <page-panel :height="scrollHeight"></page-panel>
      </el-scrollbar>
    </div>
    <div class="setting">
      <setting-panel></setting-panel>
    </div>
  </div>
</template>

<style lang="less" scoped>
.pageEditor {
  display: flex;
  height: 100%;
  .component {
    width: 260px;
  }
  .content {
    flex: 1;
  }
  .setting {
    width: 290px;
  }
}
// .content {
//   padding: 0px;
// }
</style>
