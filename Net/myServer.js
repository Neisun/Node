/*
 * @Author: hunaisong 
 * @Date: 2017-09-21 21:42:19 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-21 21:55:17
 */
var net = require("net");

var server = net.createServer((socket) => {
    console.log('服务端：收到来自客户端的请求');
    socket.on('data',(data) => {
        console.log('服务端：来自客户端的数据，内容是('+data+')');
        socket.write('你好，我是服务端发出的信息')
    })
    socket.on('close',() => {
        console.log('服务端：客户端断开连接')
    })
})
server.listen(8089,() => {
    console.log('服务端：开始监听来自客户端的请求')
})