/**
 * 路由模块
 */
const express = require("express");
const router = express.Router();

const service = require("./service");

// 登录页路由
router.get("/", (req, res) => {
    res.render("login");
})
// 注册页路由
router.get("/register", service.showRegister);
// 首页路由
router.get("/index", service.showIndex);
// 添加页路由
router.get("/add", service.showAdd);
// 修改页路由
router.get("/edit", service.showEdit);

// 登录接口
router.post("/login", service.submitLogin);
// 查询图书接口
router.get("/search", service.searchBook);
// 添加图书的接口
router.post("/addBook", service.addBook);
// 修改图书的接口
router.post("/editBook", service.editBook);
// 删除图书的接口
router.get("/delete", service.delBook);
// 注册接口
router.post("/registerUser", service.registerUser);

module.exports = router;