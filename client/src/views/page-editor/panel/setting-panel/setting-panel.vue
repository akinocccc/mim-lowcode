<script setup lang="ts">
import { TabsPaneContext } from 'element-plus';
import AttributePane from './setting-component/attribute-pane.vue';
import AppearancePane from './setting-component/appearance-pane.vue';
import EventPane from './setting-component/event-pane.vue';
let activeName = ref('attribute');
const getHeight = () => {
  scrollHeight.value = window.innerHeight - 105 + 'px';
};
let scrollHeight = ref('0px');
onMounted(() => {
  scrollHeight.value = window.innerHeight - 105 + 'px';
  window.addEventListener('resize', getHeight);
});
onUnmounted(() => {
  window.removeEventListener('resize', getHeight);
});
</script>

<template>
  <div class="setting">
    <el-tabs v-model="activeName" class="demo-tabs" stretch>
      <el-tab-pane label="属性" name="attribute">
        <el-scrollbar :style="{ height: scrollHeight }" class="scrollbar">
          <attribute-pane></attribute-pane>
        </el-scrollbar>
      </el-tab-pane>
      <!-- <el-tab-pane label="外观" name="appearance">
        <el-scrollbar :style="{ height: scrollHeight }" class="scrollbar">
          <appearance-pane></appearance-pane>
        </el-scrollbar>
      </el-tab-pane> -->
      <el-tab-pane label="事件" name="event">
        <el-scrollbar :style="{ height: scrollHeight }" class="scrollbar">
          <event-pane></event-pane>
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="less" scoped>
.setting {
  height: 100%;
  border-left: 1px solid #fff;
  .demo-tabs {
    height: 100%;
    :deep(.el-tabs__item) {
      color: #fff;
    }
    :deep(.is-active) {
      color: var(--el-color-primary);
    }
  }
}
</style>
