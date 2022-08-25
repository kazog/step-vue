/**
 * Create By: Meng
 * Create Date: 2022
 * Desc:
 */
 import { createRouter, createWebHashHistory } from 'vue-router';


 const App = () => import('../App.vue')
 const Galley = () => import('./main/Galley.vue')
 const Home = () => import('./main/Home.vue')
 const Login = () => import('./account/Login.vue')
  import Test from './other/Test.vue'
 const Notfound = () => import('./other/Notfound.vue')
 
 // const history = createWebHistory();
 export const routers = createRouter({
   history: createWebHashHistory(),
   scrollBehavior(to, from, savedPosition) {
     // console.log(to, from, savedPosition);
     return { top: 0 }
   },
   routes: [
     // { path: '/', redirect: '/test', component: App },
     // { path: '/test', name: 'Test', component: Test },
     { path: '/', redirect: '/home', component: App },
     { path: '/home', name: 'Home', component: Home },
     { path: '/galley', name: 'Galley', component: Galley },
     { path: '/login', name: 'Login', component: Login },
     { path: '/test', name: 'Test', component: Test },
     { path: '/*', name: 'Notfound', component: Notfound },
   ]
 });
 
 function HomeChild() {
   return [
     // { path: '/', component: OrgDetail },
     { path: '/', redirect: '/home', component: App },
     { path: '/home', name: 'Home', component: Home },
     { path: '/test', name: 'Test', component: Test },
     { path: '/*', name: 'Notfound', component: Notfound },
   ]
 }
 