<script setup lang="ts">
const props = defineProps({
  placeholder: {
    type: String,
    default: '请输入',
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'default',
  },
});
</script>

<template>
  <div class="input">
    <el-input
      :placeholder="placeholder"
      :clearable="clearable"
      :disabled="disabled"
      :size="size"
    ></el-input>
  </div>
</template>

<style lang="less" scoped>
.input {
  width: 100% !important;
}
</style>
