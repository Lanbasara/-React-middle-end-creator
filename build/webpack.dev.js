const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const path = require("path")
const webpack = require("webpack")
const OpenBrowserPlugin = require("open-browser-webpack-plugin")
const devConfig = {
    mode: 'development',     
    devtool:"cheap-module-eval-source-map",
    entry: {                 
        main: path.join(__dirname,'../src/index.js')
    },  
    optimization : {
        usedExports : true
    },
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        hot : true,
        port : 8000,
    },
    plugins: [                     
        new webpack.NamedModulesPlugin(),  
        new OpenBrowserPlugin({ url: 'http://localhost:8000' }), // 自动打开浏览器
    ],
    output: {
        publicPath: "/",
		filename: '[name].js',
		chunkFilename: '[name].js',
	},
    module: {
        rules: [{
            test: /\.less$/,
            exclude: /node_modules/,
            use: ['style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2
                    }
                }, 'less-loader', 'postcss-loader']
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        },]
    }
}
module.exports = merge.smart(commonConfig, devConfig)