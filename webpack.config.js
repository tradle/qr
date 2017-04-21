const webpack = require('webpack')

module.exports = {
  entry: './index.js',
  output: {
    libraryTarget: 'var',
    library: 'tradleqr',
    filename: 'dist/bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true,
      mangle: {
        keep_fnames: true,
        screw_ie8: true
      },
      beautify: false,
      ascii_only: true
      // comments: false
    })
  ]
}
