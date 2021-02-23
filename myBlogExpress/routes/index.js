const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session")



// const history = require("connect-history-api-fallback");
// app.use(history());

// app.use(require("./imgProtectMid"));

//必须加express-session(否则验证码失效！！！)
app.use(
  session({
    secret: "zjr",
    resave: false,
    saveUninitialized: true,
  })
);

// 映射public目录中的静态资源
const path = require("path");
const staticRoot = path.resolve(__dirname, "../public");
app.use(express.static(staticRoot));


app.use(
  cors({
    origin(origin, callback) {
      if (!origin) {
        callback(null, "*");
        return;
      }
      callback(null, origin);
    },
    credentials: true,
  })
);

/**
 * 应用cookie-parser 中间件
 * 加入之后，会在req对象中注入cookies属性，用于获取所有请求传递过来的cookie
 * 加入之后，会在res对象中注入cookie方法，用于设置cookie
 */
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// 解析 application/x-www-form-urlencoded 格式的请求体
app.use(express.urlencoded({
  extended: true
}));

// 解析 application/json 格式的请求体
app.use(express.json());



// 使用代理
// app.use(require("./midware/proxyMid"));

// 应用token中间件
app.use(require("./midware/tokenMid"));




// 处理 api 的请求
app.use(require('./api/admin'))
app.use(require('./api/blog')) 
// app.use('/api/comment', require('./api/comment')) 
app.use(require('./api/everyday'));

//验证码图片
app.use(require('./midware/captchaMid'))

//允许跨域访问
app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// 处理对下载资源的请求
// app.use("/res", require("./api/download"));

// 处理错误的中间件
app.use(require("./midware/errorMid"));



const port = 5050;
app.listen(port, () => {
  console.log(`server listen on http://localhost:${port}`);
});