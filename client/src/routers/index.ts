import { store } from '@/store';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const history = createWebHistory();
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/page_design',
  },
  {
    path: '/page_design',
    name: 'page_design',
    meta: {
      title: '设计',
      icon: 'EditPen',
    },
    component: () => import('@/views/page-editor/page-editor.vue'),
  },
];
const router = createRouter({
  history,
  routes,
});
router.beforeEach((to, from) => {
  if (!store.state.isLogin) {
    store.commit('SET_IS_SHOW_LOGIN_MODEL', true);
    return false;
  }
});
export default router;
