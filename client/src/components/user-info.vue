<template>
  <div v-if="isLogin" class="userinfo-wrapper">
    <el-avatar :size="35" :src="userInfo.avatar" />
    <el-dropdown>
      <span class="el-dropdown-link">
        <Text>{{ userInfo.username }}</Text>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>我的页面</el-dropdown-item>
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item divided @click="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
  <div v-else class="login-link" @click="showLoginModel">登录</div>
  <LoginModel v-show="isShowUserModel" />
</template>

<script lang="ts" setup>
import { useStore } from '@/store';

const store = useStore();

const isLogin = computed(() => store.state.isLogin);
const isShowUserModel = computed(() => store.state.isShowUserModel);
const userInfo = computed(() => store.state.userInfo);

const showLoginModel = () => {
  store.commit('SET_IS_SHOW_USER_MODEL', true);
};

const logout = () => {
  store.dispatch('logout');
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
