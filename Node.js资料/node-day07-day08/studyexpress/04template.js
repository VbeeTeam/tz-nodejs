/**
 * 模板的使用
 * 
 */

const express = require("express");
const app = express();
const path = require("path");
// const template = require("art-template");

// 设置模板
app.engine('html', require('express-art-template'));

// 设置模板文件路径
app.set('views', path.join(__dirname, "public"));

// 设置模板的后缀
app.set('view engine', 'html');

// 根据路由地址访问模板的渲染
app.get("/tpl", (req, res) => {
    // var html = template(path.join(__dirname , 'public/tpl.html'), {
    //    list: ["苹果", "香蕉" , "猕猴桃"]
    // });
    // res.send(html);
    res.render("tpl", {list: ["苹果", "香蕉" , "猕猴桃"]})
})
app.listen(3000, () => {
    console.log("server success");
})


