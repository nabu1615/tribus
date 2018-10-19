const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports =  {
    entry: ['@babel/polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebPackPlugin(
            {
                filename: 'index.html',
                template: './src/index.html'
            }
        ),
        new MiniCssExtractPlugin({
            filename: "main.css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                  {
                    loader: "style-loader"
                  },
                  {
                    loader: "css-loader"
                  },
                  {
                    loader: "sass-loader"
                  }
                ]
            }
        ]
    }
};