/**
 * router路由模块
 * 
 */

const express = require("express");
const router = express.Router();

router.get("/search", (req, res) => {
    if(req.query){
        console.log(req.query);
        res.send("搜索成功")
    }
})
router.post("/login", (req, res) => {
    if(req.body){
        console.log(req.body);
        res.send("登录成功")
    }
})

module.exports = router