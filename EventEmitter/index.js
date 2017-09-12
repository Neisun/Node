/*
 * @Author: hunaisong 
 * @Date: 2017-09-12 14:32:38 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-12 16:12:44
 */
// 上次说到事件循环，期中用到了EventEmitter类，这次来全面看看类下边的api用法
// 对于EventEmitter类，菜鸟教程的说法
// Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。
// Node.js里面的许多对象都会分发事件：一个net.Server对象会在每次有新连接时分发一个事件， 一个fs.readStream对象会在文件被打开的时候发出一个事件。 所有这些产生事件的对象都是 events.EventEmitter 的实例。

// 基础部分

// events模块
var events = require("events");
// 实例化
var eventEmitter = new events.EventEmitter();

eventEmitter.on('some_event',function () {
    console.log("some_event事件触发")
})
var timer = setTimeout(function() {
    eventEmitter.emit("some_event")
}, 1000);

// EventEmitter 支持 若干个事件监听器。
// 当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递

// 可以给同样的事件绑定多个事件监听器，类似于js的事件监听器，可以给事件绑定多个事件监听器
eventEmitter.on("test",function (arg1,arg2) {
    console.log("listener1",arg1,arg2)
})
eventEmitter.on("test",function (arg1,arg2) {
    console.log("listener2",arg1,arg2)
})
eventEmitter.emit('test','小明','小刚')