const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CSSSplitWebpackPlugin = require('css-split-webpack-plugin').default; 
const webpack = require("webpack")
const WorkboxPlugin = require('workbox-webpack-plugin');
const prodConfig = {
    mode: "production", 
    devtool:"cheap-module-source-map",
    entry: {
        main: './src/index.js'
    },  
    module: {
        rules : [
            {
                test : /\.less$/,
                use : [
                    MiniCssExtractPlugin.loader,
                    {
                        loader : 'css-loader',
                        options : {
                            importLoaders : 2
                        }
                    }, "less-loader","postcss-loader"
                ]
            },
            {
                test : /\.css$/,
                use : [
                    MiniCssExtractPlugin.loader,
                    "css-loader","less-loader"
                ]
            }
        ]
    },
    optimization : {
        minimizer : [new OptimizeCSSAssetsPlugin({})],
    },
    optimization : {
        splitChunks : {
            chunks : "all",
            minSize : 30000,
            minChunks : 1,
            maxAsyncRequests : 3,
            maxInitialRequests : 4,
            automaticNameDelimiter : '~',
            name : true,
            cacheGroups : {
                vendors : {
                    test : /[\\/]node_modules[\\/]/,
                    priority : -10,
                    filename : 'vendors.js'
                },
                default : {
                    priority : -20,
                    reuseExistingChunk: true, 
                    filename: 'common.js'
                }
            }
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename : '[name].css',
            chunkFilename : '[name].chunk.css'
        }),
        new CSSSplitWebpackPlugin({
            size : 4000,
            filename : '[name]-[part].[ext]'
        }),
        new webpack.HashedModuleIdsPlugin(),
        new WorkboxPlugin.GenerateSW({
            clientsClaim : true,
            skipWaiting : true
        })
    ],
    output: {
        filename : '[name].[contenthash].js',
        chunkFilename : '[name].[contenthash].js'
    }
}
module.exports = merge.smart(commonConfig, prodConfig)