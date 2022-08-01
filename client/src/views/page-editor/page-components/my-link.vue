<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
    default: 'https://www.baidu.com/',
  },
  text: {
    type: String,
    default: '百度',
  },
  type: {
    type: String,
    default: 'primary',
  },
});
</script>

<template>
  <el-link :href="href" target="_blank" :type="type">{{ text }}</el-link>
</template>

<style lang="less" scoped></style>
