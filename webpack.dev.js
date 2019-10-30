const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map', // 'eval' is not supported by error-overlay-webpack-plugin
  devServer: {
    contentBase: './dist',
    hot: true,
    host: `localhost`,
  },
});
