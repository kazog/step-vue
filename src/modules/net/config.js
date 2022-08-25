/**
 * Create By: Meng
 * Date: 2022-01
 * 网络配置项
 */
const ENV_NAME = {
   PROD: 'prod',
   TEST:'test',
   DEV: 'dev'
}

export const ENV_CONST = {
  env: ENV_NAME.PROD,
  // env: ENV_NAME.TEST,
  // env: ENV_NAME.DEV,
}

export function requestHost(env = ENV_NAME.PROD, host = 'base') {
  const url = _ENV_HOST[env][host];
  return url;
}

export function requestHeader(header = {}) {
  return {
    ...header,
    toekn: 'asdaksdhakjsdhkaj'
  };
}

export function requestParams(params = {}) {
  return {
    ...params,
    sign: 'alskdmalksda',
  };
}

const _ENV_HOST = {
  prod: {
    base: 'https://prodbase123.com',
    auth: 'https://prodauth123.com'
  },
  test: {
    base: 'https://testase123.com',
    auth: 'https://testauth123.com'
  },
  dev: {
    base: '/axio',
    auth: '/apis'
  },
}