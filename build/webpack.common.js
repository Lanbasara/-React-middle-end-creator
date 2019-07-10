const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const fs = require("fs");
const webpack = require("webpack")
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
const plugins = [                     
  new HtmlWebpackPlugin({   
      template: 'src/index.html',
  }),
  new CleanWebpackPlugin({
    root : path.resolve(__dirname, '../dist'),
    verbose : true,
    dry : false
  }), 
  new FriendlyErrorsWebpackPlugin()
];

const files = fs.readdirSync(path.resolve(__dirname,'../dll'));
files.forEach((file) => {
  if(/.*\.dll.js/.test(file)){
    plugins.push(new AddAssetHtmlWebpackPlugin({
      filepath : path.resolve(__dirname,'../dll',file)
    }));
  }
  if(/.*\.manifest.json/.test(file)){
    plugins.push(new webpack.DllReferencePlugin({
      manifest : path.resolve(__dirname, '../dll', file)
    }));
  }
})
const commonConfig = {
  module : {
    rules : [
      {
        test : /\.js$/,
        exclude : /node_modules/,
        loader : 'babel-loader'
      },
      {
        test : /\.(png|jpg|gif|jpeg)$/,
        use : {
          loader: 'url-loader',
          options : {
            name : '[name]_[hash].[ext]',
            outputPath : 'images/',
            limit : 204800 // 小于200kb就打包到js里，大于就打包到image文件夹里
          }
        },
      },
      {
        test : /\.(eot|woff2?|ttf|svg)$/,
        use : {
          loader : 'url-loader',
          options : {
            name : '[name]_[hash:5].min.[ext]',
            outputPath : 'font/',
            limit : 5000
          }
        }
      },
    ]
  },
    plugins: plugins,
    output: {
        path: path.resolve(__dirname, '../dist') 
    },
    resolve : {
      extensions : ['.js','jsx'],
      mainFiles : ['index','view']
    }
}

module.exports = commonConfig;