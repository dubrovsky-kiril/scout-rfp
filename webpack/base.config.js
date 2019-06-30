const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const rootDir = process.cwd();

module.exports = {
  entry: [`${rootDir}/src/index.jsx`],
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebPackPlugin({
      template: `${rootDir}/webpack/index-template.html`,
      filename: "index.html"
    })
  ],
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  resolve: {
    extensions: [".jsx", ".js"]
  }
};
