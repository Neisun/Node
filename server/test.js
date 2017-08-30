/*
 * @Author: hunaisong 
 * @Date: 2017-08-30 12:01:52 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-08-30 14:22:15
 */
var http = require("http");
var options = {
    hostname:'localhost',
    port:8080,
    method:'get',
    headers:{'content-type':'text/plain'}
}

var request = http.request(options,(response) => {
    // 打印出响应体的头部信息
    console.log(response.headers)
})
request.write('test');
request.end();
