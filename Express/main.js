/*
 * @Author: hunaisong 
 * @Date: 2017-09-26 10:34:42 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-26 10:38:06
 */
// hello,world案例
var express = require('express'),
    app = express();
app.get('/', (req, res) => {
    res.send('Hello world!')
})
var server = app.listen(8082, '127.0.0.1', () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('实例地址:http://%s:%s', host, port)
})