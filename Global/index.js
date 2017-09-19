/*
 * @Author: hunaisong 
 * @Date: 2017-09-19 14:17:56 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-19 15:47:26
 */
/**
 * JavaScript中有全局对象，即window对象
 * Node.js同样也不例外，也有自己的全局对象，在任何位置都可以直接调用，当然我们使用更多的是全局变量；
 */

// global全局对象
console.log(global);

// __filename,正在执行脚本的名称
console.log(__filename);
// E:\learnNodeIn7days\Global\index.js

// __dirname，正在执行文件的路径
console.log(__dirname);
// E:\learnNodeIn7days\Global

// 定时器,清除定时器
var t = setTimeout(function() {
    console.log(110);
}, 2000);

clearTimeout(t);

var i = setInterval(function () {
    console.log(120)
},2000)

clearInterval(i);


// console同样也是一个全局变量
console.log('hello world!');
// console.assert(1>2,'明显错了');
console.info('info')
console.error('err')
console.time('test');
console.timeEnd('test');
console.trace();


// 还有一个是process，process是一个对象，关于进程的api，api繁多，需要的时候需要查手册


