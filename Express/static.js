/*
 * @Author: hunaisong 
 * @Date: 2017-09-25 14:28:00 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-25 14:50:39
 */
// 接着index.js继续，单独拿出来是为了，更好的展示
// 加载静态文件
// app.use(express.static('public'));
// 唯一需要注意的就是public文件夹的路径问题
var express = require('express'),
    app = express();
app.use(express.static('public'))
app.get('/', function(req, res) {
    res.send('Hello,world!')
})

var server = app.listen(8081, '127.0.0.1', function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('访问地址：http://%s:%s', host, port)
})
// 我在public文件中放置一个test.txt文件，启动服务器之后，我们输入localhost:8081/test.txt，就会出现我们定义好的test.txt文件
// 各种静态资源都可以，比如放置一个user.jpg图片同样也是可以获取到的