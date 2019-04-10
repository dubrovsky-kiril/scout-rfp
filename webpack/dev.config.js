const webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./base.config.js");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[local]--[hash:base64:5]"
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    port: 8000,
    hot: true,
    publicPath: "/",
    historyApiFallback: true,
    proxy: {
      "/api/**": {
        target: process.env.NODE_WEB_API_URL,
        changeOrigin: true
      }
    }
  }
});
