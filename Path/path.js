/*
 * @Author: hunaisong 
 * @Date: 2017-08-18 13:45:59 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-08-21 09:53:44
 */
// path模块 常用的API
// path模块属于常用的工具模块
var path = require("path");


// path.normalize() 规范化路径
console.log(path.normalize("test/dist/lib/..")) //解析为test\dist
console.log(path.normalize("test/dist/lib/."))  // 解析为test\dist\lib

// path.join() 用于连接路径
// 用于连接路径。该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"。
console.log(path.join("test","dist/lib"))
console.log(path.join("/test","dist","lib"))

// path.resolve() 解析为绝对路径
// 特点：相当于不断的调用系统的cd命令 
console.log(path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile')) //  E:\tmp\subfile

//path.relative(from,to) from到to的相对路径
console.log(path.relative("test/dist/lib/aa","test/dist/output/bb"))  // ../../output/bb

// path.dirname() 返回路径所在的文件夹名称
console.log(path.dirname("/foo/bar/baz/asdf/quux")) // /foo/bar/baz/asdf

// 文件名称 path.basename(p, [ext]) 
// 特点：返回指定的文件名，返回结果可排除[ext]后缀字符串 
console.log(path.basename("/foo/bar/baz/asdf/quux.html")) //quux.html
console.log(path.basename("/foo/bar/baz/asdf/quux.html",".html")) //quux


// 扩展名称 path.extname(p) 
// 特点：返回指定文件名的扩展名称 
console.log(path.extname("/foo/bar/baz/asdf/quux.html")) // .html