/**
 * 连接mysql
 */
var mysql = require('mysql');
//  创建mysql数据库连接
var connection = mysql.createConnection({
    host: 'localhost', //数据库所在的IP服务器
    user: 'root', //数据库账号
    password: '123456', //数据库密码
    database: 'student' //数据库名称
});

//  执行连接数据库
connection.connect();

// 操作数据库 results[0].solution返回为2就是连接成功
// 测试连接
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
// });

//查询
// let sql = 'select * from student_info';
// let sql = "select * from student_info where name=?";
// let data = ["张三"];

// 更新
let sql = 'update student_info set name=?, age=?, sex=? where id=?';
let data = ["王五2", 25, "T", 3];

// sql:sql语句 data：操作的参数字段
connection.query(sql, data, function (error, results, fields) {
    if (error) throw error;
    console.log('result:', results);
});

// 关闭数据库
connection.end();