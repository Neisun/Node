var fs = require("fs");
// 一个整数，表示字节数
var buffer = new Buffer(1024);
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



// 读取文件
// fs.read(fd,buffer,offset,length,position,callback)
/**
 * fd, 使用fs.open打开成功后返回的文件描述符
 * buffer, 一个Buffer对象，v8引擎分配的一段内存
 * offset, 整数，向缓存区中写入时的初始位置，以字节为单位
 * length, 整数，读取文件的长度
 * position, 整数，读取文件初始位置；文件大小以字节为单位
 * callback(err, bytesRead, buffer), 读取执行完成后回调函数，bytesRead实际读取字节数，被读取的缓存区对象
 */



// 截取文件
// fs.ftruncate(fd,len,callback)
/**
 * fd,打开文件时候的fd
 * len,要截取的长度
 * callback,回调函数，没有参数
 */
// fs.open(__dirname + "/test.txt", "r+", function (err, fd) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("文件打开成功");
//     console.log(fd); // 这个句柄是3，我也不知道啥意思
//     console.log("准备读取文件")

//     // console.log(buffer);
//     fs.read(fd, buffer, 0, buffer.length,0, function (err, bytesRead) {
//         if (err) {
//             // throw err;
//             console.error(err);
//         }
//         console.log(bytesRead + " 字节被读取");
//         // console.log(buffer.slice(0,bytesRead).toString())
//         if (bytesRead > 0) {
//             console.log(buffer.slice(0, bytesRead).toString())
//         }
//     })
//     fs.close(fd, function (err) {
//         if (err) {
//             console.error(err)
//         }
//         console.log("文件关闭了")
//     })
// })



// 这是一套，打开文件，截取文件，读取文件，最后关闭文件
/*fs.open(__dirname+"/test.txt","r+",function (err,fd) {
    if (err) {
        console.log(err)
    }
    console.log("打开文件成功！")
    console.log("准备截取文件");
    // 也就是说，文件被截取之后，能读到的就是被截取的部分
    fs.ftruncate(fd,10,function (err) {
        if (err) {
            console.log(err)
        }
        console.log("截取文件成功！");
        console.log("开始读取文件");
        fs.read(fd,buffer,0,buffer.length,0,function (err,bytesRead) {
            if (err) {
                console.error(err)
            }
            console.log(bytesRead+" 字节被读取");
            if (bytesRead>0) {
                console.log(buffer.slice(0,bytesRead).toString())
            }
            // 关闭文件
            fs.close(fd,function (err) {
                if (err) {
                    console.log(err)
                }
                console.log("文件关闭")
            })
        })
    })
})*/



// 写入文件
// fs.write(fd,buffer,offset,length,position,callback);
/**
 * fd, 使用fs.open打开成功后返回的文件描述符
 * buffer, 一个Buffer对象，v8引擎分配的一段内存
 * offset, 整数，从缓存区中读取时的初始位置，以字节为单位
 * length, 整数，从缓存区中读取数据的字节数
 * position, 整数，写入文件初始位置；
 * callback(err, written, buffer), 写入操作执行完成后回调函数，written实际写入字节数，buffer被读取的缓存区对象
 */
// fs.open(__dirname+"/test.txt","r+",function (err,fd) {
//     if (err) {
//         console.error(err)
//     }
//     console.log("文件被打开了");
//     console.log("准备写入文件");
//     var buf = new Buffer("写入的内容");
//     fs.write(fd,buf,0,buf.length,0,function (err,written,buffer) {
//         if (err) {
//             console.error(err)
//         }
//         // 写入文件的字符数，一个中文，utf8编码三个字节
//         console.log(written);
//         // 我们会发现之前的text.txt文件被改写了
//         console.log(buffer.toString())
//     })
//     fs.close(fd,function (err) {
//         if (err) {
//             console.error(err)
//         }
//         console.log("文件被关闭了")
//     })
// })



// 获取文件信息
// fs.stat(filename,callback)
/**
 * filename，必填参数，文件路径和文件名称
 * callback，第一个参数err，第二个stats，返回一个文件相关的信息
 */
// fs.stat(__dirname+"/test.txt",function (err,stats) {
//     if (err) {
//         console.error(err)
//     }
//     console.log(stats)
// })



// 创建一个文件夹
// fs.mkdir(filname,callback)
/**
 * filename,必填参数
 * callback，只有一个err参数
 */
// fs.mkdir(__dirname+"/test/",function (err) {
//     if (err) {
//         console.error(err)
//     }
//     console.log("文件夹创建成功！")
// })



// 读取一个文件夹
// fs.readdir(filename,{options},callback)
/**
 * filename,必填参数
 * options，选填参数
 * callback，第一个参数err，第二个参数files，返回的是一个文件的数组
 */
// 我们在刚才创建的test文件夹下，添加两个文件看看，一个是index.js,index.html
// fs.readdir(__dirname+"/test",function (err,files) {
//     if (err) {
//         console.error(err)
//     }
//     console.log("读取文件夹成功！")
//     console.log(files)
//     files.forEach(function (value,index) {
//         console.log(value+"---"+index)
//     })
// })



