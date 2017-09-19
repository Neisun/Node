/*
 * @Author: hunaisong 
 * @Date: 2017-09-19 09:32:01 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-19 10:23:30
 */

//  关于Node.js的路由部分，先来展开熟悉一下url的用法
var url = require("url");
var str = 'http://www.baidu.com:8080/upload?foo=bar&hello=world'

// url.parse字符串解析成对象
var parse = url.parse(str);
console.log(parse)
// 解析的结果
/*
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com:8080',
  port: '8080',
  hostname: 'www.baidu.com',
  hash: null,
  search: '?foo=bar&hello=world',
  query: 'foo=bar&hello=world',
  pathname: '/upload',
  path: '/upload?foo=bar&hello=world',
  href: 'http://www.baidu.com:8080/upload?foo=bar&hello=world' }
*/

// url.format
// 先创建一个对象
var urlObj = {
    // 协议
    protocol:'https:',
    // 主机(包含端口号)
    host:'www.hunaisong.cn:8080',
    // 端口号
    port:'8080',
    // 域名
    hostname:'www.hunaisong.cn',
    // 搜索部分，？后边部分，包含？
    search:'?type=jishu&name=js',
    // 搜索内容部分，？后边部分，不包含？
    query:'type=jishu&name=js',
    // 路径名字
    pathname:'/update',
    // 路径，包含路径之后所有
    path:'/update?type=jishu&name=js',
    // 完整的href
    href:'https://www.hunaisong.cn:8080/update?type=jishu&name=js'
}
// 进行格式化
var s = url.format(urlObj);
console.log(s)
// 结果
// https://www.hunaisong.cn:8080/update?type=jishu&name=js

// 还有一个resolve

var l = url.resolve('www.hunaisong.cn/upload/pic','../delete/article');
console.log(l);
// 结果
// www.hunaisong.cn/delete/article

/**
 * **************************以上部分，是关于url模块的基本使用方法*******************************
 */




