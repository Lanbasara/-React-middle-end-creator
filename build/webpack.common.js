const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
    plugins: [                     
        new HtmlWebpackPlugin({   
            template: 'src/index.html',
        }),
        new CleanWebpackPlugin(), 
    ],
    output: {
        path: path.resolve(__dirname, '../dist') 
    }
}

module.exports = commonConfig;