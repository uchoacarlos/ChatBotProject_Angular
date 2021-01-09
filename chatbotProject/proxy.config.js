const proxy = [
    {
      context: '/api',
      target: 'http://localhost:8080',
      pathRewrite: {'http://52.91.139.190/fsapi/user/' : ''}
    }
  ];
  module.exports = proxy;