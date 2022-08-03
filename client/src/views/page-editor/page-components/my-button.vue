<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: '这是一段文本',
  },
  type: {
    type: String,
    default: 'primary',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  round: {
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
  <el-button :type="type" :disabled="disabled" :round="round" :size="size" @click.stop>{{
    text
  }}</el-button>
</template>

<style lang="less" scoped></style>
