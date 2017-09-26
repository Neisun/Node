/*
 * @Author: hunaisong 
 * @Date: 2017-09-26 11:06:09 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-26 11:23:39
 */
// get提交表单
var express = require('express'),
    app = express(),
    path = require('path');

// 设置myGet.html路由时候打开的文件
app.get('/myGet.html',(req,res) => {
    res.sendFile(path.join(__dirname,'myGet.html'));
})
// get方式提交表单会把参数放入到url中
app.get('/get',(req,res) => {
    // 设置一下回复头信息，不然中文会乱码
    res.writeHead(200,{'Content-Type':'text/plain;charset=utf8'})
    var response = {
        name:req.query.name,
        sex:req.query.sex
    }
    res.end(JSON.stringify(response))
})
var server = app.listen(8082)