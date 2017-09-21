/*
 * @Author: hunaisong 
 * @Date: 2017-09-21 11:19:19 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-21 14:02:16
 */
// 依赖的模块
var http = require('http'),
    url = require('url'),
    util = require('util');
// 创建服务器
http.createServer((req, res) => {
    // 利用url.parse工具将url转换为对象
    var urlObj = url.parse(req.url);
    // 写请求头
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // 这个end必须写，要不你会发现页面一直loading状态，因为我忘写过。。
    res.end(util.inspect(urlObj, true, true));
}).listen(8082)