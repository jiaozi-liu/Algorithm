// 遍历从1到100
for (var i = 1; i <= 100; i++) {
    // 判断i是不是质数
    // 每个数字都要重新开始统计约数个数
    // 所有count要定义在for循环里面
    var count = 0;

    // 从1开始到这个数字本身，依次求余数
    for (var j = 1; j <= i; j++) {
        // if判断能不能被整除，
        if (i % j == 0) {
            count++
        }
    }
    // 如果这个count是2，就说明它是质数
    if (count == 2) {
        console.log(i)
    }
    // 如果不是，就不输出，所以没有else语句
}