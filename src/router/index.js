/**
 * Author: Meng
 * Date: 2024-04-16
 * Modify: 2024-04-16
 * Desc: 
 *  import { useRouter, useRoute } from 'vue-router'
 *  const router = useRouter()
    const route = useRoute()
    router.push({ name: 'search', query: { ...route.query, id: 1} })

    const id = route.params.id
 */
import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import LaunchView from "../pages/LaunchView.vue";

/**
 * 获取路由权限
 * 匹配用户权限
 * 注册路由
 */

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    // 返回 savedPosition，在按下 后退/前进 按钮时，就会像浏览器的原生表现那样
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
    // 延迟滚动到顶部
    // return new Promise((resolve, reject) => { setTimeout(() => { resolve({ left: 0, top: 0 }); }, 500) });
  },
  routes: [
    {
      path: "/",
      // redirect: "/",
      name: "Launch",
      component: LaunchView,
    },
    {
      path: "/main",
      name: "Main",
      // redirect: "/home",
      component: () => import("../pages/main/MainView.vue"),
      children: [
        {
          path: "home",
          name: "Home",
          meta: { transition: "slide-left", title: "首页" },
          component: () => import("../pages/main/HomeView.vue"),
        },
        {
          path: "hot",
          name: "Hot",
          meta: { transition: "slide-left", title: "热门" },
          component: () => import("../pages/main/HotView.vue"),
        },
        {
          path: "my",
          name: "My",
          meta: { transition: "slide-left", title: "我的" },
          component: () => import("../pages/main/MyView.vue"),
        },
        {
          path: "account",
          name: "Account",
          meta: { transition: "slide-left" },
          // component: () => import("../components/layout/Layout.vue"),
          children: [
            {
              path: "info",
              name: "Info",
              meta: { transition: "slide-left" },
              component: () => import("../pages/account/UserView.vue"),
            },
          ],
        },
      ]
    },
    {
      path: "account",
      name: "Account",
      meta: { transition: "slide-left" },
      // component: () => import("../components/layout/Layout.vue"),
      children: [
        {
          path: "info",
          name: "Info",
          meta: { transition: "slide-left", title: "个人信息" },
          component: () => import("../pages/account/UserView.vue"),
        },
      ],
    },
    {
      path: "order",
      name: "Order",
      meta: { transition: "slide-left" },
      // component: () => import("../components/layout/Layout.vue"),
      children: [
        {
          path: "/",
          name: "List",
          meta: { transition: "slide-left", title: "订单列表" },
          component: () => import("../pages/order/List.vue"),
        },
        {
          path: "detail",
          name: "Detail",
          meta: { transition: "slide-left", title: "订单详情" },
          component: () => import("../pages/order/Detail.vue"),
        },
        {
          path: "refund",
          name: "Refund",
          meta: { transition: "slide-left", title: "退款" },
          component: () => import("../pages/order/Refund.vue"),
        },
      ],
    },
    {
      path: "product",
      name: "Product",
      meta: { transition: "slide-left" },
      // component: () => import("../components/layout/Layout.vue"),
      children: [
        {
          path: "/",
          name: "List",
          meta: { transition: "slide-left", title: "商品列表" },
          component: () => import("../pages/product/List.vue"),
        },
        {
          path: "detail",
          name: "Detail",
          meta: { transition: "slide-left", title: "商品详情" },
          component: () => import("../pages/product/Detail.vue"),
        },
        {
          path: "search",
          name: "Search",
          meta: { transition: "slide-left", title: "商品搜索" },
          component: () => import("../pages/product/Search.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "Login",
      meta: { transition: "slide-left" },
      component: () => import("../pages/account/LoginView.vue"),
    },
    {
      path: "/register",
      name: "Register",
      meta: { transition: "slide-left" },
      component: () => import("../pages/account/Register.vue"),
    },
    {
      path: "/reset",
      name: "Reset",
      meta: { transition: "slide-left" },
      component: () => import("../pages/account/Reset.vue"),
    },
    {
      path: "/test",
      name: "Test",
      meta: { title: "test", hidden: true },
      component: () => import("../pages/warn/TestView.vue"),
    },
    {
      path: "/notfound",
      name: "Notfound",
      meta: { transition: "slide-left" },
      component: () => import("../pages/warn/NotfoundView.vue"),
    },
    {
      path: "/*",
      name: "NotFound",
      meta: { title: "404", hidden: true },
      component: () => import("../pages/warn/NotfoundView.vue"),
    },
  ],
});

/**
 * 重置路由
 */
export function resetRouter() {
  const newRouter = createRouter({
    history: createWebHashHistory(),
    scrollBehavior: () => ({ left: 0, top: 0 }),
    strict: true,
    routes: [],
  });
  router.matcher = newRouter.matcher;
}

export default router;
