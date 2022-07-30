<template>
  <el-dialog
    v-model="store.state.isShowLoginModel"
    custom-class="login-model"
    title="MiM"
    width="30%"
    draggable
  >
    <el-form label-position="right" label-width="70px" :model="loginForm" :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          show-password
          placeholder="请输入密码"
        />
      </el-form-item>
    </el-form>

    <template #footer>
      <div class="login-btn-wrapper">
        <el-button class="login-btn" type="primary" @click="onSubmit">登录</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { FormRules } from 'element-plus';
import { useStore } from '@/store';
const loginForm = reactive({
  username: '',
  password: '',
});
const rules = reactive<FormRules>({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
});
const store = useStore();
const onSubmit = () => {
  store.commit('SET_IS_SHOW_LOGIN_MODEL', false);
};
</script>

<style lang="less">
.login-model {
  border-radius: 5px !important;
  .el-dialog__body {
    padding-bottom: 0 !important;
  }
  .login-btn-wrapper {
    display: flex;
    justify-content: center;
    .login-btn {
      width: 60%;
    }
  }
}
</style>
