const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    "tweet-viewer": './src/TweetViewer.js',
  },
  output: {
    filename: `[name].js`,
    path: path.resolve(__dirname, './dist'),
    library: ['TweetViewer'],
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          /node_modules/
        ],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-react",
                "@babel/preset-env"
              ],
              plugins: [
                ["@babel/plugin-proposal-class-properties", { "loose": true }]
              ]
            }
          },
          {
            loader: "eslint-loader"
          }
        ]
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
