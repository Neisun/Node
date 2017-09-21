/*
 * @Author: hunaisong 
 * @Date: 2017-09-21 16:29:09 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-21 16:38:26
 */
var net = require('net');

var client = net.createConnection({port:8089});

client.on('connect',() => {
    console.log('客户端：已经与服务端建立连接')
})
client.on('data',(data) => {
    console.log('客户端：收到服务端数据，内容是('+data+')')
})
client.on('close',() => {
    console.log('客户端：断开连接')
})
client.end('你好，我是客户端')