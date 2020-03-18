// 请计算1! + 2! + 3! + 4! + 5! + …… +9!的结果，叹号表示阶乘。
// 用2个循环语句，外层是1~9，里面是累乘器。

//计算总和，总和只有1个，所以放到外面 
var sum = 0
for (var i = 1; i <= 9; i++) {
    // 阶乘，每个数字有自己的阶乘，所以要放到里面
    // 累乘器，用来计算当前i这个数字的阶乘
    var factorial = 1
    // 计算i的阶乘
    for (var j = 1; j <= i; j++) {
        // 累乘进去，*=就是累乘
        factorial *= j;
    }
    // 累加
    sum += factorial
    // console.log(factorial )
}
// 显示结果
console.log(sum)