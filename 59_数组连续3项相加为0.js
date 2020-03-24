// 数组[1, 2, 4, -3, 2, 3, 1, -4, -2, 2, 4, -5]中有没有任意连续3项相加为0？如果有，请输出这3项。
// 思路：就是验证0、1、2三项；验证1、2、3三项；……验证arr.length - 3、arr.length - 2、arr.length - 1这三项。

var arr = [1, 2, 4, -3, 2, 3, 1, -4, -2, 2, 4, -5, 2, 3]

// 遍历
for (var i = 0; i < arr.length; i++) {
    // 累加器,统计第i项、i+1项、i+2项，这三项的总和
    var sum = 0
    for (var j = 0; j < 3; j++) {
        sum += arr[i + j]
    }
    // 看sum是不是0
    if (sum == 0) {
        // 把每一个结果当做一个字符串输出
        var str = ''
        // 向字符串中累加
        for (var j = 0; j < 3; j++) {
            str += arr[i + j]+' '
        }
        console.log(str);
    }
}