/**
 * Create By: Meng
 * Desc: 
 */

// 请求
export function network(options = {}) {
  return fetch(options.url, options)
    .then((data) => data.json());
}

// 下载
export function download(options = {}) {
  return fetch(options.url, options)
    // .then((data) => data.blob())
    .then((data) => data.blob() || data.json());
}