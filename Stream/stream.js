/*
 * @Author: hunaisong 
 * @Date: 2017-08-17 10:05:25 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-08-18 11:20:38
 */
// 当内存中无法一次装下需要处理的数据时，或者一边读取一边处理更加高效时，我们就需要用到数据流。NodeJS中通过各种Stream来提供对数据流的操作。
// 这就是stream的使用场景


// 那么stream是什么！？这是我，从看到教程就一直在思考的问题。如果你都不知道他是什么东西，你在研究有什么用。
// 菜鸟教程给出的解释：一个抽象的接口，Node中许多对象实现了这个接口。这个解释，冠冕堂皇，狗屁不通。估计是直接生硬的翻译过来的。
// 那么我的理解是。就是读取文件时候，都是需要把文件读取完成之后，在进行下一步操作，如果文件太大，内存不足。就会阻塞线程，所以，需要有别的方式去解决问题。这个方式就是采用数据流，边读边进行下一步操作。

// 直接看实例，比如我现在要读的这个.txt文件大的不了，内存都放不下了，可以上天了

// 准备copy一个test.txt文件到当前文件夹下，并命名为test2.txt

// 基础的写法，不使用数据流
/*var fs = require("fs");
fs.readFile(__dirname+"/test.txt",function (err,data) {
    if(err) console.log(err);
    console.log("读取的内容是"+data);
    fs.writeFile(__dirname+"/test2.txt",data,function (err) {
        if (err) console.log(err);
        console.log("拷贝成功！")
    })
})*/

// 上边我已经做了假设，假设这个文件大的不得了，这个时候已经超出内存了，系统估计卡死了，用数据流的方式写一下看看

/*var fs = require("fs");
var rs = fs.createReadStream(__dirname + "/test.txt");
var ws = fs.createWriteStream(__dirname + "/test2.txt");

rs.on("data", function (chunk) {
    // 可读事件流收到data事件时，将内容写到可写流
    ws.write(chunk)
    console.log("读取")
})
rs.on("end", function () {
    // 可读事件流完成会发出end事件，此时关闭可写流
    ws.end();
    console.log("结束")
})*/



// Stream 四种流类型
/**
 * Readable - 可读操作。
 * Writable - 可写操作。
 * Duplex - 可读可写操作.
 * Transform - 操作被写入数据，然后读出结果。
 */

// 所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
/**
 * data - 当有数据可读时触发。
 * end - 没有更多的数据可读时触发。
 * error - 在接收和写入过程中发生错误时触发。
 * finish - 所有数据已被写入到底层系统时触发。
 */


//  从流中读取文件
/*var fs = require("fs");
var data = "";

// 创建可读流
var rs = fs.createReadStream(__dirname + "/test.txt");
// 设置编码
rs.setEncoding("UTF8");

// 处理事件流 data end error
rs.on("data", function (chunk) {
    data += chunk;
})
rs.on("end", function () {
    console.log(data)
})
rs.on("error", function (err) {
    console.log(err.stack)
})
console.log("执行完毕")*/

// 把文件写入流中
/*var fs = require("fs");
var data = "我就是一个测试文件"
var ws = fs.createWriteStream(__dirname+"/output.txt")
// 使用utf8编码，写入文件
ws.write(data,"utf8")
// 标记文件末尾
ws.end();
ws.on("finish",function () {
    console.log("写入完成")
})
ws.on("error",function (err) {
    console.log(err.stack)
})
console.log("执行完毕")*/


// 管道流，看到这里，一切又是那么熟悉，在配置gulpfile.js时候的pipe不就是管道流么。配置过gulpfile.js的盆友，下边应该是手到擒来。

// 读文件+写文件+链式流
/*var fs = require("fs");
fs.createReadStream(__dirname+"/test.txt")
.pipe(fs.createWriteStream(__dirname+"/output2.txt"))
console.log("执行完毕")*/


// 链式流压缩文件
/*var fs = require("fs"),
    zlib = require("zlib");
// 创建一个读取流
fs.createReadStream(__dirname + "/test.txt")
    // 压缩
    .pipe(zlib.createGzip())
    // 写入流
    .pipe(fs.createWriteStream(__dirname + "/test.txt.gz"))

console.log("执行完毕")*/


// 链式流解压文件
var fs = require("fs"),
    zlib = require("zlib");
// 创建一个读取流
fs.createReadStream(__dirname + "/test.txt.gz")
    // 解压
    .pipe(zlib.createGunzip())
    // 写入流
    .pipe(fs.createWriteStream(__dirname + "/test3.txt"))
console.log("解压完毕")