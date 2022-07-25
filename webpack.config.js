const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js"
    },
    devtool: "inline-source-map",
    devServer: {
      static: {
        directory: "./dist",
       },
        port: 8000,
        open: true,
        compress: true,
        hot: true,
      },
    plugins: [
        new MiniCssExtractPlugin(),
        new TerserWebpackPlugin(),
        new CssMinimizerPlugin(),
        new ESLintPlugin(),
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./src/index.html",
            title:"Development",
        }),
    ],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
                {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    esModule: true,
                },
                },
                "css-loader",
                ],
          },
        ]
      },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserWebpackPlugin(),
            new CssMinimizerPlugin(),
        ],
      },
};