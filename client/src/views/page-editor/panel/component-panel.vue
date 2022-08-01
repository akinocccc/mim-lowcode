<script setup lang="ts">
import draggable from 'vuedraggable';
import { componentList, componentsList } from '@/views/page-editor/component-import';

const beforeClone = (origin: componentsList) => {
  const data = JSON.parse(JSON.stringify(origin));
  data.id = Math.floor(Math.random() * 1000);
  return data;
};
</script>

<template>
  <div class="componentCloumn">
    <draggable
      :list="componentList"
      item-key="id"
      :group="{ name: 'component', pull: 'clone', put: false }"
      :sort="false"
      :clone="beforeClone"
      class="drag"
    >
      <template #item="{ element }">
        <div class="item componentBlock">
          <el-icon><component :is="element.icon" /></el-icon>
          {{ element.name }}
        </div>
      </template>
    </draggable>
  </div>
</template>

<style lang="less" scoped>
.componentCloumn {
  width: 260px;
  min-width: 260px;
  height: 100%;
  background-color: #121d33;
  border-right: 1px solid #ccc;
  padding: 10px;

  .drag {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
  }
  .componentBlock {
    width: 110px;
    height: 30px;
    // padding: 2px;
    margin: 5px 4px;
    padding: 0 2px;
    // text-align: center;
    line-height: 30px;
    border: 1px solid #fff;
    .el-icon {
      vertical-align: text-top;
      font-size: 20px;
    }
  }
}
</style>
