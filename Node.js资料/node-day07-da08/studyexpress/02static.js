/**
 * 静态文件托管
 * 
 */
const express = require("express");
const app = express();

// 设置托管public静态文件目录下的文件通过服务器地址访问
// app.use(express.static("public"));

// 设置虚拟目录
app.use("/static", express.static("public"));

app.listen(3000, () => {
    console.log("server run success");
})