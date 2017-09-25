/*
 * @Author: hunaisong 
 * @Date: 2017-09-25 15:35:00 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-25 17:17:20
 */
var express = require('express'),
    app = express(),
    path = require('path');
    // 设置路由,index.html时候就打开文件public/index.html
    app.get('/index.html',function (req,res) {
        res.sendfile(path.resolve(__dirname,'../public/index.html'));
    })
    // 设置user路由部分，获取提交表单之后的数据，并展示到页面中
    app.get('/user_get',function (req,res) {
        var response = {
            'name':req.query.name,
            'sex':req.query.sex
        }
        res.end(JSON.stringify(response))
    })
    var server = app.listen(8081,'127.0.0.1',function (req,res) {
        var host = server.address().address;
        var port = server.address().port;
        console.log('访问地址：http://%s:%s',host,port);
    })