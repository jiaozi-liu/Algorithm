// 引入内置模块，并且存为rl变量。require表示引入。
var readline = require('readline');

// 创建一个读取接口，这段代码来自nodejs官网手册，不用背
// https://nodejs.org/api/readline.html
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 提出问题，rl.question函数就是提出问题。逗号之前是问题，逗号之后是回调函数
// 回调函数就是用户输入之后做的事情，参数a就是用户输入的数字。
r1.question('请输入一个数字'，function (a)){

    // 定义一个累成器,累成器从1开始，因为0的话，乘任何数字都是0
    var result = 1;

    // 从1开始遍历，每遍历一个数字就乘上去
    for (var i = 1; i <= a; i++)
        // 
        result *= i;
}
// 输出结果
console.log(a + '的阶乘是' + result)