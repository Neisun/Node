/*
 * @Author: hunaisong 
 * @Date: 2017-09-19 15:27:05 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-19 15:37:38
 */
var fs = require("fs");
var path = require("path");
console.log('程序开始执行：');
var counter = 10;
console.log("计数:%d",counter);
console.time('获取数据');
var data = fs.readFileSync(path.join(__dirname,'test.txt'));
console.info(data.toString());
console.timeEnd('获取数据');
console.log("程序结束");