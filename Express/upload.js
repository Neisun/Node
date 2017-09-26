/*
 * @Author: hunaisong 
 * @Date: 2017-09-26 13:30:58 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-26 15:19:24
 */
var express = require('express'),
    app = express(),
    path = require('path'),
    multer = require('multer'),
    fs = require('fs');
// 设置储存在内存中什么位置，并且形成一个数组，因为只有一个上传表单，简写处理，如果有多个，参考multer介绍 需要app.use不要忘记了。。。,设置dest如果直接tmp会在跟目录下创建文件夹，储存临时文件，如果设置/tmp/是会存在内存中
app.use(multer({ dest: '/tmp/' }).array('image'));
// 设置upload.html路由部分
app.get('/upload.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'upload.html'));
})
// 设置post之后跳转的页面
app.post('/upload', (req, res) => {
    // 上传的文件会存放在req.files数组中，第一个文件就是当前上传的文件
    console.log(req.files[0]);
    // 提前定义一个写入文件的路径
    var des_file = __dirname + '/assets/' + req.files[0].originalname;
    // console.log(des_file)
    // 上传文件需要先对文件进行读取
    fs.readFile(req.files[0].path, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            // 如果没有错误，那么写入文件
            fs.writeFile(des_file, data, (err) => {
                if (err) {
                    console.log(err)
                } else {
                    // 创建一个对象来展示上传成功并且展示出文件名
                    response = {
                        message: 'File upload successfully!',
                        filename: req.files[0].originalname
                    }
                }
                console.log(response)
                res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf8' })
                res.end(JSON.stringify(response))
            })
        }
    })
})
var server = app.listen(8082, () => {

});