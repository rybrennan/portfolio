const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var SRC_DIR = path.join(__dirname, '/app');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  //the transformations we want our code to make before
  module: {
    rules: [
      //we want to use babel loader on all js files, then babel compiles into one file ie- es6 to es5 && jsx to javascript
      { test: /\.(js)$/, use: 'babel-loader' },
      //on any css file, run these two loaders
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};