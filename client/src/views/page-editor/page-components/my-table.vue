<script setup lang="ts">
const props = defineProps({
  tableData: {
    type: String,
    default: '',
  },
  tableColumData: {
    type: String,
    default: '',
  },
  needIndex: {
    type: Boolean,
    default: false,
  },
  border: {
    type: Boolean,
    default: false,
  },
  stripe: {
    type: Boolean,
    default: false,
  },
});
interface tableObj {
  prop: string;
  label: string;
}

let tableData = computed(() => eval(props.tableData));

let tableColumData = computed(() => eval(props.tableColumData));
</script>

<template>
  <div>
    <el-table :data="tableData" :border="border" :stripe="stripe" style="width: 100%">
      <el-table-column v-if="needIndex" type="index" width="50" />
      <el-table-column
        v-for="item in (tableColumData as tableObj)"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
      />
    </el-table>
  </div>
</template>

<style lang="less" scoped></style>
