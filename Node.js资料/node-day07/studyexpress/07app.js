/**
 * 入口文件
 */

const express = require("express");
const app = express();
const router = require("./06router");
const bodyParser = require("body-parser");

// extended: false就是使用querystring方法来处理
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// 挂载路由
app.use(router);

app.listen(3000, () => {
    console.log("server success");
})