/*
 * @Author: hunaisong 
 * @Date: 2017-09-29 14:23:09 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-29 14:45:22
 */
// 向数据库中插入数据
var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    port:'3306',
    database:'test'
});
connection.connect();
var addSql = 'insert into websites(id,name,url,alexa,country) values(0,?,?,?,?)';
var addParams = ['菜鸟工具', 'https://c.runoob.com','23453', 'CN'];
connection.query(addSql,addParams,(err,result) => {
    if (err) {
        console.log('[insert info] - ',err.message);
    }else {
        console.log(result);
    }
})
connection.end();