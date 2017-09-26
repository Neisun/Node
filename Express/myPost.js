/*
 * @Author: hunaisong 
 * @Date: 2017-09-26 11:27:03 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-26 13:28:51
 */
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/myPost.html',(req,res) => {
    res.sendFile(path.join(__dirname,'myPost.html'));
})
app.post('/post',(req,res) => {
    res.writeHead(200,{'Content-Type':'text/plain;charset=utf8'})
    var response = {
        name:req.body.name,
        sex:req.body.sex
    }
    res.end(JSON.stringify(response))
})
app.listen(8082);