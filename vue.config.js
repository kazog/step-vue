/**
 * Create By: Meng
 * Desc: 
 */

const target = 'http://192.168.70.58:8090'; // app

module.exports = {
  publicPath: './',
  assetsDir: './',
  productionSourceMap: false,
  devServer: {
    port: '8091',
    open: true,
    disableHostCheck: true,
    proxy: {
      '/axio': {
        target,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/axio': ''
        }
      },
      '/down': {
        target,
        changeOrigin: true,
        pathRewrite: {
          '^/down': ''
        }
      }
    }
  }
}
