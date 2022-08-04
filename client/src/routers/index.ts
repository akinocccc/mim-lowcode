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
  {
    path: '/page_list',
    name: 'page_list',
    meta: {
      title: '我的页面',
      icon: 'list',
    },
    component: () => import('@/views/page-list/page-list.vue'),
  },
];
const router = createRouter({
  history,
  routes,
});
router.beforeEach((to, from) => {
  if (store.state.token.length === 0) {
    store.commit('SET_IS_SHOW_USER_MODAL', true);
  }
});
export default router;
