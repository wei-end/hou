const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    port: 8080,
    open: true
  },
  //不生效
  // chainWebpack: config => {
  //   // 将所有小于10KB的图像转换为DataURL
  //   config.module
  //     .rule('images')
  //     .use('url-loader')
  //     .loader('url-loader')
  //     .tap(options => Object.assign(options, { limit: 10240 }));
  // }
  //更改整个项目的标题
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '您的新标题';
        return args;
      })
  }


})
