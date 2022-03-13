/**
 * 参数的获取
 */

const express = require("express");
const app = express();

const bodyParser = require("body-parser");

// extended: false就是使用querystring方法来处理
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// get获取参数 直接将url模块方法获取get参数已经封装好了
app.get("/search", (req, res) => {
    console.log(req.query);
})
// post 获取参数
app.post("/login", (req, res) => {
    console.log("post:", req.body);
})
app.put("/login", (req, res) => {
    console.log("put:", req.body);
})
app.delete("/login", (req, res) => {
    console.log("del:", req.body);
})

app.listen(3000, () => {
    console.log("server run success");
})