/**
 * express 服务的使用
 * 
 */

const express = require("express");
const app = express();
const port = 3000;

// 可以处理所有路由的请求方法
app.use((req, res) => {
    res.send("all method");
})

// get 方法server
app.get("/index", (req, res) => {
    res.send("Hello World");
})
// post 方法
app.post("/login", (req, res) => {
    res.send("登录成功");
})
// put 方法
app.put("/update", (req, res) => {
    res.send("更新成功");
})
// delete 方法
app.delete("/del", (req, res) => {
    res.send("删除成功");
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})