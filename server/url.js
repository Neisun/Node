/*
 * @Author: hunaisong 
 * @Date: 2017-08-30 17:25:02 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-08-31 09:11:43
 */
// 使用node.js的http模块会用到挺多其他工具类的api，比如url
var url = require("url");
var str = "http://user:pass@host.com:8080/p/a/t/h?query=string#hash"
console.log(url.parse(str))
// 会得到如下的对象
/*Url {
    protocol: 'http:',
    slashes: true,
    auth: 'user:pass',
    host: 'host.com:8080',
    port: '8080',
    hostname: 'host.com',
    hash: '#hash',
    search: '?query=string',
    query: 'query=string',
    pathname: '/p/a/t/h',
    path: '/p/a/t/h?query=string',
    href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash' }*/

// 反过来有一个url.format()方法，将传入的对象转化为url

var url_1 = url.format({
    protocol: 'http:',
    host: 'www.example.com',
    pathname: '/p/a/t/h',
    search: 'query=string'
});
console.log(url_1)
/* =>
'http://www.example.com/p/a/t/h?query=string'
*/

// resolve方法，用于拼接，返回上一级菜单，baz和foo是同级文件夹
var url_2 = url.resolve('http://www.example.com/foo/bar', '../baz');
console.log(url_2)
/* =>
http://www.example.com/baz
*/