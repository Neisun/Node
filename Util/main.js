/*
 * @Author: hunaisong 
 * @Date: 2017-09-20 13:59:13 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-20 15:48:54
 */
/**
 ****************************Node.js常用工具*********************************
 * util模块，Node.js的一个核心模块，弥补原生js的不足
 * util有诸多api，常用的如下。
 */

// util.inherits() 是一个实现对象间原型继承的函数
var util = require("util");

function Base() {
    this.name = "base";
    this.year = "2017";
    this.location = "地球";
    this.show = function () {
        console.log(this.year+'年，'+this.name+' 入侵了，'+this.location)
    }
}
Base.prototype.sayHello = function () {
    console.log('Hello,'+this.name+'!');
}

function Sub() {
    this.name = "sub"
}
util.inherits(Sub,Base);
util.inherits()
var base = new Base();
var sub = new Sub();
// sub.show(); // 报错，没有这个方法，这是这么回事？
sub.sayHello(); // Hello,Sub! 
// sayHello是Base在原型中定义的方法，而sub继承了，但是在构造函数中的方法却没有继承。



// util.inspect()方法
/**
 * util.inspect(obj,[showHidden],[depth],[colors])
 * 将一个对象转化为字符串的方法，通常用来调试和错误输出
 * obj必填参数
 * showHidden，true/false，是否显示更多信息
 * depth表示最大递归层数
 * colors颜色打印
 */
var obj = {
    name:'Neisun',
    sex:'male',
    hobby:function () {
        console.log('play billiards');
    }
}
console.log(util.inspect(obj));
// { name: 'Neisun', sex: 'male', hobby: [Function: hobby] }
console.log(util.inspect(obj,true,2,true));
// { name: 'Neisun',
// sex: 'male',
// hobby:
//  { [Function: hobby]
//    [length]: 0,
//    [name]: 'hobby',
//    [arguments]: null,
//    [caller]: null,
//    [prototype]: hobby { [constructor]: [Circular] } } }

//util.isArray
/**
 * util.isArray()
 * 顾名思义，一看就知道是验证是否是数组的方法
 */
console.log(util.isArray([])); // true
console.log(util.isArray({})); // fasle

// util.isDate
/**
 * util.isDate
 * 顾名思义，一看就知道验证是否是date对象
 */
console.log(util.isDate(new Date())); // true
console.log(util.isDate(Date())); // false

// util的方法有很多，不一一赘述，得去官网查看api
// 中文网api:http://nodejs.cn/api/util.html;
