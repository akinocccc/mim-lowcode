<script setup lang="ts">
import draggable from 'vuedraggable';
import { componentMap } from '@/views/page-editor/component-import';
import { useStore } from '@/store';

const store = useStore();
let boardList = store.state.editor.boardList;
const props = defineProps({
  height: {
    type: String,
    default: '0px',
  },
});
const getComponentByTag = (tag: string) => {
  return componentMap.get(tag);
};
const changeActive = (id: number) => {
  let item = boardList.find((item: IComponentsList) => item.id === id);
  if (!item?.isActive) {
    boardList.forEach((item: IComponentsList) => {
      if (item.id !== id) {
        item.isActive = false;
      } else {
        item.isActive = true;
      }
    });
    store.commit('editor/SET_BOARD_LIST', boardList);
    store.commit('editor/SET_ACTIVE_ID', id);
  }
};
const onDragAdd = (evt: any) => {
  store.commit('editor/SET_BOARD_LIST', boardList);
  console.log(store.state.editor.boardList);
};
</script>

<template>
  <div class="content">
    <div class="board">
      <draggable :list="boardList" item-key="id" group="component" class="drag" @add="onDragAdd">
        <template #item="{ element }">
          <div class="item componentBlock">
            <component-wrapper
              :id="element.id"
              :is-active="element.isActive"
              @click="changeActive(element.id)"
            >
              <component
                :is="getComponentByTag(element.tag)"
                v-bind="element.props"
                v-on="element.event"
              ></component>
            </component-wrapper>
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<style lang="less" scoped>
.content {
  height: 100%;
  padding: 5px !important;
  .board {
    overflow: hidden;
    width: 100%;
    min-height: calc(100vh - 90px);
    padding: 20px;
    .drag {
      width: 100%;
      min-height: calc(100vh - 130px);
      .componentBlock {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
