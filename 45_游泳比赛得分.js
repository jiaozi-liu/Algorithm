// 游泳比赛六个评委打分分别为39、45、42、44、51和48，最终得分计算方法是：去掉一个最高分、去掉一个最低分，剩下4个数字取平均。请问这个选手最终得分是多少？
var arr = [39, 45, 42, 44, 51, 48]

// 最高分
var max = arr[0];
// 最低分
var min = arr[0];
// 计算总和
var sum = arr[0];

// 从下标为0的项开始遍历数组，寻找最大值、寻找最小值、并且求和
for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        // 如果你遍历到的这项，比当前的最大值还大，那么这项就是最大值
        max = arr[i]
    } else if (arr[i] < min) {
        // 如果你遍历的这项，比当前的最小值小还小，那么这项就是最小值
        min = arr[i]
    }
    // 统计总和
    sum += arr[i]
}
// 计算平均分
var average = (sum - max - min) / (arr.length - 2)
// 输出结果
console.log(`这个选手的最总得分是${average}`);
