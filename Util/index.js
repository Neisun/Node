/*
 * @Author: hunaisong 
 * @Date: 2017-09-20 10:19:53 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-20 13:55:30
 */
// 关于call的用法
// obj1.method.call(obj2,arg1,arg2);
/**
 * call的用法很有趣
 * obj1.method.call(obj2,arg1,arg2),后边的参数是任何形式
 * 把obj1的method给method用，但其实，obj2根本就没有这个方法，obj2.method是没有的。这里是把this的指向变了，由obj1 => obj2
 */
// 最简单的例子
// 定义一个Person的构造函数，传入一个sayHello方法
function Person() {
    this.name = 'Neisun';
    this.sayHello = function () {
        console.log('Hello,'+this.name);
    }
}
// 定义一个Animal的构造函数，没有sayHello方法
function Animal() {
    this.name = 'Cat';
}
var person = new Person();
var animal = new Animal();

// 先调用一下sayHello方法
person.sayHello(); // Hello,Neisun
// 把这个方法给animal用
person.sayHello.call(animal); //Hello,Cat  实际上animal并没有sayHello这个方法，类似于我借你用了，其实是this指向发生了变化


// 那么怎么才能把这个方法完全继承呢，再看
// 创建一个Doggy类，给他一个方法shout
function Doggy() {
    this.name = '汪星人';
    this.shout = function () {
        console.log(this.name+'在汪汪叫~');
    }
}
// 这是在Doggy原型中添加的master函数
// Doggy.prototype.master = function () {
//     console.log("Neisun")
// };
// 我想让Cat继承这个方法
function Cat() {
    Doggy.call(this);
    // 通过重新设置name覆盖继承来的name
    this.name = '喵星人';
}
var cat = new Cat();
var dog = new Doggy();
dog.shout(); // 汪星人在汪汪叫;
dog.master();  // Neisun
cat.shout(); // 喵星人在汪汪叫~，变种猫！
cat.master(); // 报错，继承不了。也就是说在原型中定义的属性和方法通过call的方式继承不了，call只是继承了构造函数中的属性和方法

