/*
 * @Author: hunaisong 
 * @Date: 2017-09-20 16:46:37 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-20 16:51:23
 */
var http = require("http"),
    url = require("url"),
    util = require("util"),
    qs = require("querystring");
http.createServer((req,res) => {
    var body = "";
    req.on('data',(chunk) => {
        body += chunk;
    })
    req.on('end',() => {
        body = qs.parse(body);
        res.end(util.inspect(body));
    })
})
