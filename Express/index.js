/*
 * @Author: hunaisong 
 * @Date: 2017-09-22 16:13:35 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-22 17:38:39
 */
// 正式开启express框架的学习

/**
 * 首先需要安装 express
 * npm/cnpm install express --save
 * 然后安装几个常用的中间件
 * cnpm install body-parser cookie-parser multer --save
 */

//  Hello,world!案例永远是我们的第一个案例
var express = require('express');
var app = express();
// 使用静态资源
// 注意路径问题
// app.use(express.static('public'));
app.get('/user',(req,res) => {
    console.log(req.query)
    console.log(req.params)
    res.send('Hello,world!');
})

var server = app.listen(8081,'127.0.0.1',() => {
    console.log('服务器启动了！');
    var host = server.address().address;
    var port = server.address().port;
    // %s表示字符串
    // %d表示number
    // %j表示json
    // %单个百分号，表示一个占位符
    console.log('访问地址：http://%s:%s',host,port)
})