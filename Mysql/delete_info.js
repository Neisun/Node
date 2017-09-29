/*
 * @Author: hunaisong 
 * @Date: 2017-09-29 16:46:27 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-29 16:57:33
 */
// 删除数据
var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    port:'3306',
    database:'test'
});
connection.connect();
var deleteSql = 'delete from websites where id=6';
connection.query(deleteSql,(err,result) => {
    if (err) {
        console.log(err)
    }else {
        console.log(result);
        console.log('删除成功');
    }
})
connection.end();