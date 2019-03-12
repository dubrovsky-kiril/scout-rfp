const webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./base.config.js");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "eval",
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    port: 8000,
    hot: true,
    publicPath: "/",
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{ loader: "html-loader" }]
      }
    ]
  }
});
