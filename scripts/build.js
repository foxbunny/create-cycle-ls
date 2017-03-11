'use strict'

const fs = require('fs-extra')
const path = require('path')
const mkdirp = require('mkdirp')
const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

const buildPath = path.join(process.cwd(), 'build')
const publicPath = path.join(process.cwd(), 'public')

mkdirp.sync(buildPath)

const compiler = webpack({
  entry: [
    './src/'
  ],
  output: {
    filename: 'bundle.js',
    path: './public/'
  },
  resolve: {
    extensions: ['', '.ls', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.ls$/,
        loader: 'livescript-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
})

compiler.run((err, stats) => {
  if (err) {
    console.log(err)
  } else {
    fs.copySync(publicPath, buildPath)
  }
})
