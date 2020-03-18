// 循环遍历n
// 引入内置模块，并且存为readline变量。require表示引入。
var readline = require('readline');

// 创建一个读取接口，这段代码来自nodejs官网手册
// https://nodejs.org/api/readline.html
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// 提出问题，rl.question函数就是提出问题。逗号之前是问题，逗号之后是回调函数
// 回调函数就是用户输入之后做的事情，参数a就是用户输入的数字。
rl.question('请输入一个数字', function (a) {

    // 计算总量
    var sum = 1;
    // 计算每一项的数
    var now = 1;

    for (var i = 1; i <= a; i++) {
        // 
        now *= i / (2 * i + 1)
        // 累加
        sum += now
    }
    // 结果
    console.log(sum * 2)
})
