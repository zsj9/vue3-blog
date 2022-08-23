const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
  let target = ''

  // 代理目标地址
  // 这里使用 api 主要用于区分 vercel serverless 的 api 路径
  if (req.url.startsWith('/api')) {
    target = 'https://node-server-puce.vercel.app'
  }

  // 创建代理对象并转发请求
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      // 通过路径重写，去除请求路径中的 `/api`
      // 例如 /api/user/login 将被转发到 https://node-server-puce.vercel.app/user/login
      '^/api/': '/api'
    }
  })(req, res)
}