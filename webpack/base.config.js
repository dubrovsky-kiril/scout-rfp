const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const rootDir = process.cwd();

module.exports = {
  entry: [`${rootDir}/src/index.tsx`],
  plugins: [
    new webpack.DefinePlugin({
      APP_MOD: JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebPackPlugin({
      template: `${rootDir}/webpack/index-template.html`,
      filename: "index.html"
    })
  ],
  module: {
    rules: [{ test: /\.(ts|tsx)?$/, loader: "awesome-typescript-loader" }]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      components: `${rootDir}/src/components`
    }
  }
};
