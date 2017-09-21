/*
 * @Author: hunaisong 
 * @Date: 2017-09-21 11:02:50 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-21 14:06:06
 */
var http = require("http"),
    qs = require("querystring");

// html字符串
var postHtml = '<html lang="en">' +
    '<head>' +
    '<title>Node.js 表单</title>' +
    '</head>' +
    '<body>' +
    '<form method="post">' +
    '姓名：<input type="text" name="name" value=""></br>' +
    '性别：<input type="text" name="sex" value=""></br>' +
    '<input type="submit" name="" value="提交">' +
    '</form>' +
    '</body>' +
    '</html>'

http.createServer((req, res) => {
    // 存储数据的body
    var body = "";
    // data事件
    req.on("data", (chunk) => {
        body += chunk;
    })
    // end事件
    req.on("end", () => {
        // 解析一下body，变成对象
        body = qs.parse(body);
        // 这个字符编码charset表忘写，不然乱码
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8;' });
        if (body.name && body.sex) {
            res.write('姓名：' + body.name);
            res.write('</br>');
            res.write('性别：' + body.sex);
        } else {
            res.write(postHtml)
        }
        res.end()
    })
}).listen(3000)