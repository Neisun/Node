/*
 * @Author: hunaisong 
 * @Date: 2017-10-09 14:35:16 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-10-09 16:39:09
 */
// 需要的依赖
var express = require('express'),
    app = express(),
    fs = require('fs'),
    path = require('path'),
    // body-parser - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
    bodyParser = require('body-parser'),
    // multer - node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。
    multer = require('multer');
// 使用中间件 dest应该是存在内存中的位置
app.use(multer({ dest: '/tem/' }).array('file'));
// 使用静态文件，因为要加载jquery
app.use(express.static('public'))
app.get('/newUpload.html', (req, res) => {
    res.sendfile(path.join(__dirname, 'newUpload.html'))
})
app.post('/upload', (req, res) => {
    console.log(req.files[0]);
    // 设置一个assets文件夹存放上传的内容
    var dest = __dirname + '/assets/' + req.files[0].originalname;
    // 先读取上传的文件
    fs.readFile(req.files[0].path, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            // 将读取的文件写入assets文件夹
            fs.writeFile(dest, data, (err) => {
                if (err) {
                    console.log(err)
                } else {
                    response = {
                        message: 'File upload successfully!',
                        filename: req.files[0].originalname
                    }
                }
                console.log(response);
                res.writeHead(200, { 'Content-Type': 'charset=utf8' });
                res.end(JSON.stringify(response))
            })
        }
    })
})
var server = app.listen(8888, () => {
    
})