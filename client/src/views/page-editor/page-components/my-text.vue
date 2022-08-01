<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: '这是一段文本',
  },
});
</script>

<template>
  <div>{{ text }}</div>
</template>

<style lang="less" scoped></style>
