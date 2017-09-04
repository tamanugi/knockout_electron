// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist'
  },
  // Configuration for dev server
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
    port: 3000,
  },
  target: 'electron-renderer'
};