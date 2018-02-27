'use strict';

require('dotenv').config({path: `${__dirname}/.dev.env`})
let production = process.env.NODE_ENV = 'production'

const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const {DefinePluginPLugin, Envirnment} = require('webpack');

let plugins = [
  new HtmlPlugin({template: `${__dirname}/src/index.html`}),
  new ExtractTextPlugin('bundle-[hash].css'),
],

module.exports = {
  entry: `${__dirname}/src/main.js`,
  output: {
    path: `${__dirname}/build`,
    filename: 'bungle-[hash].js',
    publicPath: '/',
  },
  plugins,
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /node-modules/,
        loaders: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loaders: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      },
      {
        test: /\.(jpg|jpeg|gif|png|tif|tiff)$/,
        loaders: ,
      },
      {
        test: /\.(ttf)$/,
        loaders: ,
      },
      {
        test: /\.(mp3|wav)$/,
        loaders: ,
      },
    ],
  },
};