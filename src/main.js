/**
 * Create By: Meng
 * Desc: 项目入口
 */
import { createApp } from 'vue';
import './App.css';
import App from './App.vue';
import { routers } from './pages/router';
import Route from './utils/navigate';
import { systemInit } from './modules/system/index';

const app = createApp(App);
app.use(routers); // 添加路由器

Route.init(routers); // 初始化路由导航

app.mount('#app');

systemInit();
