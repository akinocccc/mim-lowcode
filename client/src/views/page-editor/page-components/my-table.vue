<script setup lang="ts">
const props = defineProps({
  tableData: {
    type: Array,
    default: function () {
      return [];
    },
  },
  tableColumData: {
    type: Array,
    default: function () {
      return [];
    },
  },
});
interface tableObj {
  prop: string;
  label: string;
}
</script>

<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
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
