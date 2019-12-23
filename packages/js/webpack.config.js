const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'sapience.js',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.hbs$/, loader: 'handlebars-loader' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'SapienceJS Sandbox',
      template: path.resolve(__dirname, 'src/index.hbs'),
      inject: false,
    }),
  ],
};
