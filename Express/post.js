/*
 * @Author: hunaisong 
 * @Date: 2017-09-25 17:02:52 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-25 17:20:54
 */
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, 'index.html'));
})
app.post('/user_post',urlencodedParser, (req, res) => {
    res.writeHead(200,{'Content-Type':'text/plain;charset=utf8'})
    var response = {
        'name': req.body.name,
        'male': req.body.sex
    }
    res.end(JSON.stringify(response))
})
var server = app.listen(8082, '127.0.0.1', () => {

})