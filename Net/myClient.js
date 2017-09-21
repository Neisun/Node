/*
 * @Author: hunaisong 
 * @Date: 2017-09-21 21:49:52 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-21 21:55:07
 */
var net = require('net');
var client = net.createConnection({port:8089});
client.on('connect',() => {
    console.log('客户端：开始建立与服务器的连接')
})
client.on('data',(data) => {
    console.log('客户端：接收到服务端的数据，内容是('+data+')');
})
client.on('close',() => {
    console.log('客户端：断开连接')
})
client.end('你好，我是客户端发出的信息')