const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var config = {
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: 'style!less!css'
      }
    ]
  },
  externals: {
    rdform: 'rdform'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    })
  ]
};

module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: 'vue-rdform.min.js',
      libraryTarget: 'window',
      library: 'RDForm'
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname + '/src/rdform.vue'),
    output: {
      filename: 'vue-rdform.js',
      libraryTarget: 'umd',
      library: 'vue-rdform',
      umdNamedDefine: true
    }
  })
];
