/**
 * 中间件 next()
 * 处理逻辑过程中的下一个环节
 */

const express = require("express");
const app = express();

// 访问用户接口
// app.get("/user", (req, res, next) => {
//     console.log("访问了用户1")
//     next();
// })
// app.get("/user", (req, res, next) => {
//     console.log("访问了用户2")
//     next();
// })
// app.get("/user", (req, res) => {
//     console.log("访问了用户3")
// })

app.get("/abc", (req, res, next) => {
    console.log(1);
    next();
}, (req, res) => {
    res.send("abc");
})

app.listen(3000, () => {
    console.log("server run success");
})