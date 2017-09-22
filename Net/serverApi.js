/*
 * @Author: hunaisong 
 * @Date: 2017-09-22 10:27:08 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-22 11:04:44
 */
// net模块
var net = require('net'),
    // 配置下端口和ip
    PORT = 8082,
    HOST = '127.0.0.1',
    // 定义一个空函数
    noop = function() {};
// 创建一个TCP服务器
var server = net.createServer(noop);
// 监听端口和HOST
// server.listen(PORT, HOST, () => {
    // 关闭server
    server.close((err) => {
        // 如果err，服务器异常
        if (err) {
            console.log('close回调：服务器异常：' + err.message)
        } else {
            // 反之正常关闭
            console.log('close回调：服务器正常关闭')
        }
    })
// });
// 同时close事件的callback会触发on('close)事件
server.on('close', () => {
    console.log('close事件：服务器关闭')
})
// error事件
server.on('error', (err) => {
    console.log('error事件：服务器异常：' + err.message)
})
/**
 * close事件：服务器关闭
 * close回调：服务器正常关闭
 */


// 如果在上例中，把HOST改成一个不规范的ip，看看报错
/**
 * error事件：服务器异常：getaddrinfo ENOTFOUND 12700.0.0.1
 */
// 我们发现会触发error事件



// 如果在server.listen之前（或者说就让server.listen不执行），就把服务器给关掉，看看报什么错
/**
 * close回调：服务器异常：Not running
 * close事件：服务器关闭
 */

//  所以得出结论，server.close(callback)，无论异常与否都是会，触发on('close')事件。如果异常关闭服务器就会执行err中的代码
