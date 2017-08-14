// fs提供了两种读取文件的方式，同步和异步。推荐使用异步，异步快速，不会造成阻塞。
var fs = require("fs");

// 异步读取数据
function readFile() {
    console.log("----开始异步读取-----");
    fs.readFile("Node-file-system/test.txt", function (err, data) {
        if (err) {
            console.log("----读取失败----");
        }
        console.log("异步读取的数据是" + data);
        console.log("----读取结束----")
    })
}
readFile();

// 同步读取函数
function readFileSync() {
    console.log("----开始同步读取----");
    var data = fs.readFileSync("Node-file-system/test.txt");
    console.log("同步读取的数据是" + data.toString());
    console.log("----读取结束----")
}
readFileSync();

// 打开文件fs.open(),fs.open(src,mode,calback(err,fd))，这个mode还是必填的，一般r+，可读写。
function openFile() {
    console.log("----准备打开文件----");
    fs.open("Node-file-system/test.txt", "r+", function (err, fd) {
        if (err) {
            console.log("----打开文件失败----");
        }
        console.log("----文件打开成功----")
    })
}
openFile()

// 获取文件信息 fs.stat(src,callback(err,stats))
function getFileInfo() {
    console.log("----开始获取文件信息----")
    fs.stat("Node-file-system/test.txt", function (err, stats) {
        console.log("----获取中----")
        console.log(stats.isFile())
        console.log(stats)
        console.log("----获取信息完毕----")
    })
}
getFileInfo()

// 写入文件 fs.writeFile(src,data,options,callback(err))
function writeFile() {
    console.log("----准备写入文件----");
    fs.writeFile("Node-file-system/test2.txt", "我就是被写入的文件", function (err) {
        if (err) {
            console.log("----文件写入失败----");
        }
        console.log("----分割线-----");
        console.log("----准备读取新写入的文件");
        fs.readFile("Node-file-system/test2.txt", function (err, data) {
            console.log("异步读取写入的文件是" + data);
        })
        console.log("----异步读取结束----")
    })
}
writeFile();

// 删除文件 fs.unlink(src,callback)，我在目录下创建一个test3.txt文件，用来测试是否可以删除
function deleteFile() {
    // 再删除文件之前，我们先读取一下
    // var data = fs.readFileSync("Node-file-system/test3.txt");
    // console.log("读取到的数据是"+data.toString());
    // console.log("----准备删除文件---");
    fs.readFile("Node-file-system/test3.txt",function (err,data) {
        if (err) {
            console.log("----读取失败----");
        }
        console.log("读取到的文件是:"+data.toString())
    })
    fs.unlink("Node-file-system/test3.txt",function (err) {
        if (err) {
            console.log("----删除失败----");
        }
        console.log("----删除成功----");
    })
}
deleteFile()

// 接下来创建文件夹；
function mkdir() {
    console.log("----创建dist文件夹----");
    fs.mkdir("Node-file-system/dist",function (err) {
        if (err) {
            console.log("----创建失败----")
        }
        console.log("----创建成功----")
    })
}
mkdir();

// 接下来读取文件夹
function readdir() {
    console.log("----读取文件夹----");
    fs.readdir("Node-file-system/dist",function (err,files) {
        if (err) {
            console.log("----读取失败----")
        }
        console.log(files)
        files.forEach((item) => {
            console.log(item)
        })
    })
}
readdir()

// 删除文件夹
function rmdir() {
    console.log("----准备删除文件夹----");
    fs.rmdir("Node-file-system/dist",function (err) {
        if (err) {
            console.error(err);
        }
        console.log("----删除成功----")
    })
}
rmdir()


// 删除一个不为空的文件夹方法，先清空文件夹下所有的文件，在删除空的文件夹
// 先读取文件夹
fs.readdir("Node-file-system/dist",function (err,files) {
    // 亲测，这个形参必须传，不传不生效
    if (err) {
        console.error(err);
    }
    files.forEach(function (item) {
        // console.log("Node-file-system/dist/"+item)
        fs.unlink("Node-file-system/dist/"+item,function (err) {
            if (err) {
                console.error(err);
            }
        })
    })
    console.log("----文件夹已经清空了----")
    // 这个时候才可以删除文件夹
    fs.rmdir("Node-file-system/dist",function (err) {
        if (err) {
            console.error(err)
        }
        console.log("文件夹被删除")
    })
})
