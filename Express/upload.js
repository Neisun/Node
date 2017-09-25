/*
 * @Author: hunaisong 
 * @Date: 2017-09-25 17:35:35 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-25 17:51:06
 */
var express = require('express'),
    app = express(),
    fs = require('fs'),
    bodyParser = require('body-parser'),
    path = require('path'),
    multer = require('multer');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/' }).array('image'));

app.get('/upload.html', (req, res) => {
    res.sendfile(path.join(__dirname, 'upload.html'))
})
app.post('/upload', (req, res) => {
    console.log(req.files[0]);
    var des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile(req.files[0].path, function(err, data) {
        fs.writeFile(des_file, data, function(err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.files[0].originalname
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
})
var server = app.listen(8083, () => {

})