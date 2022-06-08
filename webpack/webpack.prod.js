const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const { merge } = require('webpack-merge')
const config = require('./webpack.config')

module.exports = merge(config, {
  mode: 'production',
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      new CssMinimizerWebpackPlugin(),
      new TerserWebpackPlugin(),
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
    }),
    new CompressionPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: [ MiniCssExtractPlugin.loader, 'css-loader' ]
      }
    ]
  }
})
