// 题目：一只小白兔要走100阶楼梯，但是它无聊，所以它第一次跳1阶，第二次跳2阶，第三次跳3阶……，第十次跳10阶……依次类推。请问它跳几次，能跳完100阶楼梯。
// 思路：就是问你1+2+3+……加到多少的时候，能够达到100。

// 当前已经跳过的总台阶数
var sum = 0
// 跳的次数
var count = 0

while (true) {
    // 跳一次记一次
    count++
    // 第几次就是蹦几阶
    sum += count;
    // 判断小于等于100就停下
    if (sum >= 100) {
        break;
    }
}
// 显示结果
console.log(count)