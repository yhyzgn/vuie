const path = require('path')

module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add(path.resolve(__dirname, './packages'))
      .end()
      .use('babel')
      .loader('babel-loader')

    config.resolve.alias
      .set('vuie', path.join(__dirname, './', 'src'))
      .set('@', path.join(__dirname, './', 'packages'))
      .set('#', path.join(__dirname, './', 'examples/components'))
  }
}