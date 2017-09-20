/*
 * @Author: hunaisong 
 * @Date: 2017-09-20 16:25:39 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-20 16:40:38
 */
var http = require("http");
var util = require("util");
var url = require("url");
http.createServer((req,res) => {
    // charset=utf8不能少，不然中文会出现乱码，编码格式得有；
    res.writeHead(200,{'Content-Type':'text/plain;charset=utf8'});
    var params = url.parse(req.url,true).query;
    res.write('姓名：'+params.name);
    res.write("\r\n");
    res.write('性别:'+params.sex);
    res.end()
}).listen(8080);