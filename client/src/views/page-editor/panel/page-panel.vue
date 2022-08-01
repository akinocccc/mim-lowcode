<script setup lang="ts">
import draggable from 'vuedraggable';
import { componentMap, boardList } from '@/views/page-editor/component-import';

const props = defineProps({
  height: {
    type: String,
    default: '0px',
  },
});
const getComponentByTag = (tag: string) => {
  console.log(tag);

  return componentMap.get(tag);
};
</script>

<template>
  <div class="content">
    <!-- <el-container>
      <el-main class="board">
         <draggable :list="boardList" item-key="id" group="component" class="drag">
        <template #item="{ element }">
          <div class="item componentBlock">
            <component
              :is="getComponentByTag(element.tag)"
              v-bind="element.props"
              v-on="element.event"
            ></component>
          </div>
        </template>
      </draggable>
      </el-main>
    </el-container> -->

    <div class="board">
      <draggable :list="boardList" item-key="id" group="component" class="drag">
        <template #item="{ element }">
          <div class="item componentBlock">
            <component
              :is="getComponentByTag(element.tag)"
              v-bind="element.props"
              v-on="element.event"
            ></component>
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<style lang="less" scoped>
.content {
  padding: 20px !important;
  .board {
    overflow: hidden;
    width: 100%;
    min-height: calc(100vh - 90px);
    background-color: #121d33;
    padding: 20px;
    .drag {
      width: 100%;
      min-height: calc(100vh - 130px);
      .componentBlock {
        // width: 110px;
        // padding: 2px;
        margin-bottom: 20px;
        // border: 1px solid #fff;
      }
    }
  }
}
</style>
