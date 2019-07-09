const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
module.exports = {
  entry : {
    main : ['webpack-hot-middleware/client?noInfo=true&reload=true',path.join(__dirname,'../src/index.js')]
  },
  mode : 'development',
  output : {
    filename : 'bundle.js',
    path : path.resolve(__dirname,'../dist')
  },
  module : {
    rules : [
      {
        test : /\.js$/,
        exclude : /node_modules/,
        loader : 'babel-loader'
      },
      {
        test : /\.less$/,
        exclude : /node_modules/,
        use : [
          'style-loader',
          {
            loader : 'css-loader',
            options : {
              importLoaders : 2
            }
          },
          'less-loader',
          'postcss-loader'
        ]
      },
      {
        test : /\.css$/,
        use : ['style-loader','css-loader','postcss-loader']
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
  devServer : {
    contentBase : path.resolve(__dirname,'../dist'),
    port : 8080,
    host : 'localhost',
  },
  plugins : [
    new HtmlWebpackPlugin({
      template : path.join(__dirname,'../src/index.html')
    }),
    new CleanWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}