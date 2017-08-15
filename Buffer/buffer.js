/*
 * @Author: hunaisong 
 * @Date: 2017-08-15 09:24:59 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-08-15 11:02:19
 */
/**
 * Buffer是个什么鬼。
 * Buffer是node.js中的数据块
 * js语言之后字符串数据类型，没有二进制类型。Node.js就创造了一个与String对等的Buffer来对二进制操作
 * Buffer是一个专门存放二进制数据的缓存区
 */

 /**
  * 下边来看看Buffer的基本使用方式
  */



// 构造一个Buffer
// 构造一个hello的二进制
var bin = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f]);


// 获取bin的第一个字符
console.log(bin[0])


// 获取长度
console.log(bin.length)


// 转化为字符串
var str = bin.toString("utf-8");
console.log(str)


// 当然也可以反过来转化
var buf = new Buffer("hello")
console.log(buf);


/**
 * Buffer与字符串有个区别，那就是字符串是只读的，对字符串的更改其实就是新建了一个字符串，而原字符串还是没有改变
 * 但Buffer不是，你可以任意在Buffer上修改，而原Buffer也会跟着变化
 */
buf[0] = 0x6f;
console.log(buf)


// slice方法，Buffer的字符串方法，截取功能和js没有不同
// 但是js的slice方法，我们一般用一个变量接收截取的数组也好，字符串也好，对这个变量的修改是不会反作用于原数组和字符串的。但是Buffer会，他更像一个指针。
// 看一个实例
var arr = [0,1,2,3,4];
var str = "01234";
var myBuf = new Buffer([0,1,2,3,4]);
// 分别使用slice方法，截取从下脚标2到结尾
var newArr = arr.slice(2);
var newStr = str.slice(2);
var newBuf = myBuf.slice(2);
// 分别打印出来
console.log(newArr)
console.log(newStr)
console.log(newBuf)
// 然后对截取出来的数组，字符串，buf的第一位做修改，然后打印数据源
newArr[0] = 5;
newStr[0] = "5";// 字符串是改不了的
newBuf[0] = 5;
console.log(arr) // [0,1,2,3,4,5]
console.log(str) // "01234"
console.log(myBuf) // <Buffer 00 01 05 03 04>,发现原Buffer也发生了变化，这就是不同之处。


// copy一个Buffer
/**
 * 需要新建一个空白的Buffer，长度与要copy的一样，然后呢，调用copy命令
 */

var myBuffer = new Buffer("hello,world!");
var copyBuffer = new Buffer(myBuffer.length);
myBuffer.copy(copyBuffer);
console.log(copyBuffer.toString())
// 此时你对copy的buffer做任何修改，并不会影响到，原buffer了