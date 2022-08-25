/**
 * Create By: Meng
 * Date: 2022-01
 * 网络请求封装
 */
import { requestHeader, requestParams, requestHost, ENV_CONST } from './config';
// import { network, download } from './fetch'
import { network, download } from './axios'

// 网络请求
export function request({ env = ENV_CONST.env, host = 'base', path = '', method = 'GET', data = {}, headers = {}, toast = true, loading = true, loadStr = '加载中...' } = {}) {

  loading && _showLoading(loading, loadStr); // 加载框
  const url = requestHost(env, host) + path; // 地址拼接
  headers = requestHeader(headers); // 请求头处理
  data = requestParams(data); // 参数处理

  const options = { url, method, headers, path, body: data }; // 参数重组

  _pointLog('=========> Request <==========', options);
  return new Promise((resolve) => {
    let result = { message: '', code: -1, data: null, header: {} };
    network(options).then((res) => {
      _pointLog('=========> Response <==========', res.data);
      if (res.statusCode == 200) {
        result = _parseData(res, result)
        resolve(result);
      } else {
        result = _parseError(res, result)
        resolve(result);
      }
    }).catch((err) => {
      _pointLog('=========> Error <==========', err);
      result = _parseError(err, result)
      resolve(result);
    }).finally(() => {
      loading && _showLoading(false);
      if (toast && result.code != 0) {
        _showToast(result.message);
      }
    })
  });
}

// 下载文件
export function downloadFile({ url, method = "GET", responseType = "blob", data = {}, loading = true } = {}) {
  _showLoading(true, '下载中...');
  const isPost = method != 'GET'
  const options = {
    url,
    method,
    responseType,
    headers: requestHeader()
  }
  if (isPost) {
    const body = new FormData()
    for (const key in data) {
      const element = data[key];
      body.append(key, element)
    }
    options.body = body;
  }
  _pointLog('=========> Download Params <==========', options);

  let result = { message: '', code: -1, data: null };

  return new Promise((resolve) => {
    download(options).then((res) => {
      _pointLog('=========> Download <==========', res);
      let fileName = window.URL.createObjectURL(res);
      result.code = 0;
      result.data = fileName;
      resolve(result);
    }).catch((err) => {
      _pointLog('=========> Download Error <==========', err);
      result = _parseError(err, result)
      resolve(result);
    }).finally(() => {
      loading && _showLoading(false);
    });
  });
}

// 上传多文件
export function uploadFiles({ env = ENV_CONST.env, host = 'base', url, files, type = "image", loading = true } = {}) {
  loading && _showLoading(loading, '上传中...');
  return files.map(file => uploadFile({ env, host, url, file, type }));
}

// 上传文件
export function uploadFile({ env = ENV_CONST.env, host = 'base', url, file, type = "image", loading = false } = {}) {
  loading && _showLoading(loading, '上传中...');
  return new Promise((resolve) => {

    url = requestHost(env, host) + url; // 地址拼接
    const headers = requestHeader({}); // 请求头处理
    const body = new FormData();
    body.append('name', 'file');
    // formData 只接受文件、Blob 或字符串，不能直接传递数组，所以必须循环嵌入
    // for (let i = 0; i < photos.length; i++) {
    //   body.append('photo', photos[i]);
    // }
    body.append('photo', file);
    body.append('type', type);

    const options = { url, headers, body, method: 'POST' };

    let result = { message: '', code: -1, data: null };
    network(options).then((res) => {
      _pointLog('=========> Upload <==========', res);
      let data = JSON.parse(res.data);
      result = _parseData(data);
      resolve(result);
    }).catch((err) => {
      _pointLog('=========> Upload Error <==========', err);
      result = _parseError(err, result)
      resolve(result);
    }).finally(() => {
      loading && _showLoading(false);
    });
  });
}

// 解析response
function _parseData(res, result) {
  result.data = res.data;
  result.header = res.header;
  result.code = 0;
  return result;
}

// 解析错误
function _parseError(data, result) {
  if (data.statusCode) {
    result.code = data.statusCode;
    result.message = data.errMsg;
  } else if (data.errMsg) {
    result.code = -10101;
    result.message = data.errMsg;
  }
  return result;
}

// toast
function _showToast(title = '', icon = 'none') {
  console.log(title, icon);
}
// 加载框
function _showLoading(loading, title = '加载中...') {

  if (loading) {
    // 显示
    console.log(title);
  } else {
    // 隐藏
  }
}

// 日志
function _pointLog(tag, msg) {
  if (ENV_CONST.env != '1prod') {
    console.log(tag);
    console.log(msg);
  }
}