// 删除文件
// 再删除文件夹之前，有一个api得说一下，就是删除文件，忘了说了
// 在新建的test文件夹内在新建一个index.txt文件，然后我们再把它删掉
// fs.unlink(filename,callback)
/**
 * filename,必填参数
 * callback，参数err
 */
// fs.unlink(__dirname+"/test/index.txt",function (err) {
//     if (err) {
//         console.error(err)
//     }
//     console.log("删除成功！")
// })



// 这才是重头戏，删除文件夹
// 要删除一个非空文件夹，其实还是稍微麻烦一点的，你需要先删除所有文件，然后再删除文件夹才可以

// 先读取文件夹，获取文件夹内的信息

// fs.readdir(__dirname+"/test/",function (err,files) {
//     console.log("准备读取文件夹")
//     if (err) {
//         console.error(err)
//         return;
//     }
//     console.log("读取文件夹成功")
//     // 然后删除文件夹内的文件
//     console.log("正在删除文件夹下的所有文件")
//     files.forEach((item) => {
//         fs.unlink(__dirname+"/test/"+item,function (err) {
//             console.error(err)
//             return;
//         })
//     })
//     console.log("删除文件成功")
//     // 清空之后，我们来删除文件夹
//     fs.rmdir(__dirname+"/test/",function (err) {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         console.log("文件夹删除成功！")
//     })
// })





// 如果一个文件夹下边还有文件夹怎么把，我们来写一个方法
/*function cleanDir(filename) {
    fs.readdir(filename,function (err,files) {
        if (err) {
            console.log(err)
        }
        files.forEach((item) => {
            fs.statSync(filename+item,function (err,stats) {
                if (err) {
                    console.log(err)
                }
                if (stats.isFile) {
                    fs.unlinkSync(filename+item,function (err) {
                        if (err) {
                            console.log(err)
                        }
                    })
                }
                if (stats.isDirectory) {
                    cleanDir(filename+"/"+item)
                }
            })
        })
        console.log("清空文件夹完成！")
    })
}
function deleteDir(filename) {
    fs.readdir(filename,function (err,files) {
        if (err) {
            console.log(err)
        }
        if (files.length>0) {
            var tempFile = 0;
            files.forEach((item) => {
                tempFile++;
                // fs.rmdirSync(filename+"/"+item)
                deleteDir(filename+"/"+item)
            })
            if (tempFile==files.length) {
                fs.rmdirSync(filename)
            }
        }else{
            fs.rmdirSync(filename)
        }
    })
}
cleanDir(__dirname+"/test/")
deleteDir(__dirname+"/test/")
*/
// fs.readdir(__dirname+"/test/",function (err,files) {
//     if (err) {
//         console.log(err)
//     }
//     // console.log(files)
//     files.forEach((item) => {
//         // 检测一下到底是什么类型，是文件夹还是文件？
//         fs.stat(__dirname+"/test/"+item,function (err,stats) {
//             if (err) {
//                 console.log(err)
//             }
//             // console.log(stats.isFile())
//             if (stats.isFile) {
//                 fs.unlink(__dirname+"/test/"+item,function (err) {
//                     if (err) {
//                         console.log(err)
//                     }
//                 })
//             }
//             if (stats.isDirectory) {
//                 // 再度一次文件，然后在检测
//             }
//         })
//     })
// })


// 清空文件夹，同步操作
function cleanDir(filename) {
    // 采用同步的方式读目标文件夹，获取files对象
    var files = fs.readdirSync(filename);
    // 遍历files对象，直接forEach了
    files.forEach((item) => {
        var stats = fs.statSync(filename+"/"+item);
        // 判断当前是文件还是文件夹
        if (stats.isDirectory()) {
            // 如果是文件夹就重复调用方法
            cleanDir(filename+"/"+item)
        }else{
            // 如果不是文件夹，那就是文件，直接删除
            fs.unlinkSync(filename+"/"+item);
            console.log("删除文件"+filename+"/"+item+"成功")
        }
    })
}

// 删除每个空文件夹，同步操作
function deleteDir(filename) {
    // 同步方式读取文件夹，得到files
    var files = fs.readdirSync(filename);
    // 判断files下是否存在别的文件夹，也就是判断length
    if (files.length>0) {
        var tempFile = 0;
        files.forEach((item) => {
            tempFile++;
            deleteDir(filename+"/"+item);
        })
        // 如果把子文件夹都删除了，那么母文件夹的filename和上述的不同，需要单独列出来，
        // 做一步判断，然后删除母文件夹
        if (tempFile==files.length) {
            fs.rmdirSync(filename)
            console.log("删除文件夹"+filename+"成功")
        }
    }else{
        fs.rmdirSync(filename)
        console.log("删除文件夹"+filename+"成功")
    }
}
cleanDir(__dirname + "/test");
deleteDir(__dirname + "/test");