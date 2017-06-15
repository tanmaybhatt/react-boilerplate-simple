var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist','js'),
    filename: 'bundle.js',
    publicPath: "/js/"
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use:"css-loader!autoprefixer-loader!sass-loader"}) 
      }
    ]
  },
  plugins: [
        new webpack.DefinePlugin({
            'process.env': {
            'NODE_ENV': '"development"'
            }
        }),
        new ExtractTextPlugin({
            filename:'../css/style.css', 
            allChunks: true
        })
  ]
};