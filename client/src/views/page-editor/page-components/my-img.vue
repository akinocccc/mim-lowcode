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
  mimWidth: {
    type: String,
    default: '',
  },
  mimHeight: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div>
    <img
      :src="src"
      :style="mimWidth || mimHeight ? { width: mimWidth + 'px', height: mimHeight + 'px' } : {}"
      alt=""
      srcset=""
    />
  </div>
</template>

<style lang="less" scoped></style>
