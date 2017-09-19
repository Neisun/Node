/*
 * @Author: hunaisong 
 * @Date: 2017-09-19 10:19:35 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-19 13:51:40
 */
var http = require("http");
var url = require("url");

// 最常规的写法
/*http.createServer((request,response) => {
    // console.log(request.url);
    var pathname = url.parse(request.url).pathname;
    console.log('Request from '+pathname+' received!');
    console.log('About to route a request for '+pathname);
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('Hello world!');
    response.end();
}).listen(8088);*/

// 把请求的函数提取出来
/*function onRequest(request,response) {
    var pathname = url.parse(request.url).pathname;
    console.log('来自'+pathname+'的请求接收到了！')
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('Hello world!');
    response.end();
}

http.createServer(onRequest).listen(8089);*/

// 接下来按模块把函数划分，以上部分称为过去，分为server.js,router.js,main.js作为主入口文件

var server = require("./server");
var router = require("./router");

server.start(router.route);