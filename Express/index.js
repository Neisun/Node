/*
 * @Author: hunaisong 
 * @Date: 2017-09-22 16:13:35 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-26 10:52:04
 */
// 正式开启express框架的学习

/**
 * 首先需要安装 express
 * npm/cnpm install express --save
 * 然后安装几个常用的中间件
 * cnpm install body-parser cookie-parser multer --save
 */

//  配置请求路由，最简单的写法
var express = require('express'),
    app = express();
// get请求
app.get('/', function(req, res) {
    res.send('主页 get 请求')
})
// post 请求
app.post('/', function(req, res) {
    res.send('主页 post 请求')
})
// user页面get请求
app.get('/user', function(req, res) {
    res.send('user 页面')
})
// del_user页面get请求
app.get('/del_user', function(req, res) {
    res.send('del_user 页面')
})
// 正则匹配ab*cd页面get请求
app.get('/ab*cd/', function(req, res) {
    res.send('正则匹配 页面')
})
var server = app.listen(8081, '127.0.0.1', function() {
    console.log('服务器启动')
    var port = server.address().port;
    var host = server.address().address;
    console.log('访问地址：http://%s:%s', host, port)
})