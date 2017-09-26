/*
 * @Author: hunaisong 
 * @Date: 2017-09-26 10:04:44 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-26 15:24:12
 */
var express = require('express'),
    app = express(),
    // cookie-parser是格式化cookie必备良药
    cookieParser = require('cookie-parser');
app.use(cookieParser());
app.get('/', (req, res) => {
    console.log("Cookie：", req.cookies);
    res.end(JSON.stringify(req.cookies))
})
var server = app.listen(8082);