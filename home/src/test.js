function hello(params) {
    console.log(123);
}
// 把它当做函数暴露出去
// module.exports = hello;
exports.hello = hello;