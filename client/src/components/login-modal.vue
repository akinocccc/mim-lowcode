<template>
  <el-dialog
    v-model="store.state.isShowUserModal"
    custom-class="user-modal"
    title="MiM"
    width="30%"
    :close-on-click-model="false"
    :close-on-press-escape="false"
    :show-close="false"
    :center="true"
    :destroy-on-close="true"
    draggable
  >
    <el-form
      ref="userFormRef"
      label-position="right"
      label-width="70px"
      :model="userForm"
      :rules="rules"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="userForm.username" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="userForm.password"
          type="password"
          show-password
          placeholder="请输入密码"
        />
      </el-form-item>
    </el-form>

    <template #footer>
      <div class="submit-btn-wrapper">
        <el-button class="submit-btn" type="primary" @click="onSubmit(userFormRef)">
          {{ curType === 'login' ? '登录' : '注册' }}
        </el-button>

        <el-link v-show="curType === 'login'" type="primary" :loading="loading" @click="toRegister">
          没有账号？立即注册>>
        </el-link>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { FormInstance, FormRules } from 'element-plus';
import { useStore } from '@/store';
const store = useStore();

const curType = ref('login');
const loading = ref(false);

const userFormRef = ref<FormInstance>();
const userForm = reactive({
  username: '',
  password: '',
});

const rules = reactive<FormRules>({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
});

const toRegister = () => {
  curType.value = 'register';
};

const onSubmit = async (form: FormInstance | undefined) => {
  if (!form) return;
  await form.validate(async (valid) => {
    if (valid) {
      loading.value = true;
      let res;
      switch (curType.value) {
        case 'login':
          res = await store.dispatch('login', userForm);
          break;
        case 'register':
          res = await store.dispatch('register', userForm);
          break;
      }
      if (res?.code === 0) {
        curType.value = 'login';
      }
      loading.value = false;
    }
  });
};
</script>

<style lang="less">
.user-modal {
  border-radius: 5px !important;

  .el-dialog__body {
    padding-bottom: 0 !important;
  }

  .submit-btn-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    .submit-btn {
      width: 60%;
      margin-bottom: 5px;
    }
  }
}
</style>
