/*
 * @Author: hunaisong 
 * @Date: 2017-09-14 13:29:56 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-14 16:28:15
 */
// 在node.js中有模块这一说。
/**
 * node.js中有内置模块，比如引入的fs，http等等都是内置写好的模块
 * 还有一种是npm包管理器安装好的模块，引入也能使用，以上二者都是封装好，然后直接引入就能使用，因为已经暴露出来了
 * 第三种，我们自己写的js文件也可以当做模块暴露出去，然后在整个项目中都可以使用
 * 暴露方法有两种：
 * exports.name = ...,exports本身就是一个对象，引入模块后调用就可以，如下的代码
 * module.exports = ...，这种方式可以改变暴露出模块的形式，比如他可以是一个函数，不是非要写成对象，当然函数也是一个特殊的对象，module.exports每个js文件中只有一个
 */

//  第一种方式
var testModule = require("./test")
testModule.test();

// 第二种方式
var Hello = require("./hello")
var hello = new Hello();
hello.setName('小明');
hello.sayHello();


// var hey = require("./hello")
// hey()
