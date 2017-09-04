/*
 * @Author: hunaisong 
 * @Date: 2017-08-30 17:32:01 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-08-31 09:55:04
 */
// querystring 模块用于实现url参数字符串与参数对象的相互转换
var url = require("url");
var querystring = require("querystring");
var str = "http://www.baidu.com:8080/update?name=Davaid&sex=male&job=FE&job=developer";
var qs = url.parse(str).query;
console.log(querystring.parse(qs));
// => { name: 'Davaid', sex: 'male', job: [ 'FE', 'developer' ] }