<script setup lang="ts">
import { useStore } from '@/store';
import Codemirror from 'codemirror-editor-vue3';

// @types/codemirror
import { Editor, EditorConfiguration, Doc } from 'codemirror';

// language
import 'codemirror/mode/javascript/javascript.js';

const store = useStore();
let id = computed(() => store.state.editor.active_id);
let boardList = store.state.editor.boardList;
let form = ref(boardList.find((item: any) => item.id === id.value) || { props: {} });
const typeSelect = [
  {
    value: 'primary',
    label: 'primary',
  },
  {
    value: 'success',
    label: 'success',
  },
  {
    value: 'info',
    label: 'info',
  },
  {
    value: 'warning',
    label: 'warning',
  },
  {
    value: 'danger',
    label: 'danger',
  },
  {
    value: '',
    label: 'plain',
  },
];
const fontWeightSelect = [
  {
    value: 400,
    label: '细',
  },
  {
    value: 900,
    label: '粗',
  },
];
console.log(form);

onUpdated(() => {
  form.value = boardList.find((item: any) => item.id === id.value) || { props: {} };
});
const save = () => {
  store.commit('editor/SET_BOARD_LIST', boardList);
};

const cmOptions: EditorConfiguration = {
  mode: 'javascript',
  lineWrapping: true,
};
const columnBlur = (cm: any, event: FocusEvent) => {
  form.value.props.tableColumData = cm.doc.getValue();
};
const dataBlur = (cm: any, event: FocusEvent) => {
  form.value.props.tableData = cm.doc.getValue();
};
</script>

<template>
  <div class="attribute">
    <el-form v-if="id !== -1" :model="form.props" label-position="top">
      <el-form-item v-if="form.props.hasOwnProperty('text')" label="内容">
        <el-input v-model="form.props.text" @blur="save" />
      </el-form-item>
      <el-form-item v-if="form.props.hasOwnProperty('src')" label="链接">
        <el-input v-model="form.props.src" @blur="save" />
      </el-form-item>
      <el-form-item v-if="form.props.hasOwnProperty('href')" label="链接">
        <el-input v-model="form.props.href" @blur="save" />
      </el-form-item>
      <el-form-item v-if="form.props.hasOwnProperty('placeholder')" label="占位内容">
        <el-input v-model="form.props.placeholder" @blur="save" />
      </el-form-item>
      <el-form-item v-if="form.props.hasOwnProperty('type')" label="组件颜色">
        <el-select v-model="form.props.type" class="m-2" placeholder="Select" @change="save">
          <el-option
            v-for="item in typeSelect"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item v-if="form.props.hasOwnProperty('disabled')" label="禁用">
        <el-switch v-model="form.props.disabled" @change="save" />
      </el-form-item>
      <el-form-item v-if="form.props.hasOwnProperty('round')" label="圆角">
        <el-switch v-model="form.props.round" @change="save" />
      </el-form-item>
      <el-form-item v-if="form.props.hasOwnProperty('underline')" label="下划线">
        <el-switch v-model="form.props.underline" @change="save" />
      </el-form-item>
      <el-form-item v-if="form.props.hasOwnProperty('clearable')" label="可清空">
        <el-switch v-model="form.props.clearable" @change="save" />
      </el-form-item>
      <el-form-item v-if="form.props.hasOwnProperty('needIndex')" label="序号列">
        <el-switch v-model="form.props.needIndex" @change="save" />
      </el-form-item>
      <el-form-item v-if="form.props.hasOwnProperty('border')" label="纵向边框">
        <el-switch v-model="form.props.border" @change="save" />
      </el-form-item>
      <el-form-item v-if="form.props.hasOwnProperty('stripe')" label="斑马纹">
        <el-switch v-model="form.props.stripe" @change="save" />
      </el-form-item>
      <el-form-item v-if="form.props.hasOwnProperty('mimFontSize')" label="字体大小">
        <count-component v-model="form.props.mimFontSize" @change="save"></count-component>
      </el-form-item>
      <el-form-item v-if="form.props.hasOwnProperty('mimFontWeight')" label="字体粗细">
        <el-select
          v-model="form.props.mimFontWeight"
          class="m-2"
          placeholder="Select"
          @change="save"
        >
          <el-option
            v-for="item in fontWeightSelect"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item v-if="form.props.hasOwnProperty('mimWidth')" label="长度">
        <el-input v-model="form.props.mimWidth" @blur="save" />
      </el-form-item>
      <el-form-item v-if="form.props.hasOwnProperty('mimHeight')" label="高度">
        <el-input v-model="form.props.mimHeight" @blur="save" />
      </el-form-item>
      <el-form-item v-if="form.props.hasOwnProperty('mimColor')" label="字体颜色">
        <el-color-picker v-model="form.props.mimColor" @change="save" />
      </el-form-item>
    </el-form>
    <div v-if="form.props.hasOwnProperty('tableColumData')" class="code">
      <div class="code-label">表格列</div>
      <codemirror :value="form.props.tableColumData" :options="cmOptions" border @blur="columnBlur">
      </codemirror>
    </div>
    <div v-if="form.props.hasOwnProperty('tableData')" class="code">
      <div class="code-label">表格数据</div>
      <codemirror :value="form.props.tableData" :options="cmOptions" border @blur="dataBlur">
      </codemirror>
    </div>

    <!-- <h1>{{ id }}</h1>
  <h1>{{ form }}</h1> -->
  </div>
</template>

<style lang="less" scoped>
.attribute {
  padding: 10px;
  .el-form {
    :deep(label) {
      color: #fff !important;
    }
  }
}
.code {
  margin-bottom: 20px;
  .code-label {
    margin-bottom: 15px;
  }
  .codemirror-container {
    width: 270px !important;
    // width: 100%;
  }
}
</style>
