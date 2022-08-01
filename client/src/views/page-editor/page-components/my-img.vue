<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    default: 'src/assets/img/avatar.png',
  },
  alt: {
    type: String,
    default: '',
  },
  srcset: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <img :src="src" alt="" srcset="" />
</template>

<style lang="less" scoped></style>
