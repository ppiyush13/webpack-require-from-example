const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackRequireFrom = require('webpack-require-from');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        chunkFilename: '[name].[contenthash:8].chunk.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: ['url-loader?limit=100000'],
            }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
        }),
    ],
    devServer: {
        port: 13000,
        historyApiFallback: true,
        contentBase: './dist',
    },
    optimization: {
        namedModules: true,
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'async',
                },
            },
        },
    },
};
