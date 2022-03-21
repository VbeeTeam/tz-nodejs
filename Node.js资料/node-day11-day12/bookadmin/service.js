/**
 * 逻辑模块
 */

const db = require("./db");

var loginBoolean = null; //登录状态

// 渲染首页数据
exports.showIndex = (req, res) => {
    if (loginBoolean) {
        let sql = "select * from book_info";
        db(sql, null, (result) => {
            res.render("index", {
                list: result
            });
        })
    } else {
        res.redirect("/")
    }
}
// 查询图书
exports.searchBook = (req, res) => {
    let name = req.query.name;
    let sql = "select * from book_info where name like ?";
    let data = ["%" + name + "%"];
    db(sql, data, (result) => {
        res.render("index", {
            list: result,
            keyword: name
        });
    })
}
// 显示添加页
exports.showAdd = (req, res) => {
    if (loginBoolean) {
        res.render("add");
    } else {
        res.redirect("/");
    }
}
// 添加图书
exports.addBook = (req, res) => {
    let info = req.body;
    // console.log(info);
    let sql = "insert into book_info set ?";
    db(sql, info, (result) => {
        // console.log(result);
        if (result.affectedRows == 1) {
            res.redirect("/index");
        }
    })
}
// 删除图书
exports.delBook = (req, res) => {
    let id = req.query.id;
    let sql = "delete from book_info where id=?";
    let data = [id];
    db(sql, data, (result) => {
        // console.log(result);
        if (result.affectedRows == 1) {
            res.redirect("/index");
        }
    })
}
// 渲染修改页
exports.showEdit = (req, res) => {
    if (loginBoolean) {
        let id = req.query.id;
        let sql = "select * from book_info where id=?";
        let data = [id];
        db(sql, data, (result) => {
            console.log(result);
            let obj = result[0];
            res.render("edit", obj);
        })
    } else {
        res.redirect("/");
    }

}
// 修改图书
exports.editBook = (req, res) => {
    let info = req.body;
    let sql = "update book_info set name=?, author=?, categroy=?, description=? where id=?";
    let data = [info.name, info.author, info.categroy, info.description, info.id];
    db(sql, data, (result) => {
        // console.log(result);
        if (result.affectedRows == 1) {
            res.redirect("/index");
        }
    })
}
// 登录
exports.submitLogin = (req, res) => {
    let info = req.body;
    // console.log(info);
    if (info.username && info.password) {
        let sql = "select * from user where username=? and password=?";
        let data = [info.username, info.password];
        db(sql, data, (result) => {
            // console.log(result);
            if (result.length > 0) {
                res.redirect("/index");
                loginBoolean = true;
            } else {
                let sql2 = "select * from user where username=?";
                let data2 = [info.username];
                db(sql2, data2, (result2) => {
                    // console.log("result2:", result2);
                    if (result2.length > 0) {
                        res.render("login", {
                            flag: 1
                        });
                    } else {
                        res.render("login", {
                            flag: 2
                        });
                    }
                })
            }
        })
    } else {
        res.render("login", {
            flag: 1
        });
    }
}

// 显示注册页
exports.showRegister = (req, res) => {
    res.render("register");
}
// 注册接口
exports.registerUser = (req, res) => {
    // console.log(req.body);
    let info = req.body;
    if (info.username && info.password) {
        // 查询用户是否被注册了
        let sql = "select * from user where username=?";
        let data = [info.username];
        db(sql, data, (result) => {
            // console.log(result);
            if (result.length > 0) {
                res.render("register", {
                    flag: 1
                })
            } else {
                // 插入数据
                let sql2 = "insert into user set ?";
                db(sql2, info, (result2) => {
                    // console.log(result2);
                    if (result2.affectedRows == 1) {
                        res.redirect("/");
                    }
                })
            }
        })
    } else {
        res.render("register", {
            flag: 2
        });
    }
}