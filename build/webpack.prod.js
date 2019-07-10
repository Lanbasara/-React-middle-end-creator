const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CSSSplitWebpackPlugin = require('css-split-webpack-plugin').default; 
const webpack = require("webpack")
const prodConfig = {
    mode: "production",  // 只要在生产模式下， 代码就会自动压缩
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
        minimizer : [new OptimizeCSSAssetsPlugin({})]
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
    ],
    output: {
        filename : '[name].[contenthash].js',
        chunkFilename : '[name].[contenthash].js'
    }
}
module.exports = merge.smart(commonConfig, prodConfig)