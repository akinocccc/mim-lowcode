<template>
  <div class="count">
    <el-button icon="Minus" circle size="small" @click="reduce"></el-button>
    <el-input v-model="value" @change="change"></el-input>
    <el-button icon="Plus" circle size="small" @click="add"></el-button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: Number,
    default: 16,
  },
});
let value = ref(props.modelValue);
const emit = defineEmits<{
  (e: 'update:modelValue', num: number): void;
  (e: 'change'): void;
}>();
const add = () => {
  value.value++;
  emit('update:modelValue', value.value);
  emit('change');
};
const reduce = () => {
  value.value--;
  emit('update:modelValue', value.value);
  emit('change');
};
const change = () => {
  emit('update:modelValue', value.value);
  emit('change');
};
</script>

<style lang="less">
.count {
  display: flex;
  align-items: center;
  .el-input {
    margin: 0 10px;
    width: 40px;
    text-align: center;
  }
}
</style>
