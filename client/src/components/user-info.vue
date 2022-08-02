<template>
  <div v-if="!isShowUserModal" class="userinfo-wrapper">
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
  <div v-else class="login-link" @click="showLoginModal">登录</div>
  <LoginModal v-show="isShowUserModal" />
</template>

<script lang="ts" setup>
import { useStore } from '@/store';
import Http from '@/utils/http.js';

const store = useStore();

const isShowUserModal = computed(() => store.state.isShowUserModal);
const userInfo = computed(() => store.state.userInfo);

Http.get('/test').then((res) => {
  console.log('test');
});

const showLoginModal = () => {
  store.commit('SET_IS_SHOW_USER_MODAL', true);
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
