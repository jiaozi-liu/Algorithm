// 满足n2>12000的n的最小值是多少？请使用合适的循环语句寻找答案。
var n = 0
while (true) {
    // 让n+1
    n++;

    // 检查如果满足条件，就终止循环
    if (Math.pow(n, 2) > 12000) {
        break;
    }
}
// 输出结果
console.log(`满足n2>12000的n的最小值是${n},平均方结果是${n * n}`)