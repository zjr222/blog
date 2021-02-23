"use strict";

var _require = require("http-proxy-middleware"),
    createProxyMiddleware = _require.createProxyMiddleware;

var context = "/data";
module.exports = createProxyMiddleware(context, {
  target: "http://localhost:8080/",
  pathRewrite: function pathRewrite(path, req) {
    console.log(path.substr(context.length));
    return path.substr(context.length);
  }
});