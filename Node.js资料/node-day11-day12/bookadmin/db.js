/**
 * 连接mysql
 */
 var mysql = require('mysql');
 //  导出连接数据库方法
 module.exports = (sql, data, callback) => {
     //  创建mysql数据库连接
     var connection = mysql.createConnection({
         host: 'localhost', //数据库所在的IP服务器
         user: 'root', //数据库账号
         password: '123456', //数据库密码
         database: 'book' //数据库名称
     });
     //  执行连接数据库
     connection.connect();
     // sql:sql语句 data：操作的参数字段
     connection.query(sql, data, function (error, results, fields) {
         if (error) throw error;
         // console.log('result:', results);
         // 回调函数
         callback(results);
     });
     // 关闭数据库
     connection.end();
 }