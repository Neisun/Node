/*
 * @Author: hunaisong 
 * @Date: 2017-08-30 14:28:25 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-08-30 15:26:41
 */
// 菜鸟教程上的一个比较经典的例子
var http = require("http");
// url解析模块
var url = require("url");
// 文件模块
var fs = require("fs");
// 路径模块
var path = require("path");
http.createServer((request,response) => {
    // 调用url模块，来获取url信息。具体用法会说明一下
    var pathname = url.parse(request.url).pathname;
    // 首先得到的pathname是'/index.html'，所以需要把'/'截取掉，然后需要对路径进行处理
    pathname = path.join(__dirname,pathname.slice(1));
    fs.readFile(pathname,(err,data) => {
        if (err) {
            console.log(err);
            // 错误，写入404
            response.writeHead(404,{'Content-Type':'text/html'})
        }else {
            // 正确，写入200，statusCode
            response.writeHead(200,{'Content-Type':'text/html'});
            // 把文件的内容写入到相应中
            response.write(data.toString());
        }
        // 发送相应数据
        response.end();
    })
}).listen(8083)