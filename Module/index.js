/*
 * @Author: hunaisong 
 * @Date: 2017-09-14 13:29:56 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-14 13:40:21
 */
var Hello = require("./hello")
var hello = new Hello();
hello.setName('小明');
hello.sayHello();

var testModule = require("./test")
testModule.test();