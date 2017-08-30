/*
 * @Author: hunaisong 
 * @Date: 2017-08-29 15:54:52 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-08-30 16:07:17
 */
// 关于http方面的内容
// http是node的一个内置模块，使用方式
var http = require("http");

// http可以搭建，服务器端和客户端

// 1.搭建一个服务器端，最简单的服务器

// 使用http的createServer，方法搭建一个HTTP服务器
http.createServer((request,response) => {
  // 设置响应头部
  response.writeHead(200,{'content-type':'text/plain'});
  // 设置响应的输出
  response.end("hello world");
  // 监听8081端口
  console.log(request.headers)
}).listen(8080);

// 2.创建客户端请求
// 我们在另一个js文件中写一个客户端的请求
// 客户端的请求写法
/**
 * http.request(options,callback)
 * options,定义请求的url，端口，方法，等等
 * callback，参数response，用来接收响应体
 */
var options = {
    hostname:'localhost',
    port:8080,
    method:'get',
    headers:{'content-type':'text/plain'}
}

var request = http.request(options,(response) => {
    // 打印出响应体的头部信息
    console.log(response.headers)
})
request.write('test');
request.end();

// http请求和相应本质都是数据流，都是有两部分组成，一个头部，一个主体；分别称为请求头，请求体，响应头，响应体；