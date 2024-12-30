const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/ws',  // مسیر پروکسی که می‌خواهید به سرور Gate.io متصل شوید
    createProxyMiddleware({
      target: 'https://api.gateio.ws',  // هدف سرور Gate.io
      changeOrigin: true,
      ws: true,  // فعال‌سازی پشتیبانی از WebSocket
    })
  );
};
