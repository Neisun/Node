/*
 * @Author: hunaisong 
 * @Date: 2017-09-27 14:40:06 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-29 13:27:04
 */
// 用来测试node连接mysql的
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});
// 测试连接成功