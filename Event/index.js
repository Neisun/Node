/*
 * @Author: hunaisong 
 * @Date: 2017-09-07 16:13:36 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-07 17:32:52
 */
// var events = require("events");
// var eventsEmitter = new events.EventEmitter();

// console.log("准备开始连接")
// eventsEmitter.on('connection',connectHandler);
// function connectHandler() {
//     console.log('连接成功')
//     eventsEmitter.emit('data_received')
// }
// eventsEmitter.on('data_received',dataHandler);
// function dataHandler() {
//     console.log('接收数据成功');
// }
// eventsEmitter.emit('connection');
// console.log('程序执行完毕')
var events = require("events");
var eventsEmitter = new events.EventEmitter();

console.log('准备数据连接')
eventsEmitter.on('connection',function () {
    console.log("连接成功!")
    eventsEmitter.emit('data_receive')
})
eventsEmitter.on('data_receive',function () {
    console.log('数据接收成功')
})
eventsEmitter.emit('connection')
console.log('程序执行完毕')