module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {},
  mini: {},
  h5: {
    // https://taro-docs.jd.com/taro/docs/2.x/config-detail#h5devserver
    devServer: {
      host: '0.0.0.0',
      port: 10088,
      proxy: {
        '/server1/api/**/*': {
          target: 'localhost:8080',
          pathRewrite(path) {
            return path.replace('/api', '/');
          },
          logLevel: 'debug',
          changeOrigin: true,
        },
        '/server2/**/*': {
          target: 'localhost:8081',
          logLevel: 'debug',
          changeOrigin: true,
        },
      },
    },
  }
}
