const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

module.exports = {
  devServer: {
    port: 3000,
    static: '../dist',
    hot: isDev
  },
  entry: {
    main: [ '@babel/polyfill', './index.tsx' ],
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, '../dist'),
    clean: true
  },
  resolve: {
    mainFiles: [ 'index' ],
    extensions: [ '.js', '.json', '.png', '.ts', '.tsx', '.css', '...' ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'LifeGraph',
      template: './index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: 'file-loader'
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ]
  }
}
