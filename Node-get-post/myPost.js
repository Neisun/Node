/*
 * @Author: hunaisong 
 * @Date: 2017-09-20 16:58:42 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-20 17:36:02
 */
var http = require("http"),
    qs = require("querystring");
var html = '<html lang="en">'+
            '<head>'+
            '<title>Node.js 表单</title>'+
            '</head>'+
            '<body>'+
            '<form method="post">'+
            '姓名：<input type="text" name="name" value=""></br>'+
            '性别：<input type="text" name="sex" value=""></br>'+
            '<input type="submit" name="" value="提交">'+
            '</form>'+
            '</body>'+
            '</html>'
http.createServer((req,res) => {
    var body = "";
    req.on('data',(chunk) => {
        body += chunk;
    });
    req.on('end',() => {
        body = qs.parse(body);
        res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
        if (body.name&&body.sex) {
            res.write('姓名：'+body.name);
            res.write('</br>');
            res.write('性别：'+body.sex)
        }else {
            res.write(html);
        }
        res.end();
    })
}).listen(8888);