/*
 * @Author: hunaisong 
 * @Date: 2017-09-27 14:40:06 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-30 11:15:59
 */
// 用来测试node连接mysql的
// 引入mysql依赖
var mysql = require('mysql');
// 创建连接的基本配置信息
var connection = mysql.createConnection({
    // 主机
    host: 'localhost',
    // 用户
    user: 'root',
    // 密码
    password: '123456',
    // 数据库名称
    database: 'test'
});
// 连接数据库
connection.connect();
// 调用数据库库语法语句，然后来一个callback
connection.query('SELECT 1 + 1 AS solution', function(error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});
