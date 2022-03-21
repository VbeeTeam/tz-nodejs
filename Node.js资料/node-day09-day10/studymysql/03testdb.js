/**
 * 测试db数据库连接及操作
 */
const db = require("./02db");

// let sql = "select * from student_info";
// let data = null;

// 插入
// let sql = "insert into student_info set ?";
// let data = {
//     name: "王麻子2",
//     age: 25,
//     sex: "T",
//     description: "我是一个好人"
// }

// 删除
let sql = "delete from student_info where id=?";
let data = [6];

db(sql, data, (result) => {
    console.log(result);
})