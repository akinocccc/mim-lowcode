<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    default:
      'https://player.vimeo.com/external/650353455.sd.mp4?s=62239034048fbd225c5da8c3ecd4b7df5ff72664&profile_id=164&oauth_token_id=57447761',
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
    <video
      :src="src"
      :style="mimWidth || mimHeight ? { width: mimWidth + 'px', height: mimHeight + 'px' } : {}"
      controls="true"
    ></video>
  </div>
</template>

<style lang="less" scoped></style>
