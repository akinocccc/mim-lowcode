<script setup lang="ts">
import { useStore } from '@/store';

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
  id: {
    type: Number,
    default: -1,
  },
});
const store = useStore();
let boardList = store.state.editor.boardList;
const deleteItem = () => {
  let index = boardList.findIndex((item: any) => item.id === props.id);
  boardList.splice(index, 1);
  store.commit('editor/SET_ACTIVE_ID', -1);
  store.commit('editor/SET_BOARD_LIST', boardList);
  console.log(store.state.editor.boardList);
};
</script>

<template>
  <div :class="isActive ? 'wrapper' : ''">
    <slot></slot>
    <div v-if="isActive" class="delete" @click.stop="deleteItem">
      <el-icon :size="12">
        <Delete />
      </el-icon>
      删除
    </div>
  </div>
</template>

<style lang="less" scoped>
.wrapper {
  border: 1px solid #409eff;
  padding: 5px 4px;
  display: flex;
  align-content: center;
  position: relative;
  overflow-x: hidden;
}
.delete {
  position: absolute;
  padding: 0 2px;
  bottom: 0;
  right: 0;
  background-color: #409eff;
  font-size: 10px;
  z-index: 10;
}
</style>
