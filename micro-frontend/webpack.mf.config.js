const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackRequireFrom = require('webpack-require-from');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DynamicEntry = require('dynamic-entry-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
    //mode: 'development',
    devtool: 'source-map',
    entry: path.resolve(__dirname, './src/App'),
    output: {
        path: path.resolve(__dirname, 'micro-dist'),
        filename: 'main.js',
        chunkFilename: '[name].[contenthash:8].chunk.js',
        jsonpFunction: 'webpackJsonpmf1',
        library: "mf1",
        libraryTarget: "window"
    },
    externals: {
        'react': 'react'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            /* {
                test: /\.css$/i,
                use: [
                    {
                        loader: ExtractCssChunks.loader,
                        options: {
                            //publicPath: (resourcePath, context) => {
                            //    console.log(resourcePath, context);
                            //    //return resourcePath;
                            //    return "http://google.com/fonts/";
                            //}
                            publicPath: '../../',
                        },
                    },
                    'css-loader'
                ],
            }, */
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/',
                        },
                    },
                    'css-loader'
                ],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                //use: ['url-loader?limit=100000'],
                use: [
                    {
                        loader: require.resolve('file-loader'),
                        options: {
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    }
                ]
            }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new DynamicEntry({
            exportable: true,
        }),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:8].css',
            chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
        }),
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
        }),
        /* new ExtractCssChunks({
            filename: 'static/css/[name].[contenthash:8].css',
            chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
        }), */
        new CleanWebpackPlugin(),
        new WebpackRequireFrom({
            variableName: 'MICROFRONT_END_BASE_URL_MF1'
        }),
    ],
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
    devServer: {
        hot: false,
        port: 13005,
        injectClient: false,
        injectHot: false,
        historyApiFallback: true,
        contentBase: './micro-dist',
        //clientLogLevel: 'silent',
        stats: 'minimal'
    },
};
