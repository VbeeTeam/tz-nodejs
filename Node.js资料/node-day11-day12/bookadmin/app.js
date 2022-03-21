/**
 * 项目的入口配置文件
 */
const express = require("express");
const app = express();
const router = require("./router");
const bodyParser = require("body-parser");
const path = require("path");
// 设置兼容模板 npm i art-template express-art-template -S
app.engine('html', require('express-art-template'));
// 设置模板路径
app.set('views', path.join(__dirname, "views"));
// 设置模板后缀
app.set('view engine', 'html');
// 挂载静态资源文件
app.use(express.static('public'));

// 处理post参数
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// 挂载路由
app.use(router);
// 监听服务器端口
app.listen(3001, () => {
    console.log("server success");
})
