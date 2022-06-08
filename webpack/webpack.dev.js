const { merge } = require('webpack-merge')
const config = require('./webpack.config')

module.exports = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
    ]
  }
})
