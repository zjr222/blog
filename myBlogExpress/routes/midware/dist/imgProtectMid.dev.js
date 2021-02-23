"use strict";

var url = require("url");

var path = require("path");

module.exports = function (req, res, next) {
  var host = req.headers.host; //获取本网站的主机名（包括端口号）

  var referer = req.headers.referer; // 只处理图片

  var extname = path.extname(req.path);

  if (![".jpg", ".jpeg", ".png", ".gif"].includes(extname)) {
    next();
    return;
  }

  if (referer) {
    referer = url.parse(referer).host;
  }

  if (referer && host !== referer) {
    req.url = "/img/logo.jpg"; // url rewrite
  }

  next();
};