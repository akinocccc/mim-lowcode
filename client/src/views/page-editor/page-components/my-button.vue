<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: '这是一段文本',
  },
});
</script>

<template>
  <el-button @click.stop>{{ text }}</el-button>
</template>

<style lang="less" scoped></style>
