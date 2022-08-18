//vue.config.js
const path = require('path')

function resolve (dir) { // 配置别名
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 3000,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080/api',
        // target: 'https://node-server-puce.vercel.app/api/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        }
      }
    },
    // before: app => { }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [require('tailwindcss'), require('autoprefixer')],
      },
    },
  },
};
