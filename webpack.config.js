const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    "tweet-viewer": './src/index.js',
  },
  output: {
    filename: `[name].js`,
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          /node_modules/
        ],
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ]
};
