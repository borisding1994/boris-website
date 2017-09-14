const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const env = process.env.NODE_ENV;

module.exports = {
  entry: "./src/assets/application.js",
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "application.js"
  },

  plugins: [
    new ExtractTextPlugin('application.css'),
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new HtmlWebpackPlugin({
      filename: 'landing.html',
      template: 'src/landing.html'
    }),
    new CleanPlugin('./dist', {})
  ],
  devtool: env === 'development' ? 'cheap-module-eval-source-map' : 'hidden-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/,
        enforce: 'pre'
      }, {
        test: /\.css$/,
        loaders: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader'],
        }),
      },
      {test: /\.(eot|svg|ttf|otf|woff)$/, loader: 'file-loader'},
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
      }
    ]
  }
};
