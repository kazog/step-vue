/**
 * Author: Meng
 * Date: 2024-04-15
 * Modify: 2024-04-15
 * Desc: 工具类封装
向上取整：ceil
向下取整：floor
四舍五入：round
固定精度：toFixed
固定长度：toPrecision
 */

export function formatNumber(n) {
  return (n > 9 ? n : "0" + n).toString();
}

// 转化时间
export function changeDate(date) {
  // let date = new Date(time)
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  // let hour = date.getHours()
  // let minute = date.getMinutes()
  // var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join("-");
}

export function formatDate() {
  return Date.now();
}

//手机号正则 phoneRe.test(15678045718) true
export function isPhone(str) {
  const phoneRe = /(^1[3456789][0-9]{9}$)/;
  if (phoneRe.test(str)) {
    return true;
  }
  return false;
}
//电话正则
export function isTelePhone(str) {
  const tele = /^((0\d{2,3})-)(\d{7,8})$/;
  if (tele.test(str)) {
    return true;
  }
  return false;
}

// 点击去重
let lastTime = 0;
export function filterClick() {
  if (Date.now() - lastTime > 1000) {
    lastTime = Date.now();
    return true;
  }
  return false;
}

// 个是化距离
export function formatDistance(num) {
  if (num > 1000) {
    return Math.round(num / 100) / 10 + "千米";
  }
  return num + "米";
}

// 清空div子组件
export function clearChild(dIv) {
  const body = document.getElementById(dIv);
  if (body) {
    while (body.hasChildNodes()) {
      if (body.firstChild) {
        body.removeChild(body.firstChild);
      }
    }
  }
}

// 字符串判空
export function isEmpty(e) {
  return e == null || e.length === 0 || e === "null";
}

// 全部替换key需要替换的字符 key1新的字符
export function replaceAll(value, key, key2) {
  return value.replace(new RegExp(key, "gm"), key2);
}

// 金额千分符
export function coinParse(e) {
  let res = "" + e;

  if (res.indexOf(".") > 0) {
    res += "0";
  } else {
    res += ".00";
  }
  if (e > 1000) {
    let point = "";
    if (res.indexOf(".") > 0) {
      let s = res.split(".");
      res = s[0];
      point = "." + s[1];
    } else {
      point = ".00";
    }
    let str = "";
    let s = 4 - (res.length % 3);
    for (let i = 0; i < res.length; i++) {
      str += res.charAt(i);
      if (s + i != 0 && (s + i) % 3 == 0 && i < res.length - 1) {
        str += ",";
      }
    }
    return str + point;
  }
  return res;
}

// 图片路径
export function imgPath(path) {
  if (path == null || path.length < 5) {
    // 默认图片
    return null;
  }
  if (path.indexOf("://") > 0) {
    return path;
  } else if (path.indexOf("/resource/icon") > -1) {
    return path;
  }
  // 真实图片
  // return 'http://47.116.70.58/baseapp' + path.trim();
  return "http://47.116.67.215:8000" + path.trim();
}
