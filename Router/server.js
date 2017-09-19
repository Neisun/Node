/*
 * @Author: hunaisong 
 * @Date: 2017-09-19 10:33:54 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-19 13:50:13
 */
var http = require("http");
var url = require("url");

function start(route) {
    // 请求部分
    function onRequest(request,response) {
        var pathname = url.parse(request.url).pathname;
        console.log('Request from '+pathname+' received!');
        // 传入依赖函数，并且调用依赖函数
        route(pathname);
        response.writeHead(200,{'Content-Type':'text/plain'});
        response.write('Hello world!');
        response.end()

    }
    http.createServer(onRequest).listen(8088)
    console.log('Server started!')
}

// 暴露模块
exports.start = start;