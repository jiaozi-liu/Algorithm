// 模拟抛硬币一百万次，显示出现正面和反面的次数，并显示出占比。
// 思路：怎么模拟抛硬币，用随机数和0.5的关系来模拟，大于0.5就是正面，小于0.5就是反面。

// 统计正面个数
var z = 0;
// 统计反面个数
var f = 0;
//总次数
var count = 1000000

// 循环到0，循环自动停止，不用打断
while (count--) {
    //随机一个数
    var n = Math.random()
    // 
    if (n > 0.5) {
        z++
    } else {
        f++
    }

}
// 输出结果
console.log(`正面${z}次占比${z / 1000000}，反面${f}次占比${f / 1000000}`);