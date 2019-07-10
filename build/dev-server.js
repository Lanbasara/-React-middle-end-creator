const path = require("path");
const express = require("express");
const webpack = require("webpack");
const webpacDevkMiddleWare = require("webpack-dev-middleware");
const webpackHotMiddleWare = require("webpack-hot-middleware");
const config = require('./webpack.dev.js');

const complier = webpack(config);
const app = express()

const DIST_DIR = path.resolve(__dirname,'../','dist');

let devMiddleware = webpacDevkMiddleWare(complier, {
  quiet : true,
  noInfo : true,
  stats : 'minimal'
})

let hotMiddleWare = webpackHotMiddleWare(complier,{
  log : false,
  heartbeat : 2000
})

app.use(devMiddleware)
app.use(hotMiddleWare)
// static files
app.use(express.static(DIST_DIR))

app.listen(8000, ()=>{
  console.log("server is working at 8000")
})