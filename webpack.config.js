const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      { test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      favicon: 'public/favicon.ico',
      filename: "./index.html"
      // minify: {
      //   collapseWhitespace: true,
      //   collapseInlineTagWhitespace: true,
      //   removeComments: true,
      //   removeRedundantAttributes: true
      // }
    })
  ]
};