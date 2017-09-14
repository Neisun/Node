/*
 * @Author: hunaisong 
 * @Date: 2017-09-12 16:13:32 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-12 16:48:25
 */
// 此案例用来大体上全面展示一下eventEmitter类的api用法
var events = require("events");
var eventEmitter = new events.EventEmitter();

// 监听器1
var listener1 = function () {
    console.log("监听器 listener1 执行")
}
// 监听器2
var listener2 = function () {
    console.log("监听器 listener2 执行")
}
// 绑定
eventEmitter.addListener("connection",listener1);
eventEmitter.on("connection",listener2);

// 查看有几个监听器连接
var count = require("events").EventEmitter.listenerCount(eventEmitter,"connection");
console.log(count+" 个监听器监听连接事件")

// 触发
eventEmitter.emit("connection")

// 移除绑定的事件
eventEmitter.removeListener("connection",listener1);
console.log("监听器 listener1 被移除了")

// 再次触发
eventEmitter.emit("connection")

// 再次获取执行中的监听器个数
count = require("events").EventEmitter.listenerCount(eventEmitter,"connection");
console.log(count+" 个监听器监听连接事件")

// 程序执行完毕
console.log('程序执行完毕')

eventEmitter.emit('error')