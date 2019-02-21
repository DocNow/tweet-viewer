const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.config.js')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './example'
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: __dirname + "/example/index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})
