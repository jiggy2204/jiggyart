const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const APP_DIR = path.resolve(__dirname, "../src");

module.exports = env => {
  const { PLATFORM, VERSION } = env;
  return merge([
    {
      entry: ["@babel/polyfill", APP_DIR],
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
            test: /\.(scss|sass|css)$/i,
            include: [
              path.resolve(__dirname, "node-modules"),
              path.resolve(
                __dirname,
                "node-modules/react-image-lightbox/style.css"
              )
            ],
            use: [
              PLATFORM === "production"
                ? MiniCssExtractPlugin.loader
                : { loader: "style-loader" },
              { loader: "css-loader" },
              { loader: "sass-loader" }
            ]
          },
          {
            test: /\.(jpg|png|svg)$/,
            loader: "raw-loader"
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        }),
        new webpack.DefinePlugin({
          "process.env.VERSION": JSON.stringify(env.VERSION),
          "process.env.PLATFORM": JSON.stringify(env.PLATFORM)
        }),
        new CopyWebpackPlugin([{ from: "src/static" }])
      ]
    }
  ]);
};
