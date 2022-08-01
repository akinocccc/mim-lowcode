<script setup lang="ts">
const props = defineProps({
  placeholder: {
    type: String,
    default: '请输入',
  },
});
const focusFunc = () => {
  console.log(1);
};
const blur = () => {
  console.log(2);
};
let char = ref('');
const input = () => {
  console.log(3);
};
</script>

<template>
  <div>
    <el-input
      v-model="char"
      :placeholder="placeholder"
      @input="input"
      @focus="focusFunc"
      @blur="blur"
    ></el-input>
  </div>
</template>

<style lang="less" scoped></style>
