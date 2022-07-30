import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import App from './App.vue';
import router from '@/routers/index';
import { store, key } from '@/store/index';
import 'element-plus/dist/index.css';
import './style.css';

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router, ElementPlus).use(store, key).mount('#app');
