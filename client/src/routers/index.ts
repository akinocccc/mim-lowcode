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
export default router;
