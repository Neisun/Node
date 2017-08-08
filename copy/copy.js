var fs = require("fs");
function copyFile() {
    console.log("-------开始读取文件---------");
    fs.readFile("copy/test.txt","utf-8",function (err,data) {
        if (err) {
            console.log("读取失败")
        }else{
            // 
            writeFile(data);
            return data;
        }
    });
    console.log("-----------读取结束-----------")
}
function writeFile(data) {
    console.log(data);
    fs.writeFile("copy/test2.txt",data,"utf-8",function (error) {
        if (error) {
            throw error;
        }else {
            console.log("文件已保存")
        }
    })
}
copyFile();
