'use strict'

const opts = {
  isProd: false,
  vueAppRoot: 'vueAppSrc',
  outPath: `/public/built`
}

const resolve = dir => require('path').join(__dirname, dir),
  config = (!opts.isProd) ? require('./webpack.dev.config').devConfig()
    : require('./webpack.prod.config').prodConfig()

module.exports = {
  entry: ['./' + opts.vueAppRoot + '/main.js'],
  output: {
    path: resolve(opts.outPath),
    filename: 'built.min.js'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
  plugins: config,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        include: [resolve('src')]
      },
      {
        test: /\.css%/,
        loader: 'css-loader'
      }
    ]
  }
}