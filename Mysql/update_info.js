/*
 * @Author: hunaisong 
 * @Date: 2017-09-29 15:15:31 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-29 16:06:10
 */
// 上个例子中在数据库中插入了一条数据，现在想将这条数据更新
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'test'
})
connection.connect();
var updateSql = 'update websites set name = ?,url = ? where id = ?';
var updateParams = ['百度', 'www.baidu.com', 6];
connection.query(updateSql, updateParams, (err, result) => {
    if (err) {
        console.log(err)
    } else {
        console.log(result);
        console.log('更新成功');
    }
})
connection.end();