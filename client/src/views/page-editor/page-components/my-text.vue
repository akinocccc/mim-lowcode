<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: '这是一段文本',
  },
  mimFontSize: {
    type: Number,
    default: 16,
  },
  mimFontWeight: {
    type: Number,
    default: 400,
  },
  mimColor: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <p
    class="text"
    :style="{ fontSize: mimFontSize + 'px', fontWeight: mimFontWeight, color: mimColor }"
  >
    {{ text }}
  </p>
</template>

<style lang="less" scoped></style>
