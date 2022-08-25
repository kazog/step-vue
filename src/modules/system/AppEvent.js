/**
 * Create By: Meng
 * Desc: 事件分发EventBus
 */

export default class AppEvent {
  static ins;
  events;

  constructor() {
    this.events = [];
  }

  static init() {
    if (!AppEvent.ins) {
      AppEvent.ins = new AppEvent();
    }
  }

  static get() {
    return AppEvent.ins;
  }

  // 添加
  add(key, listen) {
    this.events.push({ key, listen });
  }

  // 发送
  send(key, data) {
    new Promise((resolve) => {
      this.events.forEach((e) => {
        if (e.key === key) {
          e.listen(data);
        }
      });
      resolve(0);
    });
  }

  // 根据listen移除
  remove(listen) {
    this.events = this.events.filter((e) => e.listen !== listen);
  }

  // 根据key移除
  removeKey(key) {
    this.events = this.events.filter((e) => e.key !== key);
  }

  // 清空
  clear() {
    this.events = [];
  }
}