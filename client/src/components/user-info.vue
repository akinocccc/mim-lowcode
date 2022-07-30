<template>
  <div v-if="isLogin" class="userinfo-wrapper">
    <el-avatar
      :size="35"
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    />
    <el-dropdown>
      <span class="el-dropdown-link">
        <text>user</text>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>我的页面</el-dropdown-item>
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
  <div v-else class="login-link" @click="showLoginModel">登录</div>
  <LoginModel v-show="isShowLoginModel" />
</template>

<script lang="ts">
import { useStore } from '@/store';

export default {
  setup() {
    const store = useStore();

    const showLoginModel = () => {
      store.commit('SET_IS_SHOW_LOGIN_MODEL', true);
    };

    return {
      isLogin: store.state.isLogin,
      isShowLoginModel: store.state.isShowLoginModel,
      showLoginModel,
    };
  },
};
</script>

<style lang="less">
.userinfo-wrapper {
  display: flex;
  align-items: center;
  padding: 0 10px;
  .el-dropdown-link {
    display: flex;
    align-items: center;
    margin-left: 10px;
    cursor: pointer;
    color: #ffffff;
  }
}
.login-link {
  cursor: pointer;
  font-size: 14px;
}
</style>
