// 遍历目录，需要的基础
// 就是递归，使用递归能很好的遍历目录

/*function test(n) {
	if (n === 1) {
		return n;
	} else {
		return n * test(n - 1)
	}
}
console.log(test(5))*/
// 递归需要频繁调用函数，对于性能来说可能消耗不小
// 这个例子是读取文件夹内容
var fs = require("fs");
var path = require("path");
// 这是对于单一文件的写法，其实应该写成一个方法，因为一旦读取的是一个文件夹，那你就必须再次调用该方法
/*var files = fs.readdirSync(__dirname);
// console.log(files);
files.forEach((item) => {
	console.log(item)
	var fullPathName = path.join(__dirname,item)
	console.log(fullPathName) // E:\learnNodeIn7days\Bianli\test
})*/

function read (dir) {
	var files = fs.readdirSync(dir);
	files.forEach((file) => {
		var stats =  fs.statSync(dir+"/"+file);
		if (stats.isDirectory()) {
			read(dir+"/"+file)
		}else {
			console.log(path.join(dir,file))
		}
	})
}
// read("E:/learnNodeIn7days/Bianli")

// 文本编码
/*var bin = fs.readFileSync(__dirname+"/"+"test.txt")
console.log(bin)
if (bin[0] === 0xEF && bin[1] === 0xBB && bin[2] === 0xBF) {
	bin = bin.slice(3);
}
console.log(bin.toString())
var iconv = require("iconv-lite");
console.log(iconv)
var bin1 = fs.readFileSync(__dirname+"/"+"test.txt");
console.log(iconv.decode(bin1,"gbk"))*/
var file =  fs.readFileSync(path.join(__dirname,'test.txt'));
console.log(file.toString())