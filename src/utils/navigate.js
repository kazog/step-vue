/**
 * Create By: Meng
 * Desc: 导航
 */

/* eslint-disable */
import { useRoute } from "vue-router";

export default class Navigate {
  static ins;
  router;

  constructor(router) {
    this.router = router;
    this.dispatch()
  }

  // 初始化
  static init(router) {
    if (!Navigate.ins) {
      Navigate.ins = new Navigate(router);
    }
  }

  static get() {
    return Navigate.ins;
  }

  dispatch() {
    // this.router.beforeEach((to, from) => {
    //   console.log(to, from);
    // });

    // this.router.afterEach((to, from) => {
    //   console.log(to, from);
    // })
  }

  push(path, params) {
    this.router.push({ path, query: params || {} });
    // this.router.push(path);
  }

  replace(path) {
    this.router.replace(path);
  }

  back() {
    this.router.back();
  }

  pop(delta = 1) {
    this.router.go(delta);
  }

  params() {
    return useRoute().query;
  }

  getRouter() {
    return this.router;
  }
}