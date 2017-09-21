/*
 * @Author: hunaisong 
 * @Date: 2017-09-21 16:01:17 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-21 16:45:52
 */
// net 模块
// 一个简单的client+server的例子
var net = require("net");
var fs = require('fs');
var path = require('path');

// tcp服务端
var server = net.createServer((socket) => {
    console.log('服务端：收到来自客户端的请求')
    socket.on('data',(data) => {
        console.log('服务端：收到来自客户端数据，内容为('+data+')')
        // 给客户端返回数据
        var content = fs.readFileSync(path.join(__dirname,'test.txt'));
        
        socket.write(content.toString())
    })
    socket.on('close',() => {
        console.log('服务端：客户端断开连接')
    })
})

server.listen(8089,()=>{
    console.log('服务端：开始监听来自客户端的请求')
})