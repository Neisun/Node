/*
 * @Author: hunaisong 
 * @Date: 2017-08-30 15:58:25 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-08-30 16:05:46
 */
var http = require("http");
var options = {
    hostname:'localhost',
    path:'/index.html',
    method:'get',
    headers:{'Content-Type':'text/html'},
    port:8083,
}

var request = http.request(options,(response) => {
    var body = "";
    response.on('data',(chunk) => {
        body+=chunk;
    })
    response.on('end',() => {
        console.log(body);
    })
})
request.end()