/*
 * @Author: hunaisong 
 * @Date: 2017-09-14 16:29:32 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-14 16:43:47
 */
// Node.js的函数部分


/**
 * 在js中可以在一个函数中，传递一个函数作为参数，Node.js基本就是利用这个
 */

//  写一个js
function test(sayName,name) {
    sayName(name)
}
function sayName(name) {
    console.log('Hello, '+name+'!')
}

test(sayName,"Neisun")


// 联想到Node.js中内置模块中的一些用法
// 比如创建一个http 服务器
var http = require("http");
http.createServer(onRequest).listen('8888')

// 把请求函数单独提出来
function onRequest(request,response) {
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello world!");
    response.end();
}