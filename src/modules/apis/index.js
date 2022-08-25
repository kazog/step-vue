/**
 * Create By: Meng
 * Desc: 
 */

import { request, downloadFile } from '../net/index';

// 下载
export function downFile(url, data = {}) {
  return downloadFile({
    url,
    data,
    headers: {}
  });
}

// 获取机构列表数据
export function login(data = {}) {
  return request({
    url: 'auth/login',
    method: 'POST',
    data
  });
}
//用户注册 平台
export function userRegister(data = {}) {
  return request({
    url: 'auth/register',
    method: 'POST',
    data
  });
}

// 将请求到的excel数据下载到本地
export function excelDown(res, name) {
  let blob = new Blob([res.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charse=utf-8' })
  let Temp = document.createElement('a')
  Temp.href = window.URL.createObjectURL(blob)
  if (name) {
    Temp.download = name
  } else {
    Temp.download = '用户二维码.jpg'
  }
  document.body.appendChild(Temp)
  Temp.click();
  setTimeout(() => {
    document.body.removeChild(Temp)
    window.URL.revokeObjectURL(Temp.href)
  }, 1000)
}
