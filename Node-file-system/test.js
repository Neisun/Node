var fs = require("fs");
// var path = require("path");

// 读文件 
//readFile(filename,[options],callback);

/**
 * filename, 必选参数，文件名
 * [options],可选参数，可指定flag（文件操作选项，如r+ 读写；w+ 读写，文件不存在则创建）及encoding属性
 * callback 读取文件后的回调函数，参数默认第一个err,第二个data 数据,也就是读取的数据
 */
// function readFile(fileUrl) {
//     console.log("--开始读取--");
//     fs.readFile(fileUrl,function (err,data) {
//         if (err) {
//             console.log("--读取失败--")
//         }
//         console.log("文件内容是："+data.toString())
//     })
// }
// readFile("Node-file-system/test.txt")


// 写文件，如果之前的文件存在，会把之前文件的内容给覆盖掉；
// fs.writeFile(filename,data,[options],callback);

/**
 * filename, 必选参数，文件名
 * data, 写入的数据，可以字符或一个Buffer对象
 * [options],flag,mode(权限),encoding，都是选填
 * callback 读取文件后的回调函数，参数默认err
 */
// var w_data = "我是被写入的内容";
// fs.writeFile(__dirname+"/test2.txt",w_data,function (err) {
//     if (err) {
//         console.error(err);
//     }
//     console.log("写入成功");
// })


// 以追加的方式写文件
// fs.appendFile(filename,data,[options],callback)
/**
 * filename,必填参数，文件名
 * data，追加的内容
 * options，选填，flag，mode。。。
 * callback，默认参数err
 */
// var appendData = "\r\n我是被追加的内容"
// fs.appendFile(__dirname+"/test2.txt",appendData,function (err) {
//     if (err) {
//         console.error(err)
//     }
//     console.log("追加成功")
// })

// 打开文件，我不知道这个打开文件的用处何在，先记录一下
// fs.open(filename,flags,[mode],callback);
/**
 * filename,必填参数
 * flags，必填参数，详细参考这些参数设置
 * mode，选填，设置权限
 * callback，默认参数第一个err，第二个fd，这个fd是个啥玩意，解释如下
 * fd为一个整数，表示打开文件返回的文件描述符，window中又称文件句柄
 */
/*Flag	描述
r	以读取模式打开文件。如果文件不存在抛出异常。
r+	以读写模式打开文件。如果文件不存在抛出异常。
rs	以同步的方式读取文件。
rs+	以同步的方式读取和写入文件。
w	以写入模式打开文件，如果文件不存在则创建。
wx	类似 'w'，但是如果文件路径存在，则文件写入失败。
w+	以读写模式打开文件，如果文件不存在则创建。
wx+	类似 'w+'， 但是如果文件路径存在，则文件读写失败。
a	以追加模式打开文件，如果文件不存在则创建。
ax	类似 'a'， 但是如果文件路径存在，则文件追加失败。
a+	以读取追加模式打开文件，如果文件不存在则创建。
ax+	类似 'a+'， 但是如果文件路径存在，则文件读取追加失败。
*/
fs.open(__dirname+"/test.txt","r+",function (err,fd) {
    if (err) {
        console.error(err);
    } else {
        console.log("打开了。。。");
        console.log(fd); // 这个句柄是3，我也不知道啥意思
    }
})