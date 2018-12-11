const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack')

const SRC_DIR = path.join(__dirname, '/src');
const DIST_DIR = path.join(__dirname, '/dist');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss']
  },
  module: {
    rules: [{
      test: /\.(s*)css$/,
      use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
    }, {
      test: /\.js(x+)$/,
      include: SRC_DIR,
      use: {
        loader: 'babel-loader',
      }
    }, {
      test: /\.json$/,
      include: path.join(__dirname, '/data'),
      use: {
        loader: 'json-loader'
      }
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ]
};
