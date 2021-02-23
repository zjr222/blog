"use strict";

var express = require("express");

var app = express();

var cors = require("cors"); // const history = require("connect-history-api-fallback");
// app.use(history());


app.use(require("./imgProtectMid")); // 映射public目录中的静态资源

var path = require("path");

var staticRoot = path.resolve(__dirname, "../public");
app.use(express["static"](staticRoot));
app.use(cors({
  origin: function origin(_origin, callback) {
    if (!_origin) {
      callback(null, "*");
      return;
    }

    callback(null, _origin);
  },
  credentials: true
}));
/**
 * 应用cookie-parser 中间件
 * 加入之后，会在req对象中注入cookies属性，用于获取所有请求传递过来的cookie
 * 加入之后，会在res对象中注入cookie方法，用于设置cookie
 */

var cookieParser = require("cookie-parser");

app.use(cookieParser()); // 应用token中间件

app.use(require("./tokenMid")); // 解析 application/x-www-form-urlencoded 格式的请求体

app.use(express.urlencoded({
  extended: true
})); // 解析 application/json 格式的请求体

app.use(express.json()); // 使用代理

app.use(require("./proxyMid")); // 处理 api 的请求
// 处理对下载资源的请求

app.use("/res", require("./api/download")); // 处理错误的中间件

app.use(require("./errorMiddleware"));
var port = 5008;
app.listen(port, function () {
  console.log("server listen on ".concat(port));
});